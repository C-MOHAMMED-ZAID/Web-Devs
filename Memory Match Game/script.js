const categories = {
    astro: ['🪐', '🌌', '🌠', '🌑', '☄️', '🛸', '🌖', '⭐'],
    geo: ['🗺️', '🗿', '🏯', '🗽', '🏰', '🌋', '🗻', '🏕️'],
    auto: ['🏎️', '🛵', '🚲', '🚂', '🚁', '🛴', '🚢', '🚀'],
    flora: ['🌿', '🌺', '🌴', '🍄', '🌵', '🎋', '🌻', '🌹'],
    tech: ['💻', '📱', '🖥️', '⌚', '🎮', '🕹️', '📡', '🔌']
};

class GameEngine {
    constructor() {
        this.state = {
            activeCategory: null,
            cardElements: [],
            selectedCards: [],
            matchCount: 0,
            currentScore: 0,
            timeRemaining: 30,
            timerId: null,
            isDarkTheme: true
        };
    }

    initializeSession(category) {
        this.state.activeCategory = category;
        const cards = [...categories[category], ...categories[category]]
            .sort(() => Math.random() - 0.5);
        
        this.state.cardElements = cards;
        this.renderGameGrid();
        this.startTimer();
    }

    renderGameGrid() {
        const grid = document.querySelector('.game-grid');
        grid.innerHTML = '';
        
        this.state.cardElements.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            card.innerHTML = `<div>${symbol}</div>`;
            card.addEventListener('click', (e) => this.handleCardInteraction(e));
            grid.appendChild(card);
        });
    }

    handleCardInteraction(event) {
        const card = event.target.closest('.card');
        if (!card || this.state.selectedCards.length === 2) return;

        card.classList.add('flipped');
        this.state.selectedCards.push(card);

        if (this.state.selectedCards.length === 2) {
            this.validateMatch();
        }
    }

    validateMatch() {
        const [firstCard, secondCard] = this.state.selectedCards;
        const isMatch = firstCard.innerHTML === secondCard.innerHTML;

        if (isMatch) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            this.state.matchCount++;
            this.state.currentScore += 100;
            this.updateGameDisplay();
            
            if (this.state.matchCount === 8) {
                this.concludeGame(true);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }, 1000);
        }
        this.state.selectedCards = [];
    }

    startTimer() {
        this.state.timerId = setInterval(() => {
            this.state.timeRemaining--;
            document.getElementById('timer').textContent = this.state.timeRemaining;
            
            if (this.state.timeRemaining <= 0) {
                this.concludeGame(false);
            }
        }, 1000);
    }

    concludeGame(isVictory) {
        clearInterval(this.state.timerId);
        const modal = document.querySelector('.outcome-modal');
        modal.classList.remove('hidden');
        
        const title = modal.querySelector('.outcome-title');
        title.textContent = isVictory ? 'Cognitive Triumph!' : 'Time Elapsed';
        title.className = `outcome-title ${isVictory ? 'win' : 'lose'}`;
        
        document.getElementById('final-score').textContent = this.state.currentScore;
        document.getElementById('total-matches').textContent = this.state.matchCount;
    }

    updateGameDisplay() {
        document.getElementById('score').textContent = this.state.currentScore;
    }
}

const game = new GameEngine();

document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hidden');
    document.querySelector('.category-selection').classList.remove('hidden');
});

document.querySelectorAll('.category-grid button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.category-selection').classList.add('hidden');
        document.querySelector('.game-interface').classList.remove('hidden');
        game.initializeSession(btn.dataset.category);
    });
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    game.state.isDarkTheme = !game.state.isDarkTheme;
});

document.querySelector('.reset-game').addEventListener('click', () => {
    location.reload();
});

class LeaderboardApi {
  apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YGUJElUwMihyneuKyz3n/scores';

  constructor({ refreshBtn, submitBtn, board }) {
    this.refreshBtn = document.getElementById(refreshBtn);
    this.submitBtn = document.getElementById(submitBtn);
    this.board = document.querySelector(board);
  }

  init = () => {
    this.refreshBtn.addEventListener('click', () => this.getScores(this.board));
    this.submitBtn.addEventListener('click', (e) => this.submitForm(e));
    this.getScores();
  };

  newGame = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      body: JSON.stringify({
        name: 'WhidBB GameOne',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  };

  loadingGfx = (el) => {
    el.insertAdjacentHTML('beforeend', "<p class='load-spinner'>Loading!</p>");
  };

  removeLoadGfx = (el) => {
    el.closest('.load-spinner').remove();
  };

  submitForm(e) {
    e.preventDefault();
    const form = this.submitBtn.closest('form');
    const formData = new FormData(form);
    const user = formData.get('user');
    const score = formData.get('score-num');
    this.saveData({ user, score });

    form.reset();
  }

  async getUserScoresPromise() {
    return (await fetch(this.apiUrl)).json();
  }

  renderTemplate = (el) => `<li>${el.user} - ${el.score}</li>`;

  renderList = (scores) => {
    this.board.innerHTML = '';
    [...scores].forEach((el) => {
      this.board.insertAdjacentHTML('beforeend', this.renderTemplate(el));
    });
  };

  async getScores() {
    let scores;
    try {
      scores = await this.getUserScoresPromise();
      this.renderList(scores.result);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  async saveData({ user, score }) {
    try {
      await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          user, score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }
}

export default LeaderboardApi;
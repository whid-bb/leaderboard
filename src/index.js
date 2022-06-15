import LeaderboardApi from './js/api.js';

const api = new LeaderboardApi({
  refreshBtn: 'refresh-scores',
  submitBtn: 'save-score',
  board: '#scores-content ul',
});
api.init();
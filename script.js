const teams = [
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Bosnia and Herzegovina',
  'Brazil',
  'Canada',
  'Cape Verde',
  'Colombia',
  'Congo DR',
  'Côte d\'Ivoire',
  'Croatia',
  'Curaçao',
  'Egypt',
  'England',
  'Ecuador',
  'France',
  'Germany',
  'Ghana',
  'Haiti',
  'Iran',
  'Iraq',
  'Japan',
  'Jordan',
  'Mexico',
  'Morocco',
  'Netherlands',
  'New Zealand',
  'Norway',
  'Panama',
  'Paraguay',
  'Portugal',
  'Qatar',
  'Saudi Arabia',
  'Scotland',
  'Senegal',
  'South Africa',
  'South Korea',
  'Spain',
  'Sweden',
  'Switzerland',
  'Tunisia',
  'Turkey',
  'United States',
  'Uruguay',
  'Uzbekistan'
];

const groups = {
  A: ['Mexico', 'South Africa', 'South Korea', 'Czechia'],
  B: ['Canada', 'Bosnia and Herzegovina', 'Qatar', 'Switzerland'],
  C: ['Brazil', 'Morocco', 'Haiti', 'Scotland'],
  D: ['United States', 'Paraguay', 'Australia', 'Turkey'],
  E: ['Germany', 'Côte d\'Ivoire', 'Ecuador', 'Curaçao'],
  F: ['Netherlands', 'Japan', 'Sweden', 'Tunisia'],
  G: ['Belgium', 'Egypt', 'Iran', 'New Zealand'],
  H: ['Spain', 'Cape Verde', 'Saudi Arabia', 'Uruguay'],
  I: ['France', 'Senegal', 'Iraq', 'Norway'],
  J: ['Argentina', 'Algeria', 'Austria', 'Jordan'],
  K: ['Portugal', 'Congo DR', 'Uzbekistan', 'Colombia'],
  L: ['England', 'Croatia', 'Ghana', 'Panama']
};

const schedule = [
  { date: 'June 11', time: '1:00 PM', group: 'A', home: 'Mexico', away: 'South Africa', venue: 'Mexico City Stadium' },
  { date: 'June 11', time: '8:00 PM', group: 'A', home: 'South Korea', away: 'Czechia', venue: 'Guadalajara Stadium' },
  { date: 'June 12', time: '3:00 PM', group: 'B', home: 'Canada', away: 'Bosnia and Herzegovina', venue: 'Toronto Stadium' },
  { date: 'June 12', time: '6:00 PM', group: 'D', home: 'United States', away: 'Paraguay', venue: 'Los Angeles Stadium' },
  { date: 'June 13', time: '12:00 PM', group: 'B', home: 'Qatar', away: 'Switzerland', venue: 'San Francisco Bay Area Stadium' },
  { date: 'June 13', time: '9:00 PM', group: 'C', home: 'Brazil', away: 'Morocco', venue: 'New York/New Jersey Stadium' },
  { date: 'June 13', time: '6:00 PM', group: 'C', home: 'Haiti', away: 'Scotland', venue: 'Boston Stadium' },
  { date: 'June 13', time: '9:00 PM', group: 'D', home: 'Australia', away: 'Turkey', venue: 'BC Place Vancouver' },
  { date: 'June 13', time: '6:00 PM', group: 'E', home: 'Germany', away: 'Curaçao', venue: 'Houston Stadium' },
  { date: 'June 14', time: '12:00 PM', group: 'E', home: 'Côte d\'Ivoire', away: 'Ecuador', venue: 'Philadelphia Stadium' },
  { date: 'June 15', time: '3:00 PM', group: 'F', home: 'Netherlands', away: 'Japan', venue: 'Dallas Stadium' },
  { date: 'June 15', time: '8:00 PM', group: 'F', home: 'Sweden', away: 'Tunisia', venue: 'Monterrey Stadium' },
  { date: 'June 15', time: '6:00 PM', group: 'H', home: 'Spain', away: 'Cape Verde', venue: 'Atlanta Stadium' },
  { date: 'June 16', time: '6:00 PM', group: 'G', home: 'Belgium', away: 'Egypt', venue: 'Seattle Stadium' },
  { date: 'June 16', time: '6:00 PM', group: 'G', home: 'Iran', away: 'New Zealand', venue: 'Seattle Stadium' },
  { date: 'June 16', time: '6:00 PM', group: 'I', home: 'France', away: 'Senegal', venue: 'New York/New Jersey Stadium' },
  { date: 'June 16', time: '9:00 PM', group: 'I', home: 'Iraq', away: 'Norway', venue: 'Boston Stadium' },
  { date: 'June 16', time: '9:00 PM', group: 'J', home: 'Argentina', away: 'Algeria', venue: 'Kansas City Stadium' },
  { date: 'June 16', time: '9:00 PM', group: 'J', home: 'Austria', away: 'Jordan', venue: 'San Francisco Bay Area Stadium' },
  { date: 'June 17', time: '3:00 PM', group: 'L', home: 'England', away: 'Croatia', venue: 'Dallas Stadium' },
  { date: 'June 17', time: '7:00 PM', group: 'L', home: 'Ghana', away: 'Panama', venue: 'Toronto Stadium' },
  { date: 'June 18', time: '12:00 PM', group: 'A', home: 'Czechia', away: 'South Africa', venue: 'Atlanta Stadium' },
  { date: 'June 18', time: '7:00 PM', group: 'A', home: 'Mexico', away: 'South Korea', venue: 'Guadalajara Stadium' },
  { date: 'June 18', time: '12:00 PM', group: 'B', home: 'Switzerland', away: 'Bosnia and Herzegovina', venue: 'Los Angeles Stadium' },
  { date: 'June 18', time: '3:00 PM', group: 'B', home: 'Canada', away: 'Qatar', venue: 'BC Place Vancouver' },
  { date: 'June 18', time: '12:00 PM', group: 'C', home: 'Scotland', away: 'Morocco', venue: 'Boston Stadium' },
  { date: 'June 18', time: '8:30 PM', group: 'C', home: 'Brazil', away: 'Haiti', venue: 'Philadelphia Stadium' },
  { date: 'June 18', time: '12:00 PM', group: 'D', home: 'Turkey', away: 'Paraguay', venue: 'San Francisco Bay Area Stadium' },
  { date: 'June 18', time: '12:00 PM', group: 'D', home: 'United States', away: 'Australia', venue: 'Seattle Stadium' },
  { date: 'June 19', time: '12:00 PM', group: 'B', home: 'Switzerland', away: 'Canada', venue: 'BC Place Vancouver' },
  { date: 'June 19', time: '12:00 PM', group: 'B', home: 'Bosnia and Herzegovina', away: 'Qatar', venue: 'Seattle Stadium' },
  { date: 'June 19', time: '12:00 PM', group: 'F', home: 'Netherlands', away: 'Sweden', venue: 'Houston Stadium' },
  { date: 'June 19', time: '6:00 PM', group: 'E', home: 'Germany', away: 'Côte d\'Ivoire', venue: 'Toronto Stadium' },
  { date: 'June 20', time: '4:00 PM', group: 'E', home: 'Ecuador', away: 'Curaçao', venue: 'Kansas City Stadium' },
  { date: 'June 20', time: '10:00 PM', group: 'F', home: 'Tunisia', away: 'Japan', venue: 'Houston Stadium' },
  { date: 'June 21', time: '12:00 PM', group: 'E', home: 'Germany', away: 'Côte d\'Ivoire', venue: 'Toronto Stadium' },
  { date: 'June 21', time: '5:00 PM', group: 'E', home: 'Ecuador', away: 'Curaçao', venue: 'Kansas City Stadium' },
  { date: 'June 21', time: '7:00 PM', group: 'F', home: 'Tunisia', away: 'Japan', venue: 'Monterrey Stadium' },
  { date: 'June 21', time: '12:00 PM', group: 'K', home: 'Portugal', away: 'Uzbekistan', venue: 'Houston Stadium' },
  { date: 'June 21', time: '12:00 PM', group: 'J', home: 'Jordan', away: 'Algeria', venue: 'San Francisco Bay Area Stadium' },
  { date: 'June 21', time: '12:00 PM', group: 'L', home: 'England', away: 'Ghana', venue: 'Boston Stadium' },
  { date: 'June 21', time: '3:00 PM', group: 'L', home: 'Panama', away: 'Croatia', venue: 'Toronto Stadium' },
  { date: 'June 21', time: '6:00 PM', group: 'I', home: 'Norway', away: 'France', venue: 'Boston Stadium' },
  { date: 'June 21', time: '8:00 PM', group: 'I', home: 'Senegal', away: 'Iraq', venue: 'Toronto Stadium' },
  { date: 'June 21', time: '6:00 PM', group: 'H', home: 'Spain', away: 'Saudi Arabia', venue: 'Atlanta Stadium' },
  { date: 'June 21', time: '6:00 PM', group: 'H', home: 'Uruguay', away: 'Cape Verde', venue: 'Atlanta Stadium' },
  { date: 'June 21', time: '6:00 PM', group: 'G', home: 'Belgium', away: 'Iran', venue: 'SoFi Stadium' },
  { date: 'June 21', time: '6:00 PM', group: 'G', home: 'New Zealand', away: 'Egypt', venue: 'BC Place Vancouver' },
  { date: 'June 22', time: '12:00 PM', group: 'I', home: 'France', away: 'Iraq', venue: 'Gillette Stadium' },
  { date: 'June 22', time: '8:00 PM', group: 'I', home: 'Norway', away: 'Senegal', venue: 'Lincoln Financial Field' },
  { date: 'June 22', time: '12:00 PM', group: 'J', home: 'Argentina', away: 'Austria', venue: 'Levi\'s Stadium' },
  { date: 'June 22', time: '8:00 PM', group: 'J', home: 'Jordan', away: 'Algeria', venue: 'AT&T Stadium' },
  { date: 'June 23', time: '4:00 PM', group: 'L', home: 'England', away: 'Ghana', venue: 'BMO Field' },
  { date: 'June 23', time: '7:00 PM', group: 'L', home: 'Panama', away: 'Croatia', venue: 'Gillette Stadium' },
  { date: 'June 23', time: '12:00 PM', group: 'K', home: 'Colombia', away: 'Congo DR', venue: 'Guadalajara Stadium' },
  { date: 'June 24', time: '12:00 PM', group: 'B', home: 'Switzerland', away: 'Canada', venue: 'BC Place Vancouver' },
  { date: 'June 24', time: '12:00 PM', group: 'B', home: 'Bosnia and Herzegovina', away: 'Qatar', venue: 'Seattle Stadium' },
  { date: 'June 24', time: '6:00 PM', group: 'C', home: 'Scotland', away: 'Brazil', venue: 'Miami Stadium' },
  { date: 'June 24', time: '6:00 PM', group: 'C', home: 'Morocco', away: 'Haiti', venue: 'Atlanta Stadium' },
  { date: 'June 24', time: '5:00 PM', group: 'L', home: 'Panama', away: 'England', venue: 'BMO Field' },
  { date: 'June 24', time: '7:00 PM', group: 'L', home: 'Croatia', away: 'Ghana', venue: 'MetLife Stadium' },
  { date: 'June 24', time: '6:00 PM', group: 'A', home: 'Czechia', away: 'Mexico', venue: 'Mexico City Stadium' },
  { date: 'June 24', time: '6:00 PM', group: 'A', home: 'South Africa', away: 'South Korea', venue: 'Monterrey Stadium' },
  { date: 'June 25', time: '6:00 PM', group: 'D', home: 'Turkey', away: 'United States', venue: 'Los Angeles Stadium' },
  { date: 'June 25', time: '6:00 PM', group: 'D', home: 'Paraguay', away: 'Australia', venue: 'San Francisco Bay Area Stadium' },
  { date: 'June 25', time: '6:00 PM', group: 'F', home: 'Japan', away: 'Sweden', venue: 'Dallas Stadium' },
  { date: 'June 25', time: '6:00 PM', group: 'F', home: 'Tunisia', away: 'Netherlands', venue: 'AT&T Stadium' },
  { date: 'June 25', time: '7:30 PM', group: 'K', home: 'Colombia', away: 'Portugal', venue: 'Miami Stadium' },
  { date: 'June 25', time: '4:00 PM', group: 'E', home: 'Curaçao', away: 'Côte d\'Ivoire', venue: 'Arrowhead Stadium' },
  { date: 'June 26', time: '8:00 PM', group: 'G', home: 'Egypt', away: 'Iran', venue: 'BC Place Vancouver' },
  { date: 'June 26', time: '8:00 PM', group: 'G', home: 'New Zealand', away: 'Belgium', venue: 'Seattle Stadium' },
  { date: 'June 26', time: '3:00 PM', group: 'E', home: 'Ecuador', away: 'Germany', venue: 'New York/New Jersey Stadium' },
  { date: 'June 26', time: '6:00 PM', group: 'H', home: 'Cape Verde', away: 'Saudi Arabia', venue: 'Houston Stadium' },
  { date: 'June 26', time: '7:00 PM', group: 'H', home: 'Uruguay', away: 'Spain', venue: 'Hard Rock Stadium' },
  { date: 'June 26', time: '3:00 PM', group: 'I', home: 'Norway', away: 'France', venue: 'MetLife Stadium' },
  { date: 'June 26', time: '3:00 PM', group: 'I', home: 'Senegal', away: 'Iraq', venue: 'Gillette Stadium' },
  { date: 'June 26', time: '12:00 PM', group: 'K', home: 'Congo DR', away: 'Uzbekistan', venue: 'Hard Rock Stadium' },
  { date: 'June 27', time: '7:30 PM', group: 'J', home: 'Algeria', away: 'Austria', venue: 'Kansas City Stadium' },
  { date: 'June 27', time: '7:30 PM', group: 'J', home: 'Jordan', away: 'Argentina', venue: 'AT&T Stadium' },
  { date: 'June 27', time: '5:00 PM', group: 'L', home: 'Panama', away: 'England', venue: 'BMO Field' }
];

const teamASelect = document.getElementById('teamA');
const teamBSelect = document.getElementById('teamB');
const scoreAInput = document.getElementById('scoreA');
const scoreBInput = document.getElementById('scoreB');
const predictButton = document.getElementById('predictButton');
const resetButton = document.getElementById('resetButton');
const resultText = document.getElementById('resultText');
const statsForm = document.getElementById('statsForm');
const statsGoal = document.getElementById('statsGoal');
const statsConfidence = document.getElementById('statsConfidence');
const scheduleGroupFilter = document.getElementById('scheduleGroupFilter');
const scheduleBody = document.getElementById('scheduleBody');
const groupGrid = document.getElementById('groupGrid');

const bracketTeam1 = document.getElementById('bracketTeam1');
const bracketTeam2 = document.getElementById('bracketTeam2');
const bracketTeam3 = document.getElementById('bracketTeam3');
const bracketTeam4 = document.getElementById('bracketTeam4');
const bracketScore1 = document.getElementById('bracketScore1');
const bracketScore2 = document.getElementById('bracketScore2');
const bracketScore3 = document.getElementById('bracketScore3');
const bracketScore4 = document.getElementById('bracketScore4');
const predictBracketButton = document.getElementById('predictBracketButton');
const resetBracketButton = document.getElementById('resetBracketButton');
const bracketResult = document.getElementById('bracketResult');

const teamStrengths = {
  Argentina: 20,
  Australia: 13,
  Austria: 12,
  Belgium: 17,
  'Bosnia and Herzegovina': 11,
  Brazil: 20,
  Canada: 14,
  'Cape Verde': 10,
  Colombia: 15,
  'Congo DR': 11,
  'Côte d\'Ivoire': 14,
  Croatia: 14,
  'Curaçao': 10,
  Egypt: 12,
  England: 19,
  Ecuador: 14,
  France: 19,
  Germany: 18,
  Ghana: 12,
  Haiti: 10,
  Iran: 13,
  Iraq: 11,
  Japan: 16,
  Jordan: 10,
  Mexico: 15,
  Morocco: 15,
  Netherlands: 18,
  'New Zealand': 10,
  Norway: 12,
  Panama: 11,
  Paraguay: 12,
  Portugal: 18,
  Qatar: 11,
  'Saudi Arabia': 12,
  Scotland: 12,
  Senegal: 15,
  'South Africa': 10,
  'South Korea': 13,
  Spain: 18,
  Sweden: 12,
  Switzerland: 16,
  Tunisia: 12,
  Turkey: 14,
  'United States': 14,
  Uruguay: 15,
  Uzbekistan: 11
};

function addTeamOptions(selectElement) {
  teams.forEach((team) => {
    const option = document.createElement('option');
    option.value = team;
    option.textContent = team;
    selectElement.appendChild(option);
  });
}

function populateAllTeamSelectors() {
  [teamASelect, teamBSelect, bracketTeam1, bracketTeam2, bracketTeam3, bracketTeam4].forEach((select) => {
    addTeamOptions(select);
  });
}

function renderGroups() {
  groupGrid.innerHTML = '';
  Object.entries(groups).forEach(([group, groupTeams]) => {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `
      <h3>Group ${group}</h3>
      <ul>${groupTeams.map((team) => `<li>${team}</li>`).join('')}</ul>
    `;
    groupGrid.appendChild(card);
  });
}

function populateScheduleFilter() {
  const allOption = document.createElement('option');
  allOption.value = 'All';
  allOption.textContent = 'All groups';
  scheduleGroupFilter.appendChild(allOption);

  Object.keys(groups).forEach((groupKey) => {
    const option = document.createElement('option');
    option.value = groupKey;
    option.textContent = `Group ${groupKey}`;
    scheduleGroupFilter.appendChild(option);
  });
}

function renderSchedule() {
  scheduleBody.innerHTML = '';
  const selectedGroup = scheduleGroupFilter.value || 'All';
  const matches = selectedGroup === 'All' ? schedule : schedule.filter((match) => match.group === selectedGroup);

  matches.forEach((match) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${match.date}</td>
      <td>${match.time || 'TBA'}</td>
      <td>${match.group}</td>
      <td>${match.home} vs ${match.away}</td>
      <td>${match.venue}</td>
    `;
    scheduleBody.appendChild(row);
  });
}

function updateOptions() {
  const firstTeam = teamASelect.value;
  Array.from(teamBSelect.options).forEach((option) => {
    option.disabled = option.value === firstTeam;
  });
  updateLiveTips();
}

function getMatchPrediction(team1, team2, score1, score2) {
  if (!team1 || !team2 || team1 === team2) {
    return null;
  }

  if (score1 > score2) {
    return { winner: team1, margin: score1 - score2 };
  }

  if (score2 > score1) {
    return { winner: team2, margin: score2 - score1 };
  }

  return { winner: null, margin: 0 };
}

function predictMatch() {
  const teamA = teamASelect.value;
  const teamB = teamBSelect.value;
  const scoreA = Number(scoreAInput.value);
  const scoreB = Number(scoreBInput.value);

  if (!teamA || !teamB || teamA === teamB) {
    resultText.textContent = 'Please choose two different teams to compare.';
    return;
  }

  let winnerText = '';
  if (scoreA > scoreB) {
    winnerText = `${teamA} are predicted to win ${scoreA}-${scoreB}.`;
  } else if (scoreB > scoreA) {
    winnerText = `${teamB} are predicted to win ${scoreB}-${scoreA}.`;
  } else {
    winnerText = `${teamA} and ${teamB} are predicted to draw ${scoreA}-${scoreB}.`;
  }

  const confidence = calculateConfidence(teamA, teamB, scoreA, scoreB);
  resultText.textContent = `${winnerText} Confidence: ${confidence}%`;
  updateLiveTips();
}

function calculateConfidence(teamA, teamB, scoreA, scoreB) {
  const baseConfidence = 56;
  const goalDiff = Math.abs(scoreA - scoreB);
  const teamBoost = (teamStrength(teamA) + teamStrength(teamB)) / 6;
  const confidence = Math.min(98, Math.max(45, baseConfidence + goalDiff * 8 + teamBoost));
  return confidence;
}

function teamStrength(team) {
  return teamStrengths[team] || 11;
}

function updateLiveTips() {
  const teamA = teamASelect.value;
  const teamB = teamBSelect.value;

  if (!teamA || !teamB || teamA === teamB) {
    statsForm.textContent = 'Select two different teams to see team form tips.';
    statsGoal.textContent = 'Score prediction depends on style and matchups.';
    statsConfidence.textContent = 'Confidence updates with score gaps and strength.';
    return;
  }

  const strengthA = teamStrength(teamA);
  const strengthB = teamStrength(teamB);
  const goalGap = Math.abs(Number(scoreAInput.value) - Number(scoreBInput.value));

  statsForm.textContent = `${teamA} rates ${strengthA}, while ${teamB} rates ${strengthB}.`;
  statsGoal.textContent = `A ${goalGap}-goal gap would signal a strong attack or a weak defense.`;
  statsConfidence.textContent = `Confidence is stronger when there is a clear difference between the teams.`;
}

function predictBracket() {
  const matchA = getMatchPrediction(bracketTeam1.value, bracketTeam2.value, Number(bracketScore1.value), Number(bracketScore2.value));
  const matchB = getMatchPrediction(bracketTeam3.value, bracketTeam4.value, Number(bracketScore3.value), Number(bracketScore4.value));

  if (!matchA || !matchB) {
    bracketResult.textContent = 'Choose four different teams and valid scores for both quarterfinals.';
    return;
  }

  const champion = predictChampion(matchA.winner, matchB.winner, matchA.margin, matchB.margin);
  bracketResult.textContent = `${matchA.winner} advances from Quarterfinal A. ${matchB.winner} advances from Quarterfinal B. Predicted champion: ${champion}.`;
}

function predictChampion(team1, team2, marginA, marginB) {
  const score = teamStrength(team1) - teamStrength(team2) + (marginA - marginB) * 2;
  return score >= 0 ? team1 : team2;
}

function resetForm() {
  teamASelect.selectedIndex = 0;
  teamBSelect.selectedIndex = 1;
  scoreAInput.value = '1';
  scoreBInput.value = '1';
  updateOptions();
  resultText.textContent = 'Pick teams and click predict.';
}

function resetBracket() {
  bracketTeam1.selectedIndex = 0;
  bracketTeam2.selectedIndex = 1;
  bracketTeam3.selectedIndex = 2;
  bracketTeam4.selectedIndex = 3;
  bracketScore1.value = '1';
  bracketScore2.value = '1';
  bracketScore3.value = '1';
  bracketScore4.value = '1';
  bracketResult.textContent = 'Choose four teams and predict the knockout path.';
}

function handleScheduleChange() {
  renderSchedule();
}

teamASelect.addEventListener('change', updateOptions);
teamBSelect.addEventListener('change', updateOptions);
predictButton.addEventListener('click', predictMatch);
resetButton.addEventListener('click', resetForm);
predictBracketButton.addEventListener('click', predictBracket);
resetBracketButton.addEventListener('click', resetBracket);
scheduleGroupFilter.addEventListener('change', handleScheduleChange);

populateAllTeamSelectors();
resetForm();
resetBracket();
renderGroups();
populateScheduleFilter();
renderSchedule();

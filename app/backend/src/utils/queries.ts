const homeTeamLeaderboard = `SELECT 
t.team_name AS 'name',
((SUM(m.home_team_goals > m.away_team_goals) * 3) 
+ SUM(m.home_team_goals = m.away_team_goals)) AS 'totalPoints',
COUNT(m.home_team) AS 'totalGames',
SUM(m.home_team_goals > m.away_team_goals) AS 'totalVictories',
SUM(m.home_team_goals = m.away_team_goals) AS 'totalDraws',
SUM(m.home_team_goals < m.away_team_goals) AS 'totalLosses',
SUM(m.home_team_goals) AS 'goalsFavor',
SUM(m.away_team_goals) AS 'goalsOwn',
(SUM(m.home_team_goals) - SUM(m.away_team_goals)) AS 'goalsBalance',
FORMAT((((SUM(m.home_team_goals > m.away_team_goals) * 3)
+ SUM(m.home_team_goals = m.away_team_goals)) / (COUNT(m.home_team) * 3) * 100), 2) 
AS 'efficiency'
FROM TRYBE_FUTEBOL_CLUBE.teams AS t
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS m ON m.home_team = t.id
WHERE m.in_progress = false
GROUP BY t.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

const awayTeamLeaderboard = `SELECT 
t.team_name AS 'name',
((SUM(m.away_team_goals > m.home_team_goals) * 3) 
+ SUM(m.away_team_goals = m.home_team_goals)) AS 'totalPoints',
COUNT(m.away_team) AS 'totalGames',
SUM(m.away_team_goals > m.home_team_goals) AS 'totalVictories',
SUM(m.away_team_goals = m.home_team_goals) AS 'totalDraws',
SUM(m.away_team_goals < m.home_team_goals) AS 'totalLosses',
SUM(m.away_team_goals) AS 'goalsFavor',
SUM(m.home_team_goals) AS 'goalsOwn',
(SUM(m.away_team_goals) - SUM(m.home_team_goals)) AS 'goalsBalance',
FORMAT((((SUM(m.away_team_goals > m.home_team_goals) * 3)
+ SUM(m.away_team_goals = m.home_team_goals)) / (COUNT(m.away_team) * 3) * 100), 2) 
AS 'efficiency'
FROM TRYBE_FUTEBOL_CLUBE.teams AS t
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS m ON m.away_team = t.id
WHERE m.in_progress = false
GROUP BY t.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

export default { homeTeamLeaderboard, awayTeamLeaderboard };

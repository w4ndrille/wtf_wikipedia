import AmericanFootballPlayer from './AmericanFootballPlayer.js'
import BaseballPlayer from './BaseballPlayer.js'
import FootballPlayer from './FootballPlayer.js'
import BasketballPlayer from './BasketballPlayer.js'
import HockeyPlayer from './HockeyPlayer.js'

export default {
  name: 'Athlete',
  //
  properties: {
    leagues: () => { },
  },
  children: {
    AmericanFootballPlayer,
    BaseballPlayer,
    FootballPlayer,
    BasketballPlayer,
    HockeyPlayer,
  },
  //
  categories: {
    mapping: [],
    patterns: [/sportspeople from ./, /(footballers|cricketers|defencemen|cyclists)/],
  },
  //
  descriptions: {
    patterns: [/(hockey|soccer|backetball|football) player/],
  },
  //
  infoboxes: {
    mapping: [
      'afl_biography',
      'alpine_ski_racer',
      'athlete',
      'baseball_biography',
      'basketball_biography',
      'boxer',
      'cfl_player',
      'cricketer',
      'cyclist',
      'field_hockey_player',
      'figure_skater',
      'gaa_player',
      'golfer',
      'gymnast',
      'ice_hockey_player',
      'lacrosse_player',
      'martial_artist',
      'mlb_player',
      'nba_biography',
      'nfl_biography',
      'nfl_player',
      'professional_wrestler',
      'rugby_biography',
      'rugby_league_biography',
      'skier',
      'squash_player',
      'swimmer',
      'tennis_biography',
      'volleyball_biography',
      'volleyball_player',
      'hockey team player',
      'football biography',
      'baseball biography',
      'ice hockey player',
      'nfl player',
      'basketball biography',
      'professional wrestler',
      'tennis biography',
      'afl biography',
      'nfl biography',
      'rugby biography',
      'rugby league biography',
      'nba biography',
      'figure skater',
      'gaa player',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [],
    patterns: [],
  },
  //
  templates: {
    mapping: [],
    patterns: [/sport-bio-stub$/],
  },
  //
  titles: {
    mapping: [
      'american football player',
      'football player',
      'gaelic footballer',
      'athlete',
      'boxer',
      'cricketer',
      'footballer',
      'wrestler',
      'golfer',
      'swimmer',
    ],
    patterns: [],
  },
}

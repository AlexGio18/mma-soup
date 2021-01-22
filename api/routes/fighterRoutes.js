const fighterBuilder = require('../controllers/fighterController');

module.exports = app => {
  app
    .route('/fighters')
    .get(fighterBuilder.list_all_fighters)
    .post(fighterBuilder.create_a_fighter);

  app
    .route('/fighters/top-10-heavyweight')
    .get(fighterBuilder.top_10_heavyweight)

  app
    .route('/fighters/top-10-lightheavyweight')
    .get(fighterBuilder.top_10_lightheavyweight)

  app
    .route('/fighters/top-10-middleweight')
    .get(fighterBuilder.top_10_middleweight)

  app
    .route('/fighters/top-10-welterweight')
    .get(fighterBuilder.top_10_welterweight)
    
  app
    .route('/fighters/top-10-lightweight')
    .get(fighterBuilder.top_10_lightweight)

  app
    .route('/fighters/top-10-featherweight')
    .get(fighterBuilder.top_10_featherweight)

  app
    .route('/fighters/top-10-bantamweight')
    .get(fighterBuilder.top_10_bantamweight)

  app
    .route('/fighters/top-10-flyweight')
    .get(fighterBuilder.top_10_flyweight)

  app
    .route('/fighters/:fighterId')
    .get(fighterBuilder.read_a_fighter)
    .put(fighterBuilder.update_a_fighter)
    .delete(fighterBuilder.delete_a_fighter);

  app
    .route('/fighters/:fighterId/:recordType')
    .put(fighterBuilder.update_fighter_record)

  app
    .route('/fighters/search/:searchText')
    .get(fighterBuilder.search_a_fighter);
};
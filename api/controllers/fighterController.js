const mongoose = require('mongoose');
const fighter = mongoose.model('fighters');

exports.list_all_fighters = (req, res) => {
  fighter.find({}, (err, fighters) => {
    if (err) res.send(err);
    res.json(fighters);
  });
};

exports.top_10_heavyweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Heavyweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_lightheavyweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Light Heavyweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_middleweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Middleweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_welterweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Welterweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_lightweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Lightweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_featherweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Featherweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_bantamweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Bantamweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.top_10_flyweight = (req, res) => {
  fighter.find( { 'weight_class' : 'Flyweight' } )
    .sort({ 'ranking': 1}).limit(10).exec( (err, fighters) => {
      if (err) res.send(err);
      res.json(fighters);
    })
}

exports.create_a_fighter = (req, res) => {
  const newfighter = new fighter(req.body);
  console.log(newfighter)
  newfighter.save((err, fighter) => {
    if (err) res.send(err);
    res.json(fighter);
  });
};

exports.read_a_fighter = (req, res) => {
  fighter.findById(req.params.fighterId, (err, fighter) => {
    if (err) res.send(err);
    res.json(fighter);
  });
};

exports.search_a_fighter = (req, res) => {
  fighter.find(
    { $text: { $search: req.params.searchText } },
    { score: { $meta: "textScore" } })
    .sort( { score: { $meta: "textScore" } })
    .exec( (err, fighters) => {
      if (err) res.send(err);
        res.json(fighters);
    }
  );
};
  

exports.update_a_fighter = (req, res) => {
  fighter.findOneAndUpdate(
    { _id: req.params.fighterId },
    { '$set': req.body },
    { new: true },
    (err, fighter) => {
      if (err) res.send(err);
      res.json(fighter);
    }
  );
};

exports.delete_a_fighter = (req, res) => {
  fighter.deleteOne({ _id: req.params.fighterId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'fighter successfully deleted',
     _id: req.params.fighterId
    });
  });
};
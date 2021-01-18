const mongoose = require('mongoose');

const { Schema } = mongoose;
const fightSchema = new Schema(
    {
        result: String,
        opponent_link: String,
        opponent: String,
        event_link: String,
        event: String,
        event_date: String,
        referee: String,
        method: String,
        round: Number,
        time: String
    }
);

const fighterSchema = new Schema(
  {
    name: String,
    born: String,
    city: String,
    country: String,
    association: String,
    height_inch: Number,
    height_cm: Number,
    weight_lbs: Number,
    weight_kgs: Number,
    weight_class: String,
    wins: Number,
    losses: Number,
    win_ko: Number,
    win_subs: Number,
    win_decs: Number,
    win_others: Number,
    loss_ko: Number,
    loss_subs: Number,
    loss_decs: Number,
    loss_others: Number,
    ranking: Number,
    professional_record: [fightSchema],
    amateur_record: [fightSchema]
  },
  { collection: 'fighters' }
);

module.exports = mongoose.model('fighters', fighterSchema);
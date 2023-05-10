
const Member = require('../models/member');
const Corona = require('../models/corona');


exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findOne({ id: req.params.id });
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.addCoronaDetails = async (req, res) => {
  try {
    const member = await Member.findOne({ id: req.params.id });
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    let corona = await Corona.findOne({ memberId: member._id });
    if (!corona) {
      corona = new Corona({ memberId: member._id });
    }

    const { vaccines, positiveResult, recoveryDate } = req.body;

    if (positiveResult && corona.positiveResult) {
      return res.status(400).json({ error: 'Cannot add positive result again' });
    }

    if (recoveryDate && corona.positiveResult && corona.positiveResult.recoveryDate) {
      return res.status(400).json({ error: 'Cannot add recovery date again' });
    }

    if (vaccines && Array.isArray(vaccines)) {
      if (corona.vaccines.length + vaccines.length > 4) {
        return res.status(400).json({ error: 'Cannot add more than 4 vaccine dates' });
      }

      corona.vaccines.push(...vaccines);
    }

    if (positiveResult) {
        if (corona.positiveResult) {
          corona.positiveResult.date = positiveResult.date;
        } else {
          corona.positiveResult = { date: positiveResult.date };
        }
      }

    if (recoveryDate)  {
        if (corona.positiveResult && corona.positiveResult. recoveryDate) {
          corona.positiveResult.recoveryDate = recoveryDate;
        } else {
          if (!corona.positiveResult) {
            corona.positiveResult = {};
          }
      
          corona.positiveResult.recoveryDate = recoveryDate;
        }
      }

    await corona.save();

    res.json(corona);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

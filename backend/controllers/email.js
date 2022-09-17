import EmailModal from "../modals/email.js";

export const email = async (req, res) => {
  const { from, to, subject, text, email_sent, start_time, user_id } = req.body;
  try {
    const result = await EmailModal.create({
      from: from,
      to: to,
      subject: subject,
      text: text,
      email_sent: email_sent,
      start_time: start_time,
      user_id: user_id,
    });

    res.status(201).send({ result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSchedule = async (req, res) => {
  try {
    
    EmailModal.find({ email_sent: false })
      .then((result) => {
        
        res.status(200).json(result);
      })
      .catch((error) => res.status(404).json({error:error}));
  } catch (error) {
    console.log(error);
  }
};

export const getHistory = async (req, res) => {
  try {
    
    EmailModal.find({ email_sent: true })
      .then((result) => {
        
        res.status(200).json(result);
      })
      .catch((error) => res.status(404).json({error:error}));
  } catch (error) {
    console.log(error);
  }
};

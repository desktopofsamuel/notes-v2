import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import EmailOctopus from 'email-octopus';


// export default function handler(
//   req
//   res,
// ) {
//   console.log(`submitted form`, req.body);
//   res.json(`ok`);

// }

=

const handler = (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(404).json({ message: 'This endpoint requires a POST' });
    }

    const data = req.body;

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    const API_KEY = process.env.EO_API_KEYS
    var listId = 'some-uuid-for-this-list'
    var options = {
        email_address: 'john@doe.com'
        first_name: 'John',
        last_name: 'Doe'
    };
    
    emailOctopus.lists.contacts.create(listId, options).then(function() {
        console.log('contact added');
    });
    
    db('Submissions').create(
      [
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Message: data.message,
          },
        },
      ],
      (err, records) => {
        if (err) {
          res.json({
            message: 'Error adding record to Airtable.',
            error: err.message,
          });
        } else {
          res.json({ message: `Successfully submitted message` });
        }
      },
    );
  } catch (err) {
    console.log(err);
    res.json({ message: 'There has been a big error.', error: err });
  }
};

module.exports = handler;

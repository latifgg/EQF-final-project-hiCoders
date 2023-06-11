import express from 'express';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

// auth0 configuration
const authConfig = {
  domain: 'dev-a2uqdd4g8uw67l88.eu.auth0.com',
  audience: 'https://dev-a2uqdd4g8uw67l88.eu.auth0.com/api/v2/',
  clientID: 'JCWySnjXa0j27h4uGXJnAaPpvoIkgBdh',
  clientSecret: 'smurgq7vf02GnANWcs-pEHCftSNOr44vq_l1lATRl1Jp-5IGiuJOLNv9ccC_i9-4'
};

const router = express.Router();

// Middleware to validate JWT token
const checkJwt = expressJwt({
    secret: authConfig.clientSecret,
    algorithms: ['HS256']
  });

// login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // TODO: authenticate user with email and password
    if (email === 'user@example.com' && password === 'password123') {
      // generate JWT token
      const token = jwt.sign({ email }, authConfig.clientSecret, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
  

// Sample protected endpoint
router.get('/protected', checkJwt, (req, res) => {
    // TODO: implement functionality
    res.send('This is a protected endpoint');
  });

export default router; 

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || '127.0.0.1';

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'reymundolopez-api',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Contact message endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message, company } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields (name, email, message)'
    });
  }

  // Basic email syntax check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  console.log(`[Contact Inquiry] From: ${name} <${email}> (${company || 'Individual'}) - Message: ${message.slice(0, 80)}...`);

  // Return success
  return res.status(200).json({
    success: true,
    message: 'Inquiry received. Thank you for reaching out.'
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Portfolio API listening on http://${HOST}:${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('API server terminated gracefully');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('API server terminated gracefully');
    process.exit(0);
  });
});

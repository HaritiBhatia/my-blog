const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Fake blog data

    const posts = [
        { 
            title: 'Vercel', 
            content: `
              <h3>What is Vercel?</h3>
              <p>
                Vercel is a cloud platform designed for developers who want a seamless experience in deploying and scaling their web applications. 
                Whether you're building a personal blog, a portfolio, or a full-scale web application, Vercel provides the tools and infrastructure you need to succeed.
              </p>
              <img src="/images/Screenshot 2024-12-31 100505.png" alt="Benefits of Using Vercel" style="max-width: 100%; height: auto;">
    
              <h3>Why Use Vercel for Your Blog?</h3>
              <p>
                Vercel is not just a hosting platform. It is a developer-friendly solution designed to optimize your application for performance and accessibility. 
                Here are some of the key benefits of using Vercel for your blog:
              </p>
              <ul>
                <li><strong>Ease of Use:</strong> Setting up and deploying a project on Vercel is intuitive and straightforward. You can have your blog live in minutes.</li>
                <li><strong>Global Edge Network:</strong> Vercel uses a global edge network to ensure your blog loads quickly, no matter where your audience is located.</li>
                <li><strong>Automatic Scaling:</strong> Vercel automatically scales your application to handle traffic spikes, making it a great choice for blogs with growing audiences.</li>
                <li><strong>Seamless Integration:</strong> Vercel works perfectly with popular front-end frameworks like Next.js, React, and Vue.js, making it the go-to choice for developers.</li>
                <li><strong>Version Control Integration:</strong> Vercel integrates with GitHub, GitLab, and Bitbucket, enabling automatic deployments every time you push changes to your repository.</li>
              </ul>
              
        
              <h3>The Importance of Vercel in Modern Web Development</h3>
              <p>
                In today's fast-paced digital environment, users expect websites to load quickly and perform smoothly. Vercel addresses these expectations by offering:
              </p>
              <ul>
                <li>Serverless functions for backend logic.</li>
                <li>Automatic image optimization to enhance loading speeds.</li>
                <li>Real-time analytics to track your application's performance.</li>
              </ul>
              <p>
                Its user-friendly dashboard makes managing projects, viewing deployment logs, and monitoring performance metrics easy. 
                Even developers with minimal experience can confidently deploy and maintain their blogs.
              </p>
              
        
              <h3>Conclusion</h3>
              <p>
                Vercel has revolutionized the way developers approach web application deployment. Its combination of simplicity, scalability, and cutting-edge technology makes it an indispensable tool for any developer looking to create a professional and high-performing blog.
              </p>
              <p>
                If you’re considering starting your blogging journey or upgrading your current hosting platform, Vercel is definitely worth exploring!
              </p>
            `
        },
    ];
    
  

// Routes
// Front Page
app.get('/', (req, res) => {
  res.render('index');
});

// Blog Page
app.get('/blog', (req, res) => {
  res.render('blog', { posts });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

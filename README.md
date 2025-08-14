# Pete Schurmann - Ethnic Media Legacy Website

A comprehensive website showcasing Pete Schurmann's decades of work in ethnic media and community journalism in the San Francisco Bay Area.

## Overview

This website serves as both an archive and educational resource, highlighting Pete's contributions to ethnic media organizations including:
- New America Media
- Ethnic Media Services  
- American Community Media
- New California Media
- Pacific News Service

## Features

### 🏠 Homepage
- **Hero Section**: Introduction to Pete's work with key statistics
- **Organizations**: Overview of media organizations Pete worked with
- **Archive Preview**: Sample articles with search and filtering
- **Impact & Legacy**: Key achievements and contributions
- **Resources**: Educational materials and tools
- **About**: Professional bio and contact information

### 📚 Archive Page
- **Advanced Search**: Search by title, content, organization, category, and year
- **Filtering System**: Multiple filter options for easy navigation
- **Article Cards**: Clean, organized display of articles with metadata
- **Pagination**: Navigate through large collections of articles
- **Responsive Design**: Works seamlessly on all devices

### 🎨 Design Features
- **Modern UI**: Clean, professional design with excellent readability
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Subtle animations and hover effects
- **Accessibility**: High contrast colors and readable typography
- **Performance**: Optimized loading and smooth interactions

### 🔧 Technical Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Search Functionality**: Real-time search with debouncing
- **Filter System**: Multiple filtering options with instant results
- **Smooth Scrolling**: Enhanced navigation experience
- **Back to Top**: Easy navigation for long pages

## File Structure

```
pete-schurmann-website/
├── index.html          # Main homepage
├── archive.html        # Comprehensive archive page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Setup Instructions

### Local Development
1. Clone or download the website files
2. Open `index.html` in a web browser
3. The website will work immediately without any server setup

### Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is set as the default page
3. The website is ready to use

### Customization

#### Adding Articles
To add new articles to the archive:

1. **Homepage Articles**: Add to the `articles-grid` section in `index.html`
```html
<div class="article-card" data-category="your-category">
    <div class="article-date">Date</div>
    <h3>Article Title</h3>
    <p>Article excerpt...</p>
    <div class="article-meta">
        <span class="org-tag">Organization</span>
        <span class="read-time">X min read</span>
    </div>
</div>
```

2. **Archive Articles**: Add to the `archive-grid` section in `archive.html`
```html
<article class="archive-article" data-category="category" data-organization="Organization" data-year="YYYY">
    <div class="article-header">
        <div class="article-date">Date</div>
        <h3 class="article-title">Article Title</h3>
        <p class="article-excerpt">Article excerpt...</p>
        <div class="article-meta">
            <div class="article-tags">
                <span class="article-tag">Tag 1</span>
                <span class="article-tag">Tag 2</span>
            </div>
            <span class="read-time">X min read</span>
        </div>
    </div>
</article>
```

#### Styling Customization
- **Colors**: Modify CSS variables in `styles.css`
- **Fonts**: Change font families in the CSS
- **Layout**: Adjust grid layouts and spacing
- **Animations**: Modify transition effects

#### Content Updates
- **Contact Information**: Update in the About section
- **Social Media Links**: Modify in the footer
- **Organization Details**: Update in the Organizations section
- **Statistics**: Change numbers in the hero section

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- **Fast Loading**: Optimized CSS and JavaScript
- **Responsive Images**: Placeholder system for easy image integration
- **Minimal Dependencies**: Only external fonts and icons
- **Efficient Search**: Debounced search for better performance

## Future Enhancements

### Potential Additions
- **Individual Article Pages**: Full article view with rich content
- **Multilingual Support**: Multiple language versions
- **Photo Gallery**: Visual documentation of events and communities
- **Oral History Section**: Audio/video interviews
- **Interactive Timeline**: Chronological view of Pete's career
- **Newsletter Signup**: Email updates for new content
- **Admin Panel**: Content management system
- **Database Integration**: Dynamic content loading

### Technical Improvements
- **CMS Integration**: WordPress or similar for easy content management
- **Search Engine Optimization**: Enhanced meta tags and structure
- **Analytics**: Visitor tracking and engagement metrics
- **Caching**: Improved loading speeds
- **CDN**: Content delivery network for global access

## Content Guidelines

### Article Categories
- **Immigration**: Policy, rights, community impact
- **Civil Rights**: Activism, equality, social justice
- **Community**: Local stories, cultural events, collaboration
- **Education**: Access, programs, student success
- **Health**: Healthcare access, community health, awareness
- **Politics**: Voting rights, civic engagement, policy
- **Economy**: Business development, entrepreneurship, economic impact

### Organization Information
Each organization should include:
- Brief description of mission and work
- Years of involvement
- Key achievements or impact
- Relevant statistics or reach

## Contact & Support

For questions about the website or content updates:
- Email: pete@ethnicmedialegacy.org
- Phone: (415) 555-0123
- Location: San Francisco Bay Area

## License

© 2024 Pete Schurmann Ethnic Media Legacy. All rights reserved.

---

*This website celebrates Pete Schurmann's contributions to ethnic media and serves as a resource for understanding the importance of community journalism in building inclusive, informed communities.*

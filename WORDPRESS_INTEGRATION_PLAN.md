# 🌐 Black Sun → WordPress Studio Integration Plan

**Project:** Black Sun Theme Ecosystem → WordPress Base Template
**Target:** WordPress Studio Local Installation
**Status:** Planning Phase

---

## 📋 CURRENT ENVIRONMENT STATUS

### ✅ What We Have:
1. **VS Code Theme** (Black Sun v0.0.2) - Complete
2. **Edge Browser Theme** - Partial (missing icons)
3. **TypeScript AI Integration Files** - Code only, not deployed
4. **Cyberpunk Design System** - Fully defined color palette

### ⚠️ Environment Gaps Identified:
- ❌ Node.js/npm not detected or not in PATH
- ❌ TypeScript compiler not installed
- ❌ No Next.js project structure
- ❌ WordPress Studio not yet set up
- ❌ No build tools configured

---

## 🎯 INTEGRATION OBJECTIVES

### Primary Goal:
Create a **WordPress theme** based on the Black Sun cyberpunk aesthetic that can serve as a base template for future websites in WordPress Studio.

### Secondary Goals:
1. Integrate Hikaru AI features as WordPress plugins
2. Maintain design consistency across all platforms
3. Create reusable components for rapid development
4. Enable local development workflow

---

## 🏗️ ARCHITECTURE PLAN

### WordPress Theme Structure:
```
black-sun-wp-theme/
├── style.css                 # Theme header & base styles
├── functions.php             # Theme functions & hooks
├── index.php                 # Main template
├── header.php                # Header template
├── footer.php                # Footer template
├── sidebar.php               # Sidebar template
├── single.php                # Single post template
├── page.php                  # Page template
├── archive.php               # Archive template
├── 404.php                   # 404 error page
├── screenshot.png            # Theme preview (1200x900)
├── assets/
│   ├── css/
│   │   ├── black-sun.css    # Main theme styles
│   │   ├── cyberpunk.css    # Cyberpunk effects
│   │   └── animations.css   # Glow animations
│   ├── js/
│   │   ├── theme.js         # Theme JavaScript
│   │   └── effects.js       # Visual effects
│   └── images/
│       ├── logo.svg
│       └── backgrounds/
├── templates/
│   ├── template-fullwidth.php
│   ├── template-landing.php
│   └── template-ai-chat.php
├── inc/
│   ├── customizer.php       # Theme customizer
│   ├── enqueue.php          # Asset loading
│   └── widgets.php          # Custom widgets
└── README.md
```

### WordPress Plugin Structure (Hikaru AI):
```
hikaru-ai-plugin/
├── hikaru-ai.php            # Main plugin file
├── includes/
│   ├── class-grok-api.php   # Grok AI integration
│   ├── class-spotify.php    # Spotify integration
│   └── class-admin.php      # Admin interface
├── admin/
│   ├── settings.php         # Plugin settings
│   └── dashboard.php        # AI dashboard
├── public/
│   ├── shortcodes.php       # [hikaru-chat] etc.
│   └── widgets.php          # AI widgets
├── assets/
│   ├── css/
│   └── js/
└── README.md
```

---

## 📝 IMPLEMENTATION PHASES

### Phase 1: Environment Setup (Day 1)
```powershell
# 1. Install Node.js (if not present)
# Download from: https://nodejs.org/

# 2. Verify installation
node --version
npm --version

# 3. Install global tools
npm install -g typescript
npm install -g @wordpress/create-block

# 4. Install WordPress Studio
# Download from: https://developer.wordpress.com/studio/

# 5. Create local WordPress site in Studio
# Site name: black-sun-dev
```

### Phase 2: WordPress Theme Development (Days 2-3)

#### Step 1: Create Theme Directory
```powershell
# Navigate to WordPress themes directory
cd "C:\Users\brand\AppData\Local\Programs\WordPress Studio\sites\black-sun-dev\wp-content\themes"

# Create theme directory
mkdir black-sun-theme
cd black-sun-theme
```

#### Step 2: Create Core Theme Files

**style.css:**
```css
/*
Theme Name: Black Sun
Theme URI: https://github.com/sashasmith-syber/black-sun
Author: Sasha Smith
Author URI: https://github.com/sashasmith-syber
Description: A cyberpunk-inspired dark theme with neon cyan glows and matrix green accents. Perfect for tech, gaming, and creative websites.
Version: 1.0.0
License: MIT
License URI: https://opensource.org/licenses/MIT
Text Domain: black-sun
Tags: dark, cyberpunk, neon, matrix, tech, gaming, creative, modern, responsive
*/

:root {
  --bs-black: #080808;
  --bs-cyan: #00ffff;
  --bs-green: #00ff00;
  --bs-yellow: #ffcc66;
  --bs-blue: #99ccff;
  --bs-red: #ff0000;
  --bs-white: #eeffff;
  --bs-gray: #546E7A;
}

body {
  background-color: var(--bs-black);
  color: var(--bs-white);
  font-family: 'Courier New', monospace;
  line-height: 1.6;
}

a {
  color: var(--bs-cyan);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--bs-green);
  text-shadow: 0 0 10px var(--bs-cyan);
}

/* Cyberpunk glow effects */
.glow-cyan {
  box-shadow: 0 0 10px var(--bs-cyan),
              0 0 20px var(--bs-cyan),
              0 0 30px var(--bs-cyan);
}

.glow-green {
  box-shadow: 0 0 10px var(--bs-green),
              0 0 20px var(--bs-green);
}
```

**functions.php:**
```php
<?php
/**
 * Black Sun Theme Functions
 */

// Theme setup
function black_sun_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'black-sun'),
        'footer' => __('Footer Menu', 'black-sun'),
    ));
}
add_action('after_setup_theme', 'black_sun_setup');

// Enqueue styles and scripts
function black_sun_enqueue_assets() {
    // Main stylesheet
    wp_enqueue_style('black-sun-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom CSS
    wp_enqueue_style('black-sun-custom', get_template_directory_uri() . '/assets/css/black-sun.css', array(), '1.0.0');
    
    // Cyberpunk effects
    wp_enqueue_style('black-sun-cyberpunk', get_template_directory_uri() . '/assets/css/cyberpunk.css', array(), '1.0.0');
    
    // JavaScript
    wp_enqueue_script('black-sun-effects', get_template_directory_uri() . '/assets/js/effects.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'black_sun_enqueue_assets');

// Custom excerpt length
function black_sun_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'black_sun_excerpt_length');

// Customizer settings
function black_sun_customize_register($wp_customize) {
    // Cyberpunk glow intensity
    $wp_customize->add_setting('glow_intensity', array(
        'default' => '50',
        'sanitize_callback' => 'absint',
    ));
    
    $wp_customize->add_control('glow_intensity', array(
        'label' => __('Glow Intensity', 'black-sun'),
        'section' => 'colors',
        'type' => 'range',
        'input_attrs' => array(
            'min' => 0,
            'max' => 100,
            'step' => 10,
        ),
    ));
}
add_action('customize_register', 'black_sun_customize_register');
?>
```

#### Step 3: Create Template Files

**index.php:**
```php
<?php get_header(); ?>

<main id="main-content" class="site-main">
    <div class="container">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('glow-cyan'); ?>>
                    <header class="entry-header">
                        <h2 class="entry-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        <div class="entry-meta">
                            <span class="posted-on"><?php echo get_the_date(); ?></span>
                            <span class="author"> by <?php the_author(); ?></span>
                        </div>
                    </header>
                    
                    <div class="entry-content">
                        <?php the_excerpt(); ?>
                    </div>
                    
                    <footer class="entry-footer">
                        <a href="<?php the_permalink(); ?>" class="read-more">Read More →</a>
                    </footer>
                </article>
                <?php
            endwhile;
            
            the_posts_pagination();
        else :
            ?>
            <p><?php _e('No posts found.', 'black-sun'); ?></p>
            <?php
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
```

**header.php:**
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                ?>
                <h1 class="site-title glow-cyan">
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                </h1>
                <?php
            }
            ?>
        </div>
        
        <nav id="site-navigation" class="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'primary-menu',
                'container' => false,
            ));
            ?>
        </nav>
    </div>
</header>
```

**footer.php:**
```php
<footer id="colophon" class="site-footer">
    <div class="container">
        <div class="footer-widgets">
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div class="footer-widget-area">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
            <?php endif; ?>
        </div>
        
        <div class="site-info">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
            <p class="powered-by">
                Powered by <span class="glow-green">Black Sun</span> Theme
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

### Phase 3: Hikaru AI Plugin Development (Days 4-5)

**hikaru-ai.php:**
```php
<?php
/**
 * Plugin Name: Hikaru AI
 * Plugin URI: https://github.com/sashasmith-syber/hikaru-ai
 * Description: AI-powered features using Grok and Spotify APIs
 * Version: 1.0.0
 * Author: Sasha Smith
 * License: MIT
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('HIKARU_AI_VERSION', '1.0.0');
define('HIKARU_AI_PATH', plugin_dir_path(__FILE__));
define('HIKARU_AI_URL', plugin_dir_url(__FILE__));

// Include required files
require_once HIKARU_AI_PATH . 'includes/class-grok-api.php';
require_once HIKARU_AI_PATH . 'includes/class-spotify.php';
require_once HIKARU_AI_PATH . 'includes/class-admin.php';
require_once HIKARU_AI_PATH . 'public/shortcodes.php';

// Initialize plugin
function hikaru_ai_init() {
    // Register shortcodes
    add_shortcode('hikaru-chat', 'hikaru_ai_chat_shortcode');
    add_shortcode('hikaru-music', 'hikaru_ai_music_shortcode');
}
add_action('init', 'hikaru_ai_init');

// Activation hook
function hikaru_ai_activate() {
    // Create database tables if needed
    global $wpdb;
    $table_name = $wpdb->prefix . 'hikaru_conversations';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        user_id bigint(20) NOT NULL,
        message text NOT NULL,
        response text NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'hikaru_ai_activate');
?>
```

### Phase 4: Asset Creation (Day 6)

#### CSS Files to Create:

**assets/css/black-sun.css:**
```css
/* Black Sun Theme - Main Styles */

/* Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.site-header {
    background: var(--bs-black);
    border-bottom: 2px solid var(--bs-cyan);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.site-title a {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Navigation */
.main-navigation ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
}

.main-navigation a {
    padding: 10px 20px;
    border: 1px solid var(--bs-cyan);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.main-navigation a:hover {
    background: var(--bs-cyan);
    color: var(--bs-black);
    box-shadow: 0 0 20px var(--bs-cyan);
}

/* Content */
.site-main {
    padding: 60px 0;
    min-height: 70vh;
}

article {
    background: rgba(0, 255, 255, 0.05);
    border: 1px solid var(--bs-cyan);
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 40px;
    transition: all 0.3s ease;
}

article:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
}

.entry-title a {
    font-size: 2rem;
    color: var(--bs-cyan);
}

.entry-meta {
    color: var(--bs-gray);
    font-size: 0.9rem;
    margin: 10px 0;
}

.entry-content {
    margin: 20px 0;
    line-height: 1.8;
}

.read-more {
    display: inline-block;
    padding: 10px 20px;
    background: var(--bs-green);
    color: var(--bs-black);
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.read-more:hover {
    background: var(--bs-cyan);
    box-shadow: 0 0 20px var(--bs-green);
}

/* Footer */
.site-footer {
    background: var(--bs-black);
    border-top: 2px solid var(--bs-cyan);
    padding: 40px 0 20px;
    margin-top: 60px;
}

.site-info {
    text-align: center;
    color: var(--bs-gray);
    margin-top: 30px;
}

.powered-by {
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
    .main-navigation ul {
        flex-direction: column;
        gap: 10px;
    }
    
    .site-title a {
        font-size: 1.5rem;
    }
    
    article {
        padding: 20px;
    }
}
```

**assets/css/cyberpunk.css:**
```css
/* Cyberpunk Effects */

/* Glitch effect */
@keyframes glitch {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
}

.glitch {
    animation: glitch 0.3s infinite;
}

/* Neon pulse */
@keyframes neon-pulse {
    0%, 100% {
        text-shadow: 0 0 10px var(--bs-cyan),
                     0 0 20px var(--bs-cyan),
                     0 0 30px var(--bs-cyan);
    }
    50% {
        text-shadow: 0 0 5px var(--bs-cyan),
                     0 0 10px var(--bs-cyan),
                     0 0 15px var(--bs-cyan);
    }
}

.neon-pulse {
    animation: neon-pulse 2s ease-in-out infinite;
}

/* Matrix rain effect */
@keyframes matrix-rain {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}

.matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.matrix-char {
    position: absolute;
    color: var(--bs-green);
    font-family: monospace;
    font-size: 20px;
    animation: matrix-rain 10s linear infinite;
}

/* Scanline effect */
.scanlines {
    position: relative;
    overflow: hidden;
}

.scanlines::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
    );
    pointer-events: none;
    z-index: 1;
}

/* Hologram effect */
.hologram {
    position: relative;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(0, 255, 255, 0.1) 50%,
        transparent 70%
    );
    background-size: 200% 200%;
    animation: hologram-shift 3s ease infinite;
}

@keyframes hologram-shift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Terminal cursor */
.terminal-cursor {
    display: inline-block;
    width: 10px;
    height: 20px;
    background: var(--bs-cyan);
    animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}
```

**assets/js/effects.js:**
```javascript
// Black Sun Theme - Visual Effects

(function($) {
    'use strict';
    
    // Matrix rain effect
    function createMatrixRain() {
        const container = $('<div class="matrix-bg"></div>');
        $('body').append(container);
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const char = $('<span class="matrix-char"></span>');
            char.text(chars[Math.floor(Math.random() * chars.length)]);
            char.css({
                left: i * 20 + 'px',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's'
            });
            container.append(char);
        }
    }
    
    // Glitch effect on hover
    function initGlitchEffect() {
        $('.entry-title').hover(
            function() {
                $(this).addClass('glitch');
            },
            function() {
                $(this).removeClass('glitch');
            }
        );
    }
    
    // Neon pulse on page load
    function initNeonPulse() {
        $('.site-title').addClass('neon-pulse');
        
        setTimeout(function() {
            $('.site-title').removeClass('neon-pulse');
        }, 5000);
    }
    
    // Smooth scroll
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
        });
    }
    
    // Initialize on document ready
    $(document).ready(function() {
        createMatrixRain();
        initGlitchEffect();
        initNeonPulse();
        initSmoothScroll();
        
        // Add scanlines to body
        $('body').addClass('scanlines');
    });
    
})(jQuery);
```

### Phase 5: Testing & Deployment (Day 7)

#### Testing Checklist:
```
[ ] Theme activates without errors
[ ] All template files render correctly
[ ] Navigation menus work
[ ] Posts and pages display properly
[ ] Responsive design works on mobile
[ ] Cyberpunk effects render correctly
[ ] Performance is acceptable (< 3s load time)
[ ] Cross-browser compatibility (Chrome, Firefox, Edge)
[ ] Accessibility standards met
[ ] SEO-friendly markup
```

#### Deployment Steps:
```powershell
# 1. Activate theme in WordPress Studio
# Go to: Appearance > Themes > Activate "Black Sun"

# 2. Configure theme settings
# Go to: Appearance > Customize

# 3. Install Hikaru AI plugin
# Go to: Plugins > Add New > Upload Plugin

# 4. Configure API keys
# Go to: Settings > Hikaru AI

# 5. Create sample content
# Create pages: Home, About, Contact, AI Chat

# 6. Test all features
# Navigate through site, test forms, check mobile view
```

---

## 🔧 CONFIGURATION FILES

### wp-config.php additions:
```php
// Black Sun Theme Configuration
define('BLACK_SUN_GROK_API_KEY', 'your-grok-api-key-here');
define('BLACK_SUN_SPOTIFY_CLIENT_ID', 'your-spotify-client-id');
define('BLACK_SUN_SPOTIFY_CLIENT_SECRET', 'your-spotify-client-secret');
```

### .htaccess optimizations:
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📊 SUCCESS METRICS

### Performance Targets:
- Page load time: < 3 seconds
- Time to Interactive: < 5 seconds
- Lighthouse score: > 90
- Mobile-friendly: Yes
- SEO score: > 85

### Feature Completeness:
- [ ] Theme fully functional
- [ ] All templates working
- [ ] Cyberpunk effects active
- [ ] Responsive design complete
- [ ] Plugin integrated
- [ ] AI features working
- [ ] Spotify integration active

---

## 🚀 NEXT STEPS

### Immediate (This Week):
1. Set up Node.js environment
2. Install WordPress Studio
3. Create local WordPress site
4. Begin theme development

### Short-term (This Month):
1. Complete theme development
2. Build Hikaru AI plugin
3. Test all features
4. Create documentation

### Long-term (3-6 Months):
1. Submit theme to WordPress.org
2. Create premium version
3. Build theme marketplace
4. Expand AI features

---

## 📚 RESOURCES NEEDED

### Software:
- [ ] Node.js (v18+)
- [ ] WordPress Studio
- [ ] VS Code with extensions
- [ ] Git for version control

### API Keys:
- [ ] Grok API key (xAI)
- [ ] Spotify Client ID
- [ ] Spotify Client Secret

### Assets:
- [ ] Logo (SVG format)
- [ ] Theme screenshot (1200x900)
- [ ] Icon set (16x16, 48x48, 128x128)
- [ ] Background images

---

## 💡 RECOMMENDATIONS

1. **Start Simple**: Build basic theme first, add effects later
2. **Test Early**: Test on real WordPress Studio installation
3. **Document Everything**: Keep detailed notes for future reference
4. **Version Control**: Use Git from the start
5. **Performance First**: Optimize before adding fancy effects
6. **Mobile-First**: Design for mobile, enhance for desktop
7. **Accessibility**: Follow WCAG 2.1 guidelines
8. **Security**: Sanitize all inputs, escape all outputs

---

## 🎯 CONCLUSION

This integration plan provides a comprehensive roadmap for converting the Black Sun theme ecosystem into a WordPress-based solution. The cyberpunk aesthetic will translate well to WordPress, and the modular approach allows for incremental development and testing.

**Estimated Total Time:** 7-10 days
**Difficulty Level:** Intermediate to Advanced
**Success Probability:** High (with proper execution)

---

**Next Action:** Set up development environment and begin Phase 1.

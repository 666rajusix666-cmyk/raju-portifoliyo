# Design Guidelines for Raju Ahmed's Portfolio Website

## Design Approach
**Reference-Based Approach** - Inspired by Brittany Chiang's portfolio design with modern dark theme aesthetics. This approach is justified because portfolio websites are experience-focused, need visual differentiation in a competitive market, and the user specifically requested this reference.

## Core Design Elements

### Color Palette
**Dark Theme Primary:**
- Background: 15 25% 8% (very dark navy)
- Surface: 15 20% 12% (slightly lighter navy)
- Text Primary: 200 15% 95% (off-white)
- Text Secondary: 200 10% 70% (muted gray)

**Accent Colors:**
- Primary Accent: 180 100% 60% (cyan blue for links and highlights)
- Success/Skills: 120 60% 50% (green for skill bars)
- Subtle Glow: 180 100% 40% (deeper cyan for mouse glow effect)

**Interactive States:**
- Hover: 180 100% 70% (brighter cyan)
- Active: 180 100% 50% (medium cyan)

### Typography
- **Primary Font:** Inter or similar modern sans-serif via Google Fonts
- **Headings:** 
  - H1: 3xl-4xl, font-bold (name/title)
  - H2: 2xl-3xl, font-semibold (section headers)
  - H3: xl-2xl, font-medium (subsections)
- **Body Text:** base-lg, font-normal
- **Code/Technical:** Fira Code or JetBrains Mono for skill names

### Layout System
**Tailwind Spacing Units:** Consistently use 4, 8, 12, 16, and 24 units
- Small gaps: p-4, m-4
- Medium spacing: p-8, gap-8
- Large sections: py-16, py-24
- Container max-width: max-w-6xl with responsive padding

### Component Library

**Navigation:**
- Fixed top navigation with subtle background blur
- Logo/name on left, navigation links on right
- Mobile hamburger menu with smooth slide transitions

**Hero Section:**
- Full viewport height with centered content
- Large typography for name and title
- Subtle animated gradient background
- Mouse-following glow effect implementation
- Call-to-action buttons with outline variant and blurred backgrounds

**Skills Display:**
- Interactive percentage bars with smooth fill animations
- Grid layout: 2-3 columns on desktop, 1 column mobile
- Skills categorized: Frontend, Backend, Tools/Other
- Hover effects reveal additional details

**Social Links:**
- Icon-based links in header and footer
- Hover animations with color transitions
- External link indicators

**About/Bio Section:**
- Two-column layout: text + image/visual element
- Professional but approachable tone
- Key achievements highlighted

### Interactive Elements

**Mouse Glow Effect:**
- Subtle circular gradient that follows cursor movement
- Applied to hero section and key interactive areas
- Smooth lag for natural movement feel
- Reduced opacity on mobile/touch devices

**Animations:**
- Minimal, purposeful animations only
- Scroll-triggered fade-ins for sections
- Smooth transitions for navigation states
- Skill bar fill animations on viewport entry

### Layout Structure
1. **Hero Section** - Full viewport with name, title, and glow effect
2. **About Section** - Professional bio and key highlights
3. **Skills Section** - Technical skills with percentage visualizations
4. **Contact Section** - Social links and contact methods

### Images
**No large hero image required** - The design relies on the interactive glow effect and typography for visual impact. Optional: Small professional headshot in about section (max 300px, rounded with subtle border).

### Responsive Behavior
- Mobile-first approach
- Collapsible navigation for mobile
- Skills grid adapts from 3 columns to 1
- Reduced glow effects on touch devices for performance
- Larger touch targets for mobile interactions

### Performance Considerations
- Optimized for Vercel deployment
- Minimal external dependencies
- Efficient glow effect implementation
- Lazy loading for non-critical elements

This design creates a professional, modern portfolio that balances visual appeal with technical credibility, perfect for impressing potential clients while showcasing development expertise.
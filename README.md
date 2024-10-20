# Stratopreter

Stratopreter is an innovative web application built for Syntax Error, designed to provide a rich, interactive user experience. It leverages the power of Three.js for 3D rendering, along with various UI/UX-enhancing libraries like Swiper, Slater, GSAP, and Finsweet.

## Tech Stack

### Frontend
- **Three.js**: Used for creating and rendering 3D models and scenes.
- **HTML & CSS**: Core technologies for structuring and styling the web application.
- **Swiper**: A modern touch slider used for creating interactive sliders with smooth animations.
- **Slater**: Provides elegant transitions and animations to enhance the overall visual aesthetics.
- **GSAP (GreenSock Animation Platform)**: Handles complex animations for UI elements, adding smooth transitions and interactivity.
- **Finsweet**: Used to create customizable sliders and dynamic elements in Webflow.

## Features
- **3D Interaction**: The app provides an immersive 3D experience using Three.js for rendering interactive models.
- **Swiper Integration**: Seamless swiping experience for different sections, especially for galleries and dynamic content presentation.
- **Advanced Animations**: Powered by GSAP for smooth and performant transitions across various elements.
- **Finsweet Components**: Customizable CMS sliders for dynamically generated content, providing a rich user interface with draggable and loopable slides.

## Installation

To set up the project locally, follow these steps:

### Prerequisites:
- Node.js
- npm or yarn package manager

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stratopreter.git
   cd stratopreter
   ```

2. Install Dependencies:
```bash
  npm install
```

3. Start the developement server:
```bash
  npm run dev
```

4. Build the project:
```bash
  npm run build
```
# Usage
## Initializing Three.js
Three.js powers the 3D models and interaction, with the following basic setup:

```ruby
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add objects to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
```

## Swiper Integration
Here’s how we integrate the Swiper slider into the app:

```ruby
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
  <!-- Add Navigation -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>

<script>
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
</script>
```

## GSAP Animations
For animations, GSAP provides smooth and performant effects:

```ruby
gsap.to(".box", {duration: 2, x: 300});
```

## Finsweet CMS Slider Example
Finsweet allows the creation of powerful sliders with dynamic content. Here’s an example of how to use Finsweet for CMS sliders:

```ruby
<div class="fs-cmsslider-element" fs-cmsslider-element="slider">
  <div class="slide">Slide Content</div>
</div>
```

# Contributions
## Feel free to submit a pull request or open issues for any bugs you find. We welcome all contributions!

# License
This project is licensed under the MIT License.

```bash

Simply copy the above and paste it into your `README.md` file in your GitHub repository. It covers everything from the tech stack to code examples for the key components used in your project.
```

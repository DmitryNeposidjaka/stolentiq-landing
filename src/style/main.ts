import { createGlobalStyle } from 'styled-components';
import bg from 'assets/images/bg.jpg';

export const Main = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  max-height: 1000000px;
}

body {
  color: #fff;
  background: #fff;
  font: 16px/1.2 'Abel', Arial, sans-serif;
  min-width: 320px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

.items-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 15px;
  overflow-x: auto;
}
.items-wrap::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
@media (min-width: 768px) {
  .items-wrap {
    padding: 0 70px;
  }
}

.item {
  text-align: center;
  cursor: pointer;
  margin: 0 20px 0 0;
  width: 100%;
  max-width: 320px;
  flex-grow: 1;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .item {
    max-width: 280px;
  }
}
.item:hover .item__header h5 {
  opacity: 1;
}
.item:hover .item__image img {
  filter: grayscale(0);
}
.item:hover .item__text p {
  opacity: 1;
}
.item__header {
  height: 44px;
  margin-bottom: 18px;
}
@media (min-width: 992px) {
  .item__header {
    margin-bottom: 45px;
  }
}
.item__header h5 {
  font-weight: 400;
  margin: 0 auto;
  color: #f1f2f6;
  opacity: 0.5;
  max-width: 280px;
  transition: opacity 0.15s ease-in-out;
}
.item__image {
  margin-bottom: 40px;
}
.item__image img {
  max-width: 150px;
  display: block;
  margin: 0 auto;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
}
@media (min-width: 992px) {
  .item__image img {
    max-width: 200px;
  }
}
.item__text {
  padding: 0 32px;
}
.item__text p {
  font-size: 19px;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
}

.social-list li {
  margin: 8px 0;
  overflow: hidden;
}
@media (min-width: 768px) {
  .social-list li {
    margin: 22px 0;
  }
}
.social-list li:first-child {
  margin-top: 0;
}
.social-list li:last-child {
  margin-bottom: 0;
}
.social-list li a {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 48px;
}
.social-list li a:hover {
  opacity: 1;
}
.social-list li a:hover .social-name {
  opacity: 1;
}
.social-list li a:hover img {
  opacity: 1;
}
.social-list li a img {
  max-width: 36px;
  margin-right: 28px;
  opacity: 0.5;
}
@media (min-width: 768px) {
  .social-list li a img {
    max-width: 48px;
  }
}

a {
  text-decoration: none;
  color: #fff;
  transition: opacity 0.2s ease-in-out;
}
a:hover {
  opacity: 0.5;
}
a.link-to-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  text-transform: uppercase;
  z-index: 99999;
}
@media (min-width: 768px) {
  a.link-to-section {
    font-size: 24px;
  }
}
a.link-to-section img {
  width: 22px;
}
@media (min-width: 768px) {
  a.link-to-section img {
    width: 42px;
  }
}
a.link-to-section.up img {
  -webkit-animation: bounce-up 1.2s infinite
    cubic-bezier(0.445, 0.05, 0.55, 0.95);
  animation: bounce-up 1.2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
a.link-to-section.down img {
  -webkit-animation: bounce-down 1.2s infinite
    cubic-bezier(0.445, 0.05, 0.55, 0.95);
  animation: bounce-down 1.2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

h2 {
  font-weight: 400;
  font-size: 30px;
}

h3 {
  font-weight: 400;
  font-size: 24px;
}

h5 {
  font-weight: 400;
  font-size: 19px;
}

p {
  margin: 0 0 1em;
}

@-webkit-keyframes bounce-up {
  50% {
    transform: translateY(-12px);
  }
}

@keyframes bounce-up {
  50% {
    transform: translateY(-12px);
  }
}

@-webkit-keyframes bounce-down {
  50% {
    transform: translateY(12px);
  }
}

@keyframes bounce-down {
  50% {
    transform: translateY(12px);
  }
}

.full-height {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.full-height-inner {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 90px 0;
}
@media (min-width: 768px) {
  .full-height-inner {
    padding: 160px 0;
  }
}

section {
  position: relative;
}
section.contact-section .full-height-inner {
  padding-bottom: 90px;
}
section.contact-section .full-height-inner .contact-holder {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
section.contact-section .full-height-inner .contact-holder::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
section.contact-section .full-height-inner .contact-holder .contacts {
  max-width: 70%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section .link-to-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
section .link-to-section.down {
  bottom: 30px;
}
section .link-to-section.up {
  top: 30px;
}
section.contact-section {
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  section.contact-section {
    padding-left: 70px;
    padding-right: 70px;
  }
}
section.contact-section h2 {
  color: #f1f2f6;
  margin-bottom: 80px;
  max-width: 768px;
}
@media (max-width: 767px) {
  section.contact-section h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

.contacts p {
  margin-bottom: 0;
  font-size: 18px;
}
@media (min-width: 768px) {
  .contacts p {
    font-size: 30px;
  }
}

#header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-top: 10px;
}
@media (min-width: 768px) {
  #header {
    padding-top: 40px;
  }
}
#header .logo {
  display: block;
  max-width: 90px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  #header .logo {
    margin: 0 50px 0 auto;
    max-width: 130px;
  }
}

body {
  margin: 0;
  width: 100%;
  min-width: 320px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  overflow: hidden;
}

#wrapper {
  width: 100%;
  position: relative;
}

.container {
  max-width: 1642px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
}

.social-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

`;

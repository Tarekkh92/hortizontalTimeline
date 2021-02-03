import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swiper-Timeline';

  slideData = [
    {
      date: 'March 1999',
      content: 'Tamra Rent A Car is officially registered as a car rental agency on Jeju Island with its CEO being In-woong Park.'
    },
    
    {
      date: 'January 2002',
      content: 'Tamra has 120 vehicles registered and opens its first administration office in Seogwipo.'
    },
    {
      date: 'April 2003',
      content: 'Tamra\'s head office is moved to Jeju City and a sales office is opened in Gwangju.'
    },
  
    {
      date: 'October 2004',
      content: 'Park Yong-Kwon is inaugurated as Tamra Rent A Car’s second CEO'
    },
    {
      date: 'February 2010',
      content: 'Tamra\’s fleet increases to 350 vehicles.'
    },
    {
      date: 'June 2011',
      content: 'Tamra moves its head office to 5, Gonghang-ro, becoming the closest car rental agency to Jeju International Airport.'
    },
    {
      date: 'August 2013',
      content: 'Tamra’s fleet increases to 520 vehicles'

    },
    {
      date: 'December 2017',
      content: 'Tamra opens a Seoul office and its fleet reaches 800 – including electric cars. Tamra signs a deal with Nissan Korea along with CEO Takehiko Kikuchi to help expand the electric vehicle market and promote a zero-emissions car rental experience.'
      
    },
    // 
    {
      date: 'April 2018',
      content: 'Tamra begins operating Tamra Rent International by partnering with global tourism platforms. In addition, Tamra begins to integrate social media and builds an international website dedicated to international customers.'
      
    },
  ];
}

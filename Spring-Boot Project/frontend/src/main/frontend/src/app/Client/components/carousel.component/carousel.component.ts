/**
 * Created by romarionewmanlatty on 2/22/17.
 */
//Import Component form the angular core package


//Importt the Image interface
import {Image} from './image.interface';
import {Component} from "@angular/core";

//Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  template: `
 <div class="carousel">

  <ul class="slides">

    <li *ngFor="let image of images">
      <h2>{{image.title}}</h2>
      <img src="{{image.url}}" alt="">
    </li>

   
  </ul>

</div>
  `,
  //Styles for the tag
  styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:500%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 30s infinite;
    -webkit-animation:carousel 30s infinite;
    animation:carousel 30s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 20%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
.carousel h2{
    margin-bottom: 0;
    font-size:1em;
    padding:1.5em 0.5em 1.5em 0.5em;
    position:absolute;
    right:0px;
    bottom:0px;
    left:0px;
    text-align:center;
    color:#fff;
    background-color:rgba(0,0,0,0.75);
    text-transform: uppercase;
}

@keyframes carousel{
    0%    { left:-5%; }
    11%   { left:-5%; }
    12.5% { left:-105%; }
    23.5% { left:-105%; }
    25%   { left:-205%; }
    36%   { left:-205%; }
    37.5% { left:-305%; }
    48.5% { left:-305%; }
    50%   { left:-405%; }
    61%   { left:-405%; }
    62.5% { left:-305%; }
    73.5% { left:-305%; }
    75%   { left:-205%; }
    86%   { left:-205%; }
    87.5% { left:-105%; }
    98.5% { left:-105%; }
    100%  { left:-5%; }
}
  `],
})
//Carousel Component itself
export class CSSCarouselComponent {
  //images data to be bound to the template
  public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "Professionalism", "url": "http://dreamsmortgage.com/wp-content/uploads/2016/08/business-building-pom-business-commercial-security-systems.jpg" },
  { "title": "Excellence", "url": "https://www.honeywellprocess.com/library/marketing/marketing-images/press_release/PR3312015/PR31032015-CSL_Duluth_GA-57.jpg" },
  { "title": "Entrepreneurship", "url": "http://davidandersonassociates.com/wp-content/uploads/2014/06/481412513.jpg" },
  { "title": "Team work", "url": "http://www.braintrustceo.com/images/home-img.jpg" },
  { "title": "Innovative", "url": "http://www.hindscc.edu/Assets/images/careertech-hinds-computer-programmer-code.jpg" }
];

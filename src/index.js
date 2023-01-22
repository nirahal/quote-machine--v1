import React, {Component} from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

const quotes = [
  '"The past cannot be changed. The future is yet in your power." – Unknown',
  '"Either I will find a way, or I will make one." – Philip Sydney',
  '"Failure will never overtake me if my determination to succeed is strong enough." – Og Mandino',
  '"Don’t watch the clock; do what it does. Keep going." – Sam Levenson',
  '"Aim for the moon. If you miss, you may hit a star." – W. Clement Stone.',
  '"It always seems impossible until its done." – Amelia Earhart',
  '"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious." – Stephen Hawking',
  '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy." – Norman Vincent Peale',
  '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character." – Unknown',
  '"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You." – Steve Jobs',
  '"We May Encounter Many Defeats But We Must Not Be Defeated." – Maya Angelou', 
  '"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals." – Michelle Obama', 
  '"Today’s Accomplishments Were Yesterday’s Impossibilities." – Robert H. Schuller', 
  '"The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle." – Steve Jobs',
  '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover." – Mark Twain',
  '"Nothing is impossible, the word itself says "I’m possible!" – Audrey Hepburn', 
  '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." – Thomas A. Edison',
  '"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear." – Nelson Mandela',
  '"If you don’t like something, change it. If you can’t change it, change your attitude." – Maya Angelou',
  '"Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be." – Zig Ziglar'
];



class Quote extends Component{
    constructor(props){
        super(props)
        this.state ={
            quote : this.quoteSplice(quotes[0])[0],
            author : this.quoteSplice(quotes[0])[1],
            color: "black"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    render(){
        
        return(
            <div className={"d-flex align-items-center justify-content-center height "+ this.state.color+"Bg"} >
            <div className="p-5 m-2 bg-white text-white shadow rounded width">
                <h3 className={this.state.color}>
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                {this.state.quote}</h3> 
                <p className={"author "+this.state.color}>{this.state.author}</p>
                <div className="row">
                    <div className="col-8">
                        <a className={"size p-2 logo "+this.state.color} href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></a>
                        <a className={"size p-2 logo "+this.state.color}  href="https://twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>  
                    </div>
                    <div className="col-4">
                     <button onClick ={this.handleClick} className= {"btn btn-default "+this.state.color+"Bg"}>New quote</button>
                    </div>
                </div>
            </div>
            </div>
        );
        
    }
    handleClick(){
        let index = [Math.floor(Math.random()*quotes.length)];
        let cleanQuote = this.quoteSplice(quotes[index])[0];
        let cleanAuthor = this.quoteSplice(quotes[index])[1];
        let colorArr =["pink", "black", "grey", "blue", "green", "purple", "yellow", "red"];
        
    
        this.setState({
            quote :cleanQuote,
            author : cleanAuthor,
            color: colorArr[(Math.floor(Math.random()*colorArr.length))]
        })
    }
    quoteSplice(str){
        let arr = str.split("–")
        let phrase = arr[0].replace(/['"]+/g, '')
        let author = arr[1]
        return [phrase, author];    
    }
};

ReactDOM.render(<Quote/>, document.getElementById("root"));
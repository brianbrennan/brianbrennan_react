import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page page container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <h2>About</h2>

                        <div className="content">

                            <p>
                                My name is Brian Brennan, and I’m a Web Developer and Designer. With over 2 years experience working on professional grade products, my goal is to make beautiful, functional websites for you. I specialize in front end development, and can make the site <span>you</span> want, at an affordable rate. While I have worked on large scale projects for millions of users, I have also created sites for small local businesses that wanted to make a great digital experience. No job is too large or small.
                            </p>

                            <p>
                                My mission is as follows
                            </p>


                            <blockquote>I build practical online solutions that are exceptional in both form and function.</blockquote>

                            <h3>About You</h3>
                            <p>
                                If you are a business owner, artist, organization, photographer, or visionary of any kind, then I hope to build a great website for you. From the moment I first speak with clients, my prerogative becomes creating a website that solves all their wants and needs. I can build a digital experience for you that will amaze your users, in addition to developing any functionality you or your business require. My mission is to have my clients get everything they could ever hope for in a site, all the while ensuring that their expectations are met in a timely and budget-friendly manner. Your goals are what I have in mind.You are the expert of your craft. You are trying to meet new users and expand your audience.  I want to help.
                            </p>
                            <h3>About Me</h3>
                            <p>
                                I’m a 23 year old, recently out-of-school developer with a B.A. in Graphic Design and English. I’ve been working on websites since I was 17, with 2 years of professional development experience under my belt. While I dabble in many aspects of websites, my expertise is front end development. HTML, CSS, and JavaScript are my speciality. My education in Graphic Design plays a huge role in my capability to design for the web. I am largely self taught when it comes to programming. Web development is my passion, and every language, framework, and pattern I’ve learned has been through sheer determination. My education is design compliments my development experience, and I love the challenge of building a digital experience from sketches to launch.
                            </p>

                            <p>If you want to know about my skills in depth, feel free to check out my <a href="/#/skills">skills page.</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = AboutPage;
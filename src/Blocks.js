export const blocks = [
  {
    id: "text",
    Category: "Text",
    SubCategory: [
      {
        id: "theme-text",
        label: "Themed Text",
        modal: [
          {
            id: "theme_1",
            label: "<h1>Add Heading<h1>",
            content: "<h1>Add Heading<h1>",
          },
          {
            id: "theme_2",
            label: "<h2 >Add Heading<h2>",
            content: "<h2>Add Heading<h2>",
          },
          {
            id: "theme_3",
            label: "<h3>Add Heading<h3>",
            content: "<h3>Add Heading<h3>",
          },
          {
            id: "theme_4",
            label: "<h4>Add Heading<h4>",
            content: "<h4>Add Heading<h4>",
          },
          {
            id: "theme_5",
            label: "<h5>Add Heading<h5>",
            content: "<h5>Add Heading<h5>",
          },
          {
            id: "theme_6",
            label: "<h6>Add Heading<h6>",
            content: "<h6>Add Heading<h6>",
          },
        ],
      },
      {
        id: "titles",
        label: "Titles",
        modal: [
          {
            id: "titles_1",
            label: `
            <span style="font-family: Revalia; font-size: 20px">Bungee Font</span>
            `,
            content: `
            <span style="font-family: Revalia; font-size: 20px">Bungee Font</span>
            `,
          },
          {
            id: "titles_2",
            label: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
            .Indie {
              font-family: Indie Flower;
              font-size: 20px;
            }
            </style>
            <p class="Indie">Indie Flower Font<p>
            `,
            content: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
            .Indie {
              font-family: Indie Flower;
              font-size: 20px;
            }
            </style>
            <p class="Indie">Indie Flower Font<p>
            `,
          },
          {
            id: "titles_3",
            label: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Passion+One);
            .Passion {
              font-family: Passion One;
              font-size: 20px;
            }
            </style>
            <p class="Passion">Passion One Font<p>
            `,
            content: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Passion+One);
            .Passion {
              font-family: Passion One;
              font-size: 20px;
            }
            </style>
            <p class="Passion">Passion One Font<p>
            `,
          },
          {
            id: "titles_4",
            label: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Lobster);
            .Lobster {
              font-family: Lobster;
              font-size: 20px;
            }
            </style>
            <p class="Lobster">Lobster Font<p>
            `,
            content: `
            <style>
            @import url(https://fonts.googleapis.com/css?family=Lobster);
            .Lobster {
              font-family: "Lobster";
              font-size: 20px;
            }
            </style>
            <p class="Lobster">Lobster Font<p>
            `,
          },
        ],
      },
      {
        id: "paragraph-text",
        label: "Paragraph Text",
        modal: [
          {
            id: "para_1",
            label: `<span
            style="font-size: 14px; font-family: 'Courier New', Courier, monospace"
            >Courier New</span
          >`,
            content: `<span
            style="font-size: 14px; font-family: 'Courier New', Courier, monospace"
            >Courier New</span
          >`,
          },
        ],
      },
    ],
  },
  {
    id: "template",
    Category: "Template",
    SubCategory: [
      {
        id: "template__1",
        label: "Template Model One",
        modal: [
          {
            id: "Template-One",
            label: `<div><img style="width: 100%; height: 100%;" src="https://images.template.net/546/Free-Download.jpg" alt="TemplateOne"></div>`,
            content: `<style>
                .freedownloads-popup-sec { background-color: #8e8e41; font-family: 'Roboto Slab', serif; width: 700px;  padding: 45px 65px 65px 65px;  -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; box-sizing: border-box; position: relative; -webkit-box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);-moz-box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52); }
                .freedownloads-popup-sec h2 { margin: 0 0 25px 0; padding: 0px; line-height: 88px; font-family: 'Roboto Slab', serif; font-size: 82px; color: #ffff00; font-weight: normal; }
                .freedownloads-popup-sec h4 { margin: 0 0 30px 0; padding: 0px; font-family: 'Roboto Slab', serif; font-size: 20px; color: #fff; font-weight: normal; }
                .freedownloads-popup-sec h6 { font-family: 'Roboto Slab', serif; font-size: 14px; letter-spacing: 0.4px; margin: 0px; padding: 0px; color: rgba(255, 255, 255, 0.6); font-weight: normal; }
                .freedownloads-email-sec { margin: 0 0 15px 0; padding: 0px; width: 100%; float: left; position: relative; -webkit-box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.27); box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.27); }
                .freedownloads-popup-sec .freedownloadsemail-input { width: 100%; background: #000; border: 0px; height: 64px; float: left; padding: 16px 170px 16px 16px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; box-sizing: border-box; color: #fff; }
                .freedownloads-popup-sec .freedownloadsemail-input:focus, .freedownloads-popup-sec .freedownloads-cls-btn, .freedownloads-popup-sec .freedownloads-input-btn { outline: none; }
                .freedownloads-popup-sec .freedownloads-input-btn { width: 160px; background: #ffff15; height: 64px; cursor: pointer; margin: 0px; padding: 17px 16px; float: right; border: 0px; font-family: 'Roboto Slab', serif; font-size: 22px; text-transform: uppercase; color: #000000; box-sizing: border-box; font-weight: bold; -webkit-transition: all 0.4s; transition: all 0.4s; position: absolute; top: 0px; right: 0px; }
                .freedownloads-popup-sec .freedownloads-input-btn:hover { background: #dbdb0f; }
                .freedownloads-popup-sec .freedownloads-cls-btn { font-size: 14px; line-height: 18px; width: 28px; height: 28px; -webkit-border-radius: 50%; border-radius: 50%; background: #FFF; position: absolute; right: -14px; top: -14px; border: 0px; -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.27); box-shadow: 0 0 2px 0 rgba(0,0,0,0.27); cursor: pointer; }
                .freedownloads-popup-sec .freedownloads-cls-btn:hover {color: #000; background: #ffff15;}
                .popup-graybox {position: fixed;width: 100%;top: 0;left: 0;height: 100vh;z-index: 99999;align-items: center;display: flex;box-sizing: border-box;overflow: auto;}
                 @media only screen and (max-width:815px) {
                .freedownloads-popup-sec { width: 90%; padding: 40px 50px 50px 50px; }
                .freedownloads-popup-sec h2 { line-height: 82px; font-size: 75px; }
                }
                @media only screen and (max-width:675px) {
                }
                @media only screen and (max-width:480px) {
                .freedownloads-popup-sec { width: 90%; padding: 20px 30px 30px 30px; }
                .freedownloads-popup-sec h2 { line-height: 58px; font-size: 50px; }
                .freedownloads-popup-sec h4 { font-size: 18px; }
                .freedownloads-popup-sec .freedownloads-input-btn { width: 100%; position: inherit; margin-top: 20px; height: 50px; font-size: 20px; padding: 10px; }
                .freedownloads-popup-sec .freedownloadsemail-input { padding: 15px; height: 50px; }
                }
                @media only screen and (max-width:375px) {
                .freedownloads-popup-sec h2 { line-height: 35px; font-size: 30px; }
                .freedownloads-popup-sec h4 {font-size: 13px;letter-spacing: 0.5px;margin: 0 0 20px 0;}
                .freedownloads-popup-sec h4 br { display: none; }
                .freedownloads-popup-sec h2 {margin: 0 0 15px 0;}
                .freedownloads-popup-sec .freedownloads-input-btn {width: 100%;margin-top: 10px;height: 45px;font-size: 14px;}
                .freedownloads-popup-sec .freedownloadsemail-input {height: 45px;}
                }
                </style>
                </head>
                    <div id="Template-One" class="freedownloads-popup-sec" style="background: #8e8e41 url(images/freedownloads.jpg) no-repeat center center;background-size: cover;" >
                    <h2 data-edit="text" >Free Design Downloads</h2>
                    <h4 data-edit="text" >Unlimited Free Downloads Of Brochures<br>
                        Flyers, Postcards and much more...</h4>
                    <div class="freedownloads-email-sec">
                        <input type="email" class="freedownloadsemail-input" data-edit="placeholder"   placeholder="Enter your email id">
                        <button class="freedownloads-input-btn" type="submit">signup</button>
                    </div>
                    <h6 data-edit="text" >* Terms and Conditions Apply</h6>
                    <button class="freedownloads-cls-btn close-btn">X</button>
                    </div>
                `,
            category: "Templates",
            attributes: {
              title: "Template One",
            },
          },
          {
            id: "Template-Two",
            label: `<div><img style="width: 100%; height: 100%;" src="https://images.template.net/629/freetrial-popup-2.jpg" alt="TemplateTwo"></div>`,
            content: `<style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;
            transition: ease 0.2s;
            font-family: Open Sans;
            text-decoration: none;
            font-size: 14px;
          }
      
          .template {
            width: 100%;
            max-width: 450px;
        }
          
      
          .container {
            background: #f8faff;
            color: #4b537c;
            width: 100%;
            max-width: 450px;
            padding: 40px;
            border-radius: 15px;
            box-shadow: #dee8fe 0 10px 20px 5px;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
      
          .heading {
            font-size: 18px;
          }
      
          .para {
            font-weight: 600;
          }
      
          .feedback-level {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .level {
            background: white;
            padding: 13px;
            border-radius: 7px;
            border: solid 0.5px #e0e9fe;
            cursor: pointer;
          }
          .level:hover {
            box-shadow: #fe73a5 0 2px 5px;
          }
          .level:hover i {
            color: #fe73a5;
          }
          .level i {
            font-size: 40px;
          }
      
          .feedback-msg textarea {
            margin-top: 5px;
            border: solid 2px #e0e9fe;
            padding: 13px;
            border-radius: 7px;
            outline: none;
            font-size: 14px;
            color: #4b537c;
            font-weight: 500;
            letter-spacing: 1px;
            width: 100%;
            height: 80px;
            resize: none;
          }
      
          .agreement .checkbox {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-bottom: 5px;
          }
          .agreement input {
            accent-color: #ff71a4;
          }
          .agreement a {
            color: #ff71a4;
            font-size: 12px;
            font-weight: 600;
          }
          .agreement label {
            font-size: 12px;
            font-weight: 600;
          }
      
          .buttons {
            display: flex;
            gap: 10px;
            justify-content: end;
          }
          .buttons a {
            background: white;
            color: #4b537c;
            width: 80px;
            padding: 10px;
            text-align: center;
            border-radius: 4px;
          }
          .buttons a:hover {
            opacity: 0.9;
          }
          .buttons a:nth-child(1) {
            background: #fe71a4;
            color: #f8faff;
          }
          </style>
          <div id="Template-One" class="template">
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />

      <form class="container">
        <h1 class="heading">Give feedback</h1>
        <p class="para">
          What do you think of the issue search experience within the project?
        </p>

        <div class="feedback-level">
          <div class="level">
            <i class="lar la-sad-tear"></i>
          </div>
          <div class="level">
            <i class="las la-frown"></i>
          </div>
          <div class="level">
            <i class="lar la-meh"></i>
          </div>
          <div class="level">
            <i class="lar la-smile"></i>
          </div>
          <div class="level">
            <i class="lar la-grin"></i>
          </div>
        </div>

        <div class="feedback-msg">
          <p class="para">What are the main reasons for your rating?</p>
          <textarea name="" id=""></textarea>
        </div>

        <div class="agreement">
          <div class="checkbox">
            <input type="checkbox" name="" id="" />
            <label for=""
              >I may be contacted about this feedback
              <a href="#">Privacy Policy</a>.</label
            >
          </div>
          <div class="checkbox">
            <input type="checkbox" name="" id="" />
            <label for=""
              >I'd like to help improve by joining the
              <a href="#">Reasearch Group</a>.</label
            >
          </div>
        </div>

        <div class="buttons">
          <a href="javascript:alert('Thanks for submiting your feedback')"
            >Submit</a
          >
          <a href="You just cancelled your to submit the feedback">Cancel</a>
        </div>
      </form>
    </div>`,
            category: "Templates",
            attributes: {
              title: "Template Two",
            },
          },
        ],
      },
    ],
  },
];

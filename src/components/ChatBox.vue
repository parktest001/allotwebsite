<template>
  <div class="chat-box">
    <div class="title-bot">
      Chat us
    </div>
    <div class="chat-box-list-container" ref="chatbox"  id="scroll-div">
      <ul class="chat-box-list">
        <li
          v-for="(message, idx) in messages"
          :key="idx"
          :class="message.author"
        >
          <p>
            <span v-if="message.isReceived">
              <span><div class="received-message-bot">{{message.message}}</div></span>
              <span v-if="message.author === 'client-received'"><div class="received-main">
                <div class="received-main-sub" v-for="(msg,key) in message.list" :key="key" @click="() => selectedMessage(msg)">{{msg}}</div>
              </div>
            </span>

            </span>
            <span v-else>
              <span v-if="message.author === 'client-sent'">{{ message.text }}</span>
            </span>
          </p>
        </li>
        <li v-if="apiCalled">
          <div class="thecube">
            <div class="cube c1"></div>
            <div class="cube c2"></div>
            <div class="cube c4"></div>
            <div class="cube c3"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  data: () => ({
    message: '',
    messages: [],
    li : [],
    apiCalled : false,
  }),
 mounted()
  {
    console.log("MOUNTED COMPONENT")
    this.messages.push({
        text: "hi",
        author: 'client-sent',
        isReceived : false,
        list : []
      })
      var that = this
      this.apiCalled = true
      setTimeout(function () {
      that.getQueries('http://149.129.129.250:8080/ChannelCreation/rest/chatbot/ask','hi')
          }, 2000);
  },
  methods: {
    scrollBottom()
    {
      var objDiv = document.getElementById("scroll-div");
      objDiv.scrollTop = objDiv.clientHeight;
      console.log(objDiv.scrollTop)
      console.log(objDiv.scrollHeight)

    },
    selectedMessage(msg)
    {
      this.message = msg
      this.sendMessage()
    },
    sendMessage() {
      const message = this.message
      const lastMessage = this.messages[this.messages.length - 1].message
      this.messages.pop()
      this.messages.push({
        text: '',
        author: 'client-received',
        isReceived : true,
        list : [],
        message : lastMessage,
      })
      this.messages.push({
        text: message,
        author: 'client-sent',
        isReceived : false,
        list : []
      })
      this.message = ''
      var that = this
      this.scrollBottom()
      this.apiCalled = true
      setTimeout(function () {
              that.getQueries('http://149.129.129.250:8080/ChannelCreation/rest/chatbot/ask',message)
    }, 2000);
    },
    getQueries(url,ques) {
      window.main = this;
      const data = {question : ques} 
      console.log("MOUNTED COMPONENT POST")
      fetch(url, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
		  })
			.then(res => res.json())
			.then(json => {
        console.log(json)
        json.answers.map(function(value, key) {
          window.main.li.push(value);
        });
        this.messages.push({
        text: '',
        author: 'client-received',
        isReceived : true,
        list : this.li,
        message : json.message,
      })
        this.apiCalled = false
        console.log(this.li)
        this.li = []
        this.scrollBottom()
			});
    }
  }
}
</script>

<style scoped lang="scss">
.title-bot
{
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14pt;
  background: rgb(219, 219, 219);
}
.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
.chat-box-list-container {
  height: 500px;
  overflow: scroll;
}
.received-message-bot
{
  float :left;
  height: 40px;
  background: #99cc00;
  color : #ffffff;
  border-radius: 20px;
  min-width: 40px;
  max-width: 200px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.chat-box-list {
  padding-left: 10px;
  padding-right: 10px;
  span {
    padding: 8px;
    color: white;
    border-radius: 4px;
  }
  .server {
    span {
      background: #99cc00;
    }
    p {
      float: right;
    }
  }
  .client-sent {
    span {
      display: block;
      min-width: 50px;
      border-radius: 20px;
      max-width: 400px;
      background: #0070C8;
      padding-left: 20px;
      padding-right: 20px;
    }
    p {
      float: right;
    }
  }
  .client-received {
    float: right;
    p {
      float: right;
    }
  }
}
.received-main
{
  width:400px;
  float:right;
}
.received-main-sub
{
      float: right;
      display: flex;
      min-width: 100px;
      max-width: 400px;
      margin-left: 20px;
      margin-bottom: 10px;
      padding-left: 20px;
      padding-right: 10px;
      align-items: center;
      justify-content: center;
      height: 40px;
      color : #0070C8;
      background-color: #ffffff;
      border-radius: 20px;
      border: 1px solid #0070C8;
      cursor: pointer;
}
.received-main-sub:hover
{
  height: 38px;
  background-color: #0070C8;
  color: #ffffff;
}
.chat-box {
  background: #f9f9ff;
  position: absolute;
  border: 1px solid #999;
  width: 30vw;
  height: 540px;
  align-items: bottom;
  border-radius: 4px;
  bottom: 10px;
  right: 10px;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;
  
  input {
    line-height: 3;
    width: 100%;
    border: 1px solid #999;
    border-left: none;
    border-bottom: none;
    border-right: none;
    border-bottom-left-radius: 4px;
    padding-left: 15px;
  }
  button {
    width: 145px;
    color: white;
    background: #0070C8;
    border-color: #999;
    border-bottom: none;
    border-right:none;
    border-bottom-right-radius: 3px;
  }
}
.message
{
  background: #ffffff;
}

$prim: #99cc00;

body{
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}

h1{
  font-size:40px;
  text-align:center;
}

a{
  position:relative;
  display:block;
  text-align:center;
  color:#000;
  text-decoration:none;
  margin-top:15px;
}

.thecube {
    width: 35px;
    height: 35px;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);

    .cube {
        position: relative;
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    }

    .cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

    .cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $prim;
        -webkit-animation: foldthecube 2.4s infinite linear both;
        animation: foldthecube 2.4s infinite linear both;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
    }

    .c2 {
        -webkit-transform: scale(1.1) rotateZ(90deg);
        transform: scale(1.1) rotateZ(90deg);
    }

    .c3 {
        -webkit-transform: scale(1.1) rotateZ(180deg);
        transform: scale(1.1) rotateZ(180deg);
    }

    .c4 {
        -webkit-transform: scale(1.1) rotateZ(270deg);
        transform: scale(1.1) rotateZ(270deg);
    }

    .c2:before {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }

    .c3:before {
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }

    .c4:before {
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
    }

    @keyframes foldthecube {
        0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        }

        25%,
        75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
        }

        90%,
        100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
        }
    }
}

</style>
<template>
 <div v-bind:class="{ bodydark: themedark, bodylight: !themedark }">
 <v-app flat class="main" v-bind:class="{ bodydark: themedark, bodylight: !themedark }">
  <v-toolbar flat max-height="60px" v-bind:class="{ bodydark: themedark, bodylight: !themedark }">
      <h2>devfinder</h2>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
    <v-btn text
        @click="toggleTheme()"
        v-bind="attrs"
        v-on="on"
        dark
        depressed
        capsule
        class="text--primary" bold>
      <span v-show="!themedark">Dark</span>
      <v-icon class= "ml-3 right small" v-show="!themedark">dark_mode</v-icon>
      <span v-show="themedark">Light</span>
      <v-icon v-show="themedark" class= "ml-3 right small">light_mode</v-icon>
    </v-btn>
    </template>
     <span>Change Theme</span>
   </v-tooltip>
  </v-toolbar>
  <v-container flat max-height="90px" class="container" v-bind:class="{ contentdark: themedark, contentlight: !themedark }">
    <v-layout row align-center justify-space-around class="d-flex flex-nowrap white--text py-3 px-6">
      <v-flex left>
      <v-icon size='30' class="indigo--text mr-0">mdi-magnify</v-icon>
      </v-flex>
      <v-flex class="mr-md-16">
        <v-text-field
            v-model="username"
            height="2px"
            label="Github Username"
            class="input-field mx-3 white--text"
            placeholder="Enter the username to search"
            outlined
            required
          ></v-text-field>
      </v-flex>
      <v-flex right>
    <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
    <v-btn
        dark
        v-bind="attrs"
        v-on="on"
        class= "ml-6"
        elevation="2"
        height="53px"
        color="#0079ff"
        capsule
        right>
      <span @click="searchUsers()">Search</span>
    </v-btn>
   </template>
      <span>Search user</span>
   </v-tooltip>
     </v-flex>
    </v-layout>
  </v-container>
  <!-- The main body content -->
  <v-container color="secondary" v-bind:class="{ contentdark: themedark, contentlight: !themedark }" class="text--primary">
  <v-main class="container my-10" color="primary" height="500px">
    <v-layout flex-md-row flex-sm-column wrap>
      <v-flex md4>
        <v-avatar
        size="184"
        class="my-3"
        >
      <img
        :src="`${userObj.avatar_url}`"
        alt="Invalid"
      >
    </v-avatar>
      </v-flex>
      <v-flex md8 column>
   <v-content>
        <v-layout row wrap justify-space-between align-left class="my-3">
          <v-flex> {{ userObj.name? userObj.name: "User does not exist" }} </v-flex>
          <v-flex><i> Joined {{ new Date(userObj.created_at).getDay() +1 }} - {{ new Intl.DateTimeFormat('en-US', options).format(new Date(userObj.created_at).getMonth()) }} - {{ new Date(userObj.created_at).getFullYear() }}</i></v-flex>
        </v-layout>
        <span class="nested indigo--text">@ {{ userObj.login }}</span>
        <div class="nested"> {{ userObj.bio? userObj.bio: "Not available" }}</div>
      </v-content>
        <v-layout color="primary" class="red--text my-5 py-5  px-8" v-bind:class="{ detailsdark: themedark, detailslight: !themedark }" row>
          <v-flex>
            <v-layout column align-left>
              <v-flex class="text--secondary"> Repos </v-flex>
              <v-flex class="text--primary"> {{ userObj.public_repos? userObj.public_repos: "Nil" }} </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout column align-center>
              <v-flex class="text--secondary"> Followers </v-flex>
              <v-flex class="text--primary"> {{ userObj.followers? userObj.followers: "Nil" }} </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout column align-center>
              <v-flex class="text--secondary">Following</v-flex>
              <v-flex class="text--primary"> {{ userObj.following? userObj.following: "Nil" }} </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <!-- Display social media handles -->
    <v-layout class="my-5 mx-xs-16 flex-column flex-sm-row">
      <v-flex>
        <v-layout column>
          <v-flex>
            <v-icon class= "text--primary mr-2 my-2"> location_on </v-icon>
            <span> {{ userObj.location? userObj.location: "Nil" }}</span>
          </v-flex>
          <v-flex>
            <v-icon class= "text--primary mr-2 my-2">mdi-twitter</v-icon>
            <span> {{ userObj.twitter_username? userObj.twitter_username: "Not available" }} </span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout column>
          <v-flex>
            <v-icon class= "text--primary mr-2 my-2"> link </v-icon>
            <span> {{ userObj.blog? userObj.blog: "Not available" }} </span>
          </v-flex>
          <v-flex>
            <v-icon class= "text--primary mr-2 my-2"> business </v-icon>
            <span> {{ userObj.company? userObj.company: "Not available" }} </span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
      </v-flex>
    </v-layout>
  </v-main>
  </v-container>
 </v-app>
 </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    username: '',
    themedark: false,
    options: { month: 'short' },
    userObj: {
      login: 'username',
      id: 68131875,
      node_id: 'MDQ6VXNlcjY4MTMxODc1',
      avatar_url: 'https://avatars.githubusercontent.com/u/68131875?v=4',
      url: 'https://api.github.com/users/:username',
      type: 'User',
      site_admin: false,
      name: 'Name',
      company: '',
      blog: '',
      location: '',
      email: null,
      hireable: true,
      bio: 'Input a username to search for',
      twitter_username: '',
      public_repos: 'nil',
      public_gists: 0,
      followers: 'nil',
      following: 'nil',
      created_at: '1995-11-25T22:56:47Z',
      updated_at: '2022-01-13T11:21:29Z'
    }
  }),
  methods: {
    searchUsers () {
      if (this.username) {
        fetch(`https://api.github.com/users/${this.username}`, {
          method: 'GET'
        })
          .then(response => {
            return response.json()
          })
          .then(jsonData => {
            this.userObj = jsonData
          })
          .catch(error => {
            console.error('Error:', error)
          })
      }
    },
    toggleTheme () {
      if (this.themedark) {
        this.themedark = false
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      } else {
        this.themedark = true
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      }
    }
  }
}
</script>

<style scoped>
  .bodydark {
    background-color: #141c2f !important;
  }
  .bodylight {
    background-color: #f5f8ff !important;
  }
  .container {
    width: 90%;
  }
  .main {
    max-width: 70vw;
    margin: auto;
  }
  .input-field {
    width: 100%;
    height: 55px;
    color: #333;
  }
  .nested {
    margin-left: -2.2%;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .detailsdark{
    background-color: #141c2f;
    border-radius: 15px;
  }
  .detailslight{
    background-color: #f5f8ff;
    border-radius: 15px;
  }
  .contentdark {
    background-color: #1f2a48;
    margin-top: 15px;
    border-radius: 15px;
  }
  .contentlight {
    background-color: #fefefe;
    margin-top: 15px;
    border-radius: 15px;
  }
  @media screen and (max-width: 560px) {
    .main {
      max-width: 100vw;
    }
  .input-field {
    }
  }
</style>

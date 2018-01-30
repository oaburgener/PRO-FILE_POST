exports.seed = function(knex, Promise){

      return knex('articles').insert([
        {
          id: 1,
          user_id: 1,
          title: 'What Gives Me Hope',
          summary: "An article about Derek and Nick's journey to building their company PRO-FILE",
          body: "A little over two years ago I began graduate school at the University of San Francisco. I’m a big and firm believer in furthering education, however, when I graduated in December of 2016, the relationships built meant most. \n No other relationship meant more than the one Nick (co-founder) and I built. Nick being from Rio de Janeiro, and me (Derek, co-founder) being from California, was a friendship built on trust and values. The two of us became very close and shared the same humor — sorry to the professors we disturbed. \nOutside of class, when we weren’t working, we played golf. Both of us joined Presidio Golf Club in San Francisco where we had the player’s club membership — this required to play during twilight hours. We’d often talk about life, family, and sports. \nWhen observing our friendship from the outside, you’d think “how are these two friends?” Nick had a background working in banking for many years in Rio, while I had a background playing baseball and working in sports. \nWhat I admired most about Nick was his ability to drop stability (in banking) and move to the United States to pursue his dream of working in sports, which was no easy task being married. While sports served as a platform for our friendship, there were many things I admired more about Nick, which was his ability to connect with other people and gain a serious interest in them. Nick was the mentor of Cohort 42 at University of San Francisco, not due to his experience in the workforce, but due to his ability to listen and give constructive criticism. \nOn the golf course, lessons were no different, where I’d often push questions toward him, for me to gain valuable insight into what it takes to be successful. In my eyes, Nick is a success in the sport industry already, due to his ability to work hard and take on the challenge of United States sport industry. Being an immigrant is difficult, but to be one, fighting for opportunities in sports, which is an already limited industry, is an incredible challenge. Nick would drive back and forth from San Francisco to Sacramento to work in soccer, which would barely cover gas — he defines work ethic and passion. \nDue to this challenge, there was one specific day where Nick and I were complaining about the sport industry — lack of jobs, lack of pay, sports tax to work in the industry, etc. Quickly we felt selfish because how can there be an immense amount of opportunities to work in sports, when there are limited opportunities for athletes to extend their career if they are not professional? \nThis is where the light bulb kicked in for Nick and he bounced the idea of PRO-FILE off of me. Both of us come from a background of family entrepreneurs, luckily, we knew the mentorship and honesty would be there for us. Now it was time to write everything on paper. \nOur next project for grad school was focused on building out PRO-FILE, which included growth strategy, strategic planning, profitability model, research and development, and more. So here we are today, a year later, a registered company and after months worth of development, slowly pushing it out to the public. \nOh and I forgot to mention what we do… we are PRO-FILE Sports, Inc. focused on helping collegiate and un-drafted players create a shared community on our platform, share experiences through editorial and network with leagues domestically & internationally to continue playing in places they wouldn’t otherwise had known. \nTo give a quick example — we currently have friends playing in Australia, Sweden, and domestic leagues. Any athlete often doesn’t know about these opportunities without spending time researching and creating their own personal profile to share with these leagues, which includes stats, video, and information about him or her. It’s our time now to bridge the gap between these teams and athletes that are looking to play longer and looking to fulfill a dream of traveling. \nWe hope to create a community of athletes that bring sports to desolate areas, and hope to disrupt women’s and men’s athletics, particularly in sports that should have opportunities to play further beyond college. \nWhat gives me hope is an opportunity to help young people grow and for these people to know that the PRO-FILE family believes in them. \nWith love, \nDerek",
          image_url: 'https://images.unsplash.com/photo-1463253897230-4e281bf226c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b72fcba78c273e8d51a8522946f3b3b7&auto=format&fit=crop&w=1489&q=80',
          sport: 'basketball',
          views: 2,
          likes: 1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }, {
          id: 2,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://images.unsplash.com/photo-1508209495879-445d5febf597?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21c5338e49216b8fb6f3bee2aa174698&auto=format&fit=crop&w=1350&q=80',
          sport: 'hockey',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 3,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d9575e86751b65d41da8dfe6f09e23a&auto=format&fit=crop&w=1549&q=80',
          sport: 'baseball',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 4,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a33516e4325a5ea4e3f3d0fcb93de93d&auto=format&fit=crop&w=1350&q=80',
          sport: 'soccer',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 5,
          user_id: 2,
          title: 'How To Make a Milli',
          summary: 'I am Eddie and this is my story on how to make a milli',
          body: "blah blah blah blah",
          image_url: 'https://images.unsplash.com/photo-1512944762364-9c298078bf70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14f8b2e4e15b7f8956c3bb5609e7e3e8&auto=format&fit=crop&w=1350&q=80',
          sport: 'baseball',
          views: 10,
          likes: 4,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
      ])

    .then(function(){
    return knex.raw("SELECT setval('articles_id_seq', (SELECT MAX(id) FROM articles))")
    })
}

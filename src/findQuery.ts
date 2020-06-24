//OnetoOne relations
// const tweetRepo = getRepository(Tweet);
// const profile = new Tweet();
// profile.gender = "male";
// profile.photo = "me.jpg";
// await tweetRepo.save(profile);

// const userRepo = getRepository(User);
// const user = new User();
// user.name = "Joe Smith";
// user.profile = profile;
// const a = await userRepo.save(user);
// console.log(a)

// const tweetRepo = getRepository(Tweet);
// const tweet = new Tweet();
// tweet.title = " Nawaz Sharif ";
// tweet.content = "Pakistan PM old";
// const twe = await tweetRepo.create({
//   title: "Imran1",
//   content: "Bilal1",
// });

// await tweetRepo.save(twe).catch((err) => console.log(err));
// console.log('Tweet save :' , twe)
// const userRepo = getRepository(User);
// const user = new User();
// user.firstName= 'Imran Bilal'
// user.lastName = 'Muhammad Bilal'
// user.age = 30
// user.tweets = [twe];
// await userRepo.save(user).catch((err) => console.log(err));
// console.log("New user saved ", user);




  //Find record query
  // const userRepo = getRepository(User);
  // const productfind = await userRepo.find({ relations: ["tweets"]}).then(res => {
  //       console.log(res)
  //   }).catch(err => console.log(err))

  /*     const userRepo = getRepository(User);
  const productfind = await userRepo
    .find({
      where: { id: "cb6bb1c8-6739-478a-a0be-6276b9bc7714" },
      relations: ["tweets"],
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
 */

const {Router} = require('express');
const config = require('config');
const shortid = require('shortid');
const User = require('../models/User')
const router = Router();

// router.post('/generate', auth, async (req, res) => {
//   try {
//     const baseUrl = config.get('baseUrl')
//     const {from} = req.body

//     const code = shortid.generate()

//     const existing = await Link.findOne({ from })

//     if (existing) {
//       return res.json({ link: existing })
//     }

//     const to = baseUrl + '/t/' + code

//     const link = new Link({
//       code, to, from, owner: req.user.userId
//     })

//     await link.save()

//     res.status(201).json({ link })
//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.put('/:id', async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);

    if(!user) {
      return res.json({
        success: false,
        message: "User`s ID doesn`t exist"
      }) 
    }else {
       let newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true
       });

       res.json(newUser)
    }
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get('/:id', async (req, res) => {
    try {
        const link = await User.findById(req.params.id);
        res.json(link);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
}) 



module.exports = router;
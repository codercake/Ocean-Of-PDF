const express = require('express')
const passport = require('passport')

//@desc Auth with Google 
//@route GET /auth/google
router.get('/google', passport.authentication('google', {scope: ['profile'] }))

//@desc google with callback
//@route GET /auth/google/callback
router.get(
    '/google/callback',
    passport.authentication('google', { failureRedirects: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

//@desc logout user
//@route /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) {return next(error)}
        res.redirect('/')
    })
})

module.exports = router
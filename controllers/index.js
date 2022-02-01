exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' });
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About' });
}
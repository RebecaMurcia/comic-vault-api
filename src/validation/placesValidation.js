const { body, param, validationResult } = require('express-validator');

// Middleware to handle validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// ID validator (used for GET by ID, UPDATE, DELETE)
const idValidator = [
  param('id').isMongoId().withMessage('Invalid place ID'),
  validate,
];

// Create a new place
const createValidation = [
  body('name')
    .isString().withMessage('Name must be a string')
    .notEmpty().withMessage('Name is required'),
  body('type')
    .isString().withMessage('Type must be a string')
    .notEmpty().withMessage('Type is required'),
  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),
  body('population')
    .optional()
    .isInt({ min: 0 }).withMessage('Population must be a non-negative number'),
  body('technologyLevel')
    .optional()
    .isString().withMessage('Technology level must be a string'),
  body('notableLocations')
    .optional()
    .isArray().withMessage('notableLocations must be an array of strings')
    .custom(arr => arr.every(i => typeof i === 'string'))
    .withMessage('All notableLocations must be strings'),
  validate,
];

// Update an existing place
const updateValidation = [
  param('id').isMongoId().withMessage('Invalid place ID'),
  body('name')
    .optional()
    .isString().withMessage('Name must be a string'),
  body('type')
    .optional()
    .isString().withMessage('Type must be a string'),
  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),
  body('population')
    .optional()
    .isInt({ min: 0 }).withMessage('Population must be a non-negative number'),
  body('technologyLevel')
    .optional()
    .isString().withMessage('Technology level must be a string'),
  body('notableLocations')
    .optional()
    .isArray().withMessage('notableLocations must be an array of strings')
    .custom(arr => arr.every(i => typeof i === 'string'))
    .withMessage('All notableLocations must be strings'),
  validate,
];

// Export
module.exports = {
  validators: {
    getById: idValidator,
    create: createValidation,
    update: updateValidation,
    delete: idValidator,
  },
};
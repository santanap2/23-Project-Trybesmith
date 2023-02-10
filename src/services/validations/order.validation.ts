const authValidation = (authorization: string | null) => {
  if (!authorization) return { code: 401, message: 'Token not found' };
  return null;
};

const productsIdsValidation = (productsIds : number[] | null) => {
  if (!productsIds) return { code: 400, message: '"productsIds" is required' };

  if (!Array.isArray(productsIds)) {
    return { code: 422, message: '"productsIds" must be an array' };
  }

  if (productsIds.length === 0) {
    return { code: 422, message: '"productsIds" must include only numbers' };
  }

  return null;
};

export default {
  authValidation,
  productsIdsValidation,
};
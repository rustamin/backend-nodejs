exports.envOr = (key, def) => {
  if (['undefined', 'string', 'number', 'boolean'].indexOf(typeof def) == -1) {
    throw new Error(
      `Invalid Argument, 'def' should be string or number or boolean`
    );
  }
  let ret = process.env[key] || def;
  if (ret !== def && typeof def == 'number') {
    ret = +ret;
    if (isNaN(ret)) throw new Error(`Cannot convert env ${key} to number`);
  } else if (ret !== def && typeof def == 'boolean') {
    if (ret.toLowerCase() == 'true') {
      ret = true;
    } else if (ret.toLowerCase() == 'false') {
      ret = false;
    } else {
      throw new Error(`Cannot convert env ${key} to boolean`);
    }
  }
  return ret;
};

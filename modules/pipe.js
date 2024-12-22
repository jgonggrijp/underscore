import restArguments from './restArguments.js';
import reduce from './reduce.js';

function nextValue(previous, func) {
  return func(previous);
}

export default restArguments(function(value, funcs) {
  return reduce(funcs, nextValue, value);
});

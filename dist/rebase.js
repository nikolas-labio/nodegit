"use strict";

var NodeGit = require("../");
var Rebase = NodeGit.Rebase;

var _init = Rebase.init;
var _open = Rebase.open;

function defaultRebaseOptions(options, checkoutStrategy) {
  if (options) {
    // Ensure we don't modify the passed-in options object.
    // This could lead to us recursing signingCb if the same
    // options object is later re-used.
    options = Object.assign({}, options);

    if (options.signingCb) {
      var signingCb = options.signingCb;
      options.signingCb = function (signatureBuf, signatureFieldBuf, commitContent) {
        try {
          var signingCbResult = signingCb(commitContent);

          return Promise.resolve(signingCbResult).then(function (_ref) {
            var code = _ref.code,
                field = _ref.field,
                signedData = _ref.signedData;

            if (code === NodeGit.Error.CODE.OK) {
              signatureBuf.setString(signedData);
              if (field) {
                signatureFieldBuf.setString(field);
              }
            }

            return code;
          }).catch(function (error) {
            if (error && error.code) {
              return error.code;
            }
            return NodeGit.Error.CODE.ERROR;
          });
        } catch (error) {
          if (error && error.code) {
            return error.code;
          }
          return NodeGit.Error.CODE.ERROR;
        }
      };
    }
  } else if (checkoutStrategy) {
    options = {
      checkoutOptions: {
        checkoutStrategy: checkoutStrategy
      }
    };
  }

  return options;
}

/**
 * Initializes a rebase
 * @async
 * @param {Repository} repo The repository to perform the rebase
 * @param {AnnotatedCommit} branch The terminal commit to rebase, or NULL to
 *                                 rebase the current branch
 * @param {AnnotatedCommit} upstream The commit to begin rebasing from, or NULL
 *                                   to rebase all reachable commits
 * @param {AnnotatedCommit} onto The branch to rebase onto, or NULL to rebase
 *                               onto the given upstream
 * @param {RebaseOptions} options Options to specify how rebase is performed,
 *                                or NULL
 * @return {Remote}
 */
Rebase.init = function (repository, branch, upstream, onto, options) {
  return _init(repository, branch, upstream, onto, defaultRebaseOptions(options, NodeGit.Checkout.STRATEGY.FORCE));
};

/**
 * Opens an existing rebase that was previously started by either an invocation
 * of Rebase.open or by another client.
 * @async
 * @param {Repository} repo The repository that has a rebase in-progress
 * @param {RebaseOptions} options Options to specify how rebase is performed
 * @return {Remote}
 */
Rebase.open = function (repository, options) {
  return _open(repository, defaultRebaseOptions(options, NodeGit.Checkout.STRATEGY.SAFE));
};
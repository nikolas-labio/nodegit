"use strict";

// This is a generated file, modify: generate/templates/templates/enums.js

var NodeGit = require("../");
NodeGit.Enums = {};

NodeGit.Apply.FLAGS = {
  CHECK: 1
};
NodeGit.Apply.LOCATION = {
  WORKDIR: 0,
  INDEX: 1,
  BOTH: 2
};
NodeGit.Attr.VALUE = {
  UNSPECIFIED: 0,
  TRUE: 1,
  FALSE: 2,
  STRING: 3
};
NodeGit.Blame.FLAG = {
  NORMAL: 0,
  TRACK_COPIES_SAME_FILE: 1,
  TRACK_COPIES_SAME_COMMIT_MOVES: 2,
  TRACK_COPIES_SAME_COMMIT_COPIES: 4,
  TRACK_COPIES_ANY_COMMIT_COPIES: 8,
  FIRST_PARENT: 16,
  USE_MAILMAP: 32,
  IGNORE_WHITESPACE: 64
};
NodeGit.Blob.FILTER_FLAG = {
  CHECK_FOR_BINARY: 1,
  NO_SYSTEM_ATTRIBUTES: 2,
  FILTER_ATTRIBUTES_FROM_HEAD: 4
};
NodeGit.Branch.BRANCH = {
  LOCAL: 1,
  REMOTE: 2,
  ALL: 3
};
NodeGit.Cert.TYPE = {
  NONE: 0,
  X509: 1,
  HOSTKEY_LIBSSH2: 2,
  STRARRAY: 3
};
NodeGit.Cert.SSH = {
  MD5: 1,
  SHA1: 2,
  SHA256: 4,
  RAW: 8
};
NodeGit.Cert.SSH_RAW_TYPE = {
  UNKNOWN: 0,
  RSA: 1,
  DSS: 2,
  KEY_ECDSA_256: 3,
  KEY_ECDSA_384: 4,
  KEY_ECDSA_521: 5,
  KEY_ED25519: 6
};
NodeGit.Checkout.NOTIFY = {
  NONE: 0,
  CONFLICT: 1,
  DIRTY: 2,
  UPDATED: 4,
  UNTRACKED: 8,
  IGNORED: 16,
  ALL: 65535
};
NodeGit.Checkout.STRATEGY = {
  NONE: 0,
  SAFE: 1,
  FORCE: 2,
  RECREATE_MISSING: 4,
  ALLOW_CONFLICTS: 16,
  REMOVE_UNTRACKED: 32,
  REMOVE_IGNORED: 64,
  UPDATE_ONLY: 128,
  DONT_UPDATE_INDEX: 256,
  NO_REFRESH: 512,
  SKIP_UNMERGED: 1024,
  USE_OURS: 2048,
  USE_THEIRS: 4096,
  DISABLE_PATHSPEC_MATCH: 8192,
  SKIP_LOCKED_DIRECTORIES: 262144,
  DONT_OVERWRITE_IGNORED: 524288,
  CONFLICT_STYLE_MERGE: 1048576,
  CONFLICT_STYLE_DIFF3: 2097152,
  DONT_REMOVE_EXISTING: 4194304,
  DONT_WRITE_INDEX: 8388608,
  UPDATE_SUBMODULES: 65536,
  UPDATE_SUBMODULES_IF_CHANGED: 131072
};
NodeGit.Clone.LOCAL = {
  AUTO: 0,
  LOCAL: 1,
  NO_LOCAL: 2,
  NO_LINKS: 3
};
NodeGit.Config.LEVEL = {
  PROGRAMDATA: 1,
  SYSTEM: 2,
  XDG: 3,
  GLOBAL: 4,
  LOCAL: 5,
  APP: 6,
  HIGHEST_LEVEL: -1
};
NodeGit.Config.MAP = {
  FALSE: 0,
  TRUE: 1,
  INT32: 2,
  STRING: 3
};
NodeGit.Credential.TYPE = {
  USERPASS_PLAINTEXT: 1,
  SSH_KEY: 2,
  SSH_CUSTOM: 4,
  DEFAULT: 8,
  SSH_INTERACTIVE: 16,
  USERNAME: 32,
  SSH_MEMORY: 64
};
NodeGit.Diff.DELTA = {
  UNMODIFIED: 0,
  ADDED: 1,
  DELETED: 2,
  MODIFIED: 3,
  RENAMED: 4,
  COPIED: 5,
  IGNORED: 6,
  UNTRACKED: 7,
  TYPECHANGE: 8,
  UNREADABLE: 9,
  CONFLICTED: 10
};
NodeGit.DiffBinary.DIFF_BINARY = {
  NONE: 0,
  LITERAL: 1,
  DELTA: 2
};
NodeGit.Diff.FIND = {
  BY_CONFIG: 0,
  RENAMES: 1,
  RENAMES_FROM_REWRITES: 2,
  COPIES: 4,
  COPIES_FROM_UNMODIFIED: 8,
  REWRITES: 16,
  BREAK_REWRITES: 32,
  AND_BREAK_REWRITES: 48,
  FOR_UNTRACKED: 64,
  ALL: 255,
  IGNORE_LEADING_WHITESPACE: 0,
  IGNORE_WHITESPACE: 4096,
  DONT_IGNORE_WHITESPACE: 8192,
  EXACT_MATCH_ONLY: 16384,
  BREAK_REWRITES_FOR_RENAMES_ONLY: 32768,
  REMOVE_UNMODIFIED: 65536
};
NodeGit.Diff.FLAG = {
  BINARY: 1,
  NOT_BINARY: 2,
  VALID_ID: 4,
  EXISTS: 8
};
NodeGit.Diff.FORMAT = {
  PATCH: 1,
  PATCH_HEADER: 2,
  RAW: 3,
  NAME_ONLY: 4,
  NAME_STATUS: 5,
  PATCH_ID: 6
};
NodeGit.Diff.FORMAT_EMAIL_FLAGS = {
  FORMAT_EMAIL_NONE: 0,
  FORMAT_EMAIL_EXCLUDE_SUBJECT_PATCH_MARKER: 1
};
NodeGit.Diff.LINE = {
  CONTEXT: 32,
  ADDITION: 43,
  DELETION: 45,
  CONTEXT_EOFNL: 61,
  ADD_EOFNL: 62,
  DEL_EOFNL: 60,
  FILE_HDR: 70,
  HUNK_HDR: 72,
  BINARY: 66
};
NodeGit.Diff.OPTION = {
  NORMAL: 0,
  REVERSE: 1,
  INCLUDE_IGNORED: 2,
  RECURSE_IGNORED_DIRS: 4,
  INCLUDE_UNTRACKED: 8,
  RECURSE_UNTRACKED_DIRS: 16,
  INCLUDE_UNMODIFIED: 32,
  INCLUDE_TYPECHANGE: 64,
  INCLUDE_TYPECHANGE_TREES: 128,
  IGNORE_FILEMODE: 256,
  IGNORE_SUBMODULES: 512,
  IGNORE_CASE: 1024,
  INCLUDE_CASECHANGE: 2048,
  DISABLE_PATHSPEC_MATCH: 4096,
  SKIP_BINARY_CHECK: 8192,
  ENABLE_FAST_UNTRACKED_DIRS: 16384,
  UPDATE_INDEX: 32768,
  INCLUDE_UNREADABLE: 65536,
  INCLUDE_UNREADABLE_AS_UNTRACKED: 131072,
  INDENT_HEURISTIC: 262144,
  FORCE_TEXT: 1048576,
  FORCE_BINARY: 2097152,
  IGNORE_WHITESPACE: 4194304,
  IGNORE_WHITESPACE_CHANGE: 8388608,
  IGNORE_WHITESPACE_EOL: 16777216,
  SHOW_UNTRACKED_CONTENT: 33554432,
  SHOW_UNMODIFIED: 67108864,
  PATIENCE: 268435456,
  MINIMAL: 536870912,
  SHOW_BINARY: 1073741824
};
NodeGit.Diff.STATS_FORMAT = {
  STATS_NONE: 0,
  STATS_FULL: 1,
  STATS_SHORT: 2,
  STATS_NUMBER: 4,
  STATS_INCLUDE_SUMMARY: 8
};
NodeGit.Enums.DIRECTION = {
  FETCH: 0,
  PUSH: 1
};
NodeGit.Error.ERROR = {
  NONE: 0,
  NOMEMORY: 1,
  OS: 2,
  INVALID: 3,
  REFERENCE: 4,
  ZLIB: 5,
  REPOSITORY: 6,
  CONFIG: 7,
  REGEX: 8,
  ODB: 9,
  INDEX: 10,
  OBJECT: 11,
  NET: 12,
  TAG: 13,
  TREE: 14,
  INDEXER: 15,
  SSL: 16,
  SUBMODULE: 17,
  THREAD: 18,
  STASH: 19,
  CHECKOUT: 20,
  FETCHHEAD: 21,
  MERGE: 22,
  SSH: 23,
  FILTER: 24,
  REVERT: 25,
  CALLBACK: 26,
  CHERRYPICK: 27,
  DESCRIBE: 28,
  REBASE: 29,
  FILESYSTEM: 30,
  PATCH: 31,
  WORKTREE: 32,
  SHA1: 33,
  HTTP: 34,
  INTERNAL: 35
};
NodeGit.Error.CODE = {
  OK: 0,
  ERROR: -1,
  ENOTFOUND: -3,
  EEXISTS: -4,
  EAMBIGUOUS: -5,
  EBUFS: -6,
  EUSER: -7,
  EBAREREPO: -8,
  EUNBORNBRANCH: -9,
  EUNMERGED: -10,
  ENONFASTFORWARD: -11,
  EINVALIDSPEC: -12,
  ECONFLICT: -13,
  ELOCKED: -14,
  EMODIFIED: -15,
  EAUTH: -16,
  ECERTIFICATE: -17,
  EAPPLIED: -18,
  EPEEL: -19,
  EEOF: -20,
  EINVALID: -21,
  EUNCOMMITTED: -22,
  EDIRECTORY: -23,
  EMERGECONFLICT: -24,
  PASSTHROUGH: -30,
  ITEROVER: -31,
  RETRY: -32,
  EMISMATCH: -33,
  EINDEXDIRTY: -34,
  EAPPLYFAIL: -35
};
NodeGit.Enums.FEATURE = {
  THREADS: 1,
  HTTPS: 2,
  SSH: 4,
  NSEC: 8
};
NodeGit.Fetch.PRUNE = {
  GIT_FETCH_PRUNE_UNSPECIFIED: 0,
  GIT_FETCH_PRUNE: 1,
  GIT_FETCH_NO_PRUNE: 2
};
NodeGit.TreeEntry.FILEMODE = {
  UNREADABLE: 0,
  TREE: 16384,
  BLOB: 33188,
  EXECUTABLE: 33261,
  LINK: 40960,
  COMMIT: 57344
};
NodeGit.Filter.FLAG = {
  DEFAULT: 0,
  ALLOW_UNSAFE: 1,
  NO_SYSTEM_ATTRIBUTES: 2,
  ATTRIBUTES_FROM_HEAD: 4
};
NodeGit.Filter.MODE = {
  TO_WORKTREE: 0,
  SMUDGE: 0,
  TO_ODB: 1,
  CLEAN: 1
};
NodeGit.Hashsig.OPTION = {
  NORMAL: 0,
  IGNORE_WHITESPACE: 1,
  SMART_WHITESPACE: 2,
  ALLOW_SMALL_FILES: 4
};
NodeGit.Index.ADD_OPTION = {
  ADD_DEFAULT: 0,
  ADD_FORCE: 1,
  ADD_DISABLE_PATHSPEC_MATCH: 2,
  ADD_CHECK_PATHSPEC: 4
};
NodeGit.Index.CAPABILITY = {
  IGNORE_CASE: 1,
  NO_FILEMODE: 2,
  NO_SYMLINKS: 4,
  FROM_OWNER: -1
};
NodeGit.Index.ENTRY_EXTENDED_FLAG = {
  ENTRY_INTENT_TO_ADD: 8192,
  ENTRY_SKIP_WORKTREE: 16384,
  S: 24576,
  ENTRY_UPTODATE: 4
};
NodeGit.Index.ENTRY_FLAG = {
  ENTRY_EXTENDED: 16384,
  ENTRY_VALID: 32768
};
NodeGit.Index.STAGE = {
  ANY: -1,
  NORMAL: 0,
  ANCESTOR: 1,
  OURS: 2,
  THEIRS: 3
};
NodeGit.Libgit2.OPT = {
  GET_MWINDOW_SIZE: 0,
  SET_MWINDOW_SIZE: 1,
  GET_MWINDOW_MAPPED_LIMIT: 2,
  SET_MWINDOW_MAPPED_LIMIT: 3,
  GET_SEARCH_PATH: 4,
  SET_SEARCH_PATH: 5,
  SET_CACHE_OBJECT_LIMIT: 6,
  SET_CACHE_MAX_SIZE: 7,
  ENABLE_CACHING: 8,
  GET_CACHED_MEMORY: 9,
  GET_TEMPLATE_PATH: 10,
  SET_TEMPLATE_PATH: 11,
  SET_SSL_CERT_LOCATIONS: 12,
  SET_USER_AGENT: 13,
  ENABLE_STRICT_OBJECT_CREATION: 14,
  ENABLE_STRICT_SYMBOLIC_REF_CREATION: 15,
  SET_SSL_CIPHERS: 16,
  GET_USER_AGENT: 17,
  ENABLE_OFS_DELTA: 18,
  ENABLE_FSYNC_GITDIR: 19,
  GET_WINDOWS_SHAREMODE: 20,
  SET_WINDOWS_SHAREMODE: 21,
  ENABLE_STRICT_HASH_VERIFICATION: 22,
  SET_ALLOCATOR: 23,
  ENABLE_UNSAVED_INDEX_SAFETY: 24,
  GET_PACK_MAX_OBJECTS: 25,
  SET_PACK_MAX_OBJECTS: 26,
  DISABLE_PACK_KEEP_FILE_CHECKS: 27,
  ENABLE_HTTP_EXPECT_CONTINUE: 28,
  GET_MWINDOW_FILE_LIMIT: 29,
  SET_MWINDOW_FILE_LIMIT: 30
};
NodeGit.Merge.ANALYSIS = {
  NONE: 0,
  NORMAL: 1,
  UP_TO_DATE: 2,
  FASTFORWARD: 4,
  UNBORN: 8
};
NodeGit.Merge.FILE_FAVOR = {
  NORMAL: 0,
  OURS: 1,
  THEIRS: 2,
  UNION: 3
};
NodeGit.Merge.FILE_FLAG = {
  FILE_DEFAULT: 0,
  FILE_STYLE_MERGE: 1,
  FILE_STYLE_DIFF3: 2,
  FILE_SIMPLIFY_ALNUM: 4,
  FILE_IGNORE_WHITESPACE: 8,
  FILE_IGNORE_WHITESPACE_CHANGE: 16,
  FILE_IGNORE_WHITESPACE_EOL: 32,
  FILE_DIFF_PATIENCE: 64,
  FILE_DIFF_MINIMAL: 128
};
NodeGit.Merge.FLAG = {
  FIND_RENAMES: 1,
  FAIL_ON_CONFLICT: 2,
  SKIP_REUC: 4,
  NO_RECURSIVE: 8
};
NodeGit.Merge.PREFERENCE = {
  NONE: 0,
  NO_FASTFORWARD: 1,
  FASTFORWARD_ONLY: 2
};
NodeGit.Object.TYPE = {
  ANY: -2,
  INVALID: -1,
  COMMIT: 1,
  TREE: 2,
  BLOB: 3,
  TAG: 4,
  OFS_DELTA: 6,
  REF_DELTA: 7
};
NodeGit.Odb.STREAM = {
  RDONLY: 2,
  WRONLY: 4,
  RW: 6
};
NodeGit.Packbuilder.STAGE = {
  ADDING_OBJECTS: 0,
  DELTAFICATION: 1
};
NodeGit.Path.FS = {
  GENERIC: 0,
  NTFS: 1,
  HFS: 2
};
NodeGit.Path.GITFILE = {
  GITIGNORE: 0,
  GITMODULES: 1,
  GITATTRIBUTES: 1
};
NodeGit.Pathspec.FLAG = {
  DEFAULT: 0,
  IGNORE_CASE: 1,
  USE_CASE: 2,
  NO_GLOB: 4,
  NO_MATCH_ERROR: 8,
  FIND_FAILURES: 16,
  FAILURES_ONLY: 32
};
NodeGit.Proxy.PROXY = {
  NONE: 0,
  AUTO: 1,
  SPECIFIED: 2
};
NodeGit.RebaseOperation.REBASE_OPERATION = {
  PICK: 0,
  REWORD: 1,
  EDIT: 2,
  SQUASH: 3,
  FIXUP: 4,
  EXEC: 5
};
NodeGit.Reference.TYPE = {
  INVALID: 0,
  DIRECT: 1,
  SYMBOLIC: 2,
  ALL: 3
};
NodeGit.Reference.FORMAT = {
  NORMAL: 0,
  ALLOW_ONELEVEL: 1,
  REFSPEC_PATTERN: 2,
  REFSPEC_SHORTHAND: 4
};
NodeGit.Remote.AUTOTAG_OPTION = {
  DOWNLOAD_TAGS_UNSPECIFIED: 0,
  DOWNLOAD_TAGS_AUTO: 1,
  DOWNLOAD_TAGS_NONE: 2,
  DOWNLOAD_TAGS_ALL: 3
};
NodeGit.Remote.COMPLETION = {
  DOWNLOAD: 0,
  INDEXING: 1,
  ERROR: 2
};
NodeGit.Remote.CREATE_FLAGS = {
  CREATE_SKIP_INSTEADOF: 1,
  CREATE_SKIP_DEFAULT_FETCHSPEC: 2
};
NodeGit.Repository.INIT_FLAG = {
  BARE: 1,
  NO_REINIT: 2,
  NO_DOTGIT_DIR: 4,
  MKDIR: 8,
  MKPATH: 16,
  EXTERNAL_TEMPLATE: 32,
  RELATIVE_GITLINK: 64
};
NodeGit.Repository.INIT_MODE = {
  INIT_SHARED_UMASK: 0,
  INIT_SHARED_GROUP: 1533,
  INIT_SHARED_ALL: 1535
};
NodeGit.Repository.ITEM = {
  GITDIR: 0,
  WORKDIR: 1,
  COMMONDIR: 2,
  INDEX: 3,
  OBJECTS: 4,
  REFS: 5,
  PACKED_REFS: 6,
  REMOTES: 7,
  CONFIG: 8,
  INFO: 9,
  HOOKS: 10,
  LOGS: 11,
  MODULES: 12,
  WORKTREES: 13,
  _LAST: 14
};
NodeGit.Repository.OPEN_FLAG = {
  OPEN_NO_SEARCH: 1,
  OPEN_CROSS_FS: 2,
  OPEN_BARE: 4,
  OPEN_NO_DOTGIT: 8,
  OPEN_FROM_ENV: 16
};
NodeGit.Repository.STATE = {
  NONE: 0,
  MERGE: 1,
  REVERT: 2,
  REVERT_SEQUENCE: 3,
  CHERRYPICK: 4,
  CHERRYPICK_SEQUENCE: 5,
  BISECT: 6,
  REBASE: 7,
  REBASE_INTERACTIVE: 8,
  REBASE_MERGE: 9,
  APPLY_MAILBOX: 10,
  APPLY_MAILBOX_OR_REBASE: 11
};
NodeGit.Reset.TYPE = {
  SOFT: 1,
  MIXED: 2,
  HARD: 3
};
NodeGit.Revspec.TYPE = {
  SINGLE: 1,
  RANGE: 2,
  MERGE_BASE: 4
};
NodeGit.Enums.SMART_SERVICE = {
  SERVICE_UPLOADPACK_LS: 1,
  SERVICE_UPLOADPACK: 2,
  SERVICE_RECEIVEPACK_LS: 3,
  SERVICE_RECEIVEPACK: 4
};
NodeGit.Revwalk.SORT = {
  NONE: 0,
  TOPOLOGICAL: 1,
  TIME: 2,
  REVERSE: 4
};
NodeGit.Stash.APPLY_FLAGS = {
  APPLY_DEFAULT: 0,
  APPLY_REINSTATE_INDEX: 1
};
NodeGit.Stash.APPLY_PROGRESS = {
  NONE: 0,
  LOADING_STASH: 1,
  ANALYZE_INDEX: 2,
  ANALYZE_MODIFIED: 3,
  ANALYZE_UNTRACKED: 4,
  CHECKOUT_UNTRACKED: 5,
  CHECKOUT_MODIFIED: 6,
  DONE: 7
};
NodeGit.Stash.FLAGS = {
  DEFAULT: 0,
  KEEP_INDEX: 1,
  INCLUDE_UNTRACKED: 2,
  INCLUDE_IGNORED: 4
};
NodeGit.Status.STATUS = {
  CURRENT: 0,
  INDEX_NEW: 1,
  INDEX_MODIFIED: 2,
  INDEX_DELETED: 4,
  INDEX_RENAMED: 8,
  INDEX_TYPECHANGE: 16,
  WT_NEW: 128,
  WT_MODIFIED: 256,
  WT_DELETED: 512,
  WT_TYPECHANGE: 1024,
  WT_RENAMED: 2048,
  WT_UNREADABLE: 4096,
  IGNORED: 16384,
  CONFLICTED: 32768
};
NodeGit.Status.OPT = {
  INCLUDE_UNTRACKED: 1,
  INCLUDE_IGNORED: 2,
  INCLUDE_UNMODIFIED: 4,
  EXCLUDE_SUBMODULES: 8,
  RECURSE_UNTRACKED_DIRS: 16,
  DISABLE_PATHSPEC_MATCH: 32,
  RECURSE_IGNORED_DIRS: 64,
  RENAMES_HEAD_TO_INDEX: 128,
  RENAMES_INDEX_TO_WORKDIR: 256,
  SORT_CASE_SENSITIVELY: 512,
  SORT_CASE_INSENSITIVELY: 1024,
  RENAMES_FROM_REWRITES: 2048,
  NO_REFRESH: 4096,
  UPDATE_INDEX: 8192,
  INCLUDE_UNREADABLE: 16384,
  INCLUDE_UNREADABLE_AS_UNTRACKED: 32768
};
NodeGit.Status.SHOW = {
  INDEX_AND_WORKDIR: 0,
  INDEX_ONLY: 1,
  WORKDIR_ONLY: 2
};
NodeGit.Submodule.IGNORE = {
  UNSPECIFIED: -1,
  NONE: 1,
  UNTRACKED: 2,
  DIRTY: 3,
  ALL: 4
};
NodeGit.Submodule.RECURSE = {
  NO: 0,
  YES: 1,
  ONDEMAND: 2
};
NodeGit.Submodule.STATUS = {
  IN_HEAD: 1,
  IN_INDEX: 2,
  IN_CONFIG: 4,
  IN_WD: 8,
  INDEX_ADDED: 16,
  INDEX_DELETED: 32,
  INDEX_MODIFIED: 64,
  WD_UNINITIALIZED: 128,
  WD_ADDED: 256,
  WD_DELETED: 512,
  WD_MODIFIED: 1024,
  WD_INDEX_MODIFIED: 2048,
  WD_WD_MODIFIED: 4096,
  WD_UNTRACKED: 8192
};
NodeGit.Submodule.UPDATE = {
  CHECKOUT: 1,
  REBASE: 2,
  MERGE: 3,
  NONE: 4,
  DEFAULT: 0
};
NodeGit.Trace.LEVEL = {
  NONE: 0,
  FATAL: 1,
  ERROR: 2,
  WARN: 3,
  INFO: 4,
  DEBUG: 5,
  TRACE: 6
};
NodeGit.Tree.UPDATE = {
  UPSERT: 0,
  REMOVE: 1
};
NodeGit.Tree.WALK_MODE = {
  WALK_PRE: 0,
  WALK_POST: 1
};
NodeGit.Worktree.PRUNE = {
  GIT_WORKTREE_PRUNE_VALID: 1,
  GIT_WORKTREE_PRUNE_LOCKED: 2,
  GIT_WORKTREE_PRUNE_WORKING_TREE: 4
};
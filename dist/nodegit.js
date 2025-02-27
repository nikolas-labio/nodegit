"use strict";

// This is a generated file, modify: generate/templates/templates/nodegit.js

var _ = require("lodash");
var util = require("util");
var worker;

try {
  worker = require("worker_threads");
} catch (e) {}

var rawApi;

// Attempt to load the production release first, if it fails fall back to the
// debug release.
try {
  rawApi = require("../build/Release/nodegit.node");
} catch (ex) {
  /* istanbul ignore next */
  if (ex.code !== "MODULE_NOT_FOUND") {
    throw ex;
  }

  rawApi = require("../build/Debug/nodegit.node");
}

var promisify = function promisify(fn) {
  return fn && util.promisify(fn);
}; // jshint ignore:line

// For disccussion on why `cloneDeep` is required, see:
// https://github.com/facebook/jest/issues/3552
// https://github.com/facebook/jest/issues/3550
// https://github.com/nodejs/node/issues/5016
rawApi = _.cloneDeep(rawApi);

// Native methods do not return an identifiable function, so we
// have to override them here
/* jshint ignore:start */
var _AnnotatedCommit = rawApi.AnnotatedCommit;

var _AnnotatedCommit_fromFetchhead = _AnnotatedCommit.fromFetchhead;
_AnnotatedCommit.fromFetchhead = promisify(_AnnotatedCommit_fromFetchhead);

var _AnnotatedCommit_fromRef = _AnnotatedCommit.fromRef;
_AnnotatedCommit.fromRef = promisify(_AnnotatedCommit_fromRef);

var _AnnotatedCommit_fromRevspec = _AnnotatedCommit.fromRevspec;
_AnnotatedCommit.fromRevspec = promisify(_AnnotatedCommit_fromRevspec);

var _AnnotatedCommit_lookup = _AnnotatedCommit.lookup;
_AnnotatedCommit.lookup = promisify(_AnnotatedCommit_lookup);

var _Apply = rawApi.Apply;

var _Apply_apply = _Apply.apply;
_Apply.apply = promisify(_Apply_apply);

var _Apply_toTree = _Apply.toTree;
_Apply.toTree = promisify(_Apply_toTree);

rawApi.ApplyOptions = util.deprecate(function ApplyOptions() {
  try {
    require("./deprecated/structs/ApplyOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of ApplyOptions is deprecated and will be removed in an upcoming version");
rawApi.ApplyOptions = util.deprecate(function ApplyOptions() {
  try {
    require("./deprecated/structs/ApplyOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of ApplyOptions is deprecated and will be removed in an upcoming version");
var _Attr = rawApi.Attr;

var _Attr_get = _Attr.get;
_Attr.get = promisify(_Attr_get);

var _Attr_getMany = _Attr.getMany;
_Attr.getMany = promisify(_Attr_getMany);

var _Blame = rawApi.Blame;

var _Blame_buffer = _Blame.prototype.buffer;
_Blame.prototype.buffer = promisify(_Blame_buffer);

var _Blame_file = _Blame.file;
_Blame.file = promisify(_Blame_file);

rawApi.BlameOptions = util.deprecate(function BlameOptions() {
  try {
    require("./deprecated/structs/BlameOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of BlameOptions is deprecated and will be removed in an upcoming version");
var _Blob = rawApi.Blob;

var _Blob_createFromBuffer = _Blob.createFromBuffer;
_Blob.createFromBuffer = promisify(_Blob_createFromBuffer);

var _Blob_createFromDisk = _Blob.createFromDisk;
_Blob.createFromDisk = promisify(_Blob_createFromDisk);

var _Blob_createFromWorkdir = _Blob.createFromWorkdir;
_Blob.createFromWorkdir = promisify(_Blob_createFromWorkdir);

var _Blob_dup = _Blob.prototype.dup;
_Blob.prototype.dup = promisify(_Blob_dup);

var _Blob_filter = _Blob.prototype.filter;
_Blob.prototype.filter = promisify(_Blob_filter);

var _Blob_filteredContent = _Blob.filteredContent;
_Blob.filteredContent = promisify(_Blob_filteredContent);

var _Blob_lookup = _Blob.lookup;
_Blob.lookup = promisify(_Blob_lookup);

var _Blob_lookupPrefix = _Blob.lookupPrefix;
_Blob.lookupPrefix = promisify(_Blob_lookupPrefix);

rawApi.BlobFilterOptions = util.deprecate(function BlobFilterOptions() {
  try {
    require("./deprecated/structs/BlobFilterOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of BlobFilterOptions is deprecated and will be removed in an upcoming version");
rawApi.BlobFilterOptions = util.deprecate(function BlobFilterOptions() {
  try {
    require("./deprecated/structs/BlobFilterOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of BlobFilterOptions is deprecated and will be removed in an upcoming version");
var _Branch = rawApi.Branch;

var _Branch_create = _Branch.create;
_Branch.create = promisify(_Branch_create);

var _Branch_createFromAnnotated = _Branch.createFromAnnotated;
_Branch.createFromAnnotated = promisify(_Branch_createFromAnnotated);

var _Branch_lookup = _Branch.lookup;
_Branch.lookup = promisify(_Branch_lookup);

var _Branch_move = _Branch.move;
_Branch.move = promisify(_Branch_move);

var _Branch_name = _Branch.name;
_Branch.name = promisify(_Branch_name);

var _Branch_remoteName = _Branch.remoteName;
_Branch.remoteName = promisify(_Branch_remoteName);

var _Branch_setUpstream = _Branch.setUpstream;
_Branch.setUpstream = promisify(_Branch_setUpstream);

var _Branch_upstream = _Branch.upstream;
_Branch.upstream = promisify(_Branch_upstream);

var _Branch_upstreamName = _Branch.upstreamName;
_Branch.upstreamName = promisify(_Branch_upstreamName);

var _Buf = rawApi.Buf;
var _Checkout = rawApi.Checkout;

var _Checkout_head = _Checkout.head;
_Checkout.head = promisify(_Checkout_head);

var _Checkout_index = _Checkout.index;
_Checkout.index = promisify(_Checkout_index);

var _Checkout_tree = _Checkout.tree;
_Checkout.tree = promisify(_Checkout_tree);

rawApi.CheckoutOptions = util.deprecate(function CheckoutOptions() {
  try {
    require("./deprecated/structs/CheckoutOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of CheckoutOptions is deprecated and will be removed in an upcoming version");
var _Cherrypick = rawApi.Cherrypick;

var _Cherrypick_cherrypick = _Cherrypick.cherrypick;
_Cherrypick.cherrypick = promisify(_Cherrypick_cherrypick);

var _Cherrypick_commit = _Cherrypick.commit;
_Cherrypick.commit = promisify(_Cherrypick_commit);

rawApi.CherrypickOptions = util.deprecate(function CherrypickOptions() {
  try {
    require("./deprecated/structs/CherrypickOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of CherrypickOptions is deprecated and will be removed in an upcoming version");
var _Clone = rawApi.Clone;

var _Clone_clone = _Clone.clone;
_Clone.clone = promisify(_Clone_clone);

rawApi.CloneOptions = util.deprecate(function CloneOptions() {
  try {
    require("./deprecated/structs/CloneOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of CloneOptions is deprecated and will be removed in an upcoming version");
var _Commit = rawApi.Commit;

var _Commit_amend = _Commit.prototype.amend;
_Commit.prototype.amend = promisify(_Commit_amend);

var _Commit_authorWithMailmap = _Commit.prototype.authorWithMailmap;
_Commit.prototype.authorWithMailmap = promisify(_Commit_authorWithMailmap);

var _Commit_committerWithMailmap = _Commit.prototype.committerWithMailmap;
_Commit.prototype.committerWithMailmap = promisify(_Commit_committerWithMailmap);

var _Commit_create = _Commit.create;
_Commit.create = promisify(_Commit_create);

var _Commit_createBuffer = _Commit.createBuffer;
_Commit.createBuffer = promisify(_Commit_createBuffer);

var _Commit_createWithSignature = _Commit.createWithSignature;
_Commit.createWithSignature = promisify(_Commit_createWithSignature);

var _Commit_dup = _Commit.prototype.dup;
_Commit.prototype.dup = promisify(_Commit_dup);

var _Commit_extractSignature = _Commit.extractSignature;
_Commit.extractSignature = promisify(_Commit_extractSignature);

var _Commit_headerField = _Commit.prototype.headerField;
_Commit.prototype.headerField = promisify(_Commit_headerField);

var _Commit_lookup = _Commit.lookup;
_Commit.lookup = promisify(_Commit_lookup);

var _Commit_lookupPrefix = _Commit.lookupPrefix;
_Commit.lookupPrefix = promisify(_Commit_lookupPrefix);

var _Commit_nthGenAncestor = _Commit.prototype.nthGenAncestor;
_Commit.prototype.nthGenAncestor = promisify(_Commit_nthGenAncestor);

var _Commit_parent = _Commit.prototype.parent;
_Commit.prototype.parent = promisify(_Commit_parent);

var _Config = rawApi.Config;

var _Config_findGlobal = _Config.findGlobal;
_Config.findGlobal = promisify(_Config_findGlobal);

var _Config_findProgramdata = _Config.findProgramdata;
_Config.findProgramdata = promisify(_Config_findProgramdata);

var _Config_findSystem = _Config.findSystem;
_Config.findSystem = promisify(_Config_findSystem);

var _Config_findXdg = _Config.findXdg;
_Config.findXdg = promisify(_Config_findXdg);

var _Config_getBool = _Config.prototype.getBool;
_Config.prototype.getBool = promisify(_Config_getBool);

var _Config_getEntry = _Config.prototype.getEntry;
_Config.prototype.getEntry = promisify(_Config_getEntry);

var _Config_getInt32 = _Config.prototype.getInt32;
_Config.prototype.getInt32 = promisify(_Config_getInt32);

var _Config_getInt64 = _Config.prototype.getInt64;
_Config.prototype.getInt64 = promisify(_Config_getInt64);

var _Config_getPath = _Config.prototype.getPath;
_Config.prototype.getPath = promisify(_Config_getPath);

var _Config_getStringBuf = _Config.prototype.getStringBuf;
_Config.prototype.getStringBuf = promisify(_Config_getStringBuf);

var _Config_lock = _Config.prototype.lock;
_Config.prototype.lock = promisify(_Config_lock);

var _Config_openDefault = _Config.openDefault;
_Config.openDefault = promisify(_Config_openDefault);

var _Config_openOndisk = _Config.openOndisk;
_Config.openOndisk = promisify(_Config_openOndisk);

var _Config_setBool = _Config.prototype.setBool;
_Config.prototype.setBool = promisify(_Config_setBool);

var _Config_setInt32 = _Config.prototype.setInt32;
_Config.prototype.setInt32 = promisify(_Config_setInt32);

var _Config_setInt64 = _Config.prototype.setInt64;
_Config.prototype.setInt64 = promisify(_Config_setInt64);

var _Config_setMultivar = _Config.prototype.setMultivar;
_Config.prototype.setMultivar = promisify(_Config_setMultivar);

var _Config_setString = _Config.prototype.setString;
_Config.prototype.setString = promisify(_Config_setString);

var _Config_snapshot = _Config.prototype.snapshot;
_Config.prototype.snapshot = promisify(_Config_snapshot);

var _ConfigIterator = rawApi.ConfigIterator;

var _ConfigIterator_create = _ConfigIterator.create;
_ConfigIterator.create = promisify(_ConfigIterator_create);

var _ConfigIterator_createGlob = _ConfigIterator.createGlob;
_ConfigIterator.createGlob = promisify(_ConfigIterator_createGlob);

var _ConfigIterator_createMultivar = _ConfigIterator.createMultivar;
_ConfigIterator.createMultivar = promisify(_ConfigIterator_createMultivar);

var _Credential = rawApi.Credential;

var _Credential_sshKeyMemoryNew = _Credential.sshKeyMemoryNew;
_Credential.sshKeyMemoryNew = promisify(_Credential_sshKeyMemoryNew);

var _Credential_usernameNew = _Credential.usernameNew;
_Credential.usernameNew = promisify(_Credential_usernameNew);

rawApi.DescribeFormatOptions = util.deprecate(function DescribeFormatOptions() {
  try {
    require("./deprecated/structs/DescribeFormatOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DescribeFormatOptions is deprecated and will be removed in an upcoming version");
rawApi.DescribeFormatOptions = util.deprecate(function DescribeFormatOptions() {
  try {
    require("./deprecated/structs/DescribeFormatOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DescribeFormatOptions is deprecated and will be removed in an upcoming version");
rawApi.DescribeOptions = util.deprecate(function DescribeOptions() {
  try {
    require("./deprecated/structs/DescribeOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DescribeOptions is deprecated and will be removed in an upcoming version");
rawApi.DescribeOptions = util.deprecate(function DescribeOptions() {
  try {
    require("./deprecated/structs/DescribeOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DescribeOptions is deprecated and will be removed in an upcoming version");
var _Diff = rawApi.Diff;

var _Diff_blobToBuffer = _Diff.blobToBuffer;
_Diff.blobToBuffer = promisify(_Diff_blobToBuffer);

var _Diff_findSimilar = _Diff.prototype.findSimilar;
_Diff.prototype.findSimilar = promisify(_Diff_findSimilar);

var _Diff_fromBuffer = _Diff.fromBuffer;
_Diff.fromBuffer = promisify(_Diff_fromBuffer);

var _Diff_getStats = _Diff.prototype.getStats;
_Diff.prototype.getStats = promisify(_Diff_getStats);

var _Diff_indexToIndex = _Diff.indexToIndex;
_Diff.indexToIndex = promisify(_Diff_indexToIndex);

var _Diff_indexToWorkdir = _Diff.indexToWorkdir;
_Diff.indexToWorkdir = promisify(_Diff_indexToWorkdir);

var _Diff_merge = _Diff.prototype.merge;
_Diff.prototype.merge = promisify(_Diff_merge);

var _Diff_patchid = _Diff.prototype.patchid;
_Diff.prototype.patchid = promisify(_Diff_patchid);

var _Diff_toBuf = _Diff.prototype.toBuf;
_Diff.prototype.toBuf = promisify(_Diff_toBuf);

var _Diff_treeToIndex = _Diff.treeToIndex;
_Diff.treeToIndex = promisify(_Diff_treeToIndex);

var _Diff_treeToTree = _Diff.treeToTree;
_Diff.treeToTree = promisify(_Diff_treeToTree);

var _Diff_treeToWorkdir = _Diff.treeToWorkdir;
_Diff.treeToWorkdir = promisify(_Diff_treeToWorkdir);

var _Diff_treeToWorkdirWithIndex = _Diff.treeToWorkdirWithIndex;
_Diff.treeToWorkdirWithIndex = promisify(_Diff_treeToWorkdirWithIndex);

rawApi.DiffFindOptions = util.deprecate(function DiffFindOptions() {
  try {
    require("./deprecated/structs/DiffFindOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DiffFindOptions is deprecated and will be removed in an upcoming version");
rawApi.DiffOptions = util.deprecate(function DiffOptions() {
  try {
    require("./deprecated/structs/DiffOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DiffOptions is deprecated and will be removed in an upcoming version");
rawApi.DiffPatchidOptions = util.deprecate(function DiffPatchidOptions() {
  try {
    require("./deprecated/structs/DiffPatchidOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of DiffPatchidOptions is deprecated and will be removed in an upcoming version");
var _DiffStats = rawApi.DiffStats;

var _DiffStats_toBuf = _DiffStats.prototype.toBuf;
_DiffStats.prototype.toBuf = promisify(_DiffStats_toBuf);

var _Error = rawApi.Error;
rawApi.FetchOptions = util.deprecate(function FetchOptions() {
  try {
    require("./deprecated/structs/FetchOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of FetchOptions is deprecated and will be removed in an upcoming version");
rawApi.FetchOptions = util.deprecate(function FetchOptions() {
  try {
    require("./deprecated/structs/FetchOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of FetchOptions is deprecated and will be removed in an upcoming version");
rawApi.Filter = util.deprecate(function Filter() {
  try {
    require("./deprecated/structs/Filter").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of Filter is deprecated and will be removed in an upcoming version");
var _Filter = rawApi.Filter;

var _Filter_applyToBlob = _Filter.prototype.applyToBlob;
_Filter.prototype.applyToBlob = promisify(_Filter_applyToBlob);

var _Filter_applyToData = _Filter.prototype.applyToData;
_Filter.prototype.applyToData = promisify(_Filter_applyToData);

var _Filter_applyToFile = _Filter.prototype.applyToFile;
_Filter.prototype.applyToFile = promisify(_Filter_applyToFile);

var _Filter_load = _Filter.load;
_Filter.load = promisify(_Filter_load);

rawApi.Filter = util.deprecate(function Filter() {
  try {
    require("./deprecated/structs/Filter").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of Filter is deprecated and will be removed in an upcoming version");
var _FilterList = rawApi.FilterList;

var _FilterList_applyToBlob = _FilterList.prototype.applyToBlob;
_FilterList.prototype.applyToBlob = promisify(_FilterList_applyToBlob);

var _FilterList_applyToData = _FilterList.prototype.applyToData;
_FilterList.prototype.applyToData = promisify(_FilterList_applyToData);

var _FilterList_applyToFile = _FilterList.prototype.applyToFile;
_FilterList.prototype.applyToFile = promisify(_FilterList_applyToFile);

var _FilterList_load = _FilterList.load;
_FilterList.load = promisify(_FilterList_load);

var _FilterSource = rawApi.FilterSource;

var _FilterSource_repo = _FilterSource.prototype.repo;
_FilterSource.prototype.repo = promisify(_FilterSource_repo);

var _Graph = rawApi.Graph;

var _Graph_aheadBehind = _Graph.aheadBehind;
_Graph.aheadBehind = promisify(_Graph_aheadBehind);

var _Graph_descendantOf = _Graph.descendantOf;
_Graph.descendantOf = promisify(_Graph_descendantOf);

var _Hashsig = rawApi.Hashsig;

var _Hashsig_create = _Hashsig.create;
_Hashsig.create = promisify(_Hashsig_create);

var _Hashsig_createFromFile = _Hashsig.createFromFile;
_Hashsig.createFromFile = promisify(_Hashsig_createFromFile);

var _Ignore = rawApi.Ignore;

var _Ignore_pathIsIgnored = _Ignore.pathIsIgnored;
_Ignore.pathIsIgnored = promisify(_Ignore_pathIsIgnored);

var _Index = rawApi.Index;

var _Index_add = _Index.prototype.add;
_Index.prototype.add = promisify(_Index_add);

var _Index_addAll = _Index.prototype.addAll;
_Index.prototype.addAll = promisify(_Index_addAll);

var _Index_addByPath = _Index.prototype.addByPath;
_Index.prototype.addByPath = promisify(_Index_addByPath);

var _Index_clear = _Index.prototype.clear;
_Index.prototype.clear = promisify(_Index_clear);

var _Index_conflictAdd = _Index.prototype.conflictAdd;
_Index.prototype.conflictAdd = promisify(_Index_conflictAdd);

var _Index_conflictCleanup = _Index.prototype.conflictCleanup;
_Index.prototype.conflictCleanup = promisify(_Index_conflictCleanup);

var _Index_conflictGet = _Index.prototype.conflictGet;
_Index.prototype.conflictGet = promisify(_Index_conflictGet);

var _Index_conflictRemove = _Index.prototype.conflictRemove;
_Index.prototype.conflictRemove = promisify(_Index_conflictRemove);

var _Index_find = _Index.prototype.find;
_Index.prototype.find = promisify(_Index_find);

var _Index_findPrefix = _Index.prototype.findPrefix;
_Index.prototype.findPrefix = promisify(_Index_findPrefix);

var _Index_open = _Index.open;
_Index.open = promisify(_Index_open);

var _Index_read = _Index.prototype.read;
_Index.prototype.read = promisify(_Index_read);

var _Index_readTree = _Index.prototype.readTree;
_Index.prototype.readTree = promisify(_Index_readTree);

var _Index_remove = _Index.prototype.remove;
_Index.prototype.remove = promisify(_Index_remove);

var _Index_removeAll = _Index.prototype.removeAll;
_Index.prototype.removeAll = promisify(_Index_removeAll);

var _Index_removeByPath = _Index.prototype.removeByPath;
_Index.prototype.removeByPath = promisify(_Index_removeByPath);

var _Index_removeDirectory = _Index.prototype.removeDirectory;
_Index.prototype.removeDirectory = promisify(_Index_removeDirectory);

var _Index_updateAll = _Index.prototype.updateAll;
_Index.prototype.updateAll = promisify(_Index_updateAll);

var _Index_write = _Index.prototype.write;
_Index.prototype.write = promisify(_Index_write);

var _Index_writeTree = _Index.prototype.writeTree;
_Index.prototype.writeTree = promisify(_Index_writeTree);

var _Index_writeTreeTo = _Index.prototype.writeTreeTo;
_Index.prototype.writeTreeTo = promisify(_Index_writeTreeTo);

var _IndexConflictIterator = rawApi.IndexConflictIterator;

var _IndexConflictIterator_create = _IndexConflictIterator.create;
_IndexConflictIterator.create = promisify(_IndexConflictIterator_create);

rawApi.IndexEntry = util.deprecate(function IndexEntry() {
  try {
    require("./deprecated/structs/IndexEntry").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of IndexEntry is deprecated and will be removed in an upcoming version");
var _IndexIterator = rawApi.IndexIterator;

var _IndexIterator_create = _IndexIterator.create;
_IndexIterator.create = promisify(_IndexIterator_create);

var _IndexNameEntry = rawApi.IndexNameEntry;

var _IndexNameEntry_add = _IndexNameEntry.add;
_IndexNameEntry.add = promisify(_IndexNameEntry_add);

var _IndexNameEntry_clear = _IndexNameEntry.clear;
_IndexNameEntry.clear = promisify(_IndexNameEntry_clear);

var _IndexReucEntry = rawApi.IndexReucEntry;

var _IndexReucEntry_add = _IndexReucEntry.add;
_IndexReucEntry.add = promisify(_IndexReucEntry_add);

var _IndexReucEntry_clear = _IndexReucEntry.clear;
_IndexReucEntry.clear = promisify(_IndexReucEntry_clear);

var _IndexReucEntry_find = _IndexReucEntry.find;
_IndexReucEntry.find = promisify(_IndexReucEntry_find);

var _IndexReucEntry_remove = _IndexReucEntry.remove;
_IndexReucEntry.remove = promisify(_IndexReucEntry_remove);

rawApi.IndexTime = util.deprecate(function IndexTime() {
  try {
    require("./deprecated/structs/IndexTime").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of IndexTime is deprecated and will be removed in an upcoming version");
var _Libgit2 = rawApi.Libgit2;
var _Mailmap = rawApi.Mailmap;

var _Mailmap_addEntry = _Mailmap.prototype.addEntry;
_Mailmap.prototype.addEntry = promisify(_Mailmap_addEntry);

var _Mailmap_fromBuffer = _Mailmap.fromBuffer;
_Mailmap.fromBuffer = promisify(_Mailmap_fromBuffer);

var _Mailmap_fromRepository = _Mailmap.fromRepository;
_Mailmap.fromRepository = promisify(_Mailmap_fromRepository);

var _Mailmap_create = _Mailmap.create;
_Mailmap.create = promisify(_Mailmap_create);

var _Mailmap_resolve = _Mailmap.prototype.resolve;
_Mailmap.prototype.resolve = promisify(_Mailmap_resolve);

var _Mailmap_resolveSignature = _Mailmap.prototype.resolveSignature;
_Mailmap.prototype.resolveSignature = promisify(_Mailmap_resolveSignature);

var _Merge = rawApi.Merge;

var _Merge_merge = _Merge.merge;
_Merge.merge = promisify(_Merge_merge);

var _Merge_analysis = _Merge.analysis;
_Merge.analysis = promisify(_Merge_analysis);

var _Merge_analysisForRef = _Merge.analysisForRef;
_Merge.analysisForRef = promisify(_Merge_analysisForRef);

var _Merge_base = _Merge.base;
_Merge.base = promisify(_Merge_base);

var _Merge_bases = _Merge.bases;
_Merge.bases = promisify(_Merge_bases);

var _Merge_commits = _Merge.commits;
_Merge.commits = promisify(_Merge_commits);

var _Merge_trees = _Merge.trees;
_Merge.trees = promisify(_Merge_trees);

rawApi.MergeFileInput = util.deprecate(function MergeFileInput() {
  try {
    require("./deprecated/structs/MergeFileInput").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of MergeFileInput is deprecated and will be removed in an upcoming version");
rawApi.MergeFileOptions = util.deprecate(function MergeFileOptions() {
  try {
    require("./deprecated/structs/MergeFileOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of MergeFileOptions is deprecated and will be removed in an upcoming version");
rawApi.MergeOptions = util.deprecate(function MergeOptions() {
  try {
    require("./deprecated/structs/MergeOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of MergeOptions is deprecated and will be removed in an upcoming version");
var _Note = rawApi.Note;

var _Note_commitIteratorNew = _Note.commitIteratorNew;
_Note.commitIteratorNew = promisify(_Note_commitIteratorNew);

var _Note_commitRead = _Note.commitRead;
_Note.commitRead = promisify(_Note_commitRead);

var _Note_commitRemove = _Note.commitRemove;
_Note.commitRemove = promisify(_Note_commitRemove);

var _Note_create = _Note.create;
_Note.create = promisify(_Note_create);

var _Note_defaultRef = _Note.defaultRef;
_Note.defaultRef = promisify(_Note_defaultRef);

var _Note_foreach = _Note.foreach;
_Note.foreach = promisify(_Note_foreach);

var _Note_read = _Note.read;
_Note.read = promisify(_Note_read);

var _Note_remove = _Note.remove;
_Note.remove = promisify(_Note_remove);

var _Object = rawApi.Object;

var _Object_dup = _Object.prototype.dup;
_Object.prototype.dup = promisify(_Object_dup);

var _Object_lookup = _Object.lookup;
_Object.lookup = promisify(_Object_lookup);

var _Object_lookupByPath = _Object.prototype.lookupByPath;
_Object.prototype.lookupByPath = promisify(_Object_lookupByPath);

var _Object_lookupPrefix = _Object.lookupPrefix;
_Object.lookupPrefix = promisify(_Object_lookupPrefix);

var _Object_peel = _Object.prototype.peel;
_Object.prototype.peel = promisify(_Object_peel);

var _Object_shortId = _Object.prototype.shortId;
_Object.prototype.shortId = promisify(_Object_shortId);

var _Odb = rawApi.Odb;

var _Odb_addDiskAlternate = _Odb.prototype.addDiskAlternate;
_Odb.prototype.addDiskAlternate = promisify(_Odb_addDiskAlternate);

var _Odb_existsPrefix = _Odb.prototype.existsPrefix;
_Odb.prototype.existsPrefix = promisify(_Odb_existsPrefix);

var _Odb_hashfile = _Odb.hashfile;
_Odb.hashfile = promisify(_Odb_hashfile);

var _Odb_open = _Odb.open;
_Odb.open = promisify(_Odb_open);

var _Odb_read = _Odb.prototype.read;
_Odb.prototype.read = promisify(_Odb_read);

var _Odb_readPrefix = _Odb.prototype.readPrefix;
_Odb.prototype.readPrefix = promisify(_Odb_readPrefix);

var _Odb_write = _Odb.prototype.write;
_Odb.prototype.write = promisify(_Odb_write);

var _OdbObject = rawApi.OdbObject;
var _Oid = rawApi.Oid;
var _OidShorten = rawApi.OidShorten;
var _Packbuilder = rawApi.Packbuilder;

var _Packbuilder_insert = _Packbuilder.prototype.insert;
_Packbuilder.prototype.insert = promisify(_Packbuilder_insert);

var _Packbuilder_insertCommit = _Packbuilder.prototype.insertCommit;
_Packbuilder.prototype.insertCommit = promisify(_Packbuilder_insertCommit);

var _Packbuilder_insertRecur = _Packbuilder.prototype.insertRecur;
_Packbuilder.prototype.insertRecur = promisify(_Packbuilder_insertRecur);

var _Packbuilder_insertWalk = _Packbuilder.prototype.insertWalk;
_Packbuilder.prototype.insertWalk = promisify(_Packbuilder_insertWalk);

var _Patch = rawApi.Patch;

var _Patch_fromBlobs = _Patch.fromBlobs;
_Patch.fromBlobs = promisify(_Patch_fromBlobs);

var _Patch_fromDiff = _Patch.fromDiff;
_Patch.fromDiff = promisify(_Patch_fromDiff);

var _Patch_getHunk = _Patch.prototype.getHunk;
_Patch.prototype.getHunk = promisify(_Patch_getHunk);

var _Patch_getLineInHunk = _Patch.prototype.getLineInHunk;
_Patch.prototype.getLineInHunk = promisify(_Patch_getLineInHunk);

var _Patch_convenientFromDiff = _Patch.convenientFromDiff;
_Patch.convenientFromDiff = promisify(_Patch_convenientFromDiff);

var _Path = rawApi.Path;
var _Pathspec = rawApi.Pathspec;

var _Pathspec_matchDiff = _Pathspec.prototype.matchDiff;
_Pathspec.prototype.matchDiff = promisify(_Pathspec_matchDiff);

var _Pathspec_matchIndex = _Pathspec.prototype.matchIndex;
_Pathspec.prototype.matchIndex = promisify(_Pathspec_matchIndex);

var _Pathspec_matchTree = _Pathspec.prototype.matchTree;
_Pathspec.prototype.matchTree = promisify(_Pathspec_matchTree);

var _Pathspec_matchWorkdir = _Pathspec.prototype.matchWorkdir;
_Pathspec.prototype.matchWorkdir = promisify(_Pathspec_matchWorkdir);

var _PathspecMatchList = rawApi.PathspecMatchList;
rawApi.ProxyOptions = util.deprecate(function ProxyOptions() {
  try {
    require("./deprecated/structs/ProxyOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of ProxyOptions is deprecated and will be removed in an upcoming version");
rawApi.PushOptions = util.deprecate(function PushOptions() {
  try {
    require("./deprecated/structs/PushOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of PushOptions is deprecated and will be removed in an upcoming version");
var _Rebase = rawApi.Rebase;

var _Rebase_abort = _Rebase.prototype.abort;
_Rebase.prototype.abort = promisify(_Rebase_abort);

var _Rebase_commit = _Rebase.prototype.commit;
_Rebase.prototype.commit = promisify(_Rebase_commit);

var _Rebase_init = _Rebase.init;
_Rebase.init = promisify(_Rebase_init);

var _Rebase_next = _Rebase.prototype.next;
_Rebase.prototype.next = promisify(_Rebase_next);

var _Rebase_open = _Rebase.open;
_Rebase.open = promisify(_Rebase_open);

rawApi.RebaseOptions = util.deprecate(function RebaseOptions() {
  try {
    require("./deprecated/structs/RebaseOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RebaseOptions is deprecated and will be removed in an upcoming version");
rawApi.RebaseOptions = util.deprecate(function RebaseOptions() {
  try {
    require("./deprecated/structs/RebaseOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RebaseOptions is deprecated and will be removed in an upcoming version");
var _Refdb = rawApi.Refdb;

var _Refdb_open = _Refdb.open;
_Refdb.open = promisify(_Refdb_open);

var _Reference = rawApi.Reference;

var _Reference_create = _Reference.create;
_Reference.create = promisify(_Reference_create);

var _Reference_createMatching = _Reference.createMatching;
_Reference.createMatching = promisify(_Reference_createMatching);

var _Reference_dup = _Reference.prototype.dup;
_Reference.prototype.dup = promisify(_Reference_dup);

var _Reference_dwim = _Reference.dwim;
_Reference.dwim = promisify(_Reference_dwim);

var _Reference_list = _Reference.list;
_Reference.list = promisify(_Reference_list);

var _Reference_lookup = _Reference.lookup;
_Reference.lookup = promisify(_Reference_lookup);

var _Reference_nameToId = _Reference.nameToId;
_Reference.nameToId = promisify(_Reference_nameToId);

var _Reference_peel = _Reference.prototype.peel;
_Reference.prototype.peel = promisify(_Reference_peel);

var _Reference_rename = _Reference.prototype.rename;
_Reference.prototype.rename = promisify(_Reference_rename);

var _Reference_resolve = _Reference.prototype.resolve;
_Reference.prototype.resolve = promisify(_Reference_resolve);

var _Reference_setTarget = _Reference.prototype.setTarget;
_Reference.prototype.setTarget = promisify(_Reference_setTarget);

var _Reference_symbolicCreate = _Reference.symbolicCreate;
_Reference.symbolicCreate = promisify(_Reference_symbolicCreate);

var _Reference_symbolicCreateMatching = _Reference.symbolicCreateMatching;
_Reference.symbolicCreateMatching = promisify(_Reference_symbolicCreateMatching);

var _Reference_symbolicSetTarget = _Reference.prototype.symbolicSetTarget;
_Reference.prototype.symbolicSetTarget = promisify(_Reference_symbolicSetTarget);

var _Reflog = rawApi.Reflog;

var _Reflog_read = _Reflog.read;
_Reflog.read = promisify(_Reflog_read);

var _Reflog_write = _Reflog.prototype.write;
_Reflog.prototype.write = promisify(_Reflog_write);

var _ReflogEntry = rawApi.ReflogEntry;
var _Refspec = rawApi.Refspec;

var _Refspec_parse = _Refspec.parse;
_Refspec.parse = promisify(_Refspec_parse);

var _Remote = rawApi.Remote;

var _Remote_connect = _Remote.prototype.connect;
_Remote.prototype.connect = promisify(_Remote_connect);

var _Remote_create = _Remote.create;
_Remote.create = promisify(_Remote_create);

var _Remote_createAnonymous = _Remote.createAnonymous;
_Remote.createAnonymous = promisify(_Remote_createAnonymous);

var _Remote_createDetached = _Remote.createDetached;
_Remote.createDetached = promisify(_Remote_createDetached);

var _Remote_createWithFetchspec = _Remote.createWithFetchspec;
_Remote.createWithFetchspec = promisify(_Remote_createWithFetchspec);

var _Remote_createWithOpts = _Remote.createWithOpts;
_Remote.createWithOpts = promisify(_Remote_createWithOpts);

var _Remote_defaultBranch = _Remote.prototype.defaultBranch;
_Remote.prototype.defaultBranch = promisify(_Remote_defaultBranch);

var _Remote_delete = _Remote.delete;
_Remote.delete = promisify(_Remote_delete);

var _Remote_disconnect = _Remote.prototype.disconnect;
_Remote.prototype.disconnect = promisify(_Remote_disconnect);

var _Remote_download = _Remote.prototype.download;
_Remote.prototype.download = promisify(_Remote_download);

var _Remote_dup = _Remote.prototype.dup;
_Remote.prototype.dup = promisify(_Remote_dup);

var _Remote_fetch = _Remote.prototype.fetch;
_Remote.prototype.fetch = promisify(_Remote_fetch);

var _Remote_getFetchRefspecs = _Remote.prototype.getFetchRefspecs;
_Remote.prototype.getFetchRefspecs = promisify(_Remote_getFetchRefspecs);

var _Remote_getPushRefspecs = _Remote.prototype.getPushRefspecs;
_Remote.prototype.getPushRefspecs = promisify(_Remote_getPushRefspecs);

var _Remote_list = _Remote.list;
_Remote.list = promisify(_Remote_list);

var _Remote_lookup = _Remote.lookup;
_Remote.lookup = promisify(_Remote_lookup);

var _Remote_prune = _Remote.prototype.prune;
_Remote.prototype.prune = promisify(_Remote_prune);

var _Remote_push = _Remote.prototype.push;
_Remote.prototype.push = promisify(_Remote_push);

var _Remote_rename = _Remote.rename;
_Remote.rename = promisify(_Remote_rename);

var _Remote_updateTips = _Remote.prototype.updateTips;
_Remote.prototype.updateTips = promisify(_Remote_updateTips);

var _Remote_upload = _Remote.prototype.upload;
_Remote.prototype.upload = promisify(_Remote_upload);

var _Remote_referenceList = _Remote.prototype.referenceList;
_Remote.prototype.referenceList = promisify(_Remote_referenceList);

rawApi.RemoteCallbacks = util.deprecate(function RemoteCallbacks() {
  try {
    require("./deprecated/structs/RemoteCallbacks").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RemoteCallbacks is deprecated and will be removed in an upcoming version");
rawApi.RemoteCallbacks = util.deprecate(function RemoteCallbacks() {
  try {
    require("./deprecated/structs/RemoteCallbacks").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RemoteCallbacks is deprecated and will be removed in an upcoming version");
rawApi.RemoteCreateOptions = util.deprecate(function RemoteCreateOptions() {
  try {
    require("./deprecated/structs/RemoteCreateOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RemoteCreateOptions is deprecated and will be removed in an upcoming version");
rawApi.RemoteCreateOptions = util.deprecate(function RemoteCreateOptions() {
  try {
    require("./deprecated/structs/RemoteCreateOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RemoteCreateOptions is deprecated and will be removed in an upcoming version");
var _Repository = rawApi.Repository;

var _Repository_config = _Repository.prototype.config;
_Repository.prototype.config = promisify(_Repository_config);

var _Repository_discover = _Repository.discover;
_Repository.discover = promisify(_Repository_discover);

var _Repository_fetchheadForeach = _Repository.prototype.fetchheadForeach;
_Repository.prototype.fetchheadForeach = promisify(_Repository_fetchheadForeach);

var _Repository_head = _Repository.prototype.head;
_Repository.prototype.head = promisify(_Repository_head);

var _Repository_headForWorktree = _Repository.prototype.headForWorktree;
_Repository.prototype.headForWorktree = promisify(_Repository_headForWorktree);

var _Repository_index = _Repository.prototype.index;
_Repository.prototype.index = promisify(_Repository_index);

var _Repository_init = _Repository.init;
_Repository.init = promisify(_Repository_init);

var _Repository_initExt = _Repository.initExt;
_Repository.initExt = promisify(_Repository_initExt);

var _Repository_itemPath = _Repository.prototype.itemPath;
_Repository.prototype.itemPath = promisify(_Repository_itemPath);

var _Repository_mergeheadForeach = _Repository.prototype.mergeheadForeach;
_Repository.prototype.mergeheadForeach = promisify(_Repository_mergeheadForeach);

var _Repository_odb = _Repository.prototype.odb;
_Repository.prototype.odb = promisify(_Repository_odb);

var _Repository_open = _Repository.open;
_Repository.open = promisify(_Repository_open);

var _Repository_openBare = _Repository.openBare;
_Repository.openBare = promisify(_Repository_openBare);

var _Repository_openExt = _Repository.openExt;
_Repository.openExt = promisify(_Repository_openExt);

var _Repository_openFromWorktree = _Repository.openFromWorktree;
_Repository.openFromWorktree = promisify(_Repository_openFromWorktree);

var _Repository_refdb = _Repository.prototype.refdb;
_Repository.prototype.refdb = promisify(_Repository_refdb);

var _Repository_setHead = _Repository.prototype.setHead;
_Repository.prototype.setHead = promisify(_Repository_setHead);

var _Repository_wrapOdb = _Repository.wrapOdb;
_Repository.wrapOdb = promisify(_Repository_wrapOdb);

var _Repository_cleanup = _Repository.prototype.cleanup;
_Repository.prototype.cleanup = promisify(_Repository_cleanup);

var _Repository_getReferences = _Repository.prototype.getReferences;
_Repository.prototype.getReferences = promisify(_Repository_getReferences);

var _Repository_getSubmodules = _Repository.prototype.getSubmodules;
_Repository.prototype.getSubmodules = promisify(_Repository_getSubmodules);

var _Repository_getRemotes = _Repository.prototype.getRemotes;
_Repository.prototype.getRemotes = promisify(_Repository_getRemotes);

var _Repository_refreshReferences = _Repository.prototype.refreshReferences;
_Repository.prototype.refreshReferences = promisify(_Repository_refreshReferences);

var _Repository_statistics = _Repository.prototype.statistics;
_Repository.prototype.statistics = promisify(_Repository_statistics);

rawApi.RepositoryInitOptions = util.deprecate(function RepositoryInitOptions() {
  try {
    require("./deprecated/structs/RepositoryInitOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RepositoryInitOptions is deprecated and will be removed in an upcoming version");
var _Reset = rawApi.Reset;

var _Reset_reset = _Reset.reset;
_Reset.reset = promisify(_Reset_reset);

var _Reset_default = _Reset.default;
_Reset.default = promisify(_Reset_default);

var _Reset_fromAnnotated = _Reset.fromAnnotated;
_Reset.fromAnnotated = promisify(_Reset_fromAnnotated);

var _Revert = rawApi.Revert;

var _Revert_revert = _Revert.revert;
_Revert.revert = promisify(_Revert_revert);

var _Revert_commit = _Revert.commit;
_Revert.commit = promisify(_Revert_commit);

rawApi.RevertOptions = util.deprecate(function RevertOptions() {
  try {
    require("./deprecated/structs/RevertOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of RevertOptions is deprecated and will be removed in an upcoming version");
var _Revparse = rawApi.Revparse;

var _Revparse_single = _Revparse.single;
_Revparse.single = promisify(_Revparse_single);

var _Revwalk = rawApi.Revwalk;

var _Revwalk_next = _Revwalk.prototype.next;
_Revwalk.prototype.next = promisify(_Revwalk_next);

var _Revwalk_commitWalk = _Revwalk.prototype.commitWalk;
_Revwalk.prototype.commitWalk = promisify(_Revwalk_commitWalk);

var _Revwalk_fastWalk = _Revwalk.prototype.fastWalk;
_Revwalk.prototype.fastWalk = promisify(_Revwalk_fastWalk);

var _Revwalk_fileHistoryWalk = _Revwalk.prototype.fileHistoryWalk;
_Revwalk.prototype.fileHistoryWalk = promisify(_Revwalk_fileHistoryWalk);

var _Signature = rawApi.Signature;

var _Signature_default = _Signature.default;
_Signature.default = promisify(_Signature_default);

var _Signature_fromBuffer = _Signature.fromBuffer;
_Signature.fromBuffer = promisify(_Signature_fromBuffer);

var _Stash = rawApi.Stash;

var _Stash_apply = _Stash.apply;
_Stash.apply = promisify(_Stash_apply);

var _Stash_drop = _Stash.drop;
_Stash.drop = promisify(_Stash_drop);

var _Stash_foreach = _Stash.foreach;
_Stash.foreach = promisify(_Stash_foreach);

var _Stash_pop = _Stash.pop;
_Stash.pop = promisify(_Stash_pop);

var _Stash_save = _Stash.save;
_Stash.save = promisify(_Stash_save);

rawApi.StashApplyOptions = util.deprecate(function StashApplyOptions() {
  try {
    require("./deprecated/structs/StashApplyOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of StashApplyOptions is deprecated and will be removed in an upcoming version");
rawApi.StashApplyOptions = util.deprecate(function StashApplyOptions() {
  try {
    require("./deprecated/structs/StashApplyOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of StashApplyOptions is deprecated and will be removed in an upcoming version");
var _Status = rawApi.Status;

var _Status_file = _Status.file;
_Status.file = promisify(_Status_file);

var _Status_foreach = _Status.foreach;
_Status.foreach = promisify(_Status_foreach);

var _Status_foreachExt = _Status.foreachExt;
_Status.foreachExt = promisify(_Status_foreachExt);

var _StatusList = rawApi.StatusList;

var _StatusList_create = _StatusList.create;
_StatusList.create = promisify(_StatusList_create);

rawApi.StatusOptions = util.deprecate(function StatusOptions() {
  try {
    require("./deprecated/structs/StatusOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of StatusOptions is deprecated and will be removed in an upcoming version");
rawApi.StatusOptions = util.deprecate(function StatusOptions() {
  try {
    require("./deprecated/structs/StatusOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of StatusOptions is deprecated and will be removed in an upcoming version");
var _Strarray = rawApi.Strarray;
var _Submodule = rawApi.Submodule;

var _Submodule_addFinalize = _Submodule.prototype.addFinalize;
_Submodule.prototype.addFinalize = promisify(_Submodule_addFinalize);

var _Submodule_addSetup = _Submodule.addSetup;
_Submodule.addSetup = promisify(_Submodule_addSetup);

var _Submodule_addToIndex = _Submodule.prototype.addToIndex;
_Submodule.prototype.addToIndex = promisify(_Submodule_addToIndex);

var _Submodule_clone = _Submodule.prototype.clone;
_Submodule.prototype.clone = promisify(_Submodule_clone);

var _Submodule_foreach = _Submodule.foreach;
_Submodule.foreach = promisify(_Submodule_foreach);

var _Submodule_init = _Submodule.prototype.init;
_Submodule.prototype.init = promisify(_Submodule_init);

var _Submodule_location = _Submodule.prototype.location;
_Submodule.prototype.location = promisify(_Submodule_location);

var _Submodule_lookup = _Submodule.lookup;
_Submodule.lookup = promisify(_Submodule_lookup);

var _Submodule_open = _Submodule.prototype.open;
_Submodule.prototype.open = promisify(_Submodule_open);

var _Submodule_repoInit = _Submodule.prototype.repoInit;
_Submodule.prototype.repoInit = promisify(_Submodule_repoInit);

var _Submodule_resolveUrl = _Submodule.resolveUrl;
_Submodule.resolveUrl = promisify(_Submodule_resolveUrl);

var _Submodule_setIgnore = _Submodule.setIgnore;
_Submodule.setIgnore = promisify(_Submodule_setIgnore);

var _Submodule_setUpdate = _Submodule.setUpdate;
_Submodule.setUpdate = promisify(_Submodule_setUpdate);

var _Submodule_setUrl = _Submodule.setUrl;
_Submodule.setUrl = promisify(_Submodule_setUrl);

var _Submodule_status = _Submodule.status;
_Submodule.status = promisify(_Submodule_status);

var _Submodule_sync = _Submodule.prototype.sync;
_Submodule.prototype.sync = promisify(_Submodule_sync);

var _Submodule_update = _Submodule.prototype.update;
_Submodule.prototype.update = promisify(_Submodule_update);

rawApi.SubmoduleUpdateOptions = util.deprecate(function SubmoduleUpdateOptions() {
  try {
    require("./deprecated/structs/SubmoduleUpdateOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of SubmoduleUpdateOptions is deprecated and will be removed in an upcoming version");
var _Tag = rawApi.Tag;

var _Tag_annotationCreate = _Tag.annotationCreate;
_Tag.annotationCreate = promisify(_Tag_annotationCreate);

var _Tag_create = _Tag.create;
_Tag.create = promisify(_Tag_create);

var _Tag_createFromBuffer = _Tag.createFromBuffer;
_Tag.createFromBuffer = promisify(_Tag_createFromBuffer);

var _Tag_createLightweight = _Tag.createLightweight;
_Tag.createLightweight = promisify(_Tag_createLightweight);

var _Tag_delete = _Tag.delete;
_Tag.delete = promisify(_Tag_delete);

var _Tag_dup = _Tag.prototype.dup;
_Tag.prototype.dup = promisify(_Tag_dup);

var _Tag_list = _Tag.list;
_Tag.list = promisify(_Tag_list);

var _Tag_listMatch = _Tag.listMatch;
_Tag.listMatch = promisify(_Tag_listMatch);

var _Tag_lookup = _Tag.lookup;
_Tag.lookup = promisify(_Tag_lookup);

var _Tag_lookupPrefix = _Tag.lookupPrefix;
_Tag.lookupPrefix = promisify(_Tag_lookupPrefix);

var _Tag_peel = _Tag.prototype.peel;
_Tag.prototype.peel = promisify(_Tag_peel);

var _Tag_target = _Tag.prototype.target;
_Tag.prototype.target = promisify(_Tag_target);

var _Transaction = rawApi.Transaction;

var _Transaction_create = _Transaction.create;
_Transaction.create = promisify(_Transaction_create);

var _Tree = rawApi.Tree;

var _Tree_createUpdated = _Tree.prototype.createUpdated;
_Tree.prototype.createUpdated = promisify(_Tree_createUpdated);

var _Tree_dup = _Tree.prototype.dup;
_Tree.prototype.dup = promisify(_Tree_dup);

var _Tree_entryByPath = _Tree.prototype.entryByPath;
_Tree.prototype.entryByPath = promisify(_Tree_entryByPath);

var _Tree_lookup = _Tree.lookup;
_Tree.lookup = promisify(_Tree_lookup);

var _Tree_lookupPrefix = _Tree.lookupPrefix;
_Tree.lookupPrefix = promisify(_Tree_lookupPrefix);

var _TreeEntry = rawApi.TreeEntry;

var _TreeEntry_toObject = _TreeEntry.prototype.toObject;
_TreeEntry.prototype.toObject = promisify(_TreeEntry_toObject);

rawApi.TreeUpdate = util.deprecate(function TreeUpdate() {
  try {
    require("./deprecated/structs/TreeUpdate").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of TreeUpdate is deprecated and will be removed in an upcoming version");
var _Treebuilder = rawApi.Treebuilder;

var _Treebuilder_create = _Treebuilder.create;
_Treebuilder.create = promisify(_Treebuilder_create);

var _Treebuilder_write = _Treebuilder.prototype.write;
_Treebuilder.prototype.write = promisify(_Treebuilder_write);

var _Worktree = rawApi.Worktree;

var _Worktree_add = _Worktree.add;
_Worktree.add = promisify(_Worktree_add);

var _Worktree_isPrunable = _Worktree.prototype.isPrunable;
_Worktree.prototype.isPrunable = promisify(_Worktree_isPrunable);

var _Worktree_list = _Worktree.list;
_Worktree.list = promisify(_Worktree_list);

var _Worktree_lookup = _Worktree.lookup;
_Worktree.lookup = promisify(_Worktree_lookup);

var _Worktree_openFromRepository = _Worktree.openFromRepository;
_Worktree.openFromRepository = promisify(_Worktree_openFromRepository);

var _Worktree_prune = _Worktree.prototype.prune;
_Worktree.prototype.prune = promisify(_Worktree_prune);

rawApi.WorktreeAddOptions = util.deprecate(function WorktreeAddOptions() {
  try {
    require("./deprecated/structs/WorktreeAddOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of WorktreeAddOptions is deprecated and will be removed in an upcoming version");
rawApi.WorktreeAddOptions = util.deprecate(function WorktreeAddOptions() {
  try {
    require("./deprecated/structs/WorktreeAddOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of WorktreeAddOptions is deprecated and will be removed in an upcoming version");
rawApi.WorktreePruneOptions = util.deprecate(function WorktreePruneOptions() {
  try {
    require("./deprecated/structs/WorktreePruneOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of WorktreePruneOptions is deprecated and will be removed in an upcoming version");
rawApi.WorktreePruneOptions = util.deprecate(function WorktreePruneOptions() {
  try {
    require("./deprecated/structs/WorktreePruneOptions").call(this, rawApi);
  } catch (error) {/* allow these to be undefined */}
}, "Instantiation of WorktreePruneOptions is deprecated and will be removed in an upcoming version");

var _ConvenientPatch = rawApi.ConvenientPatch;
var _ConvenientPatch_hunks = _ConvenientPatch.prototype.hunks;
_ConvenientPatch.prototype.hunks = promisify(_ConvenientPatch_hunks);

var _ConvenientHunk = rawApi.ConvenientHunk;
var _ConvenientHunk_lines = _ConvenientHunk.prototype.lines;
_ConvenientHunk.prototype.lines = promisify(_ConvenientHunk_lines);

var _FilterRegistry = rawApi.FilterRegistry;
var _FilterRegistry_register = _FilterRegistry.register;
_FilterRegistry.register = promisify(_FilterRegistry_register);

var _FilterRegistry_unregister = _FilterRegistry.unregister;
_FilterRegistry.unregister = promisify(_FilterRegistry_unregister);

/* jshint ignore:end */

// Set the exports prototype to the raw API.
exports.__proto__ = rawApi;

var importExtension = function importExtension(name) {
  try {
    require("./" + name);
  } catch (unhandledException) {
    if (unhandledException.code != "MODULE_NOT_FOUND") {
      throw unhandledException;
    }
  }
};

// Load up utils
rawApi.Utils = {};
require("./utils/lookup_wrapper");
require("./utils/shallow_clone");

// Load up extra types;
require("./status_file");
require("./enums.js");

// Import extensions
// [Manual] extensions
importExtension("filter_registry");
importExtension("annotated_commit");
importExtension("apply");
importExtension("apply_options");
importExtension("apply_options");
importExtension("attr");
importExtension("blame");
importExtension("blame_hunk");
importExtension("blame_options");
importExtension("blob");
importExtension("blob_filter_options");
importExtension("blob_filter_options");
importExtension("branch");
importExtension("branch_iterator");
importExtension("buf");
importExtension("cert");
importExtension("cert_hostkey");
importExtension("cert_x509");
importExtension("checkout");
importExtension("checkout_options");
importExtension("checkout_perfdata");
importExtension("cherrypick");
importExtension("cherrypick_options");
importExtension("clone");
importExtension("clone_options");
importExtension("commit");
importExtension("config");
importExtension("config_entry");
importExtension("config_entry");
importExtension("config_iterator");
importExtension("configmap");
importExtension("credential");
importExtension("describe_format_options");
importExtension("describe_format_options");
importExtension("describe_options");
importExtension("describe_options");
importExtension("describe_result");
importExtension("diff");
importExtension("diff_binary");
importExtension("diff_binary_file");
importExtension("diff_delta");
importExtension("diff_file");
importExtension("diff_find_options");
importExtension("diff_hunk");
importExtension("diff_line");
importExtension("diff_options");
importExtension("diff_patchid_options");
importExtension("diff_perfdata");
importExtension("diff_stats");
importExtension("error");
importExtension("fetch");
importExtension("fetch_options");
importExtension("fetch_options");
importExtension("filter");
importExtension("filter");
importExtension("filter_list");
importExtension("filter_source");
importExtension("graph");
importExtension("hashsig");
importExtension("ignore");
importExtension("index");
importExtension("index_conflict_iterator");
importExtension("index_entry");
importExtension("index_iterator");
importExtension("index_name_entry");
importExtension("index_reuc_entry");
importExtension("index_time");
importExtension("indexer_progress");
importExtension("libgit2");
importExtension("mailmap");
importExtension("merge");
importExtension("merge_file_input");
importExtension("merge_file_options");
importExtension("merge_options");
importExtension("note");
importExtension("note_iterator");
importExtension("object");
importExtension("odb");
importExtension("odb_object");
importExtension("oid");
importExtension("oid_shorten");
importExtension("oidarray");
importExtension("packbuilder");
importExtension("patch");
importExtension("path");
importExtension("pathspec");
importExtension("pathspec_match_list");
importExtension("proxy");
importExtension("proxy_options");
importExtension("push_options");
importExtension("push_update");
importExtension("rebase");
importExtension("rebase_operation");
importExtension("rebase_options");
importExtension("rebase_options");
importExtension("refdb");
importExtension("reference");
importExtension("reflog");
importExtension("reflog_entry");
importExtension("refspec");
importExtension("remote");
importExtension("remote_callbacks");
importExtension("remote_callbacks");
importExtension("remote_create_options");
importExtension("remote_create_options");
importExtension("remote_head");
importExtension("remote_head");
importExtension("repository");
importExtension("repository_init_options");
importExtension("reset");
importExtension("revert");
importExtension("revert_options");
importExtension("revparse");
importExtension("revspec");
importExtension("revwalk");
importExtension("signature");
importExtension("stash");
importExtension("stash_apply_options");
importExtension("stash_apply_options");
importExtension("status");
importExtension("status_entry");
importExtension("status_list");
importExtension("status_options");
importExtension("status_options");
importExtension("strarray");
importExtension("submodule");
importExtension("submodule_update_options");
importExtension("tag");
importExtension("time");
importExtension("trace");
importExtension("transaction");
importExtension("transport");
importExtension("tree");
importExtension("tree_entry");
importExtension("tree_update");
importExtension("treebuilder");
importExtension("worktree");
importExtension("worktree_add_options");
importExtension("worktree_add_options");
importExtension("worktree_prune_options");
importExtension("worktree_prune_options");
importExtension("writestream");
/* jshint ignore:start */

// Inherit directly from the original Apply object.
_Apply.apply.__proto__ = _Apply;

// Ensure we're using the correct prototype.
_Apply.apply.prototype = _Apply.prototype;

// Assign the function as the root
rawApi.Apply = _Apply.apply;

// Inherit directly from the original Cherrypick object.
_Cherrypick.cherrypick.__proto__ = _Cherrypick;

// Ensure we're using the correct prototype.
_Cherrypick.cherrypick.prototype = _Cherrypick.prototype;

// Assign the function as the root
rawApi.Cherrypick = _Cherrypick.cherrypick;

// Inherit directly from the original Clone object.
_Clone.clone.__proto__ = _Clone;

// Ensure we're using the correct prototype.
_Clone.clone.prototype = _Clone.prototype;

// Assign the function as the root
rawApi.Clone = _Clone.clone;

// Inherit directly from the original Merge object.
_Merge.merge.__proto__ = _Merge;

// Ensure we're using the correct prototype.
_Merge.merge.prototype = _Merge.prototype;

// Assign the function as the root
rawApi.Merge = _Merge.merge;

// Inherit directly from the original Reset object.
_Reset.reset.__proto__ = _Reset;

// Ensure we're using the correct prototype.
_Reset.reset.prototype = _Reset.prototype;

// Assign the function as the root
rawApi.Reset = _Reset.reset;

// Inherit directly from the original Revert object.
_Revert.revert.__proto__ = _Revert;

// Ensure we're using the correct prototype.
_Revert.revert.prototype = _Revert.prototype;

// Assign the function as the root
rawApi.Revert = _Revert.revert;

/* jshint ignore:end */

// Set version.
exports.version = require("../package").version;

// Expose Promise implementation.
exports.Promise = Promise;
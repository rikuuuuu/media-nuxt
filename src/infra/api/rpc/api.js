/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.entity = (function() {

    /**
     * Namespace entity.
     * @exports entity
     * @namespace
     */
    var entity = {};

    entity.AdminUser = (function() {

        /**
         * Properties of an AdminUser.
         * @memberof entity
         * @interface IAdminUser
         * @property {string|null} [id] AdminUser id
         * @property {string|null} [name] AdminUser name
         * @property {string|null} [email] AdminUser email
         */

        /**
         * Constructs a new AdminUser.
         * @memberof entity
         * @classdesc Represents an AdminUser.
         * @implements IAdminUser
         * @constructor
         * @param {entity.IAdminUser=} [properties] Properties to set
         */
        function AdminUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminUser id.
         * @member {string} id
         * @memberof entity.AdminUser
         * @instance
         */
        AdminUser.prototype.id = "";

        /**
         * AdminUser name.
         * @member {string} name
         * @memberof entity.AdminUser
         * @instance
         */
        AdminUser.prototype.name = "";

        /**
         * AdminUser email.
         * @member {string} email
         * @memberof entity.AdminUser
         * @instance
         */
        AdminUser.prototype.email = "";

        /**
         * Creates a new AdminUser instance using the specified properties.
         * @function create
         * @memberof entity.AdminUser
         * @static
         * @param {entity.IAdminUser=} [properties] Properties to set
         * @returns {entity.AdminUser} AdminUser instance
         */
        AdminUser.create = function create(properties) {
            return new AdminUser(properties);
        };

        /**
         * Encodes the specified AdminUser message. Does not implicitly {@link entity.AdminUser.verify|verify} messages.
         * @function encode
         * @memberof entity.AdminUser
         * @static
         * @param {entity.IAdminUser} message AdminUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified AdminUser message, length delimited. Does not implicitly {@link entity.AdminUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.AdminUser
         * @static
         * @param {entity.IAdminUser} message AdminUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminUser message from the specified reader or buffer.
         * @function decode
         * @memberof entity.AdminUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.AdminUser} AdminUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.AdminUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.AdminUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.AdminUser} AdminUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminUser message.
         * @function verify
         * @memberof entity.AdminUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates an AdminUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.AdminUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.AdminUser} AdminUser
         */
        AdminUser.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.AdminUser)
                return object;
            var message = new $root.entity.AdminUser();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from an AdminUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.AdminUser
         * @static
         * @param {entity.AdminUser} message AdminUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.email = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this AdminUser to JSON.
         * @function toJSON
         * @memberof entity.AdminUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdminUser;
    })();

    entity.AdminUserID = (function() {

        /**
         * Properties of an AdminUserID.
         * @memberof entity
         * @interface IAdminUserID
         * @property {string|null} [id] AdminUserID id
         */

        /**
         * Constructs a new AdminUserID.
         * @memberof entity
         * @classdesc Represents an AdminUserID.
         * @implements IAdminUserID
         * @constructor
         * @param {entity.IAdminUserID=} [properties] Properties to set
         */
        function AdminUserID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminUserID id.
         * @member {string} id
         * @memberof entity.AdminUserID
         * @instance
         */
        AdminUserID.prototype.id = "";

        /**
         * Creates a new AdminUserID instance using the specified properties.
         * @function create
         * @memberof entity.AdminUserID
         * @static
         * @param {entity.IAdminUserID=} [properties] Properties to set
         * @returns {entity.AdminUserID} AdminUserID instance
         */
        AdminUserID.create = function create(properties) {
            return new AdminUserID(properties);
        };

        /**
         * Encodes the specified AdminUserID message. Does not implicitly {@link entity.AdminUserID.verify|verify} messages.
         * @function encode
         * @memberof entity.AdminUserID
         * @static
         * @param {entity.IAdminUserID} message AdminUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AdminUserID message, length delimited. Does not implicitly {@link entity.AdminUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.AdminUserID
         * @static
         * @param {entity.IAdminUserID} message AdminUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminUserID message from the specified reader or buffer.
         * @function decode
         * @memberof entity.AdminUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.AdminUserID} AdminUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.AdminUserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.AdminUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.AdminUserID} AdminUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminUserID message.
         * @function verify
         * @memberof entity.AdminUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AdminUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.AdminUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.AdminUserID} AdminUserID
         */
        AdminUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.AdminUserID)
                return object;
            var message = new $root.entity.AdminUserID();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AdminUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.AdminUserID
         * @static
         * @param {entity.AdminUserID} message AdminUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminUserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AdminUserID to JSON.
         * @function toJSON
         * @memberof entity.AdminUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdminUserID;
    })();

    entity.CreateAdminUserRequest = (function() {

        /**
         * Properties of a CreateAdminUserRequest.
         * @memberof entity
         * @interface ICreateAdminUserRequest
         * @property {string|null} [email] CreateAdminUserRequest email
         * @property {string|null} [password] CreateAdminUserRequest password
         */

        /**
         * Constructs a new CreateAdminUserRequest.
         * @memberof entity
         * @classdesc Represents a CreateAdminUserRequest.
         * @implements ICreateAdminUserRequest
         * @constructor
         * @param {entity.ICreateAdminUserRequest=} [properties] Properties to set
         */
        function CreateAdminUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAdminUserRequest email.
         * @member {string} email
         * @memberof entity.CreateAdminUserRequest
         * @instance
         */
        CreateAdminUserRequest.prototype.email = "";

        /**
         * CreateAdminUserRequest password.
         * @member {string} password
         * @memberof entity.CreateAdminUserRequest
         * @instance
         */
        CreateAdminUserRequest.prototype.password = "";

        /**
         * Creates a new CreateAdminUserRequest instance using the specified properties.
         * @function create
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {entity.ICreateAdminUserRequest=} [properties] Properties to set
         * @returns {entity.CreateAdminUserRequest} CreateAdminUserRequest instance
         */
        CreateAdminUserRequest.create = function create(properties) {
            return new CreateAdminUserRequest(properties);
        };

        /**
         * Encodes the specified CreateAdminUserRequest message. Does not implicitly {@link entity.CreateAdminUserRequest.verify|verify} messages.
         * @function encode
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {entity.ICreateAdminUserRequest} message CreateAdminUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAdminUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified CreateAdminUserRequest message, length delimited. Does not implicitly {@link entity.CreateAdminUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {entity.ICreateAdminUserRequest} message CreateAdminUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAdminUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAdminUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.CreateAdminUserRequest} CreateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAdminUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.CreateAdminUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAdminUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.CreateAdminUserRequest} CreateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAdminUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAdminUserRequest message.
         * @function verify
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAdminUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a CreateAdminUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.CreateAdminUserRequest} CreateAdminUserRequest
         */
        CreateAdminUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.CreateAdminUserRequest)
                return object;
            var message = new $root.entity.CreateAdminUserRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a CreateAdminUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.CreateAdminUserRequest
         * @static
         * @param {entity.CreateAdminUserRequest} message CreateAdminUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAdminUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this CreateAdminUserRequest to JSON.
         * @function toJSON
         * @memberof entity.CreateAdminUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAdminUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAdminUserRequest;
    })();

    entity.UpdateAdminUserRequest = (function() {

        /**
         * Properties of an UpdateAdminUserRequest.
         * @memberof entity
         * @interface IUpdateAdminUserRequest
         * @property {string|null} [id] UpdateAdminUserRequest id
         * @property {string|null} [name] UpdateAdminUserRequest name
         */

        /**
         * Constructs a new UpdateAdminUserRequest.
         * @memberof entity
         * @classdesc Represents an UpdateAdminUserRequest.
         * @implements IUpdateAdminUserRequest
         * @constructor
         * @param {entity.IUpdateAdminUserRequest=} [properties] Properties to set
         */
        function UpdateAdminUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAdminUserRequest id.
         * @member {string} id
         * @memberof entity.UpdateAdminUserRequest
         * @instance
         */
        UpdateAdminUserRequest.prototype.id = "";

        /**
         * UpdateAdminUserRequest name.
         * @member {string} name
         * @memberof entity.UpdateAdminUserRequest
         * @instance
         */
        UpdateAdminUserRequest.prototype.name = "";

        /**
         * Creates a new UpdateAdminUserRequest instance using the specified properties.
         * @function create
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {entity.IUpdateAdminUserRequest=} [properties] Properties to set
         * @returns {entity.UpdateAdminUserRequest} UpdateAdminUserRequest instance
         */
        UpdateAdminUserRequest.create = function create(properties) {
            return new UpdateAdminUserRequest(properties);
        };

        /**
         * Encodes the specified UpdateAdminUserRequest message. Does not implicitly {@link entity.UpdateAdminUserRequest.verify|verify} messages.
         * @function encode
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {entity.IUpdateAdminUserRequest} message UpdateAdminUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdminUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified UpdateAdminUserRequest message, length delimited. Does not implicitly {@link entity.UpdateAdminUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {entity.IUpdateAdminUserRequest} message UpdateAdminUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdminUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAdminUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.UpdateAdminUserRequest} UpdateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdminUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.UpdateAdminUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAdminUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.UpdateAdminUserRequest} UpdateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdminUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAdminUserRequest message.
         * @function verify
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAdminUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an UpdateAdminUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.UpdateAdminUserRequest} UpdateAdminUserRequest
         */
        UpdateAdminUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.UpdateAdminUserRequest)
                return object;
            var message = new $root.entity.UpdateAdminUserRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an UpdateAdminUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.UpdateAdminUserRequest
         * @static
         * @param {entity.UpdateAdminUserRequest} message UpdateAdminUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAdminUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this UpdateAdminUserRequest to JSON.
         * @function toJSON
         * @memberof entity.UpdateAdminUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAdminUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAdminUserRequest;
    })();

    entity.AccessToken = (function() {

        /**
         * Properties of an AccessToken.
         * @memberof entity
         * @interface IAccessToken
         * @property {string|null} [token] AccessToken token
         */

        /**
         * Constructs a new AccessToken.
         * @memberof entity
         * @classdesc Represents an AccessToken.
         * @implements IAccessToken
         * @constructor
         * @param {entity.IAccessToken=} [properties] Properties to set
         */
        function AccessToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessToken token.
         * @member {string} token
         * @memberof entity.AccessToken
         * @instance
         */
        AccessToken.prototype.token = "";

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @function create
         * @memberof entity.AccessToken
         * @static
         * @param {entity.IAccessToken=} [properties] Properties to set
         * @returns {entity.AccessToken} AccessToken instance
         */
        AccessToken.create = function create(properties) {
            return new AccessToken(properties);
        };

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link entity.AccessToken.verify|verify} messages.
         * @function encode
         * @memberof entity.AccessToken
         * @static
         * @param {entity.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link entity.AccessToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.AccessToken
         * @static
         * @param {entity.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @function decode
         * @memberof entity.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.AccessToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessToken message.
         * @function verify
         * @memberof entity.AccessToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.AccessToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.AccessToken} AccessToken
         */
        AccessToken.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.AccessToken)
                return object;
            var message = new $root.entity.AccessToken();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.AccessToken
         * @static
         * @param {entity.AccessToken} message AccessToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AccessToken to JSON.
         * @function toJSON
         * @memberof entity.AccessToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccessToken;
    })();

    entity.AdminUserList = (function() {

        /**
         * Properties of an AdminUserList.
         * @memberof entity
         * @interface IAdminUserList
         * @property {Array.<entity.IAdminUser>|null} [items] AdminUserList items
         */

        /**
         * Constructs a new AdminUserList.
         * @memberof entity
         * @classdesc Represents an AdminUserList.
         * @implements IAdminUserList
         * @constructor
         * @param {entity.IAdminUserList=} [properties] Properties to set
         */
        function AdminUserList(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminUserList items.
         * @member {Array.<entity.IAdminUser>} items
         * @memberof entity.AdminUserList
         * @instance
         */
        AdminUserList.prototype.items = $util.emptyArray;

        /**
         * Creates a new AdminUserList instance using the specified properties.
         * @function create
         * @memberof entity.AdminUserList
         * @static
         * @param {entity.IAdminUserList=} [properties] Properties to set
         * @returns {entity.AdminUserList} AdminUserList instance
         */
        AdminUserList.create = function create(properties) {
            return new AdminUserList(properties);
        };

        /**
         * Encodes the specified AdminUserList message. Does not implicitly {@link entity.AdminUserList.verify|verify} messages.
         * @function encode
         * @memberof entity.AdminUserList
         * @static
         * @param {entity.IAdminUserList} message AdminUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.entity.AdminUser.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdminUserList message, length delimited. Does not implicitly {@link entity.AdminUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.AdminUserList
         * @static
         * @param {entity.IAdminUserList} message AdminUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminUserList message from the specified reader or buffer.
         * @function decode
         * @memberof entity.AdminUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.AdminUserList} AdminUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.AdminUserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.entity.AdminUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminUserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.AdminUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.AdminUserList} AdminUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminUserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminUserList message.
         * @function verify
         * @memberof entity.AdminUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.entity.AdminUser.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AdminUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.AdminUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.AdminUserList} AdminUserList
         */
        AdminUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.AdminUserList)
                return object;
            var message = new $root.entity.AdminUserList();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".entity.AdminUserList.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".entity.AdminUserList.items: object expected");
                    message.items[i] = $root.entity.AdminUser.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AdminUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.AdminUserList
         * @static
         * @param {entity.AdminUserList} message AdminUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminUserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.entity.AdminUser.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this AdminUserList to JSON.
         * @function toJSON
         * @memberof entity.AdminUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdminUserList;
    })();

    entity.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof entity
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof entity
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {entity.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof entity.Empty
         * @static
         * @param {entity.IEmpty=} [properties] Properties to set
         * @returns {entity.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link entity.Empty.verify|verify} messages.
         * @function encode
         * @memberof entity.Empty
         * @static
         * @param {entity.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link entity.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.Empty
         * @static
         * @param {entity.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof entity.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof entity.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.Empty)
                return object;
            return new $root.entity.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.Empty
         * @static
         * @param {entity.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof entity.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    entity.Pager = (function() {

        /**
         * Properties of a Pager.
         * @memberof entity
         * @interface IPager
         * @property {number|null} [page] Pager page
         * @property {number|null} [offset] Pager offset
         */

        /**
         * Constructs a new Pager.
         * @memberof entity
         * @classdesc Represents a Pager.
         * @implements IPager
         * @constructor
         * @param {entity.IPager=} [properties] Properties to set
         */
        function Pager(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pager page.
         * @member {number} page
         * @memberof entity.Pager
         * @instance
         */
        Pager.prototype.page = 0;

        /**
         * Pager offset.
         * @member {number} offset
         * @memberof entity.Pager
         * @instance
         */
        Pager.prototype.offset = 0;

        /**
         * Creates a new Pager instance using the specified properties.
         * @function create
         * @memberof entity.Pager
         * @static
         * @param {entity.IPager=} [properties] Properties to set
         * @returns {entity.Pager} Pager instance
         */
        Pager.create = function create(properties) {
            return new Pager(properties);
        };

        /**
         * Encodes the specified Pager message. Does not implicitly {@link entity.Pager.verify|verify} messages.
         * @function encode
         * @memberof entity.Pager
         * @static
         * @param {entity.IPager} message Pager message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pager.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            return writer;
        };

        /**
         * Encodes the specified Pager message, length delimited. Does not implicitly {@link entity.Pager.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.Pager
         * @static
         * @param {entity.IPager} message Pager message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pager.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pager message from the specified reader or buffer.
         * @function decode
         * @memberof entity.Pager
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.Pager} Pager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pager.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.Pager();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.int32();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pager message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.Pager
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.Pager} Pager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pager.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pager message.
         * @function verify
         * @memberof entity.Pager
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pager.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            return null;
        };

        /**
         * Creates a Pager message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.Pager
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.Pager} Pager
         */
        Pager.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.Pager)
                return object;
            var message = new $root.entity.Pager();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.offset != null)
                message.offset = object.offset | 0;
            return message;
        };

        /**
         * Creates a plain object from a Pager message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.Pager
         * @static
         * @param {entity.Pager} message Pager
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pager.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.offset = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            return object;
        };

        /**
         * Converts this Pager to JSON.
         * @function toJSON
         * @memberof entity.Pager
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pager.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pager;
    })();

    entity.ArticleID = (function() {

        /**
         * Properties of an ArticleID.
         * @memberof entity
         * @interface IArticleID
         * @property {string|null} [id] ArticleID id
         */

        /**
         * Constructs a new ArticleID.
         * @memberof entity
         * @classdesc Represents an ArticleID.
         * @implements IArticleID
         * @constructor
         * @param {entity.IArticleID=} [properties] Properties to set
         */
        function ArticleID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArticleID id.
         * @member {string} id
         * @memberof entity.ArticleID
         * @instance
         */
        ArticleID.prototype.id = "";

        /**
         * Creates a new ArticleID instance using the specified properties.
         * @function create
         * @memberof entity.ArticleID
         * @static
         * @param {entity.IArticleID=} [properties] Properties to set
         * @returns {entity.ArticleID} ArticleID instance
         */
        ArticleID.create = function create(properties) {
            return new ArticleID(properties);
        };

        /**
         * Encodes the specified ArticleID message. Does not implicitly {@link entity.ArticleID.verify|verify} messages.
         * @function encode
         * @memberof entity.ArticleID
         * @static
         * @param {entity.IArticleID} message ArticleID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArticleID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified ArticleID message, length delimited. Does not implicitly {@link entity.ArticleID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.ArticleID
         * @static
         * @param {entity.IArticleID} message ArticleID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArticleID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArticleID message from the specified reader or buffer.
         * @function decode
         * @memberof entity.ArticleID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.ArticleID} ArticleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArticleID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.ArticleID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArticleID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.ArticleID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.ArticleID} ArticleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArticleID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArticleID message.
         * @function verify
         * @memberof entity.ArticleID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArticleID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an ArticleID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.ArticleID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.ArticleID} ArticleID
         */
        ArticleID.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.ArticleID)
                return object;
            var message = new $root.entity.ArticleID();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an ArticleID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.ArticleID
         * @static
         * @param {entity.ArticleID} message ArticleID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArticleID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this ArticleID to JSON.
         * @function toJSON
         * @memberof entity.ArticleID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArticleID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArticleID;
    })();

    entity.Article = (function() {

        /**
         * Properties of an Article.
         * @memberof entity
         * @interface IArticle
         * @property {string|null} [id] Article id
         * @property {string|null} [title] Article title
         * @property {string|null} [description] Article description
         * @property {string|null} [userID] Article userID
         * @property {string|null} [createdAt] Article createdAt
         * @property {string|null} [updatedAt] Article updatedAt
         */

        /**
         * Constructs a new Article.
         * @memberof entity
         * @classdesc Represents an Article.
         * @implements IArticle
         * @constructor
         * @param {entity.IArticle=} [properties] Properties to set
         */
        function Article(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Article id.
         * @member {string} id
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.id = "";

        /**
         * Article title.
         * @member {string} title
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.title = "";

        /**
         * Article description.
         * @member {string} description
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.description = "";

        /**
         * Article userID.
         * @member {string} userID
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.userID = "";

        /**
         * Article createdAt.
         * @member {string} createdAt
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.createdAt = "";

        /**
         * Article updatedAt.
         * @member {string} updatedAt
         * @memberof entity.Article
         * @instance
         */
        Article.prototype.updatedAt = "";

        /**
         * Creates a new Article instance using the specified properties.
         * @function create
         * @memberof entity.Article
         * @static
         * @param {entity.IArticle=} [properties] Properties to set
         * @returns {entity.Article} Article instance
         */
        Article.create = function create(properties) {
            return new Article(properties);
        };

        /**
         * Encodes the specified Article message. Does not implicitly {@link entity.Article.verify|verify} messages.
         * @function encode
         * @memberof entity.Article
         * @static
         * @param {entity.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userID);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Article message, length delimited. Does not implicitly {@link entity.Article.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.Article
         * @static
         * @param {entity.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Article message from the specified reader or buffer.
         * @function decode
         * @memberof entity.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.Article();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.userID = reader.string();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Article message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Article message.
         * @function verify
         * @memberof entity.Article
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Article.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isString(message.userID))
                    return "userID: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates an Article message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.Article
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.Article} Article
         */
        Article.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.Article)
                return object;
            var message = new $root.entity.Article();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.userID != null)
                message.userID = String(object.userID);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from an Article message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.Article
         * @static
         * @param {entity.Article} message Article
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Article.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.description = "";
                object.userID = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Article to JSON.
         * @function toJSON
         * @memberof entity.Article
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Article.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Article;
    })();

    entity.ArticleList = (function() {

        /**
         * Properties of an ArticleList.
         * @memberof entity
         * @interface IArticleList
         * @property {Array.<entity.IArticle>|null} [items] ArticleList items
         */

        /**
         * Constructs a new ArticleList.
         * @memberof entity
         * @classdesc Represents an ArticleList.
         * @implements IArticleList
         * @constructor
         * @param {entity.IArticleList=} [properties] Properties to set
         */
        function ArticleList(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArticleList items.
         * @member {Array.<entity.IArticle>} items
         * @memberof entity.ArticleList
         * @instance
         */
        ArticleList.prototype.items = $util.emptyArray;

        /**
         * Creates a new ArticleList instance using the specified properties.
         * @function create
         * @memberof entity.ArticleList
         * @static
         * @param {entity.IArticleList=} [properties] Properties to set
         * @returns {entity.ArticleList} ArticleList instance
         */
        ArticleList.create = function create(properties) {
            return new ArticleList(properties);
        };

        /**
         * Encodes the specified ArticleList message. Does not implicitly {@link entity.ArticleList.verify|verify} messages.
         * @function encode
         * @memberof entity.ArticleList
         * @static
         * @param {entity.IArticleList} message ArticleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArticleList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.entity.Article.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArticleList message, length delimited. Does not implicitly {@link entity.ArticleList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.ArticleList
         * @static
         * @param {entity.IArticleList} message ArticleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArticleList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArticleList message from the specified reader or buffer.
         * @function decode
         * @memberof entity.ArticleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.ArticleList} ArticleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArticleList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.ArticleList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.entity.Article.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArticleList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.ArticleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.ArticleList} ArticleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArticleList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArticleList message.
         * @function verify
         * @memberof entity.ArticleList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArticleList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.entity.Article.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ArticleList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.ArticleList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.ArticleList} ArticleList
         */
        ArticleList.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.ArticleList)
                return object;
            var message = new $root.entity.ArticleList();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".entity.ArticleList.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".entity.ArticleList.items: object expected");
                    message.items[i] = $root.entity.Article.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ArticleList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.ArticleList
         * @static
         * @param {entity.ArticleList} message ArticleList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArticleList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.entity.Article.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this ArticleList to JSON.
         * @function toJSON
         * @memberof entity.ArticleList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArticleList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArticleList;
    })();

    entity.CreateArticleRequest = (function() {

        /**
         * Properties of a CreateArticleRequest.
         * @memberof entity
         * @interface ICreateArticleRequest
         * @property {string|null} [title] CreateArticleRequest title
         * @property {string|null} [description] CreateArticleRequest description
         * @property {string|null} [userID] CreateArticleRequest userID
         */

        /**
         * Constructs a new CreateArticleRequest.
         * @memberof entity
         * @classdesc Represents a CreateArticleRequest.
         * @implements ICreateArticleRequest
         * @constructor
         * @param {entity.ICreateArticleRequest=} [properties] Properties to set
         */
        function CreateArticleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateArticleRequest title.
         * @member {string} title
         * @memberof entity.CreateArticleRequest
         * @instance
         */
        CreateArticleRequest.prototype.title = "";

        /**
         * CreateArticleRequest description.
         * @member {string} description
         * @memberof entity.CreateArticleRequest
         * @instance
         */
        CreateArticleRequest.prototype.description = "";

        /**
         * CreateArticleRequest userID.
         * @member {string} userID
         * @memberof entity.CreateArticleRequest
         * @instance
         */
        CreateArticleRequest.prototype.userID = "";

        /**
         * Creates a new CreateArticleRequest instance using the specified properties.
         * @function create
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {entity.ICreateArticleRequest=} [properties] Properties to set
         * @returns {entity.CreateArticleRequest} CreateArticleRequest instance
         */
        CreateArticleRequest.create = function create(properties) {
            return new CreateArticleRequest(properties);
        };

        /**
         * Encodes the specified CreateArticleRequest message. Does not implicitly {@link entity.CreateArticleRequest.verify|verify} messages.
         * @function encode
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {entity.ICreateArticleRequest} message CreateArticleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateArticleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userID);
            return writer;
        };

        /**
         * Encodes the specified CreateArticleRequest message, length delimited. Does not implicitly {@link entity.CreateArticleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {entity.ICreateArticleRequest} message CreateArticleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateArticleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateArticleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.CreateArticleRequest} CreateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateArticleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.CreateArticleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.userID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateArticleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.CreateArticleRequest} CreateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateArticleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateArticleRequest message.
         * @function verify
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateArticleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isString(message.userID))
                    return "userID: string expected";
            return null;
        };

        /**
         * Creates a CreateArticleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.CreateArticleRequest} CreateArticleRequest
         */
        CreateArticleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.CreateArticleRequest)
                return object;
            var message = new $root.entity.CreateArticleRequest();
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.userID != null)
                message.userID = String(object.userID);
            return message;
        };

        /**
         * Creates a plain object from a CreateArticleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.CreateArticleRequest
         * @static
         * @param {entity.CreateArticleRequest} message CreateArticleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateArticleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.description = "";
                object.userID = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            return object;
        };

        /**
         * Converts this CreateArticleRequest to JSON.
         * @function toJSON
         * @memberof entity.CreateArticleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateArticleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateArticleRequest;
    })();

    entity.UpdateArticleRequest = (function() {

        /**
         * Properties of an UpdateArticleRequest.
         * @memberof entity
         * @interface IUpdateArticleRequest
         * @property {string|null} [id] UpdateArticleRequest id
         * @property {string|null} [title] UpdateArticleRequest title
         * @property {string|null} [description] UpdateArticleRequest description
         */

        /**
         * Constructs a new UpdateArticleRequest.
         * @memberof entity
         * @classdesc Represents an UpdateArticleRequest.
         * @implements IUpdateArticleRequest
         * @constructor
         * @param {entity.IUpdateArticleRequest=} [properties] Properties to set
         */
        function UpdateArticleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateArticleRequest id.
         * @member {string} id
         * @memberof entity.UpdateArticleRequest
         * @instance
         */
        UpdateArticleRequest.prototype.id = "";

        /**
         * UpdateArticleRequest title.
         * @member {string} title
         * @memberof entity.UpdateArticleRequest
         * @instance
         */
        UpdateArticleRequest.prototype.title = "";

        /**
         * UpdateArticleRequest description.
         * @member {string} description
         * @memberof entity.UpdateArticleRequest
         * @instance
         */
        UpdateArticleRequest.prototype.description = "";

        /**
         * Creates a new UpdateArticleRequest instance using the specified properties.
         * @function create
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {entity.IUpdateArticleRequest=} [properties] Properties to set
         * @returns {entity.UpdateArticleRequest} UpdateArticleRequest instance
         */
        UpdateArticleRequest.create = function create(properties) {
            return new UpdateArticleRequest(properties);
        };

        /**
         * Encodes the specified UpdateArticleRequest message. Does not implicitly {@link entity.UpdateArticleRequest.verify|verify} messages.
         * @function encode
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {entity.IUpdateArticleRequest} message UpdateArticleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateArticleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified UpdateArticleRequest message, length delimited. Does not implicitly {@link entity.UpdateArticleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {entity.IUpdateArticleRequest} message UpdateArticleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateArticleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateArticleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entity.UpdateArticleRequest} UpdateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateArticleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entity.UpdateArticleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateArticleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entity.UpdateArticleRequest} UpdateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateArticleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateArticleRequest message.
         * @function verify
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateArticleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an UpdateArticleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entity.UpdateArticleRequest} UpdateArticleRequest
         */
        UpdateArticleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.entity.UpdateArticleRequest)
                return object;
            var message = new $root.entity.UpdateArticleRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an UpdateArticleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entity.UpdateArticleRequest
         * @static
         * @param {entity.UpdateArticleRequest} message UpdateArticleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateArticleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.description = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this UpdateArticleRequest to JSON.
         * @function toJSON
         * @memberof entity.UpdateArticleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateArticleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateArticleRequest;
    })();

    return entity;
})();

$root.api = (function() {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    var api = {};

    api.AdminUserService = (function() {

        /**
         * Constructs a new AdminUserService service.
         * @memberof api
         * @classdesc Represents an AdminUserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AdminUserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AdminUserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdminUserService;

        /**
         * Creates new AdminUserService service using the specified rpc implementation.
         * @function create
         * @memberof api.AdminUserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AdminUserService} RPC service. Useful where requests and/or responses are streamed.
         */
        AdminUserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.AdminUserService#getMe}.
         * @memberof api.AdminUserService
         * @typedef GetMeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.AdminUser} [response] AdminUser
         */

        /**
         * Calls GetMe.
         * @function getMe
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IAdminUserID} request AdminUserID message or plain object
         * @param {api.AdminUserService.GetMeCallback} callback Node-style callback called with the error, if any, and AdminUser
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdminUserService.prototype.getMe = function getMe(request, callback) {
            return this.rpcCall(getMe, $root.entity.AdminUserID, $root.entity.AdminUser, request, callback);
        }, "name", { value: "GetMe" });

        /**
         * Calls GetMe.
         * @function getMe
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IAdminUserID} request AdminUserID message or plain object
         * @returns {Promise<entity.AdminUser>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.AdminUserService#create}.
         * @memberof api.AdminUserService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.AdminUser} [response] AdminUser
         */

        /**
         * Calls Create.
         * @function create
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.ICreateAdminUserRequest} request CreateAdminUserRequest message or plain object
         * @param {api.AdminUserService.CreateCallback} callback Node-style callback called with the error, if any, and AdminUser
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdminUserService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.entity.CreateAdminUserRequest, $root.entity.AdminUser, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.ICreateAdminUserRequest} request CreateAdminUserRequest message or plain object
         * @returns {Promise<entity.AdminUser>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.AdminUserService#update}.
         * @memberof api.AdminUserService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.AdminUser} [response] AdminUser
         */

        /**
         * Calls Update.
         * @function update
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IUpdateAdminUserRequest} request UpdateAdminUserRequest message or plain object
         * @param {api.AdminUserService.UpdateCallback} callback Node-style callback called with the error, if any, and AdminUser
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdminUserService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.entity.UpdateAdminUserRequest, $root.entity.AdminUser, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IUpdateAdminUserRequest} request UpdateAdminUserRequest message or plain object
         * @returns {Promise<entity.AdminUser>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.AdminUserService#delete_}.
         * @memberof api.AdminUserService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.Empty} [response] Empty
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IAdminUserID} request AdminUserID message or plain object
         * @param {api.AdminUserService.DeleteCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdminUserService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.entity.AdminUserID, $root.entity.Empty, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof api.AdminUserService
         * @instance
         * @param {entity.IAdminUserID} request AdminUserID message or plain object
         * @returns {Promise<entity.Empty>} Promise
         * @variation 2
         */

        return AdminUserService;
    })();

    api.ArticleService = (function() {

        /**
         * Constructs a new ArticleService service.
         * @memberof api
         * @classdesc Represents an ArticleService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ArticleService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ArticleService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ArticleService;

        /**
         * Creates new ArticleService service using the specified rpc implementation.
         * @function create
         * @memberof api.ArticleService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ArticleService} RPC service. Useful where requests and/or responses are streamed.
         */
        ArticleService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.ArticleService#get}.
         * @memberof api.ArticleService
         * @typedef GetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.Article} [response] Article
         */

        /**
         * Calls Get.
         * @function get
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IArticleID} request ArticleID message or plain object
         * @param {api.ArticleService.GetCallback} callback Node-style callback called with the error, if any, and Article
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ArticleService.prototype.get = function get(request, callback) {
            return this.rpcCall(get, $root.entity.ArticleID, $root.entity.Article, request, callback);
        }, "name", { value: "Get" });

        /**
         * Calls Get.
         * @function get
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IArticleID} request ArticleID message or plain object
         * @returns {Promise<entity.Article>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.ArticleService#getAll}.
         * @memberof api.ArticleService
         * @typedef GetAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.ArticleList} [response] ArticleList
         */

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IPager} request Pager message or plain object
         * @param {api.ArticleService.GetAllCallback} callback Node-style callback called with the error, if any, and ArticleList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ArticleService.prototype.getAll = function getAll(request, callback) {
            return this.rpcCall(getAll, $root.entity.Pager, $root.entity.ArticleList, request, callback);
        }, "name", { value: "GetAll" });

        /**
         * Calls GetAll.
         * @function getAll
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IPager} request Pager message or plain object
         * @returns {Promise<entity.ArticleList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.ArticleService#create}.
         * @memberof api.ArticleService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.Article} [response] Article
         */

        /**
         * Calls Create.
         * @function create
         * @memberof api.ArticleService
         * @instance
         * @param {entity.ICreateArticleRequest} request CreateArticleRequest message or plain object
         * @param {api.ArticleService.CreateCallback} callback Node-style callback called with the error, if any, and Article
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ArticleService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.entity.CreateArticleRequest, $root.entity.Article, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof api.ArticleService
         * @instance
         * @param {entity.ICreateArticleRequest} request CreateArticleRequest message or plain object
         * @returns {Promise<entity.Article>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.ArticleService#update}.
         * @memberof api.ArticleService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.Article} [response] Article
         */

        /**
         * Calls Update.
         * @function update
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IUpdateArticleRequest} request UpdateArticleRequest message or plain object
         * @param {api.ArticleService.UpdateCallback} callback Node-style callback called with the error, if any, and Article
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ArticleService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.entity.UpdateArticleRequest, $root.entity.Article, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IUpdateArticleRequest} request UpdateArticleRequest message or plain object
         * @returns {Promise<entity.Article>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.ArticleService#delete_}.
         * @memberof api.ArticleService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {entity.Empty} [response] Empty
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IArticleID} request ArticleID message or plain object
         * @param {api.ArticleService.DeleteCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ArticleService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.entity.ArticleID, $root.entity.Empty, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof api.ArticleService
         * @instance
         * @param {entity.IArticleID} request ArticleID message or plain object
         * @returns {Promise<entity.Empty>} Promise
         * @variation 2
         */

        return ArticleService;
    })();

    return api;
})();

module.exports = $root;

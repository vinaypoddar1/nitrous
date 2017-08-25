// jshint ignore:start
module.exports = {
  "$schema": "http://interagent.github.io/interagent-hyper-schema",
  "type": [
    "object"
  ],
  "definitions": {
    "account-feature": {
      "description": "An account feature represents a Heroku labs capability that can be enabled or disabled for an account on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Account Feature",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when account feature was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of account feature",
          "example": "Causes account to example.",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "doc_url": {
          "description": "documentation URL of account feature",
          "example": "http://devcenter.heroku.com/articles/example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "enabled": {
          "description": "whether or not account feature has been enabled",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "id": {
          "description": "unique identifier of account feature",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/account-feature/definitions/id"
            },
            {
              "$ref": "#/definitions/account-feature/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of account feature",
          "example": "name",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "state of account feature",
          "example": "public",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when account feature was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for an existing account feature.",
          "href": "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/account-feature"
          },
          "title": "Info"
        },
        {
          "description": "List existing account features.",
          "href": "/account/features",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/account-feature"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update an existing account feature.",
          "href": "/account/features/{(%23%2Fdefinitions%2Faccount-feature%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "enabled": {
                "$ref": "#/definitions/account-feature/definitions/enabled"
              }
            },
            "required": [
              "enabled"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/account-feature"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/account-feature/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/account-feature/definitions/description"
        },
        "doc_url": {
          "$ref": "#/definitions/account-feature/definitions/doc_url"
        },
        "enabled": {
          "$ref": "#/definitions/account-feature/definitions/enabled"
        },
        "id": {
          "$ref": "#/definitions/account-feature/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/account-feature/definitions/name"
        },
        "state": {
          "$ref": "#/definitions/account-feature/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/account-feature/definitions/updated_at"
        }
      }
    },
    "account": {
      "description": "An account represents an individual signed up to use the Heroku platform.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Account",
      "type": [
        "object"
      ],
      "definitions": {
        "allow_tracking": {
          "default": true,
          "description": "whether to allow third party web activity tracking",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "beta": {
          "default": false,
          "description": "whether allowed to utilize beta Heroku features",
          "example": false,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "created_at": {
          "description": "when account was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "unique email address of account",
          "example": "username@example.com",
          "format": "email",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of an account",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/account/definitions/email"
            },
            {
              "$ref": "#/definitions/account/definitions/id"
            }
          ]
        },
        "last_login": {
          "description": "when account last authorized with Heroku",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "name": {
          "description": "full name of the account owner",
          "example": "Tina Edmonds",
          "readOnly": false,
          "type": [
            "string",
            "null"
          ]
        },
        "new_password": {
          "description": "the new password for the account when changing the password",
          "example": "newpassword",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "current password on the account",
          "example": "currentpassword",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "sms_number": {
          "description": "SMS number of account",
          "example": "+1 ***-***-1234",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "suspended_at": {
          "description": "when account was suspended",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "two_factor_authentication": {
          "description": "whether two-factor auth is enabled on the account",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when account was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "verified": {
          "default": false,
          "description": "whether account has been verified with billing information",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        }
      },
      "links": [
        {
          "description": "Info for account.",
          "href": "/account",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Info"
        },
        {
          "description": "Update account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "allow_tracking": {
                "$ref": "#/definitions/account/definitions/allow_tracking"
              },
              "beta": {
                "$ref": "#/definitions/account/definitions/beta"
              },
              "name": {
                "$ref": "#/definitions/account/definitions/name"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Update"
        },
        {
          "description": "Change Email for account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "email": {
                "$ref": "#/definitions/account/definitions/email"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "password",
              "email"
            ],
            "type": [
              "object"
            ]
          },
          "title": "Change Email"
        },
        {
          "description": "Change Password for account.",
          "href": "/account",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "new_password": {
                "$ref": "#/definitions/account/definitions/new_password"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "new_password",
              "password"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Change Password"
        },
        {
          "description": "Delete account. Note that this action cannot be undone.",
          "href": "/account",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Delete"
        },
        {
          "description": "Info for account.",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Info"
        },
        {
          "description": "Update account.",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "allow_tracking": {
                "$ref": "#/definitions/account/definitions/allow_tracking"
              },
              "beta": {
                "$ref": "#/definitions/account/definitions/beta"
              },
              "name": {
                "$ref": "#/definitions/account/definitions/name"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Update"
        },
        {
          "description": "Change Email for account.",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "email": {
                "$ref": "#/definitions/account/definitions/email"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "password",
              "email"
            ],
            "type": [
              "object"
            ]
          },
          "title": "Change Email"
        },
        {
          "description": "Change Password for account.",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "new_password": {
                "$ref": "#/definitions/account/definitions/new_password"
              },
              "password": {
                "$ref": "#/definitions/account/definitions/password"
              }
            },
            "required": [
              "new_password",
              "password"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Change Password"
        },
        {
          "description": "Delete account. Note that this action cannot be undone.",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/account"
          },
          "title": "Delete"
        }
      ],
      "properties": {
        "allow_tracking": {
          "$ref": "#/definitions/account/definitions/allow_tracking"
        },
        "beta": {
          "$ref": "#/definitions/account/definitions/beta"
        },
        "created_at": {
          "$ref": "#/definitions/account/definitions/created_at"
        },
        "email": {
          "$ref": "#/definitions/account/definitions/email"
        },
        "id": {
          "$ref": "#/definitions/account/definitions/id"
        },
        "last_login": {
          "$ref": "#/definitions/account/definitions/last_login"
        },
        "name": {
          "$ref": "#/definitions/account/definitions/name"
        },
        "sms_number": {
          "$ref": "#/definitions/account/definitions/sms_number"
        },
        "suspended_at": {
          "$ref": "#/definitions/account/definitions/suspended_at"
        },
        "two_factor_authentication": {
          "$ref": "#/definitions/account/definitions/two_factor_authentication"
        },
        "updated_at": {
          "$ref": "#/definitions/account/definitions/updated_at"
        },
        "verified": {
          "$ref": "#/definitions/account/definitions/verified"
        },
        "default_organization": {
          "description": "organization selected by default",
          "properties": {
            "id": {
              "$ref": "#/definitions/organization/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/organization/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "addon-attachment": {
      "description": "An add-on attachment represents a connection between an app and an add-on that it has been given access to.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "prototype",
      "strictProperties": true,
      "title": "Heroku Platform API - Add-on Attachment",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when add-on attachment was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this add-on attachment",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "force": {
          "default": false,
          "description": "whether or not to allow existing attachment with same name to be replaced",
          "example": false,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon-attachment/definitions/id"
            }
          ]
        },
        "scopedIdentity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon-attachment/definitions/id"
            },
            {
              "$ref": "#/definitions/addon-attachment/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name for this add-on attachment to this app",
          "example": "DATABASE",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when add-on attachment was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new add-on attachment.",
          "href": "/addon-attachments",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "addon": {
                "$ref": "#/definitions/addon/definitions/identity"
              },
              "app": {
                "$ref": "#/definitions/app/definitions/identity"
              },
              "force": {
                "$ref": "#/definitions/addon-attachment/definitions/force"
              },
              "name": {
                "$ref": "#/definitions/addon-attachment/definitions/name"
              }
            },
            "required": [
              "addon",
              "app"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/addon-attachment"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing add-on attachment.",
          "href": "/addon-attachments/{(%23%2Fdefinitions%2Faddon-attachment%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/addon-attachment"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing add-on attachment.",
          "href": "/addon-attachments/{(%23%2Fdefinitions%2Faddon-attachment%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/addon-attachment"
          },
          "title": "Info"
        },
        {
          "description": "List existing add-on attachments.",
          "href": "/addon-attachments",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon-attachment"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "List existing add-on attachments for an add-on.",
          "href": "/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}/addon-attachments",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon-attachment"
            },
            "type": [
              "array"
            ]
          },
          "title": "List by Add-on"
        },
        {
          "description": "List existing add-on attachments for an app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addon-attachments",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon-attachment"
            },
            "type": [
              "array"
            ]
          },
          "title": "List by App"
        },
        {
          "description": "Info for existing add-on attachment for an app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addon-attachments/{(%23%2Fdefinitions%2Faddon-attachment%2Fdefinitions%2FscopedIdentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/addon-attachment"
          },
          "title": "Info by App"
        }
      ],
      "properties": {
        "addon": {
          "description": "identity of add-on",
          "properties": {
            "id": {
              "$ref": "#/definitions/addon/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/addon/definitions/name"
            },
            "app": {
              "description": "billing application associated with this add-on",
              "type": [
                "object"
              ],
              "properties": {
                "id": {
                  "$ref": "#/definitions/app/definitions/id"
                },
                "name": {
                  "$ref": "#/definitions/app/definitions/name"
                }
              },
              "strictProperties": true
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "app": {
          "description": "application that is attached to add-on",
          "properties": {
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/addon-attachment/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/addon-attachment/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/addon-attachment/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/addon-attachment/definitions/updated_at"
        }
      }
    },
    "addon-service": {
      "description": "Add-on services represent add-ons that may be provisioned for apps. Endpoints under add-on services can be accessed without authentication.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Add-on Service",
      "type": [
        "object"
      ],
      "definitions": {
        "cli_plugin_name": {
          "description": "npm package name of the add-on service's Heroku CLI plugin",
          "example": "heroku-papertrail",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "created_at": {
          "description": "when addon-service was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "human_name": {
          "description": "human-readable name of the addon service provider",
          "example": "Heroku Postgres",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this addon-service",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon-service/definitions/id"
            },
            {
              "$ref": "#/definitions/addon-service/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of this addon-service",
          "example": "heroku-postgresql",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "release status for add-on service",
          "enum": [
            "alpha",
            "beta",
            "ga",
            "shutdown"
          ],
          "example": "ga",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "supports_multiple_installations": {
          "default": false,
          "description": "whether or not apps can have access to more than one instance of this add-on at the same time",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "supports_sharing": {
          "default": false,
          "description": "whether or not apps can have access to add-ons billed to a different app",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when addon-service was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing addon-service.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/addon-service"
          },
          "title": "Info"
        },
        {
          "description": "List existing addon-services.",
          "href": "/addon-services",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon-service"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "cli_plugin_name": {
          "$ref": "#/definitions/addon-service/definitions/cli_plugin_name"
        },
        "created_at": {
          "$ref": "#/definitions/addon-service/definitions/created_at"
        },
        "human_name": {
          "$ref": "#/definitions/addon-service/definitions/human_name"
        },
        "id": {
          "$ref": "#/definitions/addon-service/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/addon-service/definitions/name"
        },
        "state": {
          "$ref": "#/definitions/addon-service/definitions/state"
        },
        "supports_multiple_installations": {
          "$ref": "#/definitions/addon-service/definitions/supports_multiple_installations"
        },
        "supports_sharing": {
          "$ref": "#/definitions/addon-service/definitions/supports_sharing"
        },
        "updated_at": {
          "$ref": "#/definitions/addon-service/definitions/updated_at"
        }
      }
    },
    "addon": {
      "description": "Add-ons represent add-ons that have been provisioned and attached to one or more apps.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Add-on",
      "type": [
        "object"
      ],
      "definitions": {
        "config_vars": {
          "description": "config vars exposed to the owning app by this add-on",
          "example": [
            "FOO",
            "BAZ"
          ],
          "items": {
            "type": [
              "string"
            ]
          },
          "readOnly": true,
          "type": [
            "array"
          ]
        },
        "created_at": {
          "description": "when add-on was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of add-on",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/addon/definitions/id"
            },
            {
              "$ref": "#/definitions/addon/definitions/name"
            }
          ]
        },
        "name": {
          "description": "globally unique name of the add-on",
          "example": "acme-inc-primary-database",
          "pattern": "^[a-zA-Z][A-Za-z0-9_-]+$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "provider_id": {
          "description": "id of this add-on with its provider",
          "example": "abcd1234",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when add-on was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "web_url": {
          "description": "URL for logging into web interface of add-on (e.g. a dashboard)",
          "example": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef",
          "format": "uri",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "attachment": {
                "description": "name for add-on's initial attachment",
                "example": {
                  "name": "DATABASE_FOLLOWER"
                },
                "name": {
                  "$ref": "#/definitions/addon-attachment/definitions/name"
                },
                "type": [
                  "object"
                ]
              },
              "config": {
                "additionalProperties": false,
                "description": "custom add-on provisioning options",
                "example": {
                  "db-version": "1.2.3"
                },
                "patternProperties": {
                  "^\\w+$": {
                    "type": [
                      "string"
                    ]
                  }
                },
                "type": [
                  "object"
                ]
              },
              "plan": {
                "$ref": "#/definitions/plan/definitions/identity"
              }
            },
            "required": [
              "plan"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/addon"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/addon"
          },
          "title": "Delete"
        },
        {
          "description": "Info for an existing add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/addon"
          },
          "title": "Info"
        },
        {
          "description": "List all existing add-ons.",
          "href": "/addons",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Info for an existing add-on.",
          "href": "/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/addon"
          },
          "title": "Info"
        },
        {
          "description": "List existing add-ons for an app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/addon"
            },
            "type": [
              "array"
            ]
          },
          "title": "List by App"
        },
        {
          "description": "Change add-on plan. Some add-ons may not support changing plans. In that case, an error will be returned.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/addons/{(%23%2Fdefinitions%2Faddon%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "plan": {
                "$ref": "#/definitions/plan/definitions/identity"
              }
            },
            "required": [
              "plan"
            ],
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "addon_service": {
          "description": "identity of add-on service",
          "properties": {
            "id": {
              "$ref": "#/definitions/addon-service/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/addon-service/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "app": {
          "description": "billing application associated with this add-on",
          "type": [
            "object"
          ],
          "properties": {
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            }
          },
          "strictProperties": true
        },
        "config_vars": {
          "$ref": "#/definitions/addon/definitions/config_vars"
        },
        "created_at": {
          "$ref": "#/definitions/addon/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/addon/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/addon/definitions/name"
        },
        "plan": {
          "description": "identity of add-on plan",
          "properties": {
            "id": {
              "$ref": "#/definitions/plan/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/plan/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "provider_id": {
          "$ref": "#/definitions/addon/definitions/provider_id"
        },
        "updated_at": {
          "$ref": "#/definitions/addon/definitions/updated_at"
        },
        "web_url": {
          "$ref": "#/definitions/addon/definitions/web_url"
        }
      }
    },
    "app-feature": {
      "description": "An app feature represents a Heroku labs capability that can be enabled or disabled for an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - App Feature",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when app feature was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of app feature",
          "example": "Causes app to example.",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "doc_url": {
          "description": "documentation URL of app feature",
          "example": "http://devcenter.heroku.com/articles/example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "enabled": {
          "description": "whether or not app feature has been enabled",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "id": {
          "description": "unique identifier of app feature",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app-feature/definitions/id"
            },
            {
              "$ref": "#/definitions/app-feature/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of app feature",
          "example": "name",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "state of app feature",
          "example": "public",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when app feature was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for an existing app feature.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/app-feature"
          },
          "title": "Info"
        },
        {
          "description": "List existing app features.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/app-feature"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update an existing app feature.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/features/{(%23%2Fdefinitions%2Fapp-feature%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "enabled": {
                "$ref": "#/definitions/app-feature/definitions/enabled"
              }
            },
            "required": [
              "enabled"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/app-feature"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/app-feature/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/app-feature/definitions/description"
        },
        "doc_url": {
          "$ref": "#/definitions/app-feature/definitions/doc_url"
        },
        "enabled": {
          "$ref": "#/definitions/app-feature/definitions/enabled"
        },
        "id": {
          "$ref": "#/definitions/app-feature/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/app-feature/definitions/name"
        },
        "state": {
          "$ref": "#/definitions/app-feature/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/app-feature/definitions/updated_at"
        }
      }
    },
    "app-setup": {
      "description": "An app setup represents an app on Heroku that is setup using an environment, addons, and scripts described in an app.json manifest file.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Setup API - App Setup",
      "type": [
        "object"
      ],
      "definitions": {
        "id": {
          "description": "unique identifier of app setup",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ],
          "format": "uuid"
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app-setup/definitions/id"
            }
          ]
        },
        "created_at": {
          "description": "when app setup was created",
          "example": "2012-01-01T12:00:00Z",
          "readOnly": true,
          "type": [
            "string"
          ],
          "format": "date-time"
        },
        "updated_at": {
          "description": "when app setup was updated",
          "example": "2012-01-01T12:00:00Z",
          "readOnly": true,
          "type": [
            "string"
          ],
          "format": "date-time"
        },
        "status": {
          "description": "the overall status of app setup",
          "example": "succeeded",
          "enum": [
            "failed",
            "pending",
            "succeeded"
          ],
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "resolved_success_url": {
          "description": "fully qualified success url",
          "example": "https://example.herokuapp.com/welcome",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "failure_message": {
          "description": "reason that app setup has failed",
          "example": "invalid app.json",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "manifest_errors": {
          "description": "errors associated with invalid app.json manifest file",
          "example": [
            "config var FOO is required"
          ],
          "readOnly": true,
          "items": {
            "type": [
              "string"
            ]
          },
          "type": [
            "array"
          ]
        },
        "postdeploy": {
          "description": "result of postdeploy script",
          "type": [
            "object",
            "null"
          ],
          "properties": {
            "output": {
              "description": "output of the postdeploy script",
              "example": "assets precompiled",
              "readOnly": true,
              "type": [
                "string"
              ]
            },
            "exit_code": {
              "description": "The exit code of the postdeploy script",
              "example": 1,
              "readOnly": true,
              "type": [
                "integer"
              ]
            }
          },
          "readOnly": true
        }
      },
      "properties": {
        "id": {
          "$ref": "#/definitions/app-setup/definitions/id"
        },
        "created_at": {
          "$ref": "#/definitions/app-setup/definitions/created_at"
        },
        "updated_at": {
          "$ref": "#/definitions/app-setup/definitions/updated_at"
        },
        "status": {
          "$ref": "#/definitions/app-setup/definitions/status"
        },
        "failure_message": {
          "$ref": "#/definitions/app-setup/definitions/failure_message"
        },
        "app": {
          "description": "identity of app",
          "strictProperties": true,
          "type": [
            "object"
          ],
          "properties": {
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            }
          }
        },
        "build": {
          "description": "identity and status of build",
          "strictProperties": true,
          "type": [
            "null",
            "object"
          ],
          "properties": {
            "id": {
              "$ref": "#/definitions/build/definitions/id"
            },
            "status": {
              "$ref": "#/definitions/build/definitions/status"
            },
            "output_stream_url": {
              "$ref": "#/definitions/build/definitions/output_stream_url"
            }
          }
        },
        "manifest_errors": {
          "$ref": "#/definitions/app-setup/definitions/manifest_errors"
        },
        "postdeploy": {
          "$ref": "#/definitions/app-setup/definitions/postdeploy"
        },
        "resolved_success_url": {
          "$ref": "#/definitions/app-setup/definitions/resolved_success_url"
        }
      },
      "links": [
        {
          "description": "Create a new app setup from a gzipped tar archive containing an app.json manifest file.",
          "title": "Create",
          "rel": "create",
          "method": "POST",
          "href": "/app-setups",
          "schema": {
            "required": [
              "source_blob"
            ],
            "type": [
              "object"
            ],
            "properties": {
              "app": {
                "description": "optional parameters for created app",
                "properties": {
                  "locked": {
                    "$ref": "#/definitions/organization-app/definitions/locked"
                  },
                  "name": {
                    "$ref": "#/definitions/app/definitions/name"
                  },
                  "organization": {
                    "$ref": "#/definitions/organization/definitions/name"
                  },
                  "personal": {
                    "$ref": "#/definitions/organization-app/definitions/personal"
                  },
                  "region": {
                    "$ref": "#/definitions/region/definitions/name"
                  },
                  "stack": {
                    "$ref": "#/definitions/stack/definitions/name"
                  }
                },
                "type": [
                  "object"
                ]
              },
              "source_blob": {
                "description": "gzipped tarball of source code containing app.json manifest file",
                "example": "https://example.com/source.tgz?token=xyz",
                "properties": {
                  "url": {
                    "description": "URL of gzipped tarball of source code containing app.json manifest file",
                    "example": "https://example.com/source.tgz?token=xyz",
                    "readOnly": true,
                    "type": [
                      "string"
                    ]
                  }
                },
                "type": [
                  "object"
                ]
              },
              "overrides": {
                "description": "overrides of keys in the app.json manifest file",
                "example": {
                  "env": {
                    "FOO": "bar",
                    "BAZ": "qux"
                  }
                },
                "properties": {
                  "env": {
                    "description": "overrides of the env specified in the app.json manifest file",
                    "example": {
                      "FOO": "bar",
                      "BAZ": "qux"
                    },
                    "readOnly": true,
                    "additionalProperties": false,
                    "patternProperties": {
                      "^\\w+$": {
                        "type": [
                          "string"
                        ]
                      }
                    },
                    "type": [
                      "object"
                    ]
                  }
                },
                "type": [
                  "object"
                ]
              }
            }
          },
          "targetSchema": {
            "$ref": "#/definitions/app-setup"
          }
        },
        {
          "description": "Get the status of an app setup.",
          "title": "Info",
          "rel": "self",
          "method": "GET",
          "href": "/app-setups/{(%23%2Fdefinitions%2Fapp-setup%2Fdefinitions%2Fidentity)}",
          "targetSchema": {
            "$ref": "#/definitions/app-setup"
          }
        }
      ]
    },
    "app-transfer": {
      "description": "An app transfer represents a two party interaction for transferring ownership of an app.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - App Transfer",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when app transfer was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of app transfer",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app-transfer/definitions/id"
            },
            {
              "$ref": "#/definitions/app/definitions/name"
            }
          ]
        },
        "state": {
          "description": "the current state of an app transfer",
          "enum": [
            "pending",
            "accepted",
            "declined"
          ],
          "example": "pending",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when app transfer was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new app transfer.",
          "href": "/account/app-transfers",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "app": {
                "$ref": "#/definitions/app/definitions/identity"
              },
              "recipient": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "app",
              "recipient"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/app-transfer"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing app transfer",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/app-transfer"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing app transfer.",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/app-transfer"
          },
          "title": "Info"
        },
        {
          "description": "List existing apps transfers.",
          "href": "/account/app-transfers",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/app-transfer"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update an existing app transfer.",
          "href": "/account/app-transfers/{(%23%2Fdefinitions%2Fapp-transfer%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "state": {
                "$ref": "#/definitions/app-transfer/definitions/state"
              }
            },
            "required": [
              "state"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/app-transfer"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "app": {
          "description": "app involved in the transfer",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/app-transfer/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/app-transfer/definitions/id"
        },
        "owner": {
          "description": "identity of the owner of the transfer",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "recipient": {
          "description": "identity of the recipient of the transfer",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "state": {
          "$ref": "#/definitions/app-transfer/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/app-transfer/definitions/updated_at"
        }
      }
    },
    "app": {
      "description": "An app represents the program that you would like to deploy and run on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - App",
      "type": [
        "object"
      ],
      "definitions": {
        "archived_at": {
          "description": "when app was archived",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "buildpack_provided_description": {
          "description": "description from buildpack of app",
          "example": "Ruby/Rack",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "created_at": {
          "description": "when app was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "git_url": {
          "description": "git repo URL of app",
          "example": "git@heroku.com:example.git",
          "pattern": "^git@heroku\\.com:[a-z][a-z0-9-]{2,29}\\.git$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of app",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app/definitions/id"
            },
            {
              "$ref": "#/definitions/app/definitions/name"
            }
          ]
        },
        "maintenance": {
          "default": false,
          "description": "maintenance status of app",
          "example": false,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "name": {
          "description": "unique name of app",
          "example": "example",
          "pattern": "^[a-z][a-z0-9-]{2,29}$",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "released_at": {
          "default": null,
          "description": "when app was released",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "repo_size": {
          "default": null,
          "description": "git repo size in bytes of app",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "slug_size": {
          "default": null,
          "description": "slug size in bytes of app",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "updated_at": {
          "description": "when app was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "web_url": {
          "description": "web URL of app",
          "example": "https://example.herokuapp.com/",
          "format": "uri",
          "pattern": "^https?://[a-z][a-z0-9-]{3,30}\\.herokuapp\\.com/$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "process_tier": {
          "description": "Process tier for the app",
          "enum": [
            "traditional",
            "free",
            "hobby",
            "production",
            "private"
          ],
          "example": "hobby",
          "readOnly": false,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new app.",
          "href": "/apps",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/app/definitions/name"
              },
              "region": {
                "$ref": "#/definitions/region/definitions/identity"
              },
              "stack": {
                "$ref": "#/definitions/stack/definitions/identity"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/app"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/app"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/app"
          },
          "title": "Info"
        },
        {
          "description": "List existing apps.",
          "href": "/apps",
          "method": "GET",
          "ranges": [
            "id",
            "name",
            "updated_at"
          ],
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/app"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update an existing app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "build_stack": {
                "$ref": "#/definitions/stack/definitions/identity"
              },
              "maintenance": {
                "$ref": "#/definitions/app/definitions/maintenance"
              },
              "name": {
                "$ref": "#/definitions/app/definitions/name"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/app"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "archived_at": {
          "$ref": "#/definitions/app/definitions/archived_at"
        },
        "buildpack_provided_description": {
          "$ref": "#/definitions/app/definitions/buildpack_provided_description"
        },
        "build_stack": {
          "description": "identity of the stack that will be used for new builds",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/app/definitions/created_at"
        },
        "git_url": {
          "$ref": "#/definitions/app/definitions/git_url"
        },
        "id": {
          "$ref": "#/definitions/app/definitions/id"
        },
        "maintenance": {
          "$ref": "#/definitions/app/definitions/maintenance"
        },
        "name": {
          "$ref": "#/definitions/app/definitions/name"
        },
        "owner": {
          "description": "identity of app owner",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "region": {
          "description": "identity of app region",
          "properties": {
            "id": {
              "$ref": "#/definitions/region/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/region/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "released_at": {
          "$ref": "#/definitions/app/definitions/released_at"
        },
        "repo_size": {
          "$ref": "#/definitions/app/definitions/repo_size"
        },
        "slug_size": {
          "$ref": "#/definitions/app/definitions/slug_size"
        },
        "stack": {
          "description": "identity of app stack",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/app/definitions/updated_at"
        },
        "web_url": {
          "$ref": "#/definitions/app/definitions/web_url"
        },
        "process_tier": {
          "$ref": "#/definitions/app/definitions/process_tier"
        }
      }
    },
    "build-result": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "A build result contains the output from a build.",
      "title": "Heroku Build API - Build Result",
      "stability": "production",
      "strictProperties": true,
      "type": [
        "object"
      ],
      "definitions": {
        "identity": {
        },
        "exit_code": {
          "description": "status from the build",
          "example": 0,
          "readOnly": true,
          "type": [
            "number"
          ]
        },
        "line": {
          "description": "a single line of output to STDOUT or STDERR from the build.",
          "strictProperties": true,
          "type": [
            "object"
          ],
          "example": {
            "stream": "STDOUT",
            "line": "-----> Ruby app detected\n"
          },
          "readOnly": true,
          "definitions": {
            "stream": {
              "type": [
                "string"
              ],
              "enum": [
                "STDOUT",
                "STDERR"
              ],
              "description": "The output stream where the line was sent.",
              "example": "STDOUT",
              "readOnly": true
            },
            "line": {
              "type": [
                "string"
              ],
              "example": "-----> Ruby app detected\n",
              "readOnly": true,
              "description": "A line of output from the build."
            }
          },
          "properties": {
            "stream": {
              "$ref": "#/definitions/build-result/definitions/line/definitions/stream"
            },
            "line": {
              "$ref": "#/definitions/build-result/definitions/line/definitions/line"
            }
          }
        }
      },
      "links": [
        {
          "description": "Info for existing result.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds/{(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)}/result",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/build-result"
          },
          "title": "Info"
        }
      ],
      "properties": {
        "build": {
          "description": "identity of build",
          "properties": {
            "id": {
              "$ref": "#/definitions/build/definitions/id"
            },
            "status": {
              "$ref": "#/definitions/build/definitions/status"
            },
            "output_stream_url": {
              "$ref": "#/definitions/build/definitions/output_stream_url"
            }
          },
          "type": [
            "object"
          ]
        },
        "exit_code": {
          "$ref": "#/definitions/build-result/definitions/exit_code"
        },
        "lines": {
          "type": [
            "array"
          ],
          "items": {
            "$ref": "#/definitions/build-result/definitions/line"
          },
          "description": "A list of all the lines of a build's output.",
          "example": [
            {
              "line": "-----> Ruby app detected\n",
              "stream": "STDOUT"
            }
          ]
        }
      }
    },
    "build": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "A build represents the process of transforming a code tarball into a slug",
      "title": "Heroku Build API - Build",
      "stability": "production",
      "strictProperties": true,
      "type": [
        "object"
      ],
      "definitions": {
        "buildpack": {
          "description": "Buildpack to execute in a build",
          "type": [
            "object"
          ],
          "properties": {
            "url": {
              "$ref": "#/definitions/buildpack-installation/definitions/url"
            }
          }
        },
        "created_at": {
          "description": "when build was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of build",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/build/definitions/id"
            }
          ]
        },
        "output_stream_url": {
          "description": "Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`).",
          "example": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "source_blob": {
          "description": "location of gzipped tarball of source code used to create build",
          "properties": {
            "url": {
              "description": "URL where gzipped tar archive of source code for build was downloaded.",
              "example": "https://example.com/source.tgz?token=xyz",
              "readOnly": true,
              "type": [
                "string"
              ]
            },
            "version": {
              "description": "Version of the gzipped tarball.",
              "example": "v1.3.0",
              "readOnly": true,
              "type": [
                "string",
                "null"
              ]
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "status": {
          "description": "status of build",
          "enum": [
            "failed",
            "pending",
            "succeeded"
          ],
          "example": "succeeded",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when build was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new build.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds",
          "method": "POST",
          "rel": "create",
          "schema": {
            "type": [
              "object"
            ],
            "properties": {
              "source_blob": {
                "$ref": "#/definitions/build/definitions/source_blob"
              }
            },
            "required": [
              "source_blob"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/build"
          },
          "title": "Create"
        },
        {
          "description": "Info for existing build.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds/{(%23%2Fdefinitions%2Fbuild%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/build"
          },
          "title": "Info"
        },
        {
          "description": "List existing build.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/builds",
          "method": "GET",
          "ranges": [
            "id",
            "started_at"
          ],
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/build"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "app": {
          "description": "app that the build belongs to",
          "properties": {
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "buildpacks": {
          "description": "buildpacks executed for this build, in order",
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/build/definitions/buildpack"
          }
        },
        "created_at": {
          "$ref": "#/definitions/build/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/build/definitions/id"
        },
        "output_stream_url": {
          "$ref": "#/definitions/build/definitions/output_stream_url"
        },
        "source_blob": {
          "$ref": "#/definitions/build/definitions/source_blob"
        },
        "slug": {
          "description": "slug created by this build",
          "properties": {
            "id": {
              "$ref": "#/definitions/slug/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object",
            "null"
          ]
        },
        "status": {
          "$ref": "#/definitions/build/definitions/status"
        },
        "updated_at": {
          "$ref": "#/definitions/build/definitions/updated_at"
        },
        "user": {
          "description": "user that started the build",
          "properties": {
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            },
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      }
    },
    "buildpack-installation": {
      "description": "A buildpack installation represents a buildpack that will be run against an app.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Buildpack Installations",
      "type": [
        "object"
      ],
      "definitions": {
        "ordinal": {
          "description": "determines the order in which the buildpacks will execute",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "update": {
          "additionalProperties": false,
          "description": "Properties to update a buildpack installation",
          "properties": {
            "buildpack": {
              "$ref": "#/definitions/buildpack-installation/definitions/url"
            }
          },
          "readOnly": false,
          "required": [
            "buildpack"
          ],
          "type": [
            "object"
          ]
        },
        "url": {
          "description": "location of the buildpack for the app",
          "example": "https://github.com/heroku/heroku-buildpack-ruby",
          "readOnly": false,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Update an app's buildpack installations.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/buildpack-installations",
          "method": "PUT",
          "rel": "update",
          "schema": {
            "properties": {
              "updates": {
                "items": {
                  "$ref": "#/definitions/buildpack-installation/definitions/update"
                },
                "type": [
                  "array"
                ]
              }
            },
            "required": [
              "updates"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/buildpack-installation"
            },
            "type": [
              "array"
            ]
          },
          "title": "Update"
        },
        {
          "description": "List an app's existing buildpack installations.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/buildpack-installations",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/buildpack-installation"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "ordinal": {
          "$ref": "#/definitions/buildpack-installation/definitions/ordinal"
        },
        "buildpack": {
          "description": "buildpack",
          "properties": {
            "url": {
              "$ref": "#/definitions/buildpack-installation/definitions/url"
            }
          },
          "type": [
            "object"
          ]
        }
      }
    },
    "collaborator": {
      "description": "A collaborator represents an account that has been given access to an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "title": "Heroku Platform API - Collaborator",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when collaborator was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "invited email address of collaborator",
          "example": "collaborator@example.com",
          "format": "email",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of collaborator",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/collaborator/definitions/email"
            },
            {
              "$ref": "#/definitions/collaborator/definitions/id"
            }
          ]
        },
        "silent": {
          "default": false,
          "description": "whether to suppress email invitation when creating collaborator",
          "example": false,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when collaborator was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "silent": {
                "$ref": "#/definitions/collaborator/definitions/silent"
              },
              "user": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "user"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/collaborator"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/collaborator"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing collaborator.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Fcollaborator%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/collaborator"
          },
          "title": "Info"
        },
        {
          "description": "List existing collaborators.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/collaborator"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "app": {
          "description": "app collaborator belongs to",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/collaborator/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/collaborator/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/collaborator/definitions/updated_at"
        },
        "user": {
          "description": "identity of collaborated account",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      },
      "required": [
        "app",
        "created_at",
        "id",
        "updated_at",
        "user"
      ]
    },
    "config-var": {
      "description": "Config Vars allow you to manage the configuration information provided to an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Config Vars",
      "type": [
        "object"
      ],
      "definitions": {
        "config_vars": {
          "additionalProperties": false,
          "description": "hash of config vars",
          "example": {
            "FOO": "bar",
            "BAZ": "qux"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "type": [
            "object"
          ]
        }
      },
      "links": [
        {
          "description": "Get config-vars for app.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/config-var/definitions/config_vars"
          },
          "title": "Info"
        },
        {
          "description": "Update config-vars for app. You can update existing config-vars by setting them again, and remove by setting it to `NULL`.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/config-vars",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "additionalProperties": false,
            "description": "hash of config changes – update values or delete by seting it to NULL",
            "example": {
              "FOO": "bar",
              "BAZ": "qux"
            },
            "patternProperties": {
              "^\\w+$": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/config-var/definitions/config_vars"
          },
          "title": "Update"
        }
      ],
      "example": {
        "FOO": "bar",
        "BAZ": "qux"
      },
      "patternProperties": {
        "^\\w+$": {
          "type": [
            "string"
          ]
        }
      }
    },
    "credit": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "A credit represents value that will be used up before further charges are assigned to an account.",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - Credit",
      "type": [
        "object"
      ],
      "definitions": {
        "amount": {
          "description": "total value of credit in cents",
          "example": 10000,
          "type": [
            "number"
          ]
        },
        "balance": {
          "description": "remaining value of credit in cents",
          "example": 5000,
          "type": [
            "number"
          ]
        },
        "created_at": {
          "description": "when credit was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "expires_at": {
          "description": "when credit will expire",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of credit",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/credit/definitions/id"
            }
          ]
        },
        "title": {
          "description": "a name for credit",
          "example": "gift card",
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when credit was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new credit.",
          "href": "/account/credits",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "code1": {
                "description": "first code from a discount card",
                "example": "012abc",
                "type": [
                  "string"
                ]
              },
              "code2": {
                "description": "second code from a discount card",
                "example": "012abc",
                "type": [
                  "string"
                ]
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/credit"
          },
          "title": "Create"
        },
        {
          "description": "Info for existing credit.",
          "href": "/account/credits/{(%23%2Fdefinitions%2Fcredit%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/credit"
          },
          "title": "Info"
        },
        {
          "description": "List existing credits.",
          "href": "/account/credits",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/credit"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "amount": {
          "$ref": "#/definitions/credit/definitions/amount"
        },
        "balance": {
          "$ref": "#/definitions/credit/definitions/balance"
        },
        "created_at": {
          "$ref": "#/definitions/credit/definitions/created_at"
        },
        "expires_at": {
          "$ref": "#/definitions/credit/definitions/expires_at"
        },
        "id": {
          "$ref": "#/definitions/credit/definitions/id"
        },
        "title": {
          "$ref": "#/definitions/credit/definitions/title"
        },
        "updated_at": {
          "$ref": "#/definitions/credit/definitions/updated_at"
        }
      }
    },
    "domain": {
      "description": "Domains define what web routes should be routed to an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Domain",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when domain was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "hostname": {
          "description": "full hostname",
          "example": "subdomain.example.com",
          "format": "uri",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this domain",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/domain/definitions/id"
            },
            {
              "$ref": "#/definitions/domain/definitions/hostname"
            }
          ]
        },
        "updated_at": {
          "description": "when domain was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new domain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "hostname": {
                "$ref": "#/definitions/domain/definitions/hostname"
              }
            },
            "required": [
              "hostname"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/domain"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing domain",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/domain"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing domain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains/{(%23%2Fdefinitions%2Fdomain%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/domain"
          },
          "title": "Info"
        },
        {
          "description": "List existing domains.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/domains",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/domain"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "app": {
          "description": "app that owns the domain",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/domain/definitions/created_at"
        },
        "hostname": {
          "$ref": "#/definitions/domain/definitions/hostname"
        },
        "id": {
          "$ref": "#/definitions/domain/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/domain/definitions/updated_at"
        }
      }
    },
    "dyno": {
      "description": "Dynos encapsulate running processes of an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Dyno",
      "type": [
        "object"
      ],
      "definitions": {
        "attach": {
          "description": "whether to stream output or not",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "attach_url": {
          "description": "a URL to stream output from for attached processes or null for non-attached processes",
          "example": "rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "command": {
          "description": "command used to start this process",
          "example": "bash",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when dyno was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "env": {
          "additionalProperties": false,
          "description": "custom environment to add to the dyno config vars",
          "example": {
            "COLUMNS": "80",
            "LINES": "24"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string"
              ]
            }
          },
          "readOnly": false,
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "id": {
          "description": "unique identifier of this dyno",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/dyno/definitions/id"
            },
            {
              "$ref": "#/definitions/dyno/definitions/name"
            }
          ]
        },
        "name": {
          "description": "the name of this process on this dyno",
          "example": "run.1",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "size": {
          "description": "dyno size (default: \"standard-1X\")",
          "example": "standard-1X",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "current status of process (either: crashed, down, idle, starting, or up)",
          "example": "up",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "type": {
          "description": "type of process",
          "example": "run",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when process last changed state",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "attach": {
                "$ref": "#/definitions/dyno/definitions/attach"
              },
              "command": {
                "$ref": "#/definitions/dyno/definitions/command"
              },
              "env": {
                "$ref": "#/definitions/dyno/definitions/env"
              },
              "size": {
                "$ref": "#/definitions/dyno/definitions/size"
              }
            },
            "required": [
              "command"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/dyno"
          },
          "title": "Create"
        },
        {
          "description": "Restart dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "empty",
          "targetSchema": {
            "additionalPoperties": false,
            "type": [
              "object"
            ]
          },
          "title": "Restart"
        },
        {
          "description": "Restart all dynos",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "DELETE",
          "rel": "empty",
          "targetSchema": {
            "additionalPoperties": false,
            "type": [
              "object"
            ]
          },
          "title": "Restart all"
        },
        {
          "description": "Info for existing dyno.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos/{(%23%2Fdefinitions%2Fdyno%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/dyno"
          },
          "title": "Info"
        },
        {
          "description": "List existing dynos.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/dynos",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/dyno"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "attach_url": {
          "$ref": "#/definitions/dyno/definitions/attach_url"
        },
        "command": {
          "$ref": "#/definitions/dyno/definitions/command"
        },
        "created_at": {
          "$ref": "#/definitions/dyno/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/dyno/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/dyno/definitions/name"
        },
        "release": {
          "description": "app release of the dyno",
          "properties": {
            "id": {
              "$ref": "#/definitions/release/definitions/id"
            },
            "version": {
              "$ref": "#/definitions/release/definitions/version"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "app": {
          "description": "app formation belongs to",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "size": {
          "$ref": "#/definitions/dyno/definitions/size"
        },
        "state": {
          "$ref": "#/definitions/dyno/definitions/state"
        },
        "type": {
          "$ref": "#/definitions/dyno/definitions/type"
        },
        "updated_at": {
          "$ref": "#/definitions/dyno/definitions/updated_at"
        }
      }
    },
    "event": {
      "description": "An event represents an action performed on another API resource.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - Event",
      "type": [
        "object"
      ],
      "definitions": {
        "action": {
          "description": "the operation performed on the resource",
          "enum": [
            "create",
            "destroy",
            "update"
          ],
          "example": "create",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when the event was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "data": {
          "description": "the serialized resource affected by the event",
          "example": {
          },
          "anyOf": [
            {
              "$ref": "#/definitions/account"
            },
            {
              "$ref": "#/definitions/addon"
            },
            {
              "$ref": "#/definitions/app"
            },
            {
              "$ref": "#/definitions/app-setup"
            },
            {
              "$ref": "#/definitions/app-transfer"
            },
            {
              "$ref": "#/definitions/build"
            },
            {
              "$ref": "#/definitions/collaborator"
            },
            {
              "$ref": "#/definitions/domain"
            },
            {
              "$ref": "#/definitions/dyno"
            },
            {
              "$ref": "#/definitions/failed-event"
            },
            {
              "$ref": "#/definitions/formation"
            },
            {
              "$ref": "#/definitions/release"
            }
          ],
          "readOnly": true,
          "type": [
            "object"
          ]
        },
        "id": {
          "description": "unique identifier of an event",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/event/definitions/id"
            }
          ]
        },
        "published_at": {
          "description": "when the event was published",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "resource": {
          "description": "the type of resource affected",
          "enum": [
            "addon",
            "app",
            "app-setup",
            "app-transfer",
            "build",
            "collaborator",
            "domain",
            "dyno",
            "failed-event",
            "formation",
            "release",
            "user"
          ],
          "example": "app",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "sequence": {
          "description": "a numeric string representing the event's sequence",
          "example": "1234567890",
          "pattern": "^[0-9]{1,128}$",
          "readOnly": true,
          "type": [
            "null",
            "string"
          ]
        },
        "updated_at": {
          "description": "when the event was updated (same as created)",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "version": {
          "description": "the event's API version string",
          "example": "application/vnd.heroku+json; version=3",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
      ],
      "properties": {
        "action": {
          "$ref": "#/definitions/event/definitions/action"
        },
        "actor": {
          "description": "user that performed the operation",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/event/definitions/created_at"
        },
        "data": {
          "$ref": "#/definitions/event/definitions/data"
        },
        "id": {
          "$ref": "#/definitions/event/definitions/id"
        },
        "previous_data": {
          "description": "data fields that were changed during update with previous values",
          "type": [
            "object"
          ]
        },
        "published_at": {
          "$ref": "#/definitions/event/definitions/published_at"
        },
        "resource": {
          "$ref": "#/definitions/event/definitions/resource"
        },
        "sequence": {
          "$ref": "#/definitions/event/definitions/sequence"
        },
        "updated_at": {
          "$ref": "#/definitions/event/definitions/updated_at"
        },
        "version": {
          "$ref": "#/definitions/event/definitions/version"
        }
      }
    },
    "failed-event": {
      "description": "A failed event represents a failure of an action performed on another API resource.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - Failed Event",
      "type": [
        "object"
      ],
      "definitions": {
        "action": {
          "description": "The attempted operation performed on the resource.",
          "enum": [
            "create",
            "destroy",
            "update"
          ],
          "example": "create",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "error_id": {
          "description": "ID of error raised.",
          "example": "rate_limit",
          "readOnly": true,
          "type": [
            "string",
            "null"
          ]
        },
        "message": {
          "description": "A detailed error message.",
          "example": "Your account reached the API rate limit\nPlease wait a few minutes before making new requests",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "method": {
          "description": "The HTTP method type of the failed action.",
          "enum": [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
          ],
          "example": "POST",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "code": {
          "description": "An HTTP status code.",
          "example": 404,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/event/definitions/id"
            }
          ]
        },
        "path": {
          "description": "The path of the attempted operation.",
          "example": "/apps/my-app",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "resource_id": {
          "description": "Unique identifier of a resource.",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
      ],
      "properties": {
        "action": {
          "$ref": "#/definitions/failed-event/definitions/action"
        },
        "code": {
          "$ref": "#/definitions/failed-event/definitions/code"
        },
        "error_id": {
          "$ref": "#/definitions/failed-event/definitions/error_id"
        },
        "message": {
          "$ref": "#/definitions/failed-event/definitions/message"
        },
        "method": {
          "$ref": "#/definitions/failed-event/definitions/method"
        },
        "path": {
          "$ref": "#/definitions/failed-event/definitions/path"
        },
        "resource": {
          "description": "The related resource of the failed action.",
          "properties": {
            "id": {
              "$ref": "#/definitions/failed-event/definitions/resource_id"
            },
            "name": {
              "$ref": "#/definitions/event/definitions/resource"
            }
          },
          "strictProperties": true,
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "formation": {
      "description": "The formation of processes that should be maintained for an app. Update the formation to scale processes or change dyno sizes. Available process type names and commands are defined by the `process_types` attribute for the [slug](#slug) currently released on an app.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Formation",
      "type": [
        "object"
      ],
      "definitions": {
        "command": {
          "description": "command to use to launch this process",
          "example": "bundle exec rails server -p $PORT",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when process type was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this process type",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/formation/definitions/id"
            },
            {
              "$ref": "#/definitions/formation/definitions/type"
            }
          ]
        },
        "quantity": {
          "description": "number of processes to maintain",
          "example": 1,
          "readOnly": false,
          "type": [
            "integer"
          ]
        },
        "size": {
          "description": "dyno size (default: \"standard-1X\")",
          "example": "standard-1X",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "type": {
          "description": "type of process to maintain",
          "example": "web",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when dyno type was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "update": {
          "additionalProperties": false,
          "description": "Properties to update a process type",
          "properties": {
            "process": {
              "$ref": "#/definitions/formation/definitions/identity"
            },
            "quantity": {
              "$ref": "#/definitions/formation/definitions/quantity"
            },
            "size": {
              "$ref": "#/definitions/formation/definitions/size"
            }
          },
          "readOnly": false,
          "required": [
            "process"
          ],
          "type": [
            "object"
          ]
        }
      },
      "links": [
        {
          "description": "Info for a process type",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/formation"
          },
          "title": "Info"
        },
        {
          "description": "List process type formation",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/formation"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Batch update process types",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "updates": {
                "type": [
                  "array"
                ],
                "items": {
                  "$ref": "#/definitions/formation/definitions/update"
                },
                "description": "Array with formation updates. Each element must have \"process\", the id or name of the process type to be updated, and can optionally update its \"quantity\" or \"size\".",
                "example": [
                  {
                    "process": "web",
                    "quantity": 1,
                    "size": "standard-2X"
                  }
                ]
              }
            },
            "required": [
              "updates"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/formation"
            },
            "type": [
              "array"
            ]
          },
          "title": "Batch update"
        },
        {
          "description": "Update process type",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/formation/{(%23%2Fdefinitions%2Fformation%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "quantity": {
                "$ref": "#/definitions/formation/definitions/quantity"
              },
              "size": {
                "$ref": "#/definitions/formation/definitions/size"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/formation"
          },
          "title": "Update",
          "type": [
            "object"
          ]
        }
      ],
      "properties": {
        "app": {
          "description": "app formation belongs to",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "command": {
          "$ref": "#/definitions/formation/definitions/command"
        },
        "created_at": {
          "$ref": "#/definitions/formation/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/formation/definitions/id"
        },
        "quantity": {
          "$ref": "#/definitions/formation/definitions/quantity"
        },
        "size": {
          "$ref": "#/definitions/formation/definitions/size"
        },
        "type": {
          "$ref": "#/definitions/formation/definitions/type"
        },
        "updated_at": {
          "$ref": "#/definitions/formation/definitions/updated_at"
        }
      }
    },
    "invoice-address": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "An invoice address represents the address that should be listed on an invoice.",
      "title": "Heroku Vault API - Invoice Address",
      "stability": "development",
      "type": [
        "object"
      ],
      "definitions": {
        "address_1": {
          "type": [
            "string"
          ],
          "description": "invoice street address line 1",
          "example": "40 Hickory Blvd."
        },
        "address_2": {
          "type": [
            "string"
          ],
          "description": "invoice street address line 2",
          "example": "Suite 300"
        },
        "city": {
          "type": [
            "string"
          ],
          "description": "invoice city",
          "example": "Seattle"
        },
        "country": {
          "type": [
            "string"
          ],
          "description": "country",
          "example": "US"
        },
        "heroku_id": {
          "type": [
            "string"
          ],
          "description": "heroku_id identifier reference",
          "example": "user930223902@heroku.com",
          "readOnly": true
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/invoice-address/definitions/heroku_id"
            }
          ]
        },
        "other": {
          "type": [
            "string"
          ],
          "description": "metadata / additional information to go on invoice",
          "example": "Company ABC Inc. VAT 903820"
        },
        "postal_code": {
          "type": [
            "string"
          ],
          "description": "invoice zip code",
          "example": "98101"
        },
        "state": {
          "type": [
            "string"
          ],
          "description": "invoice state",
          "example": "WA"
        },
        "use_invoice_address": {
          "type": [
            "boolean"
          ],
          "description": "flag to use the invoice address for an account or not",
          "example": true,
          "default": false
        }
      },
      "links": [
        {
          "description": "Retrieve existing invoice address.",
          "href": "/account/invoice-address",
          "method": "GET",
          "rel": "self",
          "title": "info"
        },
        {
          "description": "Update invoice address for an account.",
          "href": "/account/invoice-address",
          "method": "PUT",
          "rel": "self",
          "title": "update",
          "schema": {
            "properties": {
              "address_1": {
                "$ref": "#/definitions/invoice-address/definitions/address_1"
              },
              "address_2": {
                "$ref": "#/definitions/invoice-address/definitions/address_2"
              },
              "city": {
                "$ref": "#/definitions/invoice-address/definitions/city"
              },
              "country": {
                "$ref": "#/definitions/invoice-address/definitions/country"
              },
              "other": {
                "$ref": "#/definitions/invoice-address/definitions/other"
              },
              "postal_code": {
                "$ref": "#/definitions/invoice-address/definitions/postal_code"
              },
              "state": {
                "$ref": "#/definitions/invoice-address/definitions/state"
              },
              "use_invoice_address": {
                "$ref": "#/definitions/invoice-address/definitions/use_invoice_address"
              }
            },
            "type": [
              "object"
            ]
          }
        }
      ],
      "properties": {
        "address_1": {
          "$ref": "#/definitions/invoice-address/definitions/address_1"
        },
        "address_2": {
          "$ref": "#/definitions/invoice-address/definitions/address_2"
        },
        "city": {
          "$ref": "#/definitions/invoice-address/definitions/city"
        },
        "country": {
          "$ref": "#/definitions/invoice-address/definitions/country"
        },
        "heroku_id": {
          "$ref": "#/definitions/invoice-address/definitions/identity"
        },
        "other": {
          "$ref": "#/definitions/invoice-address/definitions/other"
        },
        "postal_code": {
          "$ref": "#/definitions/invoice-address/definitions/postal_code"
        },
        "state": {
          "$ref": "#/definitions/invoice-address/definitions/state"
        },
        "use_invoice_address": {
          "$ref": "#/definitions/invoice-address/definitions/use_invoice_address"
        }
      }
    },
    "invoice": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "An invoice is an itemized bill of goods for an account which includes pricing and charges.",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - Invoice",
      "type": [
        "object"
      ],
      "definitions": {
        "charges_total": {
          "description": "total charges on this invoice",
          "example": 100.0,
          "readOnly": true,
          "type": [
            "number"
          ]
        },
        "created_at": {
          "description": "when invoice was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "credits_total": {
          "description": "total credits on this invoice",
          "example": 100.0,
          "readOnly": true,
          "type": [
            "number"
          ]
        },
        "id": {
          "description": "unique identifier of this invoice",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/invoice/definitions/number"
            }
          ]
        },
        "number": {
          "description": "human readable invoice number",
          "example": 9403943,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "total": {
          "description": "combined total of charges and credits on this invoice",
          "example": 100.0,
          "readOnly": true,
          "type": [
            "number"
          ]
        },
        "updated_at": {
          "description": "when invoice was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing invoice.",
          "href": "/account/invoices/{(%23%2Fdefinitions%2Finvoice%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/invoice"
          },
          "title": "Info"
        },
        {
          "description": "List existing invoices.",
          "href": "/account/invoices",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/invoice"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "charges_total": {
          "$ref": "#/definitions/invoice/definitions/charges_total"
        },
        "created_at": {
          "$ref": "#/definitions/invoice/definitions/created_at"
        },
        "credits_total": {
          "$ref": "#/definitions/invoice/definitions/credits_total"
        },
        "id": {
          "$ref": "#/definitions/invoice/definitions/id"
        },
        "number": {
          "$ref": "#/definitions/invoice/definitions/number"
        },
        "total": {
          "$ref": "#/definitions/invoice/definitions/total"
        },
        "updated_at": {
          "$ref": "#/definitions/invoice/definitions/updated_at"
        }
      }
    },
    "key": {
      "description": "Keys represent public SSH keys associated with an account and are used to authorize accounts as they are performing git operations.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Key",
      "type": [
        "object"
      ],
      "definitions": {
        "comment": {
          "description": "comment on the key",
          "example": "username@host",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when key was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "deprecated": true,
          "description": "deprecated. Please refer to 'comment' instead",
          "example": "username@host",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "fingerprint": {
          "description": "a unique identifying string based on contents",
          "example": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this key",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/key/definitions/id"
            },
            {
              "$ref": "#/definitions/key/definitions/fingerprint"
            }
          ]
        },
        "public_key": {
          "description": "full public_key as uploaded",
          "example": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when key was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new key.",
          "href": "/account/keys",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "public_key": {
                "$ref": "#/definitions/key/definitions/public_key"
              }
            },
            "required": [
              "public_key"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/key"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing key",
          "href": "/account/keys/{(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/key"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing key.",
          "href": "/account/keys/{(%23%2Fdefinitions%2Fkey%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/key"
          },
          "title": "Info"
        },
        {
          "description": "List existing keys.",
          "href": "/account/keys",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/key"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "comment": {
          "$ref": "#/definitions/key/definitions/comment"
        },
        "created_at": {
          "$ref": "#/definitions/key/definitions/created_at"
        },
        "email": {
          "$ref": "#/definitions/key/definitions/email"
        },
        "fingerprint": {
          "$ref": "#/definitions/key/definitions/fingerprint"
        },
        "id": {
          "$ref": "#/definitions/key/definitions/id"
        },
        "public_key": {
          "$ref": "#/definitions/key/definitions/public_key"
        },
        "updated_at": {
          "$ref": "#/definitions/key/definitions/updated_at"
        }
      }
    },
    "log-drain": {
      "description": "[Log drains](https://devcenter.heroku.com/articles/log-drains) provide a way to forward your Heroku logs to an external syslog server for long-term archiving. This external service must be configured to receive syslog packets from Heroku, whereupon its URL can be added to an app using this API. Some addons will add a log drain when they are provisioned to an app. These drains can only be removed by removing the add-on.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Log Drain",
      "type": [
        "object"
      ],
      "definitions": {
        "addon": {
          "description": "addon that created the drain",
          "example": {
            "id": "01234567-89ab-cdef-0123-456789abcdef",
            "name": "singing-swiftly-1242"
          },
          "properties": {
            "id": {
              "$ref": "#/definitions/addon/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/addon/definitions/name"
            }
          },
          "readOnly": true,
          "type": [
            "object",
            "null"
          ]
        },
        "created_at": {
          "description": "when log drain was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this log drain",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/log-drain/definitions/id"
            },
            {
              "$ref": "#/definitions/log-drain/definitions/url"
            }
          ]
        },
        "token": {
          "description": "token associated with the log drain",
          "example": "d.01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when log drain was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "url": {
          "description": "url associated with the log drain",
          "example": "https://example.com/drain",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new log drain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "url": {
                "$ref": "#/definitions/log-drain/definitions/url"
              }
            },
            "required": [
              "url"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/log-drain"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing log drain. Log drains added by add-ons can only be removed by removing the add-on.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/log-drain"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing log drain.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains/{(%23%2Fdefinitions%2Flog-drain%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/log-drain"
          },
          "title": "Info"
        },
        {
          "description": "List existing log drains.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-drains",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/log-drain"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "addon": {
          "$ref": "#/definitions/log-drain/definitions/addon"
        },
        "created_at": {
          "$ref": "#/definitions/log-drain/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/log-drain/definitions/id"
        },
        "token": {
          "$ref": "#/definitions/log-drain/definitions/token"
        },
        "updated_at": {
          "$ref": "#/definitions/log-drain/definitions/updated_at"
        },
        "url": {
          "$ref": "#/definitions/log-drain/definitions/url"
        }
      }
    },
    "log-session": {
      "description": "A log session is a reference to the http based log stream for an app.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Log Session",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when log connection was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "dyno": {
          "description": "dyno to limit results to",
          "example": "web.1",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this log session",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/log-session/definitions/id"
            }
          ]
        },
        "lines": {
          "description": "number of log lines to stream at once",
          "example": 10,
          "readOnly": false,
          "type": [
            "integer"
          ]
        },
        "logplex_url": {
          "description": "URL for log streaming session",
          "example": "https://logplex.heroku.com/sessions/01234567-89ab-cdef-0123-456789abcdef?srv=1325419200",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "source": {
          "description": "log source to limit results to",
          "example": "app",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "tail": {
          "description": "whether to stream ongoing logs",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when log session was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new log session.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/log-sessions",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "dyno": {
                "$ref": "#/definitions/log-session/definitions/dyno"
              },
              "lines": {
                "$ref": "#/definitions/log-session/definitions/lines"
              },
              "source": {
                "$ref": "#/definitions/log-session/definitions/source"
              },
              "tail": {
                "$ref": "#/definitions/log-session/definitions/tail"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/log-session"
          },
          "title": "Create"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/log-session/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/log-session/definitions/id"
        },
        "logplex_url": {
          "$ref": "#/definitions/log-session/definitions/logplex_url"
        },
        "updated_at": {
          "$ref": "#/definitions/log-session/definitions/updated_at"
        }
      }
    },
    "oauth-authorization": {
      "description": "OAuth authorizations represent clients that a Heroku user has authorized to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - OAuth Authorization",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth authorization was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "human-friendly description of this OAuth authorization",
          "example": "sample authorization",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-authorization/definitions/id"
            }
          ]
        },
        "scope": {
          "description": "The scope of access OAuth authorization allows",
          "example": [
            "global"
          ],
          "readOnly": true,
          "type": [
            "array"
          ],
          "items": {
            "type": [
              "string"
            ]
          }
        },
        "updated_at": {
          "description": "when OAuth authorization was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth authorization.",
          "href": "/oauth/authorizations",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "client": {
                "$ref": "#/definitions/oauth-client/definitions/identity"
              },
              "description": {
                "$ref": "#/definitions/oauth-authorization/definitions/description"
              },
              "expires_in": {
                "$ref": "#/definitions/oauth-token/definitions/expires_in"
              },
              "scope": {
                "$ref": "#/definitions/oauth-authorization/definitions/scope"
              }
            },
            "required": [
              "scope"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/oauth-authorization"
          },
          "title": "Create"
        },
        {
          "description": "Delete OAuth authorization.",
          "href": "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/oauth-authorization"
          },
          "title": "Delete"
        },
        {
          "description": "Info for an OAuth authorization.",
          "href": "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/oauth-authorization"
          },
          "title": "Info"
        },
        {
          "description": "List OAuth authorizations.",
          "href": "/oauth/authorizations",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/oauth-authorization"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Regenerate OAuth tokens. This endpoint is only available to direct authorizations or privileged OAuth clients.",
          "href": "/oauth/authorizations/{(%23%2Fdefinitions%2Foauth-authorization%2Fdefinitions%2Fidentity)}/actions/regenerate-tokens",
          "method": "POST",
          "rel": "update",
          "targetSchema": {
            "$ref": "#/definitions/oauth-authorization"
          },
          "title": "Regenerate"
        }
      ],
      "properties": {
        "access_token": {
          "description": "access token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "client": {
          "description": "identifier of the client that obtained this authorization, if any",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-client/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/oauth-client/definitions/name"
            },
            "redirect_uri": {
              "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/oauth-authorization/definitions/created_at"
        },
        "grant": {
          "description": "this authorization's grant",
          "properties": {
            "code": {
              "$ref": "#/definitions/oauth-grant/definitions/code"
            },
            "expires_in": {
              "$ref": "#/definitions/oauth-grant/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-grant/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "null",
            "object"
          ]
        },
        "id": {
          "$ref": "#/definitions/oauth-authorization/definitions/id"
        },
        "refresh_token": {
          "description": "refresh token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "strictProperties": true,
          "type": [
            "null",
            "object"
          ]
        },
        "scope": {
          "$ref": "#/definitions/oauth-authorization/definitions/scope"
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-authorization/definitions/updated_at"
        }
      }
    },
    "oauth-client": {
      "description": "OAuth clients are applications that Heroku users can authorize to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth).",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - OAuth Client",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth client was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this OAuth client",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-client/definitions/id"
            }
          ]
        },
        "ignores_delinquent": {
          "description": "whether the client is still operable given a delinquent account",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean",
            "null"
          ]
        },
        "name": {
          "description": "OAuth client name",
          "example": "example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "redirect_uri": {
          "description": "endpoint for redirection after authorization with OAuth client",
          "example": "https://example.com/auth/heroku/callback",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "secret": {
          "description": "secret used to obtain OAuth authorizations under this client",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when OAuth client was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth client.",
          "href": "/oauth/clients",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/oauth-client/definitions/name"
              },
              "redirect_uri": {
                "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
              }
            },
            "required": [
              "name",
              "redirect_uri"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/oauth-client"
          },
          "title": "Create"
        },
        {
          "description": "Delete OAuth client.",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/oauth-client"
          },
          "title": "Delete"
        },
        {
          "description": "Info for an OAuth client",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List OAuth clients",
          "href": "/oauth/clients",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/oauth-client"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update OAuth client",
          "href": "/oauth/clients/{(%23%2Fdefinitions%2Foauth-client%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "name": {
                "$ref": "#/definitions/oauth-client/definitions/name"
              },
              "redirect_uri": {
                "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/oauth-client"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/oauth-client/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/oauth-client/definitions/id"
        },
        "ignores_delinquent": {
          "$ref": "#/definitions/oauth-client/definitions/ignores_delinquent"
        },
        "name": {
          "$ref": "#/definitions/oauth-client/definitions/name"
        },
        "redirect_uri": {
          "$ref": "#/definitions/oauth-client/definitions/redirect_uri"
        },
        "secret": {
          "$ref": "#/definitions/oauth-client/definitions/secret"
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-client/definitions/updated_at"
        }
      }
    },
    "oauth-grant": {
      "description": "OAuth grants are used to obtain authorizations on behalf of a user. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - OAuth Grant",
      "type": [
        "object"
      ],
      "definitions": {
        "code": {
          "description": "grant code received from OAuth web application authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "expires_in": {
          "description": "seconds until OAuth grant expires",
          "example": 2592000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth grant",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-grant/definitions/id"
            }
          ]
        },
        "type": {
          "description": "type of grant requested, one of `authorization_code` or `refresh_token`",
          "example": "authorization_code",
          "readOnly": false,
          "type": [
            "string"
          ]
        }
      },
      "links": [
      ],
      "properties": {
      }
    },
    "oauth-token": {
      "description": "OAuth tokens provide access for authorized clients to act on behalf of a Heroku user to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - OAuth Token",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OAuth token was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "expires_in": {
          "description": "seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime",
          "example": 2592000,
          "readOnly": true,
          "type": [
            "null",
            "integer"
          ]
        },
        "id": {
          "description": "unique identifier of OAuth token",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/oauth-token/definitions/id"
            }
          ]
        },
        "token": {
          "description": "contents of the token to be used for authorization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when OAuth token was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new OAuth token.",
          "href": "/oauth/tokens",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "client": {
                "type": [
                  "object"
                ],
                "properties": {
                  "secret": {
                    "$ref": "#/definitions/oauth-client/definitions/secret"
                  }
                }
              },
              "grant": {
                "type": [
                  "object"
                ],
                "properties": {
                  "code": {
                    "$ref": "#/definitions/oauth-grant/definitions/code"
                  },
                  "type": {
                    "$ref": "#/definitions/oauth-grant/definitions/type"
                  }
                }
              },
              "refresh_token": {
                "type": [
                  "object"
                ],
                "properties": {
                  "token": {
                    "$ref": "#/definitions/oauth-token/definitions/token"
                  }
                }
              }
            },
            "required": [
              "grant",
              "client",
              "refresh_token"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/oauth-token"
          },
          "title": "Create"
        },
        {
          "description": "Revoke OAuth access token.",
          "href": "/oauth/tokens/{(%23%2Fdefinitions%2Foauth-token%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/oauth-token"
          },
          "title": "Delete"
        }
      ],
      "properties": {
        "access_token": {
          "description": "current access token",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "authorization": {
          "description": "authorization for this set of tokens",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-authorization/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "client": {
          "description": "OAuth client secret used to obtain token",
          "properties": {
            "secret": {
              "$ref": "#/definitions/oauth-client/definitions/secret"
            }
          },
          "strictProperties": true,
          "type": [
            "null",
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/oauth-token/definitions/created_at"
        },
        "grant": {
          "description": "grant used on the underlying authorization",
          "properties": {
            "code": {
              "$ref": "#/definitions/oauth-grant/definitions/code"
            },
            "type": {
              "$ref": "#/definitions/oauth-grant/definitions/type"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "id": {
          "$ref": "#/definitions/oauth-token/definitions/id"
        },
        "refresh_token": {
          "description": "refresh token for this authorization",
          "properties": {
            "expires_in": {
              "$ref": "#/definitions/oauth-token/definitions/expires_in"
            },
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            },
            "token": {
              "$ref": "#/definitions/oauth-token/definitions/token"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "session": {
          "description": "OAuth session using this token",
          "properties": {
            "id": {
              "$ref": "#/definitions/oauth-token/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/oauth-token/definitions/updated_at"
        },
        "user": {
          "description": "Reference to the user associated with this token",
          "properties": {
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      }
    },
    "organization-app-collaborator": {
      "description": "An organization collaborator represents an account that has been given access to an organization app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "prototype",
      "title": "Heroku Platform API - Organization App Collaborator",
      "type": [
        "object"
      ],
      "definitions": {
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/collaborator/definitions/email"
            }
          ]
        }
      },
      "links": [
        {
          "description": "Create a new collaborator on an organization app. Use this endpoint instead of the `/apps/{app_id_or_name}/collaborator` endpoint when you want the collaborator to be granted [privileges] (https://devcenter.heroku.com/articles/org-users-access#roles) according to their role in the organization.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "silent": {
                "$ref": "#/definitions/collaborator/definitions/silent"
              },
              "user": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "user"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/organization-app-collaborator"
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing collaborator from an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/organization-app-collaborator"
          },
          "title": "Delete"
        },
        {
          "description": "Info for a collaborator on an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/organization-app-collaborator"
          },
          "title": "Info"
        },
        {
          "description": "Update an existing collaborator from an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators/{(%23%2Fdefinitions%2Forganization-app-collaborator%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "targetSchema": {
            "$ref": "#/definitions/organization-app-collaborator"
          },
          "title": "Update"
        },
        {
          "description": "List collaborators on an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}/collaborators",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization-app-collaborator"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "app": {
          "description": "app collaborator belongs to",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/collaborator/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/collaborator/definitions/id"
        },
        "privileges": {
          "description": "collborator privileges",
          "properties": {
            "description": {
              "type": [
                "string"
              ]
            },
            "name": {
              "type": [
                "string"
              ]
            }
          }
        },
        "role": {
          "$ref": "#/definitions/organization/definitions/role"
        },
        "updated_at": {
          "$ref": "#/definitions/collaborator/definitions/updated_at"
        },
        "user": {
          "description": "identity of collaborated account",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      }
    },
    "organization-app": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "An organization app encapsulates the organization specific functionality of Heroku apps.",
      "stability": "prototype",
      "title": "Heroku Platform API - Organization App",
      "type": [
        "object"
      ],
      "definitions": {
        "locked": {
          "default": false,
          "description": "are other organization members forbidden from joining this app.",
          "example": false,
          "type": [
            "boolean"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/app/definitions/name"
            }
          ]
        },
        "joined": {
          "default": false,
          "description": "is the current member a collaborator on this app.",
          "example": false,
          "type": [
            "boolean"
          ]
        },
        "personal": {
          "default": false,
          "description": "force creation of the app in the user account even if a default org is set.",
          "example": false,
          "type": [
            "boolean"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new app in the specified organization, in the default organization if unspecified,  or in personal account, if default organization is not set.",
          "href": "/organizations/apps",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "locked": {
                "$ref": "#/definitions/organization-app/definitions/locked"
              },
              "name": {
                "$ref": "#/definitions/app/definitions/name"
              },
              "organization": {
                "$ref": "#/definitions/organization/definitions/name"
              },
              "personal": {
                "$ref": "#/definitions/organization-app/definitions/personal"
              },
              "region": {
                "$ref": "#/definitions/region/definitions/name"
              },
              "stack": {
                "$ref": "#/definitions/stack/definitions/name"
              }
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "List apps in the default organization, or in personal account, if default organization is not set.",
          "href": "/organizations/apps",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization-app"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "List organization apps.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/apps",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization-app"
            },
            "type": [
              "array"
            ]
          },
          "title": "List For Organization"
        },
        {
          "description": "Info for an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "Lock or unlock an organization app.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "locked": {
                "$ref": "#/definitions/organization-app/definitions/locked"
              }
            },
            "required": [
              "locked"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/organization-app"
          },
          "title": "Update Locked"
        },
        {
          "description": "Transfer an existing organization app to another Heroku account.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "owner": {
                "$ref": "#/definitions/account/definitions/identity"
              }
            },
            "required": [
              "owner"
            ],
            "type": [
              "object"
            ]
          },
          "title": "Transfer to Account"
        },
        {
          "description": "Transfer an existing organization app to another organization.",
          "href": "/organizations/apps/{(%23%2Fdefinitions%2Forganization-app%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "owner": {
                "$ref": "#/definitions/organization/definitions/name"
              }
            },
            "required": [
              "owner"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/organization-app"
          },
          "title": "Transfer to Organization"
        }
      ],
      "properties": {
        "archived_at": {
          "$ref": "#/definitions/app/definitions/archived_at"
        },
        "buildpack_provided_description": {
          "$ref": "#/definitions/app/definitions/buildpack_provided_description"
        },
        "created_at": {
          "$ref": "#/definitions/app/definitions/created_at"
        },
        "git_url": {
          "$ref": "#/definitions/app/definitions/git_url"
        },
        "id": {
          "$ref": "#/definitions/app/definitions/id"
        },
        "joined": {
          "$ref": "#/definitions/organization-app/definitions/joined"
        },
        "locked": {
          "$ref": "#/definitions/organization-app/definitions/locked"
        },
        "maintenance": {
          "$ref": "#/definitions/app/definitions/maintenance"
        },
        "name": {
          "$ref": "#/definitions/app/definitions/name"
        },
        "organization": {
          "description": "organization that owns this app",
          "properties": {
            "name": {
              "$ref": "#/definitions/organization/definitions/name"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "owner": {
          "description": "identity of app owner",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "region": {
          "description": "identity of app region",
          "properties": {
            "id": {
              "$ref": "#/definitions/region/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/region/definitions/name"
            }
          },
          "type": [
            "object"
          ]
        },
        "released_at": {
          "$ref": "#/definitions/app/definitions/released_at"
        },
        "repo_size": {
          "$ref": "#/definitions/app/definitions/repo_size"
        },
        "slug_size": {
          "$ref": "#/definitions/app/definitions/slug_size"
        },
        "stack": {
          "description": "identity of app stack",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/app/definitions/updated_at"
        },
        "web_url": {
          "$ref": "#/definitions/app/definitions/web_url"
        },
        "process_tier": {
          "$ref": "#/definitions/app/definitions/process_tier"
        }
      }
    },
    "organization-invoice": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "An organization invoice is an itemized bill of goods for an organization which includes pricing and charges.",
      "stability": "prototype",
      "strictProperties": true,
      "title": "Heroku Platform API - Organization Invoice",
      "type": [
        "object"
      ],
      "definitions": {
        "addons_total": {
          "description": "total addons charges in on this invoice",
          "example": 25000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "database_total": {
          "description": "total database charges on this invoice",
          "example": 25000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "charges_total": {
          "description": "total charges on this invoice",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "created_at": {
          "description": "when invoice was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "credits_total": {
          "description": "total credits on this invoice",
          "example": 100000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "dyno_units": {
          "description": "The total amount of dyno units consumed across dyno types.",
          "example": 1.92,
          "readOnly": true,
          "type": [
            "number"
          ]
        },
        "id": {
          "description": "unique identifier of this invoice",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/organization-invoice/definitions/number"
            }
          ]
        },
        "number": {
          "description": "human readable invoice number",
          "example": 9403943,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "payment_status": {
          "description": "Status of the invoice payment.",
          "example": "Paid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "platform_total": {
          "description": "total platform charges on this invoice",
          "example": 50000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "period_end": {
          "description": "the ending date that the invoice covers",
          "example": "01/31/2014",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "period_start": {
          "description": "the starting date that this invoice covers",
          "example": "01/01/2014",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "payment status for this invoice (pending, successful, failed)",
          "example": 1,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "total": {
          "description": "combined total of charges and credits on this invoice",
          "example": 100000,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "updated_at": {
          "description": "when invoice was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "weighted_dyno_hours": {
          "description": "The total amount of hours consumed across dyno types.",
          "example": 1488,
          "readOnly": true,
          "type": [
            "number"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing invoice.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invoices/{(%23%2Fdefinitions%2Forganization-invoice%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/organization-invoice"
          },
          "title": "Info"
        },
        {
          "description": "List existing invoices.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/invoices",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization-invoice"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "addons_total": {
          "$ref": "#/definitions/organization-invoice/definitions/addons_total"
        },
        "database_total": {
          "$ref": "#/definitions/organization-invoice/definitions/database_total"
        },
        "charges_total": {
          "$ref": "#/definitions/organization-invoice/definitions/charges_total"
        },
        "created_at": {
          "$ref": "#/definitions/organization-invoice/definitions/created_at"
        },
        "credits_total": {
          "$ref": "#/definitions/organization-invoice/definitions/credits_total"
        },
        "dyno_units": {
          "$ref": "#/definitions/organization-invoice/definitions/dyno_units"
        },
        "id": {
          "$ref": "#/definitions/organization-invoice/definitions/id"
        },
        "number": {
          "$ref": "#/definitions/organization-invoice/definitions/number"
        },
        "payment_status": {
          "$ref": "#/definitions/organization-invoice/definitions/payment_status"
        },
        "period_end": {
          "$ref": "#/definitions/organization-invoice/definitions/period_end"
        },
        "period_start": {
          "$ref": "#/definitions/organization-invoice/definitions/period_start"
        },
        "platform_total": {
          "$ref": "#/definitions/organization-invoice/definitions/platform_total"
        },
        "state": {
          "$ref": "#/definitions/organization-invoice/definitions/state"
        },
        "total": {
          "$ref": "#/definitions/organization-invoice/definitions/total"
        },
        "updated_at": {
          "$ref": "#/definitions/organization-invoice/definitions/updated_at"
        },
        "weighted_dyno_hours": {
          "$ref": "#/definitions/organization-invoice/definitions/weighted_dyno_hours"
        }
      }
    },
    "organization-member": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "An organization member is an individual with access to an organization.",
      "stability": "prototype",
      "strictProperties": true,
      "title": "Heroku Platform API - Organization Member",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when the membership record was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "email": {
          "description": "email address of the organization member",
          "example": "someone@example.org",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/organization-member/definitions/email"
            }
          ]
        },
        "two_factor_authentication": {
          "description": "whether the organization member has two factor authentication enabled",
          "example": true,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when the membership record was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new organization member, or update their role.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
          "method": "PUT",
          "rel": "create",
          "schema": {
            "properties": {
              "email": {
                "$ref": "#/definitions/organization-member/definitions/email"
              },
              "role": {
                "$ref": "#/definitions/organization/definitions/role"
              }
            },
            "required": [
              "email",
              "role"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/organization-member"
          },
          "title": "Create or Update"
        },
        {
          "description": "Remove a member from the organization.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members/{(%23%2Fdefinitions%2Forganization-member%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/organization-member"
          },
          "title": "Delete"
        },
        {
          "description": "List members of the organization.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/members",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization-member"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/organization-member/definitions/created_at"
        },
        "email": {
          "$ref": "#/definitions/organization-member/definitions/email"
        },
        "role": {
          "$ref": "#/definitions/organization/definitions/role"
        },
        "two_factor_authentication": {
          "$ref": "#/definitions/organization-member/definitions/two_factor_authentication"
        },
        "updated_at": {
          "$ref": "#/definitions/organization-member/definitions/updated_at"
        }
      }
    },
    "organization-payment-method": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "The on file payment method for an account",
      "stability": "prototype",
      "title": "Heroku Vault API - Payment Method",
      "type": [
        "object"
      ],
      "definitions": {
        "address_1": {
          "type": [
            "string"
          ],
          "description": "street address line 1",
          "example": "40 Hickory Lane"
        },
        "address_2": {
          "type": [
            "string"
          ],
          "description": "street address line 2",
          "example": "Suite 103"
        },
        "card_number": {
          "type": [
            "string"
          ],
          "description": "encrypted card number of payment method",
          "example": "encrypted-card-number"
        },
        "city": {
          "type": [
            "string"
          ],
          "description": "city",
          "example": "San Francisco"
        },
        "country": {
          "type": [
            "string"
          ],
          "description": "country",
          "example": "US"
        },
        "cvv": {
          "type": [
            "string"
          ],
          "description": "card verification value",
          "example": "123"
        },
        "expiration_month": {
          "type": [
            "string"
          ],
          "description": "expiration month",
          "example": "11"
        },
        "expiration_year": {
          "type": [
            "string"
          ],
          "description": "expiration year",
          "example": "2014"
        },
        "first_name": {
          "type": [
            "string"
          ],
          "description": "the first name for payment method",
          "example": "Jason"
        },
        "last_name": {
          "type": [
            "string"
          ],
          "description": "the last name for payment method",
          "example": "Walker"
        },
        "other": {
          "type": [
            "string"
          ],
          "description": "metadata",
          "example": "Additional information for payment method"
        },
        "postal_code": {
          "type": [
            "string"
          ],
          "description": "postal code",
          "example": "90210"
        },
        "state": {
          "type": [
            "string"
          ],
          "description": "state",
          "example": "CA"
        },
        "card_last4": {
          "type": [
            "string"
          ],
          "description": "last 4 digits of credit card number",
          "example": "1234",
          "readOnly": true
        },
        "card_type": {
          "type": [
            "string"
          ],
          "description": "name of credit card issuer",
          "example": "VISA",
          "readOnly": true
        },
        "heroku_id": {
          "type": [
            "string"
          ],
          "description": "heroku_id identifier reference",
          "example": "user930223902@heroku.com",
          "readOnly": true
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/invoice-address/definitions/heroku_id"
            }
          ]
        }
      },
      "links": [
        {
          "description": "Update an existing payment method for an account.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/payment-method",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "address_1": {
                "$ref": "#/definitions/organization-payment-method/definitions/address_1"
              },
              "address_2": {
                "$ref": "#/definitions/organization-payment-method/definitions/address_2"
              },
              "card_number": {
                "$ref": "#/definitions/organization-payment-method/definitions/card_number"
              },
              "city": {
                "$ref": "#/definitions/organization-payment-method/definitions/city"
              },
              "country": {
                "$ref": "#/definitions/organization-payment-method/definitions/country"
              },
              "cvv": {
                "$ref": "#/definitions/organization-payment-method/definitions/cvv"
              },
              "expiration_month": {
                "$ref": "#/definitions/organization-payment-method/definitions/expiration_month"
              },
              "expiration_year": {
                "$ref": "#/definitions/organization-payment-method/definitions/expiration_year"
              },
              "first_name": {
                "$ref": "#/definitions/organization-payment-method/definitions/first_name"
              },
              "last_name": {
                "$ref": "#/definitions/organization-payment-method/definitions/last_name"
              },
              "other": {
                "$ref": "#/definitions/organization-payment-method/definitions/other"
              },
              "postal_code": {
                "$ref": "#/definitions/organization-payment-method/definitions/postal_code"
              },
              "state": {
                "$ref": "#/definitions/organization-payment-method/definitions/state"
              }
            },
            "required": [
              "address_1",
              "address_2",
              "card_number",
              "city",
              "country",
              "cvv",
              "expiration_month",
              "expiration_year",
              "first_name",
              "last_name",
              "postal_code",
              "state"
            ],
            "type": [
              "object"
            ]
          },
          "title": "update"
        },
        {
          "description": "Get the current payment method for an account.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}/payment-method",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/organization-payment-method"
          },
          "title": "get"
        }
      ],
      "properties": {
        "address_1": {
          "$ref": "#/definitions/organization-payment-method/definitions/address_1"
        },
        "address_2": {
          "$ref": "#/definitions/organization-payment-method/definitions/address_2"
        },
        "card_last4": {
          "$ref": "#/definitions/organization-payment-method/definitions/card_last4"
        },
        "card_type": {
          "$ref": "#/definitions/organization-payment-method/definitions/card_type"
        },
        "city": {
          "$ref": "#/definitions/organization-payment-method/definitions/city"
        },
        "country": {
          "$ref": "#/definitions/organization-payment-method/definitions/country"
        },
        "expiration_month": {
          "$ref": "#/definitions/organization-payment-method/definitions/expiration_month"
        },
        "expiration_year": {
          "$ref": "#/definitions/organization-payment-method/definitions/expiration_year"
        },
        "first_name": {
          "$ref": "#/definitions/organization-payment-method/definitions/first_name"
        },
        "last_name": {
          "$ref": "#/definitions/organization-payment-method/definitions/last_name"
        },
        "other": {
          "$ref": "#/definitions/organization-payment-method/definitions/other"
        },
        "postal_code": {
          "$ref": "#/definitions/organization-payment-method/definitions/postal_code"
        },
        "state": {
          "$ref": "#/definitions/organization-payment-method/definitions/state"
        }
      }
    },
    "organization": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "Organizations allow you to manage access to a shared group of applications across your development team.",
      "stability": "prototype",
      "strictProperties": true,
      "title": "Heroku Platform API - Organization",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when the organization was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "credit_card_collections": {
          "description": "whether charges incurred by the org are paid by credit card.",
          "example": true,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "default": {
          "description": "whether to use this organization when none is specified",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "id": {
          "description": "unique identifier of organization",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/organization/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of organization",
          "example": "example",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "provisioned_licenses": {
          "description": "whether the org is provisioned licenses by salesforce.",
          "example": true,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "role": {
          "description": "role in the organization",
          "enum": [
            "admin",
            "collaborator",
            "member",
            "owner"
          ],
          "example": "admin",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when the organization was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "List organizations in which you are a member.",
          "href": "/organizations",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/organization"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Info for an organization.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "Set or unset the organization as your default organization.",
          "href": "/organizations/{(%23%2Fdefinitions%2Forganization%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "default": {
                "$ref": "#/definitions/organization/definitions/default"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/organization"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/organization/definitions/created_at"
        },
        "credit_card_collections": {
          "$ref": "#/definitions/organization/definitions/credit_card_collections"
        },
        "default": {
          "$ref": "#/definitions/organization/definitions/default"
        },
        "name": {
          "$ref": "#/definitions/organization/definitions/name"
        },
        "provisioned_licenses": {
          "$ref": "#/definitions/organization/definitions/provisioned_licenses"
        },
        "role": {
          "$ref": "#/definitions/organization/definitions/role"
        },
        "updated_at": {
          "$ref": "#/definitions/organization/definitions/updated_at"
        }
      }
    },
    "otp-secret": {
      "description": "This renders a secret that clients can use to build a one-time password to be supplied as a 2nd factor of authentication.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - OTP Secret",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when OTP secret was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of OTP secret",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/otp-secret/definitions/id"
            }
          ]
        },
        "updated_at": {
          "description": "when OTP secret was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "url": {
          "description": "OTP secret rendered in URL format",
          "example": "otpauth://totp/username@example.com?issuer=Heroku&secret=abcd1234",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create new OTP secret. This invalidates any existing OTP secrets on the account.",
          "href": "/account/otp-secret",
          "method": "POST",
          "rel": "create",
          "targetSchema": {
            "$ref": "#/definitions/otp-secret"
          },
          "title": "Create"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/otp-secret/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/otp-secret/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/otp-secret/definitions/updated_at"
        },
        "url": {
          "$ref": "#/definitions/otp-secret/definitions/url"
        }
      }
    },
    "payment-method": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "The on file payment method for an account",
      "stability": "prototype",
      "title": "Heroku Vault API - Payment Method",
      "type": [
        "object"
      ],
      "definitions": {
        "address_1": {
          "type": [
            "string"
          ],
          "description": "street address line 1",
          "example": "40 Hickory Lane"
        },
        "address_2": {
          "type": [
            "string"
          ],
          "description": "street address line 2",
          "example": "Suite 103"
        },
        "card_number": {
          "type": [
            "string"
          ],
          "description": "encrypted card number of payment method",
          "example": "encrypted-card-number"
        },
        "city": {
          "type": [
            "string"
          ],
          "description": "city",
          "example": "San Francisco"
        },
        "country": {
          "type": [
            "string"
          ],
          "description": "country",
          "example": "US"
        },
        "cvv": {
          "type": [
            "string"
          ],
          "description": "card verification value",
          "example": "123"
        },
        "expiration_month": {
          "type": [
            "string"
          ],
          "description": "expiration month",
          "example": "11"
        },
        "expiration_year": {
          "type": [
            "string"
          ],
          "description": "expiration year",
          "example": "2014"
        },
        "first_name": {
          "type": [
            "string"
          ],
          "description": "the first name for payment method",
          "example": "Jason"
        },
        "last_name": {
          "type": [
            "string"
          ],
          "description": "the last name for payment method",
          "example": "Walker"
        },
        "other": {
          "type": [
            "string"
          ],
          "description": "metadata",
          "example": "Additional information for payment method"
        },
        "postal_code": {
          "type": [
            "string"
          ],
          "description": "postal code",
          "example": "90210"
        },
        "state": {
          "type": [
            "string"
          ],
          "description": "state",
          "example": "CA"
        },
        "card_last4": {
          "type": [
            "string"
          ],
          "description": "last 4 digits of credit card number",
          "example": "1234",
          "readOnly": true
        },
        "card_type": {
          "type": [
            "string"
          ],
          "description": "name of credit card issuer",
          "example": "VISA",
          "readOnly": true
        },
        "heroku_id": {
          "type": [
            "string"
          ],
          "description": "heroku_id identifier reference",
          "example": "user930223902@heroku.com",
          "readOnly": true
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/invoice-address/definitions/heroku_id"
            }
          ]
        }
      },
      "links": [
        {
          "description": "Update an existing payment method for an account.",
          "href": "/account/payment-method",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "address_1": {
                "$ref": "#/definitions/payment-method/definitions/address_1"
              },
              "address_2": {
                "$ref": "#/definitions/payment-method/definitions/address_2"
              },
              "card_number": {
                "$ref": "#/definitions/payment-method/definitions/card_number"
              },
              "city": {
                "$ref": "#/definitions/payment-method/definitions/city"
              },
              "country": {
                "$ref": "#/definitions/payment-method/definitions/country"
              },
              "cvv": {
                "$ref": "#/definitions/payment-method/definitions/cvv"
              },
              "expiration_month": {
                "$ref": "#/definitions/payment-method/definitions/expiration_month"
              },
              "expiration_year": {
                "$ref": "#/definitions/payment-method/definitions/expiration_year"
              },
              "first_name": {
                "$ref": "#/definitions/payment-method/definitions/first_name"
              },
              "last_name": {
                "$ref": "#/definitions/payment-method/definitions/last_name"
              },
              "other": {
                "$ref": "#/definitions/payment-method/definitions/other"
              },
              "postal_code": {
                "$ref": "#/definitions/payment-method/definitions/postal_code"
              },
              "state": {
                "$ref": "#/definitions/payment-method/definitions/state"
              }
            },
            "required": [
              "address_1",
              "address_2",
              "card_number",
              "city",
              "country",
              "cvv",
              "expiration_month",
              "expiration_year",
              "first_name",
              "last_name",
              "postal_code",
              "state"
            ],
            "type": [
              "object"
            ]
          },
          "title": "update"
        },
        {
          "description": "Get the current payment method for an account.",
          "href": "/account/payment-method",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/payment-method"
          },
          "title": "get"
        }
      ],
      "properties": {
        "address_1": {
          "$ref": "#/definitions/payment-method/definitions/address_1"
        },
        "address_2": {
          "$ref": "#/definitions/payment-method/definitions/address_2"
        },
        "card_last4": {
          "$ref": "#/definitions/payment-method/definitions/card_last4"
        },
        "card_type": {
          "$ref": "#/definitions/payment-method/definitions/card_type"
        },
        "city": {
          "$ref": "#/definitions/payment-method/definitions/city"
        },
        "country": {
          "$ref": "#/definitions/payment-method/definitions/country"
        },
        "expiration_month": {
          "$ref": "#/definitions/payment-method/definitions/expiration_month"
        },
        "expiration_year": {
          "$ref": "#/definitions/payment-method/definitions/expiration_year"
        },
        "first_name": {
          "$ref": "#/definitions/payment-method/definitions/first_name"
        },
        "last_name": {
          "$ref": "#/definitions/payment-method/definitions/last_name"
        },
        "other": {
          "$ref": "#/definitions/payment-method/definitions/other"
        },
        "postal_code": {
          "$ref": "#/definitions/payment-method/definitions/postal_code"
        },
        "state": {
          "$ref": "#/definitions/payment-method/definitions/state"
        }
      }
    },
    "payment": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "description": "A payment represents money collected for an account",
      "title": "Heroku Vault API - Payments",
      "stability": "prototype",
      "type": [
        "object"
      ],
      "definitions": {
        "account_id": {
          "type": [
            "integer"
          ],
          "description": "account that payment belongs to",
          "example": 8403923,
          "readOnly": true
        },
        "amount": {
          "type": [
            "number"
          ],
          "description": "amount of payment in cents",
          "example": 50000,
          "readOnly": false
        },
        "created_at": {
          "description": "when payment was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "type": [
            "integer"
          ],
          "description": "legacy unique identifier of payment",
          "example": 9403943,
          "readOnly": true
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/payment/definitions/id"
            }
          ]
        },
        "state": {
          "enum": [
            "failure",
            "pending",
            "success"
          ],
          "type": [
            "string"
          ],
          "description": "state of the payment",
          "example": "pending",
          "readOnly": true
        },
        "updated_at": {
          "description": "when credit was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "uuid": {
          "description": "unique identifier for a payment transaction",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": false,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a payment on an existing account",
          "href": "/account/payments",
          "method": "POST",
          "rel": "self",
          "schema": {
            "properties": {
              "amount": {
                "$ref": "#/definitions/payment/definitions/amount"
              },
              "invoice": {
                "$ref": "#/definitions/invoice/definitions/identity"
              },
              "uuid": {
                "$ref": "#/definitions/payment/definitions/uuid"
              }
            },
            "required": [
              "amount",
              "invoice",
              "uuid"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/payment"
          },
          "title": "create"
        }
      ],
      "properties": {
        "amount": {
          "$ref": "#/definitions/payment/definitions/amount"
        },
        "created_at": {
          "$ref": "#/definitions/payment/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/payment/definitions/id"
        },
        "invoice": {
          "description": "identity of invoice",
          "properties": {
            "id": {
              "$ref": "#/definitions/invoice/definitions/id"
            },
            "number": {
              "$ref": "#/definitions/invoice/definitions/number"
            }
          },
          "type": [
            "null",
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/payment/definitions/updated_at"
        },
        "user": {
          "description": "identity of user issuing payment",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "state": {
          "$ref": "#/definitions/payment/definitions/state"
        }
      }
    },
    "plan": {
      "description": "Plans represent different configurations of add-ons that may be added to apps. Endpoints under add-on services can be accessed without authentication.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Plan",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when plan was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "default": {
          "description": "whether this plan is the default for its addon service",
          "example": false,
          "readOnly": true,
          "type": [
            "boolean"
          ]
        },
        "description": {
          "description": "description of plan",
          "example": "Heroku Postgres Dev",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "human_name": {
          "description": "human readable name of the addon plan",
          "example": "Dev",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this plan",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/plan/definitions/id"
            },
            {
              "$ref": "#/definitions/plan/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of this plan",
          "example": "heroku-postgresql:dev",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "cents": {
          "description": "price in cents per unit of plan",
          "example": 0,
          "readOnly": true,
          "type": [
            "integer"
          ]
        },
        "unit": {
          "description": "unit of price for plan",
          "example": "month",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "release status for plan",
          "example": "public",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when plan was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing plan.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}/plans/{(%23%2Fdefinitions%2Fplan%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/plan"
          },
          "title": "Info"
        },
        {
          "description": "List existing plans.",
          "href": "/addon-services/{(%23%2Fdefinitions%2Faddon-service%2Fdefinitions%2Fidentity)}/plans",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/plan"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/plan/definitions/created_at"
        },
        "default": {
          "$ref": "#/definitions/plan/definitions/default"
        },
        "description": {
          "$ref": "#/definitions/plan/definitions/description"
        },
        "human_name": {
          "$ref": "#/definitions/plan/definitions/human_name"
        },
        "id": {
          "$ref": "#/definitions/plan/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/plan/definitions/name"
        },
        "price": {
          "description": "price",
          "properties": {
            "cents": {
              "$ref": "#/definitions/plan/definitions/cents"
            },
            "unit": {
              "$ref": "#/definitions/plan/definitions/unit"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "state": {
          "$ref": "#/definitions/plan/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/plan/definitions/updated_at"
        }
      }
    },
    "rate-limit": {
      "description": "Rate Limit represents the number of request tokens each account holds. Requests to this endpoint do not count towards the rate limit.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Rate Limit",
      "type": [
        "object"
      ],
      "definitions": {
        "identity": {
        },
        "remaining": {
          "description": "allowed requests remaining in current interval",
          "example": 2399,
          "readOnly": true,
          "type": [
            "integer"
          ]
        }
      },
      "links": [
        {
          "description": "Info for rate limits.",
          "href": "/account/rate-limits",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/rate-limit"
          },
          "title": "Info"
        }
      ],
      "properties": {
        "remaining": {
          "$ref": "#/definitions/rate-limit/definitions/remaining"
        }
      }
    },
    "recovery-code": {
      "description": "Recovery codes grant access to accounts with two-factor authentication enabled.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "development",
      "strictProperties": true,
      "title": "Heroku Platform API - Recovery Code",
      "type": [
        "array"
      ],
      "items": {
        "example": "0123456789abcdef",
        "type": [
          "string"
        ]
      },
      "links": [
        {
          "description": "Generate new recovery codes. This invalidates any existing codes on the account.",
          "href": "/account/recovery-codes",
          "method": "POST",
          "rel": "create",
          "targetSchema": {
            "$ref": "#/definitions/recovery-code"
          },
          "title": "Create"
        }
      ]
    },
    "region": {
      "description": "A region represents a geographic location in which your application may run.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Region",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when region was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of region",
          "example": "United States",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of region",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/region/definitions/id"
            },
            {
              "$ref": "#/definitions/region/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name of region",
          "example": "us",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when region was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing region.",
          "href": "/regions/{(%23%2Fdefinitions%2Fregion%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/region"
          },
          "title": "Info"
        },
        {
          "description": "List existing regions.",
          "href": "/regions",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/region"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/region/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/region/definitions/description"
        },
        "id": {
          "$ref": "#/definitions/region/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/region/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/region/definitions/updated_at"
        }
      }
    },
    "release": {
      "description": "A release represents a combination of code, config vars and add-ons for an app on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Release",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when release was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "description": {
          "description": "description of changes in this release",
          "example": "Added new feature",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of release",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/release/definitions/id"
            },
            {
              "$ref": "#/definitions/release/definitions/version"
            }
          ]
        },
        "updated_at": {
          "description": "when release was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "version": {
          "description": "unique version assigned to the release",
          "example": 11,
          "readOnly": true,
          "type": [
            "integer"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases/{(%23%2Fdefinitions%2Frelease%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/release"
          },
          "title": "Info"
        },
        {
          "description": "List existing releases.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/release"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Create new release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "description": {
                "$ref": "#/definitions/release/definitions/description"
              },
              "slug": {
                "$ref": "#/definitions/slug/definitions/identity"
              }
            },
            "required": [
              "slug"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/release"
          },
          "title": "Create"
        },
        {
          "description": "Rollback to an existing release.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/releases",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "release": {
                "$ref": "#/definitions/release/definitions/id"
              }
            },
            "required": [
              "release"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/release"
          },
          "title": "Rollback"
        }
      ],
      "properties": {
        "app": {
          "description": "app involved in the release",
          "properties": {
            "name": {
              "$ref": "#/definitions/app/definitions/name"
            },
            "id": {
              "$ref": "#/definitions/app/definitions/id"
            }
          },
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/release/definitions/created_at"
        },
        "description": {
          "$ref": "#/definitions/release/definitions/description"
        },
        "id": {
          "$ref": "#/definitions/release/definitions/id"
        },
        "updated_at": {
          "$ref": "#/definitions/release/definitions/updated_at"
        },
        "slug": {
          "description": "slug running in this release",
          "properties": {
            "id": {
              "$ref": "#/definitions/slug/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object",
            "null"
          ]
        },
        "user": {
          "description": "user that created the release",
          "properties": {
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            },
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "version": {
          "$ref": "#/definitions/release/definitions/version"
        }
      }
    },
    "slug": {
      "description": "A slug is a snapshot of your application code that is ready to run on the platform.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Slug",
      "type": [
        "object"
      ],
      "definitions": {
        "buildpack_provided_description": {
          "description": "description from buildpack of slug",
          "example": "Ruby/Rack",
          "readOnly": false,
          "type": [
            "null",
            "string"
          ]
        },
        "commit": {
          "description": "identification of the code with your version control system (eg: SHA of the git HEAD)",
          "example": "60883d9e8947a57e04dc9124f25df004866a2051",
          "readOnly": false,
          "type": [
            "null",
            "string"
          ]
        },
        "commit_description": {
          "description": "an optional description of the provided commit",
          "example": "fixed a bug with API documentation",
          "readOnly": false,
          "type": [
            "null",
            "string"
          ]
        },
        "created_at": {
          "description": "when slug was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of slug",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/slug/definitions/id"
            }
          ]
        },
        "method": {
          "description": "method to be used to interact with the slug blob",
          "example": "GET",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "process_types": {
          "additionalProperties": false,
          "description": "hash mapping process type names to their respective command",
          "example": {
            "web": "./bin/web -p $PORT"
          },
          "patternProperties": {
            "^\\w+$": {
              "type": [
                "string"
              ]
            }
          },
          "readOnly": false,
          "type": [
            "object"
          ]
        },
        "size": {
          "default": null,
          "description": "size of slug, in bytes",
          "example": 2048,
          "readOnly": true,
          "type": [
            "integer",
            "null"
          ]
        },
        "updated_at": {
          "description": "when slug was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "url": {
          "description": "URL to interact with the slug blob",
          "example": "https://api.heroku.com/slugs/1234.tgz",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Info for existing slug.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs/{(%23%2Fdefinitions%2Fslug%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/slug"
          },
          "title": "Info"
        },
        {
          "description": "Create a new slug. For more information please refer to [Deploying Slugs using the Platform API](https://devcenter.heroku.com/articles/platform-api-deploying-slugs).",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/slugs",
          "method": "POST",
          "rel": "create",
          "schema": {
            "example": {
              "blob": {
                "method": "PUT",
                "url": "https://api.heroku.com/slugs/1234.tgz"
              },
              "buildpack_provided_description": "Ruby/Rack",
              "commit": "60883d9e8947a57e04dc9124f25df004866a2051",
              "commit_description": "fixed a bug with API documentation",
              "created_at": "2012-01-01T12:00:00Z",
              "id": "01234567-89ab-cdef-0123-456789abcdef",
              "process_types": {
                "web": "./bin/web -p $PORT"
              },
              "size": 2048,
              "stack": {
                "id": "01234567-89ab-cdef-0123-456789abcdef",
                "name": "cedar-14"
              },
              "updated_at\"": "2012-01-01T12:00:00Z"
            },
            "properties": {
              "buildpack_provided_description": {
                "$ref": "#/definitions/slug/definitions/buildpack_provided_description"
              },
              "commit": {
                "$ref": "#/definitions/slug/definitions/commit"
              },
              "commit_description": {
                "$ref": "#/definitions/slug/definitions/commit_description"
              },
              "process_types": {
                "$ref": "#/definitions/slug/definitions/process_types"
              },
              "stack": {
                "$ref": "#/definitions/stack/definitions/identity"
              }
            },
            "required": [
              "process_types"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/slug"
          },
          "title": "Create"
        }
      ],
      "properties": {
        "blob": {
          "description": "pointer to the url where clients can fetch or store the actual release binary",
          "properties": {
            "method": {
              "$ref": "#/definitions/slug/definitions/method"
            },
            "url": {
              "$ref": "#/definitions/slug/definitions/url"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "buildpack_provided_description": {
          "$ref": "#/definitions/slug/definitions/buildpack_provided_description"
        },
        "commit": {
          "$ref": "#/definitions/slug/definitions/commit"
        },
        "commit_description": {
          "$ref": "#/definitions/slug/definitions/commit_description"
        },
        "created_at": {
          "$ref": "#/definitions/slug/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/slug/definitions/id"
        },
        "process_types": {
          "$ref": "#/definitions/slug/definitions/process_types"
        },
        "size": {
          "$ref": "#/definitions/slug/definitions/size"
        },
        "stack": {
          "description": "identity of slug stack",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/slug/definitions/updated_at"
        }
      }
    },
    "sms-number": {
      "description": "SMS numbers are used for recovery on accounts with two-factor authentication enabled.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - SMS Number",
      "type": [
        "object"
      ],
      "definitions": {
        "sms_number": {
          "$ref": "#/definitions/account/definitions/sms_number"
        }
      },
      "links": [
        {
          "description": "Recover an account using an SMS recovery code",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/sms-number"
          },
          "title": "SMS Number"
        },
        {
          "description": "Recover an account using an SMS recovery code",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number/actions/recover",
          "method": "POST",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/sms-number"
          },
          "title": "Recover"
        },
        {
          "description": "Confirm an SMS number change with a confirmation code",
          "href": "/users/{(%23%2Fdefinitions%2Faccount%2Fdefinitions%2Fidentity)}/sms-number/actions/confirm",
          "method": "POST",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/sms-number"
          },
          "title": "Confirm"
        }
      ],
      "properties": {
        "sms_number": {
          "$ref": "#/definitions/account/definitions/sms_number"
        }
      }
    },
    "source": {
      "description": "A source is a location for uploading and downloading an application's source code.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Source",
      "type": [
        "object"
      ],
      "definitions": {
        "get_url": {
          "description": "URL to download the source",
          "example": "https://api.heroku.com/sources/1234.tgz",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "put_url": {
          "description": "URL to upload the source",
          "example": "https://api.heroku.com/sources/1234.tgz",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create URLs for uploading and downloading source.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/sources",
          "method": "POST",
          "rel": "create",
          "targetSchema": {
            "$ref": "#/definitions/source"
          },
          "title": "Create"
        }
      ],
      "properties": {
        "source_blob": {
          "description": "pointer to the URL where clients can fetch or store the source",
          "properties": {
            "get_url": {
              "$ref": "#/definitions/source/definitions/get_url"
            },
            "put_url": {
              "$ref": "#/definitions/source/definitions/put_url"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      }
    },
    "ssl-endpoint": {
      "description": "[SSL Endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) is a public address serving custom SSL cert for HTTPS traffic to a Heroku app. Note that an app must have the `ssl:endpoint` addon installed before it can provision an SSL Endpoint using these APIs.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Heroku Platform API - SSL Endpoint",
      "stability": "production",
      "strictProperties": true,
      "type": [
        "object"
      ],
      "definitions": {
        "certificate_chain": {
          "description": "raw contents of the public certificate chain (eg: .crt or .pem file)",
          "example": "-----BEGIN CERTIFICATE----- ...",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "cname": {
          "description": "canonical name record, the address to point a domain at",
          "example": "example.herokussl.com",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "created_at": {
          "description": "when endpoint was created",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of this SSL endpoint",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/ssl-endpoint/definitions/id"
            },
            {
              "$ref": "#/definitions/ssl-endpoint/definitions/name"
            }
          ]
        },
        "name": {
          "description": "unique name for SSL endpoint",
          "example": "example",
          "pattern": "^[a-z][a-z0-9-]{2,29}$",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "preprocess": {
          "default": true,
          "description": "allow Heroku to modify an uploaded public certificate chain if deemed advantageous by adding missing intermediaries, stripping unnecessary ones, etc.",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "private_key": {
          "description": "contents of the private key (eg .key file)",
          "example": "-----BEGIN RSA PRIVATE KEY----- ...",
          "readOnly": false,
          "type": [
            "string"
          ]
        },
        "rollback": {
          "default": false,
          "description": "indicates that a rollback should be performed",
          "example": false,
          "readOnly": false,
          "type": [
            "boolean"
          ]
        },
        "updated_at": {
          "description": "when endpoint was updated",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Create a new SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
              "certificate_chain": {
                "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
              },
              "preprocess": {
                "$ref": "#/definitions/ssl-endpoint/definitions/preprocess"
              },
              "private_key": {
                "$ref": "#/definitions/ssl-endpoint/definitions/private_key"
              }
            },
            "required": [
              "certificate_chain",
              "private_key"
            ],
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/ssl-endpoint"
          },
          "title": "Create"
        },
        {
          "description": "Delete existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "DELETE",
          "rel": "destroy",
          "targetSchema": {
            "$ref": "#/definitions/ssl-endpoint"
          },
          "title": "Delete"
        },
        {
          "description": "Info for existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/ssl-endpoint"
          },
          "title": "Info"
        },
        {
          "description": "List existing SSL endpoints.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/ssl-endpoint"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        },
        {
          "description": "Update an existing SSL endpoint.",
          "href": "/apps/{(%23%2Fdefinitions%2Fapp%2Fdefinitions%2Fidentity)}/ssl-endpoints/{(%23%2Fdefinitions%2Fssl-endpoint%2Fdefinitions%2Fidentity)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "certificate_chain": {
                "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
              },
              "preprocess": {
                "$ref": "#/definitions/ssl-endpoint/definitions/preprocess"
              },
              "private_key": {
                "$ref": "#/definitions/ssl-endpoint/definitions/private_key"
              },
              "rollback": {
                "$ref": "#/definitions/ssl-endpoint/definitions/rollback"
              }
            },
            "type": [
              "object"
            ]
          },
          "targetSchema": {
            "$ref": "#/definitions/ssl-endpoint"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "certificate_chain": {
          "$ref": "#/definitions/ssl-endpoint/definitions/certificate_chain"
        },
        "cname": {
          "$ref": "#/definitions/ssl-endpoint/definitions/cname"
        },
        "created_at": {
          "$ref": "#/definitions/ssl-endpoint/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/ssl-endpoint/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/ssl-endpoint/definitions/name"
        },
        "updated_at": {
          "$ref": "#/definitions/ssl-endpoint/definitions/updated_at"
        }
      }
    },
    "stack": {
      "description": "Stacks are the different application execution environments available in the Heroku platform.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - Stack",
      "type": [
        "object"
      ],
      "definitions": {
        "created_at": {
          "description": "when stack was introduced",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "id": {
          "description": "unique identifier of stack",
          "example": "01234567-89ab-cdef-0123-456789abcdef",
          "format": "uuid",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/stack/definitions/name"
            },
            {
              "$ref": "#/definitions/stack/definitions/id"
            }
          ]
        },
        "name": {
          "description": "unique name of stack",
          "example": "cedar-14",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "state": {
          "description": "availability of this stack: beta, deprecated or public",
          "example": "public",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "updated_at": {
          "description": "when stack was last modified",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "Stack info.",
          "href": "/stacks/{(%23%2Fdefinitions%2Fstack%2Fdefinitions%2Fidentity)}",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/stack"
          },
          "title": "Info"
        },
        {
          "description": "List available stacks.",
          "href": "/stacks",
          "method": "GET",
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/stack"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "created_at": {
          "$ref": "#/definitions/stack/definitions/created_at"
        },
        "id": {
          "$ref": "#/definitions/stack/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/stack/definitions/name"
        },
        "state": {
          "$ref": "#/definitions/stack/definitions/state"
        },
        "updated_at": {
          "$ref": "#/definitions/stack/definitions/updated_at"
        }
      }
    },
    "user-app": {
      "description": "An app represents the program that you would like to deploy and run on Heroku.",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "prototype",
      "strictProperties": true,
      "title": "Heroku Platform API - App",
      "type": [
        "object"
      ],
      "definitions": {
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/account/definitions/email"
            },
            {
              "$ref": "#/definitions/account/definitions/id"
            },
            {
              "$ref": "#/definitions/user-app/definitions/self"
            }
          ]
        },
        "self": {
          "description": "Implicit reference to currently authorized user",
          "enum": [
            "~"
          ],
          "example": "~",
          "readOnly": true,
          "type": [
            "string"
          ]
        }
      },
      "links": [
        {
          "description": "List owned and collaborated apps (excludes organization apps).",
          "href": "/users/{(%23%2Fdefinitions%2Fuser-app%2Fdefinitions%2Fidentity)}/apps",
          "method": "GET",
          "ranges": [
            "id",
            "name",
            "updated_at"
          ],
          "rel": "instances",
          "targetSchema": {
            "items": {
              "$ref": "#/definitions/user-app"
            },
            "type": [
              "array"
            ]
          },
          "title": "List"
        }
      ],
      "properties": {
        "archived_at": {
          "$ref": "#/definitions/app/definitions/archived_at"
        },
        "buildpack_provided_description": {
          "$ref": "#/definitions/app/definitions/buildpack_provided_description"
        },
        "build_stack": {
          "description": "identity of the stack that will be used for new builds",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "created_at": {
          "$ref": "#/definitions/app/definitions/created_at"
        },
        "git_url": {
          "$ref": "#/definitions/app/definitions/git_url"
        },
        "id": {
          "$ref": "#/definitions/app/definitions/id"
        },
        "maintenance": {
          "$ref": "#/definitions/app/definitions/maintenance"
        },
        "name": {
          "$ref": "#/definitions/app/definitions/name"
        },
        "owner": {
          "description": "identity of app owner",
          "properties": {
            "email": {
              "$ref": "#/definitions/account/definitions/email"
            },
            "id": {
              "$ref": "#/definitions/account/definitions/id"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "region": {
          "description": "identity of app region",
          "properties": {
            "id": {
              "$ref": "#/definitions/region/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/region/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "released_at": {
          "$ref": "#/definitions/app/definitions/released_at"
        },
        "repo_size": {
          "$ref": "#/definitions/app/definitions/repo_size"
        },
        "slug_size": {
          "$ref": "#/definitions/app/definitions/slug_size"
        },
        "stack": {
          "description": "identity of app stack",
          "properties": {
            "id": {
              "$ref": "#/definitions/stack/definitions/id"
            },
            "name": {
              "$ref": "#/definitions/stack/definitions/name"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "updated_at": {
          "$ref": "#/definitions/app/definitions/updated_at"
        },
        "web_url": {
          "$ref": "#/definitions/app/definitions/web_url"
        },
        "process_tier": {
          "$ref": "#/definitions/app/definitions/process_tier"
        }
      }
    },
    "user-preferences": {
      "description": "Tracks a user's preferences and message dismissals",
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "stability": "production",
      "strictProperties": true,
      "title": "Heroku Platform API - User Preferences",
      "type": [
        "object"
      ],
      "definitions": {
        "identity": {
          "anyOf": [
            {
              "$ref": "#/definitions/user-preferences/definitions/self"
            }
          ]
        },
        "self": {
          "description": "Implicit reference to currently authorized user",
          "enum": [
            "~"
          ],
          "example": "~",
          "readOnly": true,
          "type": [
            "string"
          ]
        },
        "timezone": {
          "description": "User's default timezone",
          "example": "UTC",
          "readOnly": false,
          "type": [
            "string",
            "null"
          ]
        },
        "dismissed-github-banner": {
          "description": "Whether the user has dismissed the GitHub link banner",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-getting-started": {
          "description": "Whether the user has dismissed the getting started banner",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-org-access-controls": {
          "description": "Whether the user has dismissed the Organization Access Controls banner",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-org-wizard-notification": {
          "description": "Whether the user has dismissed the Organization Wizard",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-pipelines-banner": {
          "description": "Whether the user has dismissed the Pipelines banner",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-pipelines-github-banner": {
          "description": "Whether the user has dismissed the GitHub banner on a pipeline overview",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        },
        "dismissed-sms-banner": {
          "description": "Whether the user has dismissed the 2FA SMS banner",
          "example": true,
          "readOnly": false,
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "links": [
        {
          "description": "Retrieve User Preferences",
          "href": "/users/{(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)}/preferences",
          "method": "GET",
          "rel": "self",
          "targetSchema": {
            "$ref": "#/definitions/user-preferences"
          },
          "title": "List"
        },
        {
          "description": "Update User Preferences",
          "href": "/users/{(%23%2Fdefinitions%2Fuser-preferences%2Fdefinitions%2Fidentity)}/preferences",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
              "timezone": {
                "$ref": "#/definitions/user-preferences/definitions/timezone"
              },
              "dismissed-github-banner": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-github-banner"
              },
              "dismissed-getting-started": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-getting-started"
              },
              "dismissed-org-access-controls": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-org-access-controls"
              },
              "dismissed-org-wizard-notification": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-org-wizard-notification"
              },
              "dismissed-pipelines-banner": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-pipelines-banner"
              },
              "dismissed-sms-banner": {
                "$ref": "#/definitions/user-preferences/definitions/dismissed-sms-banner"
              }
            }
          },
          "targetSchema": {
            "$ref": "#/definitions/user-preferences"
          },
          "title": "Update"
        }
      ],
      "properties": {
        "timezone": {
          "$ref": "#/definitions/user-preferences/definitions/timezone"
        },
        "dismissed-github-banner": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-github-banner"
        },
        "dismissed-getting-started": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-getting-started"
        },
        "dismissed-org-access-controls": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-org-access-controls"
        },
        "dismissed-org-wizard-notification": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-org-wizard-notification"
        },
        "dismissed-pipelines-banner": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-pipelines-banner"
        },
        "dismissed-pipelines-github-banner": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-pipelines-github-banner"
        },
        "dismissed-sms-banner": {
          "$ref": "#/definitions/user-preferences/definitions/dismissed-sms-banner"
        }
      }
    }
  },
  "properties": {
    "account-feature": {
      "$ref": "#/definitions/account-feature"
    },
    "account": {
      "$ref": "#/definitions/account"
    },
    "addon-attachment": {
      "$ref": "#/definitions/addon-attachment"
    },
    "addon-service": {
      "$ref": "#/definitions/addon-service"
    },
    "addon": {
      "$ref": "#/definitions/addon"
    },
    "app-feature": {
      "$ref": "#/definitions/app-feature"
    },
    "app-setup": {
      "$ref": "#/definitions/app-setup"
    },
    "app-transfer": {
      "$ref": "#/definitions/app-transfer"
    },
    "app": {
      "$ref": "#/definitions/app"
    },
    "build-result": {
      "$ref": "#/definitions/build-result"
    },
    "build": {
      "$ref": "#/definitions/build"
    },
    "buildpack-installation": {
      "$ref": "#/definitions/buildpack-installation"
    },
    "collaborator": {
      "$ref": "#/definitions/collaborator"
    },
    "config-var": {
      "$ref": "#/definitions/config-var"
    },
    "credit": {
      "$ref": "#/definitions/credit"
    },
    "domain": {
      "$ref": "#/definitions/domain"
    },
    "dyno": {
      "$ref": "#/definitions/dyno"
    },
    "event": {
      "$ref": "#/definitions/event"
    },
    "failed-event": {
      "$ref": "#/definitions/failed-event"
    },
    "formation": {
      "$ref": "#/definitions/formation"
    },
    "invoice-address": {
      "$ref": "#/definitions/invoice-address"
    },
    "invoice": {
      "$ref": "#/definitions/invoice"
    },
    "key": {
      "$ref": "#/definitions/key"
    },
    "log-drain": {
      "$ref": "#/definitions/log-drain"
    },
    "log-session": {
      "$ref": "#/definitions/log-session"
    },
    "oauth-authorization": {
      "$ref": "#/definitions/oauth-authorization"
    },
    "oauth-client": {
      "$ref": "#/definitions/oauth-client"
    },
    "oauth-grant": {
      "$ref": "#/definitions/oauth-grant"
    },
    "oauth-token": {
      "$ref": "#/definitions/oauth-token"
    },
    "organization-app-collaborator": {
      "$ref": "#/definitions/organization-app-collaborator"
    },
    "organization-app": {
      "$ref": "#/definitions/organization-app"
    },
    "organization-invoice": {
      "$ref": "#/definitions/organization-invoice"
    },
    "organization-member": {
      "$ref": "#/definitions/organization-member"
    },
    "organization-payment-method": {
      "$ref": "#/definitions/organization-payment-method"
    },
    "organization": {
      "$ref": "#/definitions/organization"
    },
    "otp-secret": {
      "$ref": "#/definitions/otp-secret"
    },
    "payment-method": {
      "$ref": "#/definitions/payment-method"
    },
    "payment": {
      "$ref": "#/definitions/payment"
    },
    "plan": {
      "$ref": "#/definitions/plan"
    },
    "rate-limit": {
      "$ref": "#/definitions/rate-limit"
    },
    "recovery-code": {
      "$ref": "#/definitions/recovery-code"
    },
    "region": {
      "$ref": "#/definitions/region"
    },
    "release": {
      "$ref": "#/definitions/release"
    },
    "slug": {
      "$ref": "#/definitions/slug"
    },
    "sms-number": {
      "$ref": "#/definitions/sms-number"
    },
    "source": {
      "$ref": "#/definitions/source"
    },
    "ssl-endpoint": {
      "$ref": "#/definitions/ssl-endpoint"
    },
    "stack": {
      "$ref": "#/definitions/stack"
    },
    "user-app": {
      "$ref": "#/definitions/user-app"
    },
    "user-preferences": {
      "$ref": "#/definitions/user-preferences"
    }
  },
  "description": "The platform API empowers developers to automate, extend and combine Heroku with other services.",
  "id": "http://api.heroku.com/schema#",
  "links": [
    {
      "href": "https://api.heroku.com",
      "rel": "self"
    },
    {
      "href": "/schema",
      "method": "GET",
      "rel": "self",
      "targetSchema": {
        "additionalProperties": true
      }
    }
  ],
  "title": "Heroku Platform API"
}

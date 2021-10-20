/* 
* JBoss, Home of Professional Open Source
* Copyright Red Hat, Inc., and individual contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

(function (window, undefined) {
    this.Promedico = {};

    /**
     * Construct Totp
     * @status Stable
     * @param {String} [secret] - The secret to use for generating the one time password
     * @constructs Promedico.Totp
    */    
    Promedico.Totp = function (secret) {
        this.secret = secret;
        return this;
    }

    Promedico.Totp.constructor = Promedico.Totp;

    /**
     * Generate a one time password based on provided secret.
     * @param callback the callback to execute when the generation is done
     * @example
     *
     *  // the secret key (statically defined here but in practice it's scanned)
     *  String secret = "B2374TNIQ3HKC446";
     *  // initialize OTP
     *  var generator = new Promedico.Totp(secret);
     *  // generate token
     *  generator.generateOTP(function(result) { ... });
     */
    Promedico.Totp.prototype.generateOTP = function (callback) {
        cordova.exec(callback, null, "PromedicoPlugin", "generateOTP", [this.secret]);
    }

    function gup(url, name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results != null ? results[1] : "";
    }
})( this );

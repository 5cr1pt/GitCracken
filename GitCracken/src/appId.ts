import * as crypto from "crypto";
import * as os from "os";
import * as path from "path";
import * as util from "util";

import * as fs from "fs-extra";
import {getMac} from "getmac";
import * as uuid from "uuid";

import {CURRENT_PLATFORM, Platforms} from "./platform";

/**
 * AppId
 */
export class AppId {
  /**
   * Generate AppId as sha1sum of specific mac address (or other string e.g. uuid/v4)
   * @param mac MAC address
   * @throws Error
   */
  public static generate(mac: string): string {
    return crypto
      .createHash("sha1")
      .update(mac, "utf8")
      .digest("hex");
  }

  /**
   * Generate AppId as sha1sum of your mac address (or as uuid/v4 if you don't have mac)
   * @throws Error
   */
  public static async generateAsync(): Promise<string> {
    let mac: string;
    try {
      mac = await util.promisify(getMac)();
    } catch (e) {
      mac = uuid.v4();
    }
    return AppId.generate(mac);
  }

  /**
   * Read AppId from GitKraken config
   * @param config Path to config
   * @throws Error
   */
  public static read(config: string = AppId.configPath()): string | undefined {
    if (!config || !fs.existsSync(config)) {
      return undefined;
    }
    return fs.readJSONSync(config).appId;
  }

  /**
   * Default config path
   */
  private static configPath(): string {
    switch (CURRENT_PLATFORM) {
      case Platforms.linux:
      case Platforms.macOS:
        return path.join(os.homedir(), ".gitkraken/config");
      case Platforms.windows:
        return path.join(os.homedir(), "AppData/Roaming/.gitkraken/config");
    }
  }
}

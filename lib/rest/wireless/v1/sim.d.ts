/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { DataSessionList } from './sim/dataSession';
import { DataSessionListInstance } from './sim/dataSession';
import { SerializableClass } from '../../../interfaces';
import { UsageRecordList } from './sim/usageRecord';
import { UsageRecordListInstance } from './sim/usageRecord';

type SimResetStatus = 'resetting';

type SimStatus = 'new'|'ready'|'active'|'suspended'|'deactivated'|'canceled'|'scheduled'|'updating';

/**
 * Initialize the SimList
 *
 * @param version - Version of the resource
 */
declare function SimList(version: V1): SimListInstance;

/**
 * Options to pass to update
 *
 * @property accountSid - The SID of the Account to which the Sim resource should belong
 * @property callbackMethod - The HTTP method we should use to call callback_url
 * @property callbackUrl - The URL we should call when the Sim resource has finished updating
 * @property commandsCallbackMethod - The HTTP method we should use to call commands_callback_url
 * @property commandsCallbackUrl - The URL we should call when the SIM sends a Command
 * @property friendlyName - A string to describe the Sim resource
 * @property ratePlan - The SID or unique name of the RatePlan resource to which the Sim resource should be assigned
 * @property resetStatus - Initiate a connectivity reset on a SIM
 * @property smsFallbackMethod - The HTTP method we should use to call sms_fallback_url
 * @property smsFallbackUrl - The URL we should call when an error occurs while retrieving or executing the TwiML requested from sms_url
 * @property smsMethod - The HTTP method we should use to call sms_url
 * @property smsUrl - The URL we should call when the SIM-connected device sends an SMS message that is not a Command
 * @property status - The new status of the Sim resource
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 * @property voiceFallbackMethod - The HTTP method we should use to call voice_fallback_url
 * @property voiceFallbackUrl - The URL we should call when an error occurs while retrieving or executing the TwiML requested from voice_url
 * @property voiceMethod - The HTTP method we should use when we call voice_url
 * @property voiceUrl - The URL we should call when the SIM-connected device makes a voice call
 */
interface SimInstanceUpdateOptions {
  accountSid?: string;
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  resetStatus?: SimResetStatus;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: SimStatus;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

interface SimListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SimContext;
  /**
   * Streams SimInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SimListInstanceEachOptions, callback?: (item: SimInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sim
   *
   * @param sid - The SID of the Sim resource to fetch
   */
  get(sid: string): SimContext;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SimListInstanceOptions, callback?: (error: Error | null, items: SimInstance[]) => any): Promise<SimInstance[]>;
  /**
   * Retrieve a single page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SimListInstancePageOptions, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property eId - Deprecated
 * @property iccid - Only return Sim resources with this ICCID
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property ratePlan - Only return Sim resources assigned to this RatePlan resource
 * @property simRegistrationCode - Only return Sim resources with this registration code
 * @property status - Only return Sim resources with this status
 */
interface SimListInstanceEachOptions {
  callback?: (item: SimInstance, done: (err?: Error) => void) => void;
  done?: Function;
  eId?: string;
  iccid?: string;
  limit?: number;
  pageSize?: number;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

/**
 * Options to pass to list
 *
 * @property eId - Deprecated
 * @property iccid - Only return Sim resources with this ICCID
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property ratePlan - Only return Sim resources assigned to this RatePlan resource
 * @property simRegistrationCode - Only return Sim resources with this registration code
 * @property status - Only return Sim resources with this status
 */
interface SimListInstanceOptions {
  eId?: string;
  iccid?: string;
  limit?: number;
  pageSize?: number;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

/**
 * Options to pass to page
 *
 * @property eId - Deprecated
 * @property iccid - Only return Sim resources with this ICCID
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property ratePlan - Only return Sim resources assigned to this RatePlan resource
 * @property simRegistrationCode - Only return Sim resources with this registration code
 * @property status - Only return Sim resources with this status
 */
interface SimListInstancePageOptions {
  eId?: string;
  iccid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

interface SimPayload extends SimResource, Page.TwilioResponsePayload {
}

interface SimResource {
  account_sid: string;
  commands_callback_method: string;
  commands_callback_url: string;
  date_created: Date;
  date_updated: Date;
  e_id: string;
  friendly_name: string;
  iccid: string;
  ip_address: string;
  links: string;
  rate_plan_sid: string;
  reset_status: SimResetStatus;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status: SimStatus;
  unique_name: string;
  url: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface SimSolution {
}


declare class SimContext {
  /**
   * Initialize the SimContext
   *
   * @param version - Version of the resource
   * @param sid - The SID of the Sim resource to fetch
   */
  constructor(version: V1, sid: string);

  dataSessions: DataSessionListInstance;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  /**
   * remove a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SimInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SimInstanceUpdateOptions, callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  usageRecords: UsageRecordListInstance;
}


declare class SimInstance extends SerializableClass {
  /**
   * Initialize the SimContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the Sim resource to fetch
   */
  constructor(version: V1, payload: SimPayload, sid: string);

  private _proxy: SimContext;
  accountSid: string;
  commandsCallbackMethod: string;
  commandsCallbackUrl: string;
  /**
   * Access the dataSessions
   */
  dataSessions(): DataSessionListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  eId: string;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  friendlyName: string;
  iccid: string;
  ipAddress: string;
  links: string;
  ratePlanSid: string;
  /**
   * remove a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SimInstance) => any): Promise<boolean>;
  resetStatus: SimResetStatus;
  sid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  status: SimStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SimInstanceUpdateOptions, callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  url: string;
  /**
   * Access the usageRecords
   */
  usageRecords(): UsageRecordListInstance;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class SimPage extends Page<V1, SimPayload, SimResource, SimInstance> {
  /**
   * Initialize the SimPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SimSolution);

  /**
   * Build an instance of SimInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SimPayload): SimInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SimContext, SimInstance, SimInstanceUpdateOptions, SimList, SimListInstance, SimListInstanceEachOptions, SimListInstanceOptions, SimListInstancePageOptions, SimPage, SimPayload, SimResource, SimSolution }

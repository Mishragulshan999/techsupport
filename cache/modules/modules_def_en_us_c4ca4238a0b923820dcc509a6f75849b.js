ACLAllowedModules = ["Leads","Cases","Bugs","ProspectLists","Prospects","Project","ProjectTask","Campaigns","CampaignLog","Releases","Contacts","Accounts","Opportunities","Notes","Calls","Emails","Meetings","Tasks","Users","Trackers","TrackerSessions","TrackerPerfs","TrackerQueries","Documents","DocumentRevisions","EmailAddresses","Teams","Quotes","RevenueLineItems","Products","ProductTemplates","ProductTypes","ProductCategories","Manufacturers","Forecasts","Quotas","Contracts","Shifts","ShiftExceptions","DataPrivacy","Tags","KBContents"];
var module_defs = new Object();
default_summary_columns = ['count'];

var rel_defs = new Object();
var link_defs_Leads = new Object();
link_defs_Leads[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"leads_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Leads[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"leads_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Leads[ 'activities' ] = {"name":"activities","relationship_name":"lead_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Leads[ 'dataprivacy' ] = {"name":"dataprivacy","relationship_name":"leads_dataprivacy","bean_is_lhs":true,"link_type":"many","label":"Data Privacy","module":"DataPrivacy"};
link_defs_Leads[ 'accounts' ] = {"name":"accounts","relationship_name":"account_leads","bean_is_lhs":false,"link_type":"one","label":"Account","module":"Accounts"};
link_defs_Leads[ 'opportunity' ] = {"name":"opportunity","relationship_name":"opportunity_leads","bean_is_lhs":false,"link_type":"one","label":"Converted Opportunitie Name","module":"Opportunities"};
link_defs_Leads[ 'campaign_leads' ] = {"name":"campaign_leads","relationship_name":"campaign_leads","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_Leads[ 'business_centers' ] = {"name":"business_centers","relationship_name":"business_center_leads","bean_is_lhs":false,"link_type":"one","label":"Business Center Name","module":"BusinessCenters"};
link_defs_Leads[ 'messages' ] = {"name":"messages","relationship_name":"lead_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Leads[ 'tasks' ] = {"name":"tasks","relationship_name":"lead_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Leads[ 'notes' ] = {"name":"notes","relationship_name":"lead_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Leads[ 'meetings' ] = {"name":"meetings","relationship_name":"meetings_leads","bean_is_lhs":false,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Leads[ 'calls' ] = {"name":"calls","relationship_name":"calls_leads","bean_is_lhs":false,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Leads[ 'emails' ] = {"name":"emails","relationship_name":"emails_leads_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Leads[ 'campaigns' ] = {"name":"campaigns","relationship_name":"lead_campaign_log","bean_is_lhs":true,"link_type":"many","label":"CampaignLog","module":"CampaignLog"};
link_defs_Leads[ 'prospect_lists' ] = {"name":"prospect_lists","relationship_name":"prospect_list_leads","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Leads[ 'prospect' ] = {"name":"prospect","relationship_name":"lead_prospect","bean_is_lhs":true,"link_type":"one","label":"Target","module":"Prospects"};
link_defs_Leads[ 'tag_link' ] = {"name":"tag_link","relationship_name":"leads_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Leads[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"leads_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Leads[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"leads_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Leads[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"leads_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Leads[ 'team_link' ] = {"name":"team_link","relationship_name":"leads_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Leads[ 'email_addresses_primary' ] = {"name":"email_addresses_primary","relationship_name":"leads_email_addresses_primary","bean_is_lhs":true,"link_type":"many","label":"Email Address","module":"EmailAddresses"};
var field_defs_Leads = new Object();
field_defs_Leads[ "account_description"] = {"name":"account_description","vname":"Account Description","type":"text","group":"account_name","unified_search":true};field_defs_Leads[ "account_name"] = {"name":"account_name","vname":"Account Name","type":"varchar","len":"255","unified_search":true};field_defs_Leads[ "alt_address_city"] = {"name":"alt_address_city","vname":"Alt Address City","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "alt_address_country"] = {"name":"alt_address_country","vname":"Alt Address Country","type":"varchar","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "alt_address_postalcode"] = {"name":"alt_address_postalcode","vname":"Alt Address Postal Code","type":"varchar","len":"20","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "alt_address_state"] = {"name":"alt_address_state","vname":"Alt Address State","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "alt_address_street"] = {"name":"alt_address_street","vname":"Alt Address Street","type":"text","dbType":"varchar","len":"150","group":"alt_address","group_label":"LBL_ALT_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Leads[ "assistant"] = {"name":"assistant","vname":"Assistant","type":"varchar","len":"75","unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "assistant_phone"] = {"name":"assistant_phone","vname":"Assistant Phone","type":"phone","dbType":"varchar","len":100,"group":"assistant","unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "birthdate"] = {"name":"birthdate","vname":"Birthdate","type":"date","audited":true,"pii":true};field_defs_Leads[ "converted"] = {"name":"converted","vname":"Converted","type":"bool"};field_defs_Leads[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"=", "text":"Equals"};
option_arr_Leads[option_arr_Leads.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Leads[option_arr_Leads.length] = { "value":"greater_than", "text":"After"};
option_arr_Leads[option_arr_Leads.length] = { "value":"less_than", "text":"Before"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_month", "text":"This Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_year", "text":"This Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"between", "text":"Is Between"};

field_defs_Leads[ "date_entered"].options=option_arr_Leads;

field_defs_Leads[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"=", "text":"Equals"};
option_arr_Leads[option_arr_Leads.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Leads[option_arr_Leads.length] = { "value":"greater_than", "text":"After"};
option_arr_Leads[option_arr_Leads.length] = { "value":"less_than", "text":"Before"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_month", "text":"This Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_year", "text":"This Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"between", "text":"Is Between"};

field_defs_Leads[ "date_modified"].options=option_arr_Leads;

field_defs_Leads[ "department"] = {"name":"department","vname":"Department","type":"varchar","len":"100","merge_filter":"enabled"};field_defs_Leads[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Leads[ "dnb_principal_id"] = {"name":"dnb_principal_id","vname":"D&B Principal Id","type":"varchar","len":30};field_defs_Leads[ "do_not_call"] = {"name":"do_not_call","vname":"Do Not Call","type":"bool","audited":true,"duplicate_on_record_copy":"always"};field_defs_Leads[ "dp_business_purpose"] = {"name":"dp_business_purpose","vname":"Business Purposes Consented for","type":"multienum","isMultiSelect":true,"audited":true,"options":"dataprivacy_business_purpose_dom","len":255};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"Business Communications", "text":"Business Communications"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Marketing Communications by company", "text":"Marketing Communications by company"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Marketing Communications by partners", "text":"Marketing Communications by partners"};

field_defs_Leads[ "dp_business_purpose"].options=option_arr_Leads;

field_defs_Leads[ "dp_consent_last_updated"] = {"name":"dp_consent_last_updated","vname":"Consent Last Updated","type":"date","display_default":"now","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"=", "text":"Equals"};
option_arr_Leads[option_arr_Leads.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Leads[option_arr_Leads.length] = { "value":"greater_than", "text":"After"};
option_arr_Leads[option_arr_Leads.length] = { "value":"less_than", "text":"Before"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_month", "text":"This Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Leads[option_arr_Leads.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"this_year", "text":"This Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Leads[option_arr_Leads.length] = { "value":"between", "text":"Is Between"};

field_defs_Leads[ "dp_consent_last_updated"].options=option_arr_Leads;

field_defs_Leads[ "facebook"] = {"name":"facebook","vname":"Facebook Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "first_name"] = {"name":"first_name","vname":"First Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","audited":true,"pii":true};field_defs_Leads[ "full_name"] = {"name":"full_name","vname":"Name","type":"fullname","sort_on":"last_name","source":"non-db","group":"last_name","duplicate_on_record_copy":"always"};field_defs_Leads[ "googleplus"] = {"name":"googleplus","vname":"Google Plus ID","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Leads[ "last_name"] = {"name":"last_name","vname":"Last Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","required":true,"importable":"required","audited":true,"pii":true};field_defs_Leads[ "lead_source"] = {"name":"lead_source","vname":"Lead Source","type":"enum","options":"lead_source_dom","len":"100","audited":true,"merge_filter":"enabled"};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"", "text":""};
option_arr_Leads[option_arr_Leads.length] = { "value":"Cold Call", "text":"Cold Call"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Existing Customer", "text":"Existing Customer"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Self Generated", "text":"Self Generated"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Employee", "text":"Employee"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Partner", "text":"Partner"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Public Relations", "text":"Public Relations"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Direct Mail", "text":"Direct Mail"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Conference", "text":"Conference"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Trade Show", "text":"Trade Show"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Web Site", "text":"Web Site"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Word of mouth", "text":"Word of mouth"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Email", "text":"Email"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Campaign", "text":"Campaign"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Support Portal User Registration", "text":"Support Portal User Registration"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Other", "text":"Other"};

field_defs_Leads[ "lead_source"].options=option_arr_Leads;

field_defs_Leads[ "lead_source_description"] = {"name":"lead_source_description","vname":"Lead Source Description","type":"text","group":"lead_source"};field_defs_Leads[ "mkto_id"] = {"name":"mkto_id","vname":"Marketo Lead ID","type":"int","audited":true,"duplicate_merge":true,"reportable":true,"importable":"false"};field_defs_Leads[ "mkto_lead_score"] = {"name":"mkto_lead_score","vname":"Lead Score","type":"int","audited":true,"duplicate_merge":true,"reportable":true,"importable":"true"};field_defs_Leads[ "mkto_sync"] = {"name":"mkto_sync","vname":"Sync to Marketo&reg;","type":"bool","massupdate":true,"audited":true,"duplicate_merge":true,"reportable":true,"importable":"true"};field_defs_Leads[ "opportunity_amount"] = {"name":"opportunity_amount","vname":"Opportunitie Amount","type":"varchar","group":"opportunity_name","len":"50"};field_defs_Leads[ "opportunity_name"] = {"name":"opportunity_name","vname":"Opportunitie Name","type":"varchar","len":"255"};field_defs_Leads[ "phone_fax"] = {"name":"phone_fax","vname":"Fax","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "phone_home"] = {"name":"phone_home","vname":"Home Phone","type":"phone","dbType":"varchar","len":100,"duplicate_on_record_copy":"always","unified_search":true,"merge_filter":"enabled","audited":true,"pii":true};field_defs_Leads[ "phone_mobile"] = {"name":"phone_mobile","vname":"Mobile","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "phone_other"] = {"name":"phone_other","vname":"Other Phone","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "phone_work"] = {"name":"phone_work","vname":"Office Phone","type":"phone","dbType":"varchar","len":100,"audited":true,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","pii":true};field_defs_Leads[ "portal_app"] = {"name":"portal_app","vname":"Portal Application","type":"varchar","group":"portal","len":"255","studio":true};field_defs_Leads[ "portal_name"] = {"name":"portal_name","vname":"Portal Name","type":"varchar","len":"255","group":"portal","group_label":"LBL_PORTAL","studio":true};field_defs_Leads[ "preferred_language"] = {"name":"preferred_language","type":"enum","vname":"Language Preference","options":"available_language_dom"};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"en_us", "text":"English (US)"};
option_arr_Leads[option_arr_Leads.length] = { "value":"bg_BG", "text":"??????????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"cs_CZ", "text":"??esky"};
option_arr_Leads[option_arr_Leads.length] = { "value":"da_DK", "text":"Dansk"};
option_arr_Leads[option_arr_Leads.length] = { "value":"de_DE", "text":"Deutsch"};
option_arr_Leads[option_arr_Leads.length] = { "value":"el_EL", "text":"????????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"es_ES", "text":"Espa??ol"};
option_arr_Leads[option_arr_Leads.length] = { "value":"fr_FR", "text":"Fran??ais"};
option_arr_Leads[option_arr_Leads.length] = { "value":"he_IL", "text":"??????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"hu_HU", "text":"Magyar"};
option_arr_Leads[option_arr_Leads.length] = { "value":"hr_HR", "text":"Hrvatski"};
option_arr_Leads[option_arr_Leads.length] = { "value":"it_it", "text":"Italiano"};
option_arr_Leads[option_arr_Leads.length] = { "value":"lt_LT", "text":"Lietuvi??"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ja_JP", "text":"?????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ko_KR", "text":"?????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"lv_LV", "text":"Latvie??u"};
option_arr_Leads[option_arr_Leads.length] = { "value":"nb_NO", "text":"Norsk"};
option_arr_Leads[option_arr_Leads.length] = { "value":"nl_NL", "text":"Nederlands"};
option_arr_Leads[option_arr_Leads.length] = { "value":"pl_PL", "text":"Polski"};
option_arr_Leads[option_arr_Leads.length] = { "value":"pt_PT", "text":"Portugu??s"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ro_RO", "text":"Rom??n??"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ru_RU", "text":"??????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"sv_SE", "text":"Svenska"};
option_arr_Leads[option_arr_Leads.length] = { "value":"th_TH", "text":"?????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"tr_TR", "text":"T??rk??e"};
option_arr_Leads[option_arr_Leads.length] = { "value":"zh_TW", "text":"????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"zh_CN", "text":"????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"pt_BR", "text":"Portugu??s Brasileiro"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ca_ES", "text":"Catal??"};
option_arr_Leads[option_arr_Leads.length] = { "value":"en_UK", "text":"English (UK)"};
option_arr_Leads[option_arr_Leads.length] = { "value":"sr_RS", "text":"????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"sk_SK", "text":"Sloven??ina"};
option_arr_Leads[option_arr_Leads.length] = { "value":"sq_AL", "text":"Shqip"};
option_arr_Leads[option_arr_Leads.length] = { "value":"et_EE", "text":"Eesti"};
option_arr_Leads[option_arr_Leads.length] = { "value":"es_LA", "text":"Espa??ol (Latinoam??rica)"};
option_arr_Leads[option_arr_Leads.length] = { "value":"fi_FI", "text":"Suomi"};
option_arr_Leads[option_arr_Leads.length] = { "value":"ar_SA", "text":"??????????????"};
option_arr_Leads[option_arr_Leads.length] = { "value":"uk_UA", "text":"????????????????????"};

field_defs_Leads[ "preferred_language"].options=option_arr_Leads;

field_defs_Leads[ "primary_address_city"] = {"name":"primary_address_city","vname":"Primary Address City","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "primary_address_country"] = {"name":"primary_address_country","vname":"Primary Address Country","type":"varchar","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "primary_address_postalcode"] = {"name":"primary_address_postalcode","vname":"Primary Address Postal Code","type":"varchar","len":"20","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "primary_address_state"] = {"name":"primary_address_state","vname":"Primary Address State","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "primary_address_street"] = {"name":"primary_address_street","vname":"Primary Address Street","type":"text","dbType":"varchar","len":"150","group":"primary_address","group_label":"LBL_PRIMARY_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Leads[ "refered_by"] = {"name":"refered_by","vname":"Referred By","type":"varchar","len":"100","merge_filter":"enabled"};field_defs_Leads[ "salutation"] = {"name":"salutation","vname":"Salutation","type":"enum","options":"salutation_dom","len":"255","duplicate_on_record_copy":"always","audited":true,"pii":true};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"", "text":""};
option_arr_Leads[option_arr_Leads.length] = { "value":"Mr.", "text":"Mr."};
option_arr_Leads[option_arr_Leads.length] = { "value":"Ms.", "text":"Ms."};
option_arr_Leads[option_arr_Leads.length] = { "value":"Mrs.", "text":"Mrs."};
option_arr_Leads[option_arr_Leads.length] = { "value":"Dr.", "text":"Dr."};
option_arr_Leads[option_arr_Leads.length] = { "value":"Prof.", "text":"Prof."};

field_defs_Leads[ "salutation"].options=option_arr_Leads;

field_defs_Leads[ "status"] = {"name":"status","vname":"Status","type":"enum","len":"100","options":"lead_status_dom","audited":true,"merge_filter":"enabled"};var option_arr_Leads = new Array();

option_arr_Leads[option_arr_Leads.length] = { "value":"", "text":""};
option_arr_Leads[option_arr_Leads.length] = { "value":"New", "text":"New"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Assigned", "text":"Assigned"};
option_arr_Leads[option_arr_Leads.length] = { "value":"In Process", "text":"In Process"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Converted", "text":"Converted"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Recycled", "text":"Recycled"};
option_arr_Leads[option_arr_Leads.length] = { "value":"Dead", "text":"Dead"};

field_defs_Leads[ "status"].options=option_arr_Leads;

field_defs_Leads[ "status_description"] = {"name":"status_description","vname":"Status Description","type":"text","group":"status"};field_defs_Leads[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Leads[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Leads[ "title"] = {"name":"title","vname":"Title","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "twitter"] = {"name":"twitter","vname":"Twitter Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Leads[ "website"] = {"name":"website","vname":"Website","type":"url","dbType":"varchar","len":255,"link_target":"_blank"};var default_table_columns_Leads = [""];




module_defs['Leads'] = new Object();
module_defs['Leads'].link_defs = link_defs_Leads;
module_defs['Leads'].field_defs = field_defs_Leads;
module_defs['Leads'].default_table_columns = default_table_columns_Leads;
module_defs['Leads'].summary_field_defs = new Object();
module_defs['Leads'].group_by_field_defs = new Object();
module_defs['Leads'].default_summary_columns = default_summary_columns;
module_defs['Leads'].label = "Leads";

var rel_defs = new Object();
var link_defs_Cases = new Object();
link_defs_Cases[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"cases_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Cases[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"cases_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Cases[ 'activities' ] = {"name":"activities","relationship_name":"case_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Cases[ 'business_centers' ] = {"name":"business_centers","relationship_name":"business_center_cases","bean_is_lhs":false,"link_type":"one","label":"Business Center Name","module":"BusinessCenters"};
link_defs_Cases[ 'changetimers' ] = {"name":"changetimers","relationship_name":"cases_changetimers","bean_is_lhs":true,"link_type":"many","label":"Change Timers","module":"ChangeTimers"};
link_defs_Cases[ 'purchases' ] = {"name":"purchases","relationship_name":"cases_purchases","bean_is_lhs":true,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Cases[ 'messages' ] = {"name":"messages","relationship_name":"case_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Cases[ 'tasks' ] = {"name":"tasks","relationship_name":"case_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Cases[ 'notes' ] = {"name":"notes","relationship_name":"case_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Cases[ 'meetings' ] = {"name":"meetings","relationship_name":"case_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Cases[ 'emails' ] = {"name":"emails","relationship_name":"emails_cases_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Cases[ 'documents' ] = {"name":"documents","relationship_name":"documents_cases","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Cases[ 'calls' ] = {"name":"calls","relationship_name":"case_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Cases[ 'bugs' ] = {"name":"bugs","relationship_name":"cases_bugs","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Cases[ 'contacts' ] = {"name":"contacts","relationship_name":"contacts_cases","bean_is_lhs":false,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Cases[ 'accounts' ] = {"name":"accounts","relationship_name":"account_cases","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Cases[ 'project' ] = {"name":"project","relationship_name":"projects_cases","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Cases[ 'kbcontents' ] = {"name":"kbcontents","relationship_name":"relcases_kbcontents","bean_is_lhs":true,"link_type":"many","label":"Knowledge Base","module":"KBContents"};
link_defs_Cases[ 'case_contact' ] = {"name":"case_contact","relationship_name":"contact_cases","bean_is_lhs":false,"link_type":"one","label":"Primary Contact","module":"Contacts"};
link_defs_Cases[ 'tag_link' ] = {"name":"tag_link","relationship_name":"cases_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Cases[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"cases_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Cases[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"cases_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Cases[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"cases_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Cases[ 'team_link' ] = {"name":"team_link","relationship_name":"cases_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Cases[ 'first_response_user_link' ] = {"name":"first_response_user_link","relationship_name":"cases_first_response_user","bean_is_lhs":false,"link_type":"one","label":"First Response User","module":"Users"};
var field_defs_Cases = new Object();
field_defs_Cases[ "case_number"] = {"name":"case_number","vname":"Number","type":"int","readonly":true,"len":11,"required":true,"auto_increment":true,"unified_search":true,"duplicate_merge":"disabled","disable_num_format":true,"duplicate_on_record_copy":"no"};field_defs_Cases[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"=", "text":"Equals"};
option_arr_Cases[option_arr_Cases.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Cases[option_arr_Cases.length] = { "value":"greater_than", "text":"After"};
option_arr_Cases[option_arr_Cases.length] = { "value":"less_than", "text":"Before"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"this_month", "text":"This Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"this_year", "text":"This Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"between", "text":"Is Between"};

field_defs_Cases[ "date_entered"].options=option_arr_Cases;

field_defs_Cases[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"=", "text":"Equals"};
option_arr_Cases[option_arr_Cases.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Cases[option_arr_Cases.length] = { "value":"greater_than", "text":"After"};
option_arr_Cases[option_arr_Cases.length] = { "value":"less_than", "text":"Before"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"this_month", "text":"This Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Cases[option_arr_Cases.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"this_year", "text":"This Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Cases[option_arr_Cases.length] = { "value":"between", "text":"Is Between"};

field_defs_Cases[ "date_modified"].options=option_arr_Cases;

field_defs_Cases[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always","dbtype":"longtext"};field_defs_Cases[ "follow_up_datetime"] = {"name":"follow_up_datetime","vname":"Follow Up Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_Cases[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Cases[ "name"] = {"name":"name","vname":"Subject","type":"name","dbType":"varchar","len":255,"audited":true,"unified_search":true,"merge_filter":"selected","required":true,"importable":"required","duplicate_on_record_copy":"always"};field_defs_Cases[ "primary_contact_id"] = {"name":"primary_contact_id","type":"id","group":"primary_contact_name","reportable":true,"vname":"Primary Contact ID","audited":true};field_defs_Cases[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"case_priority_dom","len":100,"audited":true,"merge_filter":"enabled","sortable":true};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"P1", "text":"High"};
option_arr_Cases[option_arr_Cases.length] = { "value":"P2", "text":"Medium"};
option_arr_Cases[option_arr_Cases.length] = { "value":"P3", "text":"Low"};

field_defs_Cases[ "priority"].options=option_arr_Cases;

field_defs_Cases[ "resolution"] = {"name":"resolution","vname":"Resolution","type":"text"};field_defs_Cases[ "resolved_datetime"] = {"name":"resolved_datetime","vname":"Resolved Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_Cases[ "source"] = {"name":"source","vname":"Source","type":"enum","options":"cases_source_dom","len":255};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"", "text":""};
option_arr_Cases[option_arr_Cases.length] = { "value":"Internal", "text":"Internal"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Forum", "text":"Forum"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Web", "text":"Web"};
option_arr_Cases[option_arr_Cases.length] = { "value":"InboundEmail", "text":"Email"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Twitter", "text":"Twitter"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Portal", "text":"Portal"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Phone", "text":"Phone"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Chat", "text":"Chat"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Chatbot", "text":"Chatbot"};

field_defs_Cases[ "source"].options=option_arr_Cases;

field_defs_Cases[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"case_status_dom","len":100,"audited":true,"merge_filter":"enabled","sortable":true};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"New", "text":"New"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Assigned", "text":"Assigned"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Closed", "text":"Closed"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Pending Input", "text":"Pending Input"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Rejected", "text":"Rejected"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Duplicate", "text":"Duplicate"};

field_defs_Cases[ "status"].options=option_arr_Cases;

field_defs_Cases[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Cases[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Cases[ "type"] = {"name":"type","vname":"Type","type":"enum","options":"case_type_dom","len":255,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_Cases = new Array();

option_arr_Cases[option_arr_Cases.length] = { "value":"Administration", "text":"Administration"};
option_arr_Cases[option_arr_Cases.length] = { "value":"Product", "text":"Product"};
option_arr_Cases[option_arr_Cases.length] = { "value":"User", "text":"User"};

field_defs_Cases[ "type"].options=option_arr_Cases;

field_defs_Cases[ "work_log"] = {"name":"work_log","vname":"Work Log","type":"text","duplicate_on_record_copy":"always"};var default_table_columns_Cases = [""];




module_defs['Cases'] = new Object();
module_defs['Cases'].link_defs = link_defs_Cases;
module_defs['Cases'].field_defs = field_defs_Cases;
module_defs['Cases'].default_table_columns = default_table_columns_Cases;
module_defs['Cases'].summary_field_defs = new Object();
module_defs['Cases'].group_by_field_defs = new Object();
module_defs['Cases'].default_summary_columns = default_summary_columns;
module_defs['Cases'].label = "Cases";

var rel_defs = new Object();
var link_defs_Bugs = new Object();
link_defs_Bugs[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"bugs_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Bugs[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"bugs_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Bugs[ 'activities' ] = {"name":"activities","relationship_name":"bug_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Bugs[ 'messages' ] = {"name":"messages","relationship_name":"bug_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Bugs[ 'tasks' ] = {"name":"tasks","relationship_name":"bug_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Bugs[ 'notes' ] = {"name":"notes","relationship_name":"bug_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Bugs[ 'meetings' ] = {"name":"meetings","relationship_name":"bug_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Bugs[ 'calls' ] = {"name":"calls","relationship_name":"bug_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Bugs[ 'emails' ] = {"name":"emails","relationship_name":"emails_bugs_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Bugs[ 'documents' ] = {"name":"documents","relationship_name":"documents_bugs","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Bugs[ 'contacts' ] = {"name":"contacts","relationship_name":"contacts_bugs","bean_is_lhs":false,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Bugs[ 'accounts' ] = {"name":"accounts","relationship_name":"accounts_bugs","bean_is_lhs":false,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Bugs[ 'cases' ] = {"name":"cases","relationship_name":"cases_bugs","bean_is_lhs":false,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Bugs[ 'project' ] = {"name":"project","relationship_name":"projects_bugs","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Bugs[ 'release_link' ] = {"name":"release_link","relationship_name":"bugs_release","bean_is_lhs":false,"link_type":"one","label":"Found in Release","module":"Releases"};
link_defs_Bugs[ 'fixed_in_release_link' ] = {"name":"fixed_in_release_link","relationship_name":"bugs_fixed_in_release","bean_is_lhs":false,"link_type":"one","label":"Fixed in Release","module":"Releases"};
link_defs_Bugs[ 'tag_link' ] = {"name":"tag_link","relationship_name":"bugs_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Bugs[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"bugs_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Bugs[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"bugs_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Bugs[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"bugs_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Bugs[ 'team_link' ] = {"name":"team_link","relationship_name":"bugs_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Bugs = new Object();
field_defs_Bugs[ "bug_number"] = {"name":"bug_number","vname":"Number","type":"int","readonly":true,"len":11,"required":true,"auto_increment":true,"unified_search":true,"duplicate_merge":"disabled","disable_num_format":true,"duplicate_on_record_copy":"no"};field_defs_Bugs[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"=", "text":"Equals"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"greater_than", "text":"After"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"less_than", "text":"Before"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"this_month", "text":"This Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"this_year", "text":"This Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"between", "text":"Is Between"};

field_defs_Bugs[ "date_entered"].options=option_arr_Bugs;

field_defs_Bugs[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"=", "text":"Equals"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"greater_than", "text":"After"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"less_than", "text":"Before"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"this_month", "text":"This Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"this_year", "text":"This Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"between", "text":"Is Between"};

field_defs_Bugs[ "date_modified"].options=option_arr_Bugs;

field_defs_Bugs[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Bugs[ "follow_up_datetime"] = {"name":"follow_up_datetime","vname":"Follow Up Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_Bugs[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Bugs[ "name"] = {"name":"name","vname":"Subject","type":"name","dbType":"varchar","len":255,"audited":true,"unified_search":true,"merge_filter":"selected","required":true,"importable":"required","duplicate_on_record_copy":"always"};field_defs_Bugs[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"bug_priority_dom","len":100,"audited":true,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"Urgent", "text":"Urgent"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"High", "text":"High"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Medium", "text":"Medium"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Low", "text":"Low"};

field_defs_Bugs[ "priority"].options=option_arr_Bugs;

field_defs_Bugs[ "product_category"] = {"name":"product_category","vname":"Category","type":"enum","options":"product_category_dom","len":255,"sortable":true};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"", "text":""};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Accounts", "text":"Accounts"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Activities", "text":"Activities"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Bug Tracker", "text":"Bug Tracker"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Calendar", "text":"Calendar"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Calls", "text":"Calls"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Campaigns", "text":"Campaigns"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Cases", "text":"Cases"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Contacts", "text":"Contacts"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Currencies", "text":"Currencies"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Dashboard", "text":"Dashboard"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Documents", "text":"Documents"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Emails", "text":"Emails"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Feeds", "text":"RSS"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Forecasts", "text":"Forecasts"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Help", "text":"Help"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Home", "text":"Home"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Leads", "text":"Leads"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Meetings", "text":"Meetings"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Notes", "text":"Notes"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Opportunities", "text":"Opportunities"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Outlook Plugin", "text":"Outlook Plugin"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Product Catalog", "text":"Product Catalog"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Products", "text":"Quoted Line Items"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Projects", "text":"Projects"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Quotes", "text":"Quotes"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Releases", "text":"Releases"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"RSS", "text":"RSS"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Studio", "text":"Studio"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Upgrade", "text":"Upgrade"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Users", "text":"Users"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"OutboundEmail", "text":"Email Settings"};

field_defs_Bugs[ "product_category"].options=option_arr_Bugs;

field_defs_Bugs[ "resolution"] = {"name":"resolution","vname":"Resolution","type":"enum","options":"bug_resolution_dom","len":255,"audited":true,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"", "text":""};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Accepted", "text":"Accepted"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Duplicate", "text":"Duplicate"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Fixed", "text":"Fixed"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Out of Date", "text":"Out of Date"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Invalid", "text":"Invalid"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Later", "text":"Later"};

field_defs_Bugs[ "resolution"].options=option_arr_Bugs;

field_defs_Bugs[ "resolved_datetime"] = {"name":"resolved_datetime","vname":"Resolved Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_Bugs[ "source"] = {"name":"source","vname":"Source","type":"enum","options":"source_dom","len":255};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"", "text":""};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Internal", "text":"Internal"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Forum", "text":"Forum"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Web", "text":"Web"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"InboundEmail", "text":"Email"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Twitter", "text":"Twitter"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Portal", "text":"Portal"};

field_defs_Bugs[ "source"].options=option_arr_Bugs;

field_defs_Bugs[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"bug_status_dom","len":100,"audited":true,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"New", "text":"New"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Assigned", "text":"Assigned"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Closed", "text":"Closed"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Pending", "text":"Pending"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Rejected", "text":"Rejected"};

field_defs_Bugs[ "status"].options=option_arr_Bugs;

field_defs_Bugs[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Bugs[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Bugs[ "type"] = {"name":"type","vname":"Type","type":"enum","options":"bug_type_dom","len":255,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_Bugs = new Array();

option_arr_Bugs[option_arr_Bugs.length] = { "value":"Defect", "text":"Defect"};
option_arr_Bugs[option_arr_Bugs.length] = { "value":"Feature", "text":"Feature"};

field_defs_Bugs[ "type"].options=option_arr_Bugs;

field_defs_Bugs[ "work_log"] = {"name":"work_log","vname":"Work Log","type":"text","duplicate_on_record_copy":"always"};var default_table_columns_Bugs = [""];




module_defs['Bugs'] = new Object();
module_defs['Bugs'].link_defs = link_defs_Bugs;
module_defs['Bugs'].field_defs = field_defs_Bugs;
module_defs['Bugs'].default_table_columns = default_table_columns_Bugs;
module_defs['Bugs'].summary_field_defs = new Object();
module_defs['Bugs'].group_by_field_defs = new Object();
module_defs['Bugs'].default_summary_columns = default_summary_columns;
module_defs['Bugs'].label = "Bugs";

var rel_defs = new Object();
var link_defs_ProspectLists = new Object();
link_defs_ProspectLists[ 'prospects' ] = {"name":"prospects","relationship_name":"prospect_list_prospects","bean_is_lhs":true,"link_type":"many","label":"Targets","module":"Prospects"};
link_defs_ProspectLists[ 'contacts' ] = {"name":"contacts","relationship_name":"prospect_list_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_ProspectLists[ 'leads' ] = {"name":"leads","relationship_name":"prospect_list_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_ProspectLists[ 'accounts' ] = {"name":"accounts","relationship_name":"prospect_list_accounts","bean_is_lhs":true,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_ProspectLists[ 'campaigns' ] = {"name":"campaigns","relationship_name":"prospect_list_campaigns","bean_is_lhs":true,"link_type":"many","label":"Campaigns","module":"Campaigns"};
link_defs_ProspectLists[ 'users' ] = {"name":"users","relationship_name":"prospect_list_users","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_ProspectLists[ 'email_marketing' ] = {"name":"email_marketing","relationship_name":"email_marketing_prospect_lists","bean_is_lhs":false,"link_type":"many","label":"email_marketing","module":"EmailMarketing"};
link_defs_ProspectLists[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"prospectlists_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by","module":"Users"};
link_defs_ProspectLists[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"prospectlists_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by","module":"Users"};
link_defs_ProspectLists[ 'tag_link' ] = {"name":"tag_link","relationship_name":"prospectlists_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_ProspectLists[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"prospectlists_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_ProspectLists[ 'team_link' ] = {"name":"team_link","relationship_name":"prospectlists_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_ProspectLists[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"prospectlists_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
var field_defs_ProspectLists = new Object();
field_defs_ProspectLists[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","readonly":true};field_defs_ProspectLists[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","readonly":true};field_defs_ProspectLists[ "list_type"] = {"name":"list_type","vname":"Type","type":"enum","options":"prospect_list_type_dom","len":100,"importable":"required"};var option_arr_ProspectLists = new Array();

option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"default", "text":"Default"};
option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"seed", "text":"Seed"};
option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"exempt_domain", "text":"Suppression List - By Domain"};
option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"exempt_address", "text":"Suppression List - By Email Address"};
option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"exempt", "text":"Suppression List - By Id"};
option_arr_ProspectLists[option_arr_ProspectLists.length] = { "value":"test", "text":"Test"};

field_defs_ProspectLists[ "list_type"].options=option_arr_ProspectLists;

field_defs_ProspectLists[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":"50","importable":"required","unified_search":true,"required":true};field_defs_ProspectLists[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_ProspectLists = [""];




module_defs['ProspectLists'] = new Object();
module_defs['ProspectLists'].link_defs = link_defs_ProspectLists;
module_defs['ProspectLists'].field_defs = field_defs_ProspectLists;
module_defs['ProspectLists'].default_table_columns = default_table_columns_ProspectLists;
module_defs['ProspectLists'].summary_field_defs = new Object();
module_defs['ProspectLists'].group_by_field_defs = new Object();
module_defs['ProspectLists'].default_summary_columns = default_summary_columns;
module_defs['ProspectLists'].label = "Target Lists";

var rel_defs = new Object();
var link_defs_Prospects = new Object();
link_defs_Prospects[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"prospects_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Prospects[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"prospects_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Prospects[ 'activities' ] = {"name":"activities","relationship_name":"prospect_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Prospects[ 'email_addresses_primary' ] = {"name":"email_addresses_primary","relationship_name":"prospects_email_addresses_primary","bean_is_lhs":true,"link_type":"many","label":"Email Address","module":"EmailAddresses"};
link_defs_Prospects[ 'campaigns' ] = {"name":"campaigns","relationship_name":"prospect_campaign_log","bean_is_lhs":true,"link_type":"many","label":"CampaignLog","module":"CampaignLog"};
link_defs_Prospects[ 'prospect_lists' ] = {"name":"prospect_lists","relationship_name":"prospect_list_prospects","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Prospects[ 'calls' ] = {"name":"calls","relationship_name":"prospect_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Prospects[ 'meetings' ] = {"name":"meetings","relationship_name":"prospect_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Prospects[ 'notes' ] = {"name":"notes","relationship_name":"prospect_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Prospects[ 'messages' ] = {"name":"messages","relationship_name":"prospect_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Prospects[ 'dataprivacy' ] = {"name":"dataprivacy","relationship_name":"prospects_dataprivacy","bean_is_lhs":true,"link_type":"many","label":"Data Privacy","module":"DataPrivacy"};
link_defs_Prospects[ 'tasks' ] = {"name":"tasks","relationship_name":"prospect_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Prospects[ 'emails' ] = {"name":"emails","relationship_name":"emails_prospects_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Prospects[ 'lead' ] = {"name":"lead","relationship_name":"lead_prospect","bean_is_lhs":false,"link_type":"one","label":"Lead","module":"Leads"};
link_defs_Prospects[ 'tag_link' ] = {"name":"tag_link","relationship_name":"prospects_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Prospects[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"prospects_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Prospects[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"prospects_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Prospects[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"prospects_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Prospects[ 'team_link' ] = {"name":"team_link","relationship_name":"prospects_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Prospects = new Object();
field_defs_Prospects[ "account_name"] = {"name":"account_name","vname":"Account Name","type":"varchar","len":"150"};field_defs_Prospects[ "alt_address_city"] = {"name":"alt_address_city","vname":"Alternate Address City","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "alt_address_country"] = {"name":"alt_address_country","vname":"Alternate Address Country","type":"varchar","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "alt_address_postalcode"] = {"name":"alt_address_postalcode","vname":"Alternate Address Postal Code","type":"varchar","len":"20","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "alt_address_state"] = {"name":"alt_address_state","vname":"Alternate Address State","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "alt_address_street"] = {"name":"alt_address_street","vname":"Alternate Address Street","type":"text","dbType":"varchar","len":"150","group":"alt_address","group_label":"LBL_ALT_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Prospects[ "assistant"] = {"name":"assistant","type":"varchar","len":75,"vname":"Assistant"};field_defs_Prospects[ "assistant_phone"] = {"name":"assistant_phone","type":"varchar","len":100,"vname":"Assistant Phone"};field_defs_Prospects[ "birthdate"] = {"name":"birthdate","vname":"Birthdate","type":"date","audited":true,"pii":true};field_defs_Prospects[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Prospects = new Array();

option_arr_Prospects[option_arr_Prospects.length] = { "value":"=", "text":"Equals"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"greater_than", "text":"After"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"less_than", "text":"Before"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_month", "text":"This Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_year", "text":"This Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"between", "text":"Is Between"};

field_defs_Prospects[ "date_entered"].options=option_arr_Prospects;

field_defs_Prospects[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Prospects = new Array();

option_arr_Prospects[option_arr_Prospects.length] = { "value":"=", "text":"Equals"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"greater_than", "text":"After"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"less_than", "text":"Before"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_month", "text":"This Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_year", "text":"This Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"between", "text":"Is Between"};

field_defs_Prospects[ "date_modified"].options=option_arr_Prospects;

field_defs_Prospects[ "department"] = {"name":"department","vname":"Department","type":"varchar","len":"255","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Prospects[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Prospects[ "dnb_principal_id"] = {"name":"dnb_principal_id","vname":"D&B Principal Id","type":"varchar","len":30};field_defs_Prospects[ "do_not_call"] = {"name":"do_not_call","vname":"Do Not Call","type":"bool"};field_defs_Prospects[ "dp_business_purpose"] = {"name":"dp_business_purpose","vname":"Business Purposes Consented for","type":"multienum","isMultiSelect":true,"audited":true,"options":"dataprivacy_business_purpose_dom","len":255};var option_arr_Prospects = new Array();

option_arr_Prospects[option_arr_Prospects.length] = { "value":"Business Communications", "text":"Business Communications"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Marketing Communications by company", "text":"Marketing Communications by company"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Marketing Communications by partners", "text":"Marketing Communications by partners"};

field_defs_Prospects[ "dp_business_purpose"].options=option_arr_Prospects;

field_defs_Prospects[ "dp_consent_last_updated"] = {"name":"dp_consent_last_updated","vname":"Consent Last Updated","type":"date","display_default":"now","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Prospects = new Array();

option_arr_Prospects[option_arr_Prospects.length] = { "value":"=", "text":"Equals"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"greater_than", "text":"After"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"less_than", "text":"Before"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_month", "text":"This Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"this_year", "text":"This Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"between", "text":"Is Between"};

field_defs_Prospects[ "dp_consent_last_updated"].options=option_arr_Prospects;

field_defs_Prospects[ "facebook"] = {"name":"facebook","vname":"Facebook Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "first_name"] = {"name":"first_name","vname":"First Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","audited":true,"pii":true};field_defs_Prospects[ "full_name"] = {"name":"full_name","vname":"Name","type":"fullname","sort_on":"last_name","source":"non-db","group":"last_name","duplicate_on_record_copy":"always"};field_defs_Prospects[ "googleplus"] = {"name":"googleplus","vname":"Google Plus ID","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Prospects[ "last_name"] = {"name":"last_name","vname":"Last Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","required":true,"importable":"required","audited":true,"pii":true};field_defs_Prospects[ "phone_fax"] = {"name":"phone_fax","vname":"Fax","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "phone_home"] = {"name":"phone_home","vname":"Home","type":"phone","dbType":"varchar","len":100,"duplicate_on_record_copy":"always","unified_search":true,"merge_filter":"enabled","audited":true,"pii":true};field_defs_Prospects[ "phone_mobile"] = {"name":"phone_mobile","vname":"Mobile","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "phone_other"] = {"name":"phone_other","vname":"Other Phone","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "phone_work"] = {"name":"phone_work","vname":"Office Phone","type":"phone","dbType":"varchar","len":100,"audited":true,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","pii":true};field_defs_Prospects[ "primary_address_city"] = {"name":"primary_address_city","vname":"Primary Address City","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "primary_address_country"] = {"name":"primary_address_country","vname":"Primary Address Country","type":"varchar","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "primary_address_postalcode"] = {"name":"primary_address_postalcode","vname":"Primary Address Postal Code","type":"varchar","len":"20","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "primary_address_state"] = {"name":"primary_address_state","vname":"Primary Address State","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "primary_address_street"] = {"name":"primary_address_street","vname":"Primary Address Street","type":"text","dbType":"varchar","len":"150","group":"primary_address","group_label":"LBL_PRIMARY_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Prospects[ "salutation"] = {"name":"salutation","vname":"Salutation","type":"enum","options":"salutation_dom","len":"255","duplicate_on_record_copy":"always","audited":true,"pii":true};var option_arr_Prospects = new Array();

option_arr_Prospects[option_arr_Prospects.length] = { "value":"", "text":""};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Mr.", "text":"Mr."};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Ms.", "text":"Ms."};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Mrs.", "text":"Mrs."};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Dr.", "text":"Dr."};
option_arr_Prospects[option_arr_Prospects.length] = { "value":"Prof.", "text":"Prof."};

field_defs_Prospects[ "salutation"].options=option_arr_Prospects;

field_defs_Prospects[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Prospects[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Prospects[ "title"] = {"name":"title","vname":"Title","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Prospects[ "tracker_key"] = {"name":"tracker_key","vname":"Tracker Key","type":"int","len":"11","required":true,"auto_increment":true,"readonly":true,"importable":"false"};field_defs_Prospects[ "twitter"] = {"name":"twitter","vname":"Twitter Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};var default_table_columns_Prospects = [""];




module_defs['Prospects'] = new Object();
module_defs['Prospects'].link_defs = link_defs_Prospects;
module_defs['Prospects'].field_defs = field_defs_Prospects;
module_defs['Prospects'].default_table_columns = default_table_columns_Prospects;
module_defs['Prospects'].summary_field_defs = new Object();
module_defs['Prospects'].group_by_field_defs = new Object();
module_defs['Prospects'].default_summary_columns = default_summary_columns;
module_defs['Prospects'].label = "Targets";

var rel_defs = new Object();
var link_defs_Project = new Object();
link_defs_Project[ 'accounts' ] = {"name":"accounts","relationship_name":"projects_accounts","bean_is_lhs":true,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Project[ 'quotes' ] = {"name":"quotes","relationship_name":"projects_quotes","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Project[ 'contacts' ] = {"name":"contacts","relationship_name":"projects_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Project[ 'opportunities' ] = {"name":"opportunities","relationship_name":"projects_opportunities","bean_is_lhs":true,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Project[ 'notes' ] = {"name":"notes","relationship_name":"projects_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Project[ 'messages' ] = {"name":"messages","relationship_name":"projects_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Project[ 'tasks' ] = {"name":"tasks","relationship_name":"projects_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Project[ 'meetings' ] = {"name":"meetings","relationship_name":"projects_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Project[ 'calls' ] = {"name":"calls","relationship_name":"projects_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Project[ 'emails' ] = {"name":"emails","relationship_name":"emails_projects_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Project[ 'projecttask' ] = {"name":"projecttask","relationship_name":"projects_project_tasks","bean_is_lhs":true,"link_type":"many","label":"Project Tasks","module":"ProjectTask"};
link_defs_Project[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"projects_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Project[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"projects_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Project[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"projects_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Project[ 'cases' ] = {"name":"cases","relationship_name":"projects_cases","bean_is_lhs":true,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Project[ 'bugs' ] = {"name":"bugs","relationship_name":"projects_bugs","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Project[ 'products' ] = {"name":"products","relationship_name":"projects_products","bean_is_lhs":true,"link_type":"many","label":"Products","module":"Products"};
link_defs_Project[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"projects_revenuelineitems","bean_is_lhs":true,"link_type":"many","label":"LBL_REVENUELINEITEMS","module":"RevenueLineItems"};
link_defs_Project[ 'user_resources' ] = {"name":"user_resources","relationship_name":"projects_users_resources","bean_is_lhs":true,"link_type":"many","label":"User Resource","module":"Users"};
link_defs_Project[ 'contact_resources' ] = {"name":"contact_resources","relationship_name":"projects_contacts_resources","bean_is_lhs":true,"link_type":"many","label":"Contact Resource","module":"Contacts"};
link_defs_Project[ 'project_holidays' ] = {"name":"project_holidays","relationship_name":"projects_holidays","bean_is_lhs":true,"link_type":"many","label":"Holiday","module":"Holidays"};
link_defs_Project[ 'team_link' ] = {"name":"team_link","relationship_name":"project_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Project = new Object();
field_defs_Project[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"=", "text":"Equals"};
option_arr_Project[option_arr_Project.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Project[option_arr_Project.length] = { "value":"greater_than", "text":"After"};
option_arr_Project[option_arr_Project.length] = { "value":"less_than", "text":"Before"};
option_arr_Project[option_arr_Project.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Project[option_arr_Project.length] = { "value":"this_month", "text":"This Month"};
option_arr_Project[option_arr_Project.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Project[option_arr_Project.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Project[option_arr_Project.length] = { "value":"this_year", "text":"This Year"};
option_arr_Project[option_arr_Project.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Project[option_arr_Project.length] = { "value":"between", "text":"Is Between"};

field_defs_Project[ "date_entered"].options=option_arr_Project;

field_defs_Project[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"=", "text":"Equals"};
option_arr_Project[option_arr_Project.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Project[option_arr_Project.length] = { "value":"greater_than", "text":"After"};
option_arr_Project[option_arr_Project.length] = { "value":"less_than", "text":"Before"};
option_arr_Project[option_arr_Project.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Project[option_arr_Project.length] = { "value":"this_month", "text":"This Month"};
option_arr_Project[option_arr_Project.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Project[option_arr_Project.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Project[option_arr_Project.length] = { "value":"this_year", "text":"This Year"};
option_arr_Project[option_arr_Project.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Project[option_arr_Project.length] = { "value":"between", "text":"Is Between"};

field_defs_Project[ "date_modified"].options=option_arr_Project;

field_defs_Project[ "description"] = {"name":"description","vname":"Description","type":"text"};field_defs_Project[ "estimated_end_date"] = {"name":"estimated_end_date","vname":"End Date","required":true,"type":"date","importable":"required","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"=", "text":"Equals"};
option_arr_Project[option_arr_Project.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Project[option_arr_Project.length] = { "value":"greater_than", "text":"After"};
option_arr_Project[option_arr_Project.length] = { "value":"less_than", "text":"Before"};
option_arr_Project[option_arr_Project.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Project[option_arr_Project.length] = { "value":"this_month", "text":"This Month"};
option_arr_Project[option_arr_Project.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Project[option_arr_Project.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Project[option_arr_Project.length] = { "value":"this_year", "text":"This Year"};
option_arr_Project[option_arr_Project.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Project[option_arr_Project.length] = { "value":"between", "text":"Is Between"};

field_defs_Project[ "estimated_end_date"].options=option_arr_Project;

field_defs_Project[ "estimated_start_date"] = {"name":"estimated_start_date","vname":"Start Date","required":true,"type":"date","importable":"required","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"=", "text":"Equals"};
option_arr_Project[option_arr_Project.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Project[option_arr_Project.length] = { "value":"greater_than", "text":"After"};
option_arr_Project[option_arr_Project.length] = { "value":"less_than", "text":"Before"};
option_arr_Project[option_arr_Project.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Project[option_arr_Project.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Project[option_arr_Project.length] = { "value":"this_month", "text":"This Month"};
option_arr_Project[option_arr_Project.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Project[option_arr_Project.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Project[option_arr_Project.length] = { "value":"this_year", "text":"This Year"};
option_arr_Project[option_arr_Project.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Project[option_arr_Project.length] = { "value":"between", "text":"Is Between"};

field_defs_Project[ "estimated_start_date"].options=option_arr_Project;

field_defs_Project[ "id"] = {"name":"id","vname":"Id","required":true,"type":"id","reportable":true};field_defs_Project[ "is_template"] = {"name":"is_template","vname":"Is Template","type":"bool"};field_defs_Project[ "name"] = {"name":"name","vname":"Name","required":true,"dbType":"varchar","type":"name","len":50,"unified_search":true,"importable":"required"};field_defs_Project[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"projects_priority_options"};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"high", "text":"High"};
option_arr_Project[option_arr_Project.length] = { "value":"medium", "text":"Medium"};
option_arr_Project[option_arr_Project.length] = { "value":"low", "text":"Low"};

field_defs_Project[ "priority"].options=option_arr_Project;

field_defs_Project[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"project_status_dom"};var option_arr_Project = new Array();

option_arr_Project[option_arr_Project.length] = { "value":"Draft", "text":"Draft"};
option_arr_Project[option_arr_Project.length] = { "value":"In Review", "text":"In Review"};
option_arr_Project[option_arr_Project.length] = { "value":"Published", "text":"Published"};

field_defs_Project[ "status"].options=option_arr_Project;

field_defs_Project[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Project = [""];




module_defs['Project'] = new Object();
module_defs['Project'].link_defs = link_defs_Project;
module_defs['Project'].field_defs = field_defs_Project;
module_defs['Project'].default_table_columns = default_table_columns_Project;
module_defs['Project'].summary_field_defs = new Object();
module_defs['Project'].group_by_field_defs = new Object();
module_defs['Project'].default_summary_columns = default_summary_columns;
module_defs['Project'].label = "Projects";

var rel_defs = new Object();
var link_defs_ProjectTask = new Object();
link_defs_ProjectTask[ 'notes' ] = {"name":"notes","relationship_name":"project_tasks_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_ProjectTask[ 'messages' ] = {"name":"messages","relationship_name":"project_tasks_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_ProjectTask[ 'tasks' ] = {"name":"tasks","relationship_name":"project_tasks_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_ProjectTask[ 'meetings' ] = {"name":"meetings","relationship_name":"project_tasks_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_ProjectTask[ 'calls' ] = {"name":"calls","relationship_name":"project_tasks_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_ProjectTask[ 'emails' ] = {"name":"emails","relationship_name":"emails_project_task_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_ProjectTask[ 'projects' ] = {"name":"projects","relationship_name":"projects_project_tasks","bean_is_lhs":false,"link_type":"one","label":"Project","module":"Project"};
link_defs_ProjectTask[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"project_tasks_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ProjectTask[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"project_tasks_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ProjectTask[ 'project_name_link' ] = {"name":"project_name_link","relationship_name":"projects_project_tasks","bean_is_lhs":false,"link_type":"one","label":"Project Name","module":"Project"};
link_defs_ProjectTask[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"project_tasks_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_ProjectTask[ 'team_link' ] = {"name":"team_link","relationship_name":"projecttask_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_ProjectTask = new Object();
field_defs_ProjectTask[ "actual_duration"] = {"name":"actual_duration","vname":"Actual Duration","type":"int"};field_defs_ProjectTask[ "actual_effort"] = {"name":"actual_effort","vname":"Actual Effort (hrs)","type":"int"};field_defs_ProjectTask[ "date_due"] = {"name":"date_due","vname":"Due Date","type":"date","rel_field":"time_due","audited":true};field_defs_ProjectTask[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true};var option_arr_ProjectTask = new Array();

option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"=", "text":"Equals"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"greater_than", "text":"After"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"less_than", "text":"Before"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"between", "text":"Is Between"};

field_defs_ProjectTask[ "date_entered"].options=option_arr_ProjectTask;

field_defs_ProjectTask[ "date_finish"] = {"name":"date_finish","vname":"Finish Date","type":"date","audited":true,"enable_range_search":true};field_defs_ProjectTask[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true};var option_arr_ProjectTask = new Array();

option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"=", "text":"Equals"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"greater_than", "text":"After"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"less_than", "text":"Before"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"between", "text":"Is Between"};

field_defs_ProjectTask[ "date_modified"].options=option_arr_ProjectTask;

field_defs_ProjectTask[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"date","audited":true,"enable_range_search":true};field_defs_ProjectTask[ "description"] = {"name":"description","vname":"Description","type":"text"};field_defs_ProjectTask[ "duration"] = {"name":"duration","vname":"Duration","required":true,"type":"int"};field_defs_ProjectTask[ "duration_unit"] = {"name":"duration_unit","vname":"Duration Unit","options":"project_duration_units_dom","type":"text"};var option_arr_ProjectTask = new Array();

option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Days", "text":"Days"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Hours", "text":"Hours"};

field_defs_ProjectTask[ "duration_unit"].options=option_arr_ProjectTask;

field_defs_ProjectTask[ "estimated_effort"] = {"name":"estimated_effort","vname":"Estimated Effort (hrs)","type":"int"};field_defs_ProjectTask[ "id"] = {"name":"id","vname":"Id","required":true,"type":"id","reportable":true};field_defs_ProjectTask[ "milestone_flag"] = {"name":"milestone_flag","vname":"Milestone","type":"bool"};field_defs_ProjectTask[ "name"] = {"name":"name","vname":"Name","required":true,"dbType":"varchar","type":"name","len":50,"unified_search":true,"importable":"required"};field_defs_ProjectTask[ "order_number"] = {"name":"order_number","vname":"Order","type":"int"};field_defs_ProjectTask[ "parent_task_id"] = {"name":"parent_task_id","vname":"Parent Task Id","type":"int","reportable":true};field_defs_ProjectTask[ "percent_complete"] = {"name":"percent_complete","vname":"% Complete","type":"int","audited":true};field_defs_ProjectTask[ "predecessors"] = {"name":"predecessors","vname":"Predecessors","type":"text"};field_defs_ProjectTask[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"project_task_priority_options"};var option_arr_ProjectTask = new Array();

option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"High", "text":"High"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Medium", "text":"Medium"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Low", "text":"Low"};

field_defs_ProjectTask[ "priority"].options=option_arr_ProjectTask;

field_defs_ProjectTask[ "resource_id"] = {"name":"resource_id","vname":"Resource ID","type":"text","hidden":true};field_defs_ProjectTask[ "resource_name"] = {"name":"resource_name","vname":"Resource","type":"text","source":"function","function_class":"ProjectTask","function_name":"getResourceName","function_params_source":"this"};field_defs_ProjectTask[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"project_task_status_options","audited":true};var option_arr_ProjectTask = new Array();

option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Not Started", "text":"Not Started"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"In Progress", "text":"In Progress"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Completed", "text":"Completed"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Pending Input", "text":"Pending Input"};
option_arr_ProjectTask[option_arr_ProjectTask.length] = { "value":"Deferred", "text":"Deferred"};

field_defs_ProjectTask[ "status"].options=option_arr_ProjectTask;

field_defs_ProjectTask[ "task_number"] = {"name":"task_number","vname":"Task Number","type":"int"};field_defs_ProjectTask[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_ProjectTask[ "time_due"] = {"name":"time_due","vname":"Due Time","type":"time","rel_field":"date_due","audited":true};field_defs_ProjectTask[ "utilization"] = {"name":"utilization","vname":"Utilization (%)","type":"int"};var default_table_columns_ProjectTask = [""];




module_defs['ProjectTask'] = new Object();
module_defs['ProjectTask'].link_defs = link_defs_ProjectTask;
module_defs['ProjectTask'].field_defs = field_defs_ProjectTask;
module_defs['ProjectTask'].default_table_columns = default_table_columns_ProjectTask;
module_defs['ProjectTask'].summary_field_defs = new Object();
module_defs['ProjectTask'].group_by_field_defs = new Object();
module_defs['ProjectTask'].default_summary_columns = default_summary_columns;
module_defs['ProjectTask'].label = "Project Tasks";

var rel_defs = new Object();
var link_defs_Campaigns = new Object();
link_defs_Campaigns[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"campaigns_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Campaigns[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"campaigns_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Campaigns[ 'activities' ] = {"name":"activities","relationship_name":"campaign_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Campaigns[ 'prospectlists' ] = {"name":"prospectlists","relationship_name":"prospect_list_campaigns","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Campaigns[ 'emailmarketing' ] = {"name":"emailmarketing","relationship_name":"campaign_email_marketing","bean_is_lhs":true,"link_type":"many","label":"emailmarketing","module":"EmailMarketing"};
link_defs_Campaigns[ 'queueitems' ] = {"name":"queueitems","relationship_name":"campaign_emailman","bean_is_lhs":true,"link_type":"many","label":"queueitems","module":"EmailMan"};
link_defs_Campaigns[ 'log_entries' ] = {"name":"log_entries","relationship_name":"campaign_campaignlog","bean_is_lhs":true,"link_type":"many","label":"Log Entries","module":"CampaignLog"};
link_defs_Campaigns[ 'tracked_urls' ] = {"name":"tracked_urls","relationship_name":"campaign_campaigntrakers","bean_is_lhs":true,"link_type":"many","label":"Tracker URLs","module":"CampaignTrackers"};
link_defs_Campaigns[ 'leads' ] = {"name":"leads","relationship_name":"campaign_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Campaigns[ 'opportunities' ] = {"name":"opportunities","relationship_name":"campaign_opportunities","bean_is_lhs":true,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Campaigns[ 'contacts' ] = {"name":"contacts","relationship_name":"campaign_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Campaigns[ 'accounts' ] = {"name":"accounts","relationship_name":"campaign_accounts","bean_is_lhs":true,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Campaigns[ 'forecastworksheet' ] = {"name":"forecastworksheet","relationship_name":"forecastworksheets_campaigns","bean_is_lhs":true,"link_type":"many","label":"Forecast Worksheet","module":"ForecastWorksheets"};
link_defs_Campaigns[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"campaigns_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Campaigns[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"campaigns_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Campaigns[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"campaigns_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Campaigns[ 'team_link' ] = {"name":"team_link","relationship_name":"campaigns_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Campaigns[ 'currencies' ] = {"name":"currencies","relationship_name":"campaigns_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Campaigns = new Object();
field_defs_Campaigns[ "actual_cost"] = {"name":"actual_cost","vname":"Actual Cost: ","type":"currency"};field_defs_Campaigns[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Campaigns[ "budget"] = {"name":"budget","vname":"Budget: ","type":"currency"};field_defs_Campaigns[ "campaign_type"] = {"name":"campaign_type","vname":"Type","type":"enum","options":"campaign_type_dom","len":100,"audited":true,"importable":"required","required":true};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"", "text":""};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Telesales", "text":"Telesales"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Mail", "text":"Mail"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Email", "text":"Email"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Print", "text":"Print"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Web", "text":"Web"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Radio", "text":"Radio"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Television", "text":"Television"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"NewsLetter", "text":"Newsletter"};

field_defs_Campaigns[ "campaign_type"].options=option_arr_Campaigns;

field_defs_Campaigns[ "content"] = {"name":"content","vname":"Description: ","type":"text"};field_defs_Campaigns[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"=", "text":"Equals"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"greater_than", "text":"After"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"less_than", "text":"Before"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_month", "text":"This Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_year", "text":"This Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"between", "text":"Is Between"};

field_defs_Campaigns[ "date_entered"].options=option_arr_Campaigns;

field_defs_Campaigns[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"=", "text":"Equals"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"greater_than", "text":"After"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"less_than", "text":"Before"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_month", "text":"This Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_year", "text":"This Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"between", "text":"Is Between"};

field_defs_Campaigns[ "date_modified"].options=option_arr_Campaigns;

field_defs_Campaigns[ "end_date"] = {"name":"end_date","vname":"End Date","type":"date","audited":true,"importable":"required","required":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"=", "text":"Equals"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"greater_than", "text":"After"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"less_than", "text":"Before"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_month", "text":"This Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_year", "text":"This Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"between", "text":"Is Between"};

field_defs_Campaigns[ "end_date"].options=option_arr_Campaigns;

field_defs_Campaigns[ "expected_cost"] = {"name":"expected_cost","vname":"Expected Cost: ","type":"currency"};field_defs_Campaigns[ "expected_revenue"] = {"name":"expected_revenue","vname":"Expected Revenue: ","type":"currency"};field_defs_Campaigns[ "frequency"] = {"name":"frequency","vname":"Frequency","type":"enum","len":100,"options":"newsletter_frequency_dom"};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"", "text":""};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Weekly", "text":"Weekly"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Monthly", "text":"Monthly"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Quarterly", "text":"Quarterly"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Annually", "text":"Annually"};

field_defs_Campaigns[ "frequency"].options=option_arr_Campaigns;

field_defs_Campaigns[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Campaigns[ "impressions"] = {"name":"impressions","vname":"Impressions: ","type":"int","reportable":true};field_defs_Campaigns[ "name"] = {"name":"name","vname":"Name","dbType":"varchar","type":"name","len":"50","importable":"required","required":true,"unified_search":true};field_defs_Campaigns[ "objective"] = {"name":"objective","vname":"Objective: ","type":"text"};field_defs_Campaigns[ "refer_url"] = {"name":"refer_url","vname":"Tracker Redirect URL: ","type":"varchar","len":"255"};field_defs_Campaigns[ "start_date"] = {"name":"start_date","vname":"Start Date","type":"date","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"=", "text":"Equals"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"greater_than", "text":"After"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"less_than", "text":"Before"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_month", "text":"This Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"this_year", "text":"This Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"between", "text":"Is Between"};

field_defs_Campaigns[ "start_date"].options=option_arr_Campaigns;

field_defs_Campaigns[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"campaign_status_dom","len":100,"audited":true,"importable":"required","required":true};var option_arr_Campaigns = new Array();

option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"", "text":""};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Planning", "text":"Planning"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Active", "text":"Active"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Inactive", "text":"Inactive"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Complete", "text":"Complete"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"In Queue", "text":"In Queue"};
option_arr_Campaigns[option_arr_Campaigns.length] = { "value":"Sending", "text":"Sending"};

field_defs_Campaigns[ "status"].options=option_arr_Campaigns;

field_defs_Campaigns[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Campaigns[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Campaigns[ "tracker_count"] = {"name":"tracker_count","vname":"Tracker Count: ","type":"int","len":"11"};field_defs_Campaigns[ "tracker_key"] = {"name":"tracker_key","vname":"Tracker: ","type":"int","required":true,"len":"11","auto_increment":true,"readonly":true};field_defs_Campaigns[ "tracker_text"] = {"name":"tracker_text","vname":"Tracker Link Text: ","type":"varchar","len":"255"};var default_table_columns_Campaigns = [""];




module_defs['Campaigns'] = new Object();
module_defs['Campaigns'].link_defs = link_defs_Campaigns;
module_defs['Campaigns'].field_defs = field_defs_Campaigns;
module_defs['Campaigns'].default_table_columns = default_table_columns_Campaigns;
module_defs['Campaigns'].summary_field_defs = new Object();
module_defs['Campaigns'].group_by_field_defs = new Object();
module_defs['Campaigns'].default_summary_columns = default_summary_columns;
module_defs['Campaigns'].label = "Campaigns";

var rel_defs = new Object();
var link_defs_CampaignLog = new Object();
link_defs_CampaignLog[ 'campaign' ] = {"name":"campaign","relationship_name":"campaign_campaignlog","bean_is_lhs":false,"link_type":"one","label":"Name","module":"Campaigns"};
link_defs_CampaignLog[ 'created_contact' ] = {"name":"created_contact","relationship_name":"campaignlog_contact","bean_is_lhs":true,"link_type":"many","label":"Created Contact","module":"Contacts"};
link_defs_CampaignLog[ 'created_lead' ] = {"name":"created_lead","relationship_name":"campaignlog_lead","bean_is_lhs":true,"link_type":"many","label":"Created Lead","module":"Leads"};
link_defs_CampaignLog[ 'created_opportunities' ] = {"name":"created_opportunities","relationship_name":"campaignlog_created_opportunities","bean_is_lhs":true,"link_type":"many","label":"Created Opportunity","module":"Opportunities"};
link_defs_CampaignLog[ 'targeted_user' ] = {"name":"targeted_user","relationship_name":"campaignlog_targeted_users","bean_is_lhs":true,"link_type":"many","label":"Targeted User","module":"Users"};
link_defs_CampaignLog[ 'account_campaign_log' ] = {"name":"account_campaign_log","relationship_name":"account_campaign_log","bean_is_lhs":false,"link_type":"one","label":"CampaignLog","module":"Accounts"};
link_defs_CampaignLog[ 'contact_campaign_log' ] = {"name":"contact_campaign_log","relationship_name":"contact_campaign_log","bean_is_lhs":false,"link_type":"one","label":"CampaignLog","module":"Contacts"};
link_defs_CampaignLog[ 'lead_campaign_log' ] = {"name":"lead_campaign_log","relationship_name":"lead_campaign_log","bean_is_lhs":false,"link_type":"one","label":"CampaignLog","module":"Leads"};
link_defs_CampaignLog[ 'prospect_campaign_log' ] = {"name":"prospect_campaign_log","relationship_name":"prospect_campaign_log","bean_is_lhs":false,"link_type":"one","label":"CampaignLog","module":"Prospects"};
link_defs_CampaignLog[ 'sent_email' ] = {"name":"sent_email","relationship_name":"campaignlog_sent_emails","bean_is_lhs":true,"link_type":"many","label":"Sent Email","module":"Emails"};
var field_defs_CampaignLog = new Object();
field_defs_CampaignLog[ "activity_date"] = {"name":"activity_date","vname":"Activity Date","type":"datetime"};field_defs_CampaignLog[ "activity_type"] = {"name":"activity_type","vname":"Activity Type","type":"enum","options":"campainglog_activity_type_dom","len":100};var option_arr_CampaignLog = new Array();

option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"", "text":""};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"targeted", "text":"Message Sent/Attempted"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"send error", "text":"Bounced Messages,Other"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"invalid email", "text":"Bounced Messages,Invalid Email"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"link", "text":"Click-thru Link"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"viewed", "text":"Viewed Message"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"removed", "text":"Opted Out"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"lead", "text":"Leads Created"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"contact", "text":"Contacts Created"};
option_arr_CampaignLog[option_arr_CampaignLog.length] = { "value":"blocked", "text":"Suppressed by address or domain"};

field_defs_CampaignLog[ "activity_type"].options=option_arr_CampaignLog;

field_defs_CampaignLog[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime"};field_defs_CampaignLog[ "hits"] = {"name":"hits","vname":"Hits","type":"int","reportable":true};field_defs_CampaignLog[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true};field_defs_CampaignLog[ "more_information"] = {"name":"more_information","vname":"More Information","type":"varchar","len":"100"};field_defs_CampaignLog[ "related_type"] = {"name":"related_type","vname":"Related Type","type":"varchar","len":100};field_defs_CampaignLog[ "target_type"] = {"name":"target_type","vname":"Target Type","type":"varchar","len":100};var default_table_columns_CampaignLog = [""];




module_defs['CampaignLog'] = new Object();
module_defs['CampaignLog'].link_defs = link_defs_CampaignLog;
module_defs['CampaignLog'].field_defs = field_defs_CampaignLog;
module_defs['CampaignLog'].default_table_columns = default_table_columns_CampaignLog;
module_defs['CampaignLog'].summary_field_defs = new Object();
module_defs['CampaignLog'].group_by_field_defs = new Object();
module_defs['CampaignLog'].default_summary_columns = default_summary_columns;
module_defs['CampaignLog'].label = "Campaign Log";

var rel_defs = new Object();
var link_defs_Releases = new Object();
var field_defs_Releases = new Object();
field_defs_Releases[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","required":true};field_defs_Releases[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","required":true};field_defs_Releases[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true};field_defs_Releases[ "list_order"] = {"name":"list_order","vname":"Order","type":"int","len":"4","importable":"required"};field_defs_Releases[ "name"] = {"name":"name","vname":"Release version","dbType":"varchar","type":"name","len":"50","required":true,"importable":"required"};field_defs_Releases[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"release_status_dom","len":100,"importable":"required"};var option_arr_Releases = new Array();

option_arr_Releases[option_arr_Releases.length] = { "value":"Active", "text":"Active"};
option_arr_Releases[option_arr_Releases.length] = { "value":"Inactive", "text":"Inactive"};

field_defs_Releases[ "status"].options=option_arr_Releases;

var default_table_columns_Releases = [""];




module_defs['Releases'] = new Object();
module_defs['Releases'].link_defs = link_defs_Releases;
module_defs['Releases'].field_defs = field_defs_Releases;
module_defs['Releases'].default_table_columns = default_table_columns_Releases;
module_defs['Releases'].summary_field_defs = new Object();
module_defs['Releases'].group_by_field_defs = new Object();
module_defs['Releases'].default_summary_columns = default_summary_columns;
module_defs['Releases'].label = "Releases";

var rel_defs = new Object();
var link_defs_Contacts = new Object();
link_defs_Contacts[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"contacts_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Contacts[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"contacts_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Contacts[ 'activities' ] = {"name":"activities","relationship_name":"contact_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Contacts[ 'business_centers' ] = {"name":"business_centers","relationship_name":"business_center_contacts","bean_is_lhs":false,"link_type":"one","label":"Business Center Name","module":"BusinessCenters"};
link_defs_Contacts[ 'purchases' ] = {"name":"purchases","relationship_name":"contacts_purchases","bean_is_lhs":true,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Contacts[ 'accounts' ] = {"name":"accounts","relationship_name":"accounts_contacts","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Contacts[ 'reports_to_link' ] = {"name":"reports_to_link","relationship_name":"contact_direct_reports","bean_is_lhs":false,"link_type":"one","label":"Reports To","module":"Contacts"};
link_defs_Contacts[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunities_contacts","bean_is_lhs":false,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Contacts[ 'bugs' ] = {"name":"bugs","relationship_name":"contacts_bugs","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Contacts[ 'calls' ] = {"name":"calls","relationship_name":"calls_contacts","bean_is_lhs":false,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Contacts[ 'cases' ] = {"name":"cases","relationship_name":"contacts_cases","bean_is_lhs":true,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Contacts[ 'case_contact' ] = {"name":"case_contact","relationship_name":"contact_cases","bean_is_lhs":true,"link_type":"one","label":"Contact","module":"Cases"};
link_defs_Contacts[ 'dataprivacy' ] = {"name":"dataprivacy","relationship_name":"contacts_dataprivacy","bean_is_lhs":true,"link_type":"many","label":"Data Privacy","module":"DataPrivacy"};
link_defs_Contacts[ 'direct_reports' ] = {"name":"direct_reports","relationship_name":"contact_direct_reports","bean_is_lhs":true,"link_type":"many","label":"Direct Reports","module":"Contacts"};
link_defs_Contacts[ 'emails' ] = {"name":"emails","relationship_name":"emails_contacts_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Contacts[ 'documents' ] = {"name":"documents","relationship_name":"documents_contacts","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Contacts[ 'leads' ] = {"name":"leads","relationship_name":"contact_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Contacts[ 'products' ] = {"name":"products","relationship_name":"contact_products","bean_is_lhs":true,"link_type":"many","label":"Quoted Line Items","module":"Products"};
link_defs_Contacts[ 'contracts' ] = {"name":"contracts","relationship_name":"contracts_contacts","bean_is_lhs":false,"link_type":"many","label":"Contracts","module":"Contracts"};
link_defs_Contacts[ 'meetings' ] = {"name":"meetings","relationship_name":"meetings_contacts","bean_is_lhs":false,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Contacts[ 'notes' ] = {"name":"notes","relationship_name":"contact_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Contacts[ 'messages' ] = {"name":"messages","relationship_name":"contact_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Contacts[ 'project' ] = {"name":"project","relationship_name":"projects_contacts","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Contacts[ 'project_resource' ] = {"name":"project_resource","relationship_name":"projects_contacts_resources","bean_is_lhs":false,"link_type":"many","label":"Projects Resources","module":"Project"};
link_defs_Contacts[ 'quotes' ] = {"name":"quotes","relationship_name":"quotes_contacts_shipto","bean_is_lhs":true,"link_type":"many","label":"Quotes (Ship To)","module":"Quotes"};
link_defs_Contacts[ 'billing_quotes' ] = {"name":"billing_quotes","relationship_name":"quotes_contacts_billto","bean_is_lhs":true,"link_type":"many","label":"Quotes (Bill To)","module":"Quotes"};
link_defs_Contacts[ 'tasks' ] = {"name":"tasks","relationship_name":"contact_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Contacts[ 'all_tasks' ] = {"name":"all_tasks","relationship_name":"contact_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Contacts[ 'user_sync' ] = {"name":"user_sync","relationship_name":"contacts_users","bean_is_lhs":false,"link_type":"one","label":"User Sync","module":"Users"};
link_defs_Contacts[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"contacts_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Contacts[ 'campaigns' ] = {"name":"campaigns","relationship_name":"contact_campaign_log","bean_is_lhs":true,"link_type":"many","label":"CampaignLog","module":"CampaignLog"};
link_defs_Contacts[ 'campaign_contacts' ] = {"name":"campaign_contacts","relationship_name":"campaign_contacts","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_Contacts[ 'prospect_lists' ] = {"name":"prospect_lists","relationship_name":"prospect_list_contacts","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Contacts[ 'tag_link' ] = {"name":"tag_link","relationship_name":"contacts_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Contacts[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"contacts_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Contacts[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"contacts_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Contacts[ 'team_link' ] = {"name":"team_link","relationship_name":"contacts_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Contacts[ 'email_addresses_primary' ] = {"name":"email_addresses_primary","relationship_name":"contacts_email_addresses_primary","bean_is_lhs":true,"link_type":"many","label":"Email Address","module":"EmailAddresses"};
var field_defs_Contacts = new Object();
field_defs_Contacts[ "alt_address_city"] = {"name":"alt_address_city","vname":"Alternate Address City","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "alt_address_country"] = {"name":"alt_address_country","vname":"Alternate Address Country","type":"varchar","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "alt_address_postalcode"] = {"name":"alt_address_postalcode","vname":"Alternate Address Postal Code","type":"varchar","len":"20","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "alt_address_state"] = {"name":"alt_address_state","vname":"Alternate Address State","type":"varchar","len":"100","group":"alt_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "alt_address_street"] = {"name":"alt_address_street","vname":"Alternate Address Street","type":"text","dbType":"varchar","len":"150","group":"alt_address","group_label":"LBL_ALT_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Contacts[ "assistant"] = {"name":"assistant","vname":"Assistant","type":"varchar","len":"75","unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "assistant_phone"] = {"name":"assistant_phone","vname":"Assistant Phone","type":"phone","dbType":"varchar","len":100,"group":"assistant","unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "birthdate"] = {"name":"birthdate","vname":"Birthdate","type":"date","audited":true,"pii":true};field_defs_Contacts[ "campaign_id"] = {"name":"campaign_id","vname":"Campaign ID","rname":"id","id_name":"campaign_id","type":"id","isnull":"true","module":"Campaigns","duplicate_merge":"disabled"};field_defs_Contacts[ "cookie_consent"] = {"name":"cookie_consent","vname":"Cookie Consent","type":"bool","audited":true,"duplicate_on_record_copy":"no"};field_defs_Contacts[ "cookie_consent_received_on"] = {"name":"cookie_consent_received_on","vname":"Cookie Consent Received On","type":"datetime","audited":true,"enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no"};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"=", "text":"Equals"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contacts[ "cookie_consent_received_on"].options=option_arr_Contacts;

field_defs_Contacts[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"=", "text":"Equals"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contacts[ "date_entered"].options=option_arr_Contacts;

field_defs_Contacts[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"=", "text":"Equals"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contacts[ "date_modified"].options=option_arr_Contacts;

field_defs_Contacts[ "department"] = {"name":"department","vname":"Department","type":"varchar","len":"255","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Contacts[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Contacts[ "dnb_principal_id"] = {"name":"dnb_principal_id","vname":"D&B Principal Id","type":"varchar","len":30};field_defs_Contacts[ "do_not_call"] = {"name":"do_not_call","vname":"Do Not Call","type":"bool","audited":true,"duplicate_on_record_copy":"always"};field_defs_Contacts[ "dp_business_purpose"] = {"name":"dp_business_purpose","vname":"Business Purposes Consented for","type":"multienum","isMultiSelect":true,"audited":true,"options":"dataprivacy_business_purpose_dom","len":255};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"Business Communications", "text":"Business Communications"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Marketing Communications by company", "text":"Marketing Communications by company"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Marketing Communications by partners", "text":"Marketing Communications by partners"};

field_defs_Contacts[ "dp_business_purpose"].options=option_arr_Contacts;

field_defs_Contacts[ "dp_consent_last_updated"] = {"name":"dp_consent_last_updated","vname":"Consent Last Updated","type":"date","display_default":"now","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"=", "text":"Equals"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contacts[ "dp_consent_last_updated"].options=option_arr_Contacts;

field_defs_Contacts[ "entry_source"] = {"name":"entry_source","vname":"Contact Source","type":"enum","function":"getSourceTypes","function_bean":"Contacts","len":"255","readonly":true,"processes":true,"reportable":true};                    var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"external", "text":"External"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"internal", "text":"Internal"};
field_defs_Contacts[ "entry_source"].options=option_arr_Contacts;
field_defs_Contacts[ "facebook"] = {"name":"facebook","vname":"Facebook Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "first_name"] = {"name":"first_name","vname":"First Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","audited":true,"pii":true};field_defs_Contacts[ "full_name"] = {"name":"full_name","vname":"Name","type":"fullname","sort_on":"last_name","source":"non-db","group":"last_name","duplicate_on_record_copy":"always"};field_defs_Contacts[ "googleplus"] = {"name":"googleplus","vname":"Google Plus ID","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Contacts[ "last_name"] = {"name":"last_name","vname":"Last Name","type":"varchar","len":"100","unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"selected","required":true,"importable":"required","audited":true,"pii":true};field_defs_Contacts[ "lead_source"] = {"name":"lead_source","vname":"Lead Source","type":"enum","options":"lead_source_dom","len":"255","merge_filter":"enabled"};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"", "text":""};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Cold Call", "text":"Cold Call"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Existing Customer", "text":"Existing Customer"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Self Generated", "text":"Self Generated"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Employee", "text":"Employee"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Partner", "text":"Partner"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Public Relations", "text":"Public Relations"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Direct Mail", "text":"Direct Mail"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Conference", "text":"Conference"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Trade Show", "text":"Trade Show"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Web Site", "text":"Web Site"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Word of mouth", "text":"Word of mouth"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Email", "text":"Email"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Campaign", "text":"Campaign"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Support Portal User Registration", "text":"Support Portal User Registration"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Other", "text":"Other"};

field_defs_Contacts[ "lead_source"].options=option_arr_Contacts;

field_defs_Contacts[ "mkto_id"] = {"name":"mkto_id","vname":"Marketo Lead ID","type":"int","audited":true,"duplicate_merge":true,"reportable":true,"importable":"false"};field_defs_Contacts[ "mkto_lead_score"] = {"name":"mkto_lead_score","vname":"Lead Score","type":"int","audited":true,"duplicate_merge":true,"reportable":true,"importable":"true"};field_defs_Contacts[ "mkto_sync"] = {"name":"mkto_sync","vname":"Sync to Marketo&reg;","type":"bool","massupdate":true,"audited":true,"duplicate_merge":true,"reportable":true,"importable":"true"};field_defs_Contacts[ "phone_fax"] = {"name":"phone_fax","vname":"Fax","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "phone_home"] = {"name":"phone_home","vname":"Home","type":"phone","dbType":"varchar","len":100,"duplicate_on_record_copy":"always","unified_search":true,"merge_filter":"enabled","audited":true,"pii":true};field_defs_Contacts[ "phone_mobile"] = {"name":"phone_mobile","vname":"Mobile","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "phone_other"] = {"name":"phone_other","vname":"Other Phone","type":"phone","dbType":"varchar","len":100,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "phone_work"] = {"name":"phone_work","vname":"Office Phone","type":"phone","dbType":"varchar","len":100,"audited":true,"unified_search":true,"merge_filter":"enabled","duplicate_on_record_copy":"always","pii":true};field_defs_Contacts[ "portal_active"] = {"name":"portal_active","vname":"Portal Active","type":"bool","group":"portal","duplicate_on_record_copy":"no"};field_defs_Contacts[ "portal_app"] = {"name":"portal_app","vname":"Portal Application","type":"varchar","group":"portal","len":"255","duplicate_on_record_copy":"no"};field_defs_Contacts[ "portal_name"] = {"name":"portal_name","vname":"Portal Name","type":"username","dbType":"varchar","len":"255","group":"portal","group_label":"LBL_PORTAL","duplicate_on_record_copy":"no"};field_defs_Contacts[ "portal_user_company_name"] = {"name":"portal_user_company_name","vname":"Portal User Company Name","type":"varchar","len":"255","group":"portal","duplicate_on_record_copy":"no"};field_defs_Contacts[ "preferred_language"] = {"name":"preferred_language","type":"enum","vname":"Language Preference","options":"available_language_dom","popupHelp":"LBL_LANG_PREF_TOOLTIP"};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"en_us", "text":"English (US)"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"bg_BG", "text":"??????????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"cs_CZ", "text":"??esky"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"da_DK", "text":"Dansk"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"de_DE", "text":"Deutsch"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"el_EL", "text":"????????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"es_ES", "text":"Espa??ol"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"fr_FR", "text":"Fran??ais"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"he_IL", "text":"??????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"hu_HU", "text":"Magyar"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"hr_HR", "text":"Hrvatski"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"it_it", "text":"Italiano"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"lt_LT", "text":"Lietuvi??"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ja_JP", "text":"?????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ko_KR", "text":"?????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"lv_LV", "text":"Latvie??u"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"nb_NO", "text":"Norsk"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"nl_NL", "text":"Nederlands"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"pl_PL", "text":"Polski"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"pt_PT", "text":"Portugu??s"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ro_RO", "text":"Rom??n??"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ru_RU", "text":"??????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"sv_SE", "text":"Svenska"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"th_TH", "text":"?????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"tr_TR", "text":"T??rk??e"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"zh_TW", "text":"????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"zh_CN", "text":"????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"pt_BR", "text":"Portugu??s Brasileiro"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ca_ES", "text":"Catal??"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"en_UK", "text":"English (UK)"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"sr_RS", "text":"????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"sk_SK", "text":"Sloven??ina"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"sq_AL", "text":"Shqip"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"et_EE", "text":"Eesti"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"es_LA", "text":"Espa??ol (Latinoam??rica)"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"fi_FI", "text":"Suomi"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"ar_SA", "text":"??????????????"};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"uk_UA", "text":"????????????????????"};

field_defs_Contacts[ "preferred_language"].options=option_arr_Contacts;

field_defs_Contacts[ "primary_address_city"] = {"name":"primary_address_city","vname":"Primary Address City","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "primary_address_country"] = {"name":"primary_address_country","vname":"Primary Address Country","type":"varchar","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "primary_address_postalcode"] = {"name":"primary_address_postalcode","vname":"Primary Address Postal Code","type":"varchar","len":"20","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "primary_address_state"] = {"name":"primary_address_state","vname":"Primary Address State","type":"varchar","len":"100","group":"primary_address","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "primary_address_street"] = {"name":"primary_address_street","vname":"Primary Address Street","type":"text","dbType":"varchar","len":"150","group":"primary_address","group_label":"LBL_PRIMARY_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","audited":true,"pii":true,"rows":2,"cols":20};field_defs_Contacts[ "salutation"] = {"name":"salutation","vname":"Salutation","type":"enum","options":"salutation_dom","len":"255","duplicate_on_record_copy":"always","audited":true,"pii":true};var option_arr_Contacts = new Array();

option_arr_Contacts[option_arr_Contacts.length] = { "value":"", "text":""};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Mr.", "text":"Mr."};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Ms.", "text":"Ms."};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Mrs.", "text":"Mrs."};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Dr.", "text":"Dr."};
option_arr_Contacts[option_arr_Contacts.length] = { "value":"Prof.", "text":"Prof."};

field_defs_Contacts[ "salutation"].options=option_arr_Contacts;

field_defs_Contacts[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Contacts[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Contacts[ "title"] = {"name":"title","vname":"Title","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};field_defs_Contacts[ "twitter"] = {"name":"twitter","vname":"Twitter Account","type":"varchar","len":"100","duplicate_on_record_copy":"always","audited":true,"pii":true};var default_table_columns_Contacts = [""];




module_defs['Contacts'] = new Object();
module_defs['Contacts'].link_defs = link_defs_Contacts;
module_defs['Contacts'].field_defs = field_defs_Contacts;
module_defs['Contacts'].default_table_columns = default_table_columns_Contacts;
module_defs['Contacts'].summary_field_defs = new Object();
module_defs['Contacts'].group_by_field_defs = new Object();
module_defs['Contacts'].default_summary_columns = default_summary_columns;
module_defs['Contacts'].label = "Contacts";

var rel_defs = new Object();
var link_defs_Accounts = new Object();
link_defs_Accounts[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"accounts_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Accounts[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"accounts_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Accounts[ 'activities' ] = {"name":"activities","relationship_name":"account_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Accounts[ 'members' ] = {"name":"members","relationship_name":"member_accounts","bean_is_lhs":true,"link_type":"many","label":"Members","module":"Accounts"};
link_defs_Accounts[ 'member_of' ] = {"name":"member_of","relationship_name":"member_accounts","bean_is_lhs":false,"link_type":"one","label":"Member of","module":"Accounts"};
link_defs_Accounts[ 'cases' ] = {"name":"cases","relationship_name":"account_cases","bean_is_lhs":true,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Accounts[ 'business_centers' ] = {"name":"business_centers","relationship_name":"business_center_accounts","bean_is_lhs":false,"link_type":"one","label":"Business Center Name","module":"BusinessCenters"};
link_defs_Accounts[ 'messages' ] = {"name":"messages","relationship_name":"account_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Accounts[ 'tasks' ] = {"name":"tasks","relationship_name":"account_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Accounts[ 'notes' ] = {"name":"notes","relationship_name":"account_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Accounts[ 'meetings' ] = {"name":"meetings","relationship_name":"account_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Accounts[ 'calls' ] = {"name":"calls","relationship_name":"account_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Accounts[ 'emails' ] = {"name":"emails","relationship_name":"emails_accounts_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Accounts[ 'documents' ] = {"name":"documents","relationship_name":"documents_accounts","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Accounts[ 'bugs' ] = {"name":"bugs","relationship_name":"accounts_bugs","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Accounts[ 'contacts' ] = {"name":"contacts","relationship_name":"accounts_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Accounts[ 'opportunities' ] = {"name":"opportunities","relationship_name":"accounts_opportunities","bean_is_lhs":true,"link_type":"many","label":"Opportunitie","module":"Opportunities"};
link_defs_Accounts[ 'quotes' ] = {"name":"quotes","relationship_name":"quotes_billto_accounts","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Accounts[ 'quotes_shipto' ] = {"name":"quotes_shipto","relationship_name":"quotes_shipto_accounts","bean_is_lhs":true,"link_type":"many","label":"Quotes Ship to","module":"Quotes"};
link_defs_Accounts[ 'project' ] = {"name":"project","relationship_name":"projects_accounts","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Accounts[ 'leads' ] = {"name":"leads","relationship_name":"account_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Accounts[ 'campaigns' ] = {"name":"campaigns","relationship_name":"account_campaign_log","bean_is_lhs":true,"link_type":"many","label":"CampaignLog","module":"CampaignLog"};
link_defs_Accounts[ 'campaign_accounts' ] = {"name":"campaign_accounts","relationship_name":"campaign_accounts","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_Accounts[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitems_accounts","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Accounts[ 'purchasedlineitems' ] = {"name":"purchasedlineitems","relationship_name":"purchasedlineitems_accounts","bean_is_lhs":true,"link_type":"many","label":"Purchased Line Items","module":"PurchasedLineItems"};
link_defs_Accounts[ 'forecastworksheets' ] = {"name":"forecastworksheets","relationship_name":"forecastworksheets_accounts","bean_is_lhs":true,"link_type":"many","label":"Forecast Worksheet","module":"ForecastWorksheets"};
link_defs_Accounts[ 'products' ] = {"name":"products","relationship_name":"products_accounts","bean_is_lhs":true,"link_type":"many","label":"Products","module":"Products"};
link_defs_Accounts[ 'contracts' ] = {"name":"contracts","relationship_name":"account_contracts","bean_is_lhs":true,"link_type":"many","label":"Contracts","module":"Contracts"};
link_defs_Accounts[ 'dataprivacy' ] = {"name":"dataprivacy","relationship_name":"accounts_dataprivacy","bean_is_lhs":true,"link_type":"many","label":"Data Privacy","module":"DataPrivacy"};
link_defs_Accounts[ 'prospect_lists' ] = {"name":"prospect_lists","relationship_name":"prospect_list_accounts","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Accounts[ 'purchases' ] = {"name":"purchases","relationship_name":"account_purchases","bean_is_lhs":true,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Accounts[ 'tag_link' ] = {"name":"tag_link","relationship_name":"accounts_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Accounts[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"accounts_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Accounts[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"accounts_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Accounts[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"accounts_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Accounts[ 'team_link' ] = {"name":"team_link","relationship_name":"accounts_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Accounts[ 'email_addresses_primary' ] = {"name":"email_addresses_primary","relationship_name":"accounts_email_addresses_primary","bean_is_lhs":true,"link_type":"many","label":"Email Address","module":"EmailAddresses"};
var field_defs_Accounts = new Object();
field_defs_Accounts[ "account_type"] = {"name":"account_type","vname":"Type","type":"enum","options":"account_type_dom","len":50,"duplicate_on_record_copy":"always"};var option_arr_Accounts = new Array();

option_arr_Accounts[option_arr_Accounts.length] = { "value":"", "text":""};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Analyst", "text":"Analyst"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Competitor", "text":"Competitor"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Customer", "text":"Customer"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Integrator", "text":"Integrator"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Investor", "text":"Investor"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Partner", "text":"Partner"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Press", "text":"Press"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Prospect", "text":"Prospect"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Reseller", "text":"Reseller"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Other", "text":"Other"};

field_defs_Accounts[ "account_type"].options=option_arr_Accounts;

field_defs_Accounts[ "annual_revenue"] = {"name":"annual_revenue","vname":"Annual Revenue","type":"varchar","len":100,"duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "billing_address_city"] = {"name":"billing_address_city","vname":"Billing City","type":"varchar","len":"100","group":"billing_address","merge_filter":"enabled","duplicate_on_record_copy":"always"};field_defs_Accounts[ "billing_address_country"] = {"name":"billing_address_country","vname":"Billing Country","type":"varchar","group":"billing_address","merge_filter":"enabled","duplicate_on_record_copy":"always"};field_defs_Accounts[ "billing_address_postalcode"] = {"name":"billing_address_postalcode","vname":"Billing Postal Code","type":"varchar","len":"20","group":"billing_address","merge_filter":"enabled","duplicate_on_record_copy":"always"};field_defs_Accounts[ "billing_address_state"] = {"name":"billing_address_state","vname":"Billing State","type":"varchar","len":"100","group":"billing_address","merge_filter":"enabled","duplicate_on_record_copy":"always"};field_defs_Accounts[ "billing_address_street"] = {"name":"billing_address_street","vname":"Billing Street","type":"text","dbType":"varchar","len":"150","group":"billing_address","group_label":"LBL_BILLING_ADDRESS","merge_filter":"enabled","duplicate_on_record_copy":"always","rows":2,"cols":20};field_defs_Accounts[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Accounts = new Array();

option_arr_Accounts[option_arr_Accounts.length] = { "value":"=", "text":"Equals"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"greater_than", "text":"After"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"less_than", "text":"Before"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"between", "text":"Is Between"};

field_defs_Accounts[ "date_entered"].options=option_arr_Accounts;

field_defs_Accounts[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Accounts = new Array();

option_arr_Accounts[option_arr_Accounts.length] = { "value":"=", "text":"Equals"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"greater_than", "text":"After"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"less_than", "text":"Before"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"between", "text":"Is Between"};

field_defs_Accounts[ "date_modified"].options=option_arr_Accounts;

field_defs_Accounts[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Accounts[ "duns_num"] = {"name":"duns_num","vname":"DUNS","type":"varchar","len":15};field_defs_Accounts[ "employees"] = {"name":"employees","vname":"Employees","type":"varchar","len":10,"duplicate_on_record_copy":"always"};field_defs_Accounts[ "facebook"] = {"name":"facebook","vname":"Facebook Account","type":"varchar","len":"100","duplicate_on_record_copy":"always"};field_defs_Accounts[ "googleplus"] = {"name":"googleplus","vname":"Google Plus ID","type":"varchar","len":"100","duplicate_on_record_copy":"always"};field_defs_Accounts[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Accounts[ "industry"] = {"name":"industry","vname":"Industry","type":"enum","options":"industry_dom","len":50,"duplicate_on_record_copy":"always","merge_filter":"enabled"};var option_arr_Accounts = new Array();

option_arr_Accounts[option_arr_Accounts.length] = { "value":"", "text":""};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Apparel", "text":"Apparel"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Banking", "text":"Banking"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Biotechnology", "text":"Biotechnology"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Chemicals", "text":"Chemicals"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Communications", "text":"Communications"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Construction", "text":"Construction"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Consulting", "text":"Consulting"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Education", "text":"Education"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Electronics", "text":"Electronics"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Energy", "text":"Energy"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Engineering", "text":"Engineering"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Entertainment", "text":"Entertainment"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Environmental", "text":"Environmental"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Finance", "text":"Finance"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Government", "text":"Government"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Healthcare", "text":"Healthcare"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Hospitality", "text":"Hospitality"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Insurance", "text":"Insurance"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Machinery", "text":"Machinery"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Manufacturing", "text":"Manufacturing"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Media", "text":"Media"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Not For Profit", "text":"Not For Profit"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Recreation", "text":"Recreation"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Retail", "text":"Retail"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Shipping", "text":"Shipping"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Technology", "text":"Technology"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Telecommunications", "text":"Telecommunications"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Transportation", "text":"Transportation"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Utilities", "text":"Utilities"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"Other", "text":"Other"};

field_defs_Accounts[ "industry"].options=option_arr_Accounts;

field_defs_Accounts[ "name"] = {"name":"name","type":"name","dbType":"varchar","vname":"Name","len":150,"unified_search":true,"audited":true,"required":true,"importable":"required","duplicate_on_record_copy":"always","merge_filter":"selected"};field_defs_Accounts[ "next_renewal_date"] = {"name":"next_renewal_date","vname":"Date of Next Renewal","type":"date","readonly":true};field_defs_Accounts[ "ownership"] = {"name":"ownership","vname":"Ownership","type":"varchar","len":100,"duplicate_on_record_copy":"always"};field_defs_Accounts[ "phone_alternate"] = {"name":"phone_alternate","vname":"Alternate Phone","type":"phone","group":"phone_office","dbType":"varchar","len":100,"unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "phone_fax"] = {"name":"phone_fax","vname":"Fax","type":"phone","dbType":"varchar","len":100,"unified_search":true,"duplicate_on_record_copy":"always"};field_defs_Accounts[ "phone_office"] = {"name":"phone_office","vname":"Office Phone","type":"phone","dbType":"varchar","len":100,"audited":true,"unified_search":true,"duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "rating"] = {"name":"rating","vname":"Rating","type":"varchar","len":100,"duplicate_on_record_copy":"always"};field_defs_Accounts[ "service_level"] = {"name":"service_level","vname":"Service Level","type":"enum","options":"service_level_dom","audited":true};var option_arr_Accounts = new Array();

option_arr_Accounts[option_arr_Accounts.length] = { "value":"", "text":""};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"T1", "text":"Tier 1"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"T2", "text":"Tier 2"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"T3", "text":"Tier 3"};
option_arr_Accounts[option_arr_Accounts.length] = { "value":"T4", "text":"Tier 4"};

field_defs_Accounts[ "service_level"].options=option_arr_Accounts;

field_defs_Accounts[ "shipping_address_city"] = {"name":"shipping_address_city","vname":"Shipping City","type":"varchar","len":100,"group":"shipping_address","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "shipping_address_country"] = {"name":"shipping_address_country","vname":"Shipping Country","type":"varchar","group":"shipping_address","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "shipping_address_postalcode"] = {"name":"shipping_address_postalcode","vname":"Shipping Postal Code","type":"varchar","len":20,"group":"shipping_address","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "shipping_address_state"] = {"name":"shipping_address_state","vname":"Shipping State","type":"varchar","len":100,"group":"shipping_address","duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "shipping_address_street"] = {"name":"shipping_address_street","vname":"Shipping Street","type":"text","dbType":"varchar","len":150,"group":"shipping_address","group_label":"LBL_SHIPPING_ADDRESS","duplicate_on_record_copy":"always","merge_filter":"enabled","rows":2,"cols":20};field_defs_Accounts[ "sic_code"] = {"name":"sic_code","vname":"SIC Code","type":"varchar","len":10,"merge_filter":"enabled"};field_defs_Accounts[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Accounts[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Accounts[ "ticker_symbol"] = {"name":"ticker_symbol","vname":"Ticker Symbol","type":"varchar","len":10,"duplicate_on_record_copy":"always","merge_filter":"enabled"};field_defs_Accounts[ "twitter"] = {"name":"twitter","vname":"Twitter Account","type":"varchar","len":"100","duplicate_on_record_copy":"always"};field_defs_Accounts[ "website"] = {"name":"website","vname":"Website","type":"url","dbType":"varchar","len":255,"duplicate_on_record_copy":"always"};var default_table_columns_Accounts = [""];




module_defs['Accounts'] = new Object();
module_defs['Accounts'].link_defs = link_defs_Accounts;
module_defs['Accounts'].field_defs = field_defs_Accounts;
module_defs['Accounts'].default_table_columns = default_table_columns_Accounts;
module_defs['Accounts'].summary_field_defs = new Object();
module_defs['Accounts'].group_by_field_defs = new Object();
module_defs['Accounts'].default_summary_columns = default_summary_columns;
module_defs['Accounts'].label = "Accounts";

var rel_defs = new Object();
var link_defs_Opportunities = new Object();
link_defs_Opportunities[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"opportunities_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Opportunities[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"opportunities_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Opportunities[ 'activities' ] = {"name":"activities","relationship_name":"opportunity_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Opportunities[ 'campaign_opportunities' ] = {"name":"campaign_opportunities","relationship_name":"campaign_opportunities","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_Opportunities[ 'renewal_opportunities' ] = {"name":"renewal_opportunities","relationship_name":"renewals_opportunities","bean_is_lhs":true,"link_type":"many","label":"Renewal Opportunities","module":"Opportunities"};
link_defs_Opportunities[ 'renewal_parent' ] = {"name":"renewal_parent","relationship_name":"renewals_opportunities","bean_is_lhs":false,"link_type":"one","label":"Parent Opportunitie","module":"Opportunities"};
link_defs_Opportunities[ 'accounts' ] = {"name":"accounts","relationship_name":"accounts_opportunities","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Opportunities[ 'contacts' ] = {"name":"contacts","relationship_name":"opportunities_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Opportunities[ 'tasks' ] = {"name":"tasks","relationship_name":"opportunity_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Opportunities[ 'notes' ] = {"name":"notes","relationship_name":"opportunity_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Opportunities[ 'messages' ] = {"name":"messages","relationship_name":"opportunity_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Opportunities[ 'meetings' ] = {"name":"meetings","relationship_name":"opportunity_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Opportunities[ 'calls' ] = {"name":"calls","relationship_name":"opportunity_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Opportunities[ 'emails' ] = {"name":"emails","relationship_name":"emails_opportunities_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Opportunities[ 'documents' ] = {"name":"documents","relationship_name":"documents_opportunities","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Opportunities[ 'quotes' ] = {"name":"quotes","relationship_name":"quotes_opportunities","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Opportunities[ 'project' ] = {"name":"project","relationship_name":"projects_opportunities","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Opportunities[ 'leads' ] = {"name":"leads","relationship_name":"opportunity_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Opportunities[ 'contracts' ] = {"name":"contracts","relationship_name":"contracts_opportunities","bean_is_lhs":true,"link_type":"many","label":"Contracts","module":"Contracts"};
link_defs_Opportunities[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"opportunities_revenuelineitems","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Opportunities[ 'forecastworksheets' ] = {"name":"forecastworksheets","relationship_name":"forecastworksheets_opportunities","bean_is_lhs":true,"link_type":"many","label":"Forecast Worksheet","module":"ForecastWorksheets"};
link_defs_Opportunities[ 'products' ] = {"name":"products","relationship_name":"opportunities_products","bean_is_lhs":true,"link_type":"many","label":"Quoted Line Items","module":"Products"};
link_defs_Opportunities[ 'purchasedlineitems' ] = {"name":"purchasedlineitems","relationship_name":"purchasedlineitem_renewal_opp","bean_is_lhs":true,"link_type":"many","label":"Purchased Line Items","module":"PurchasedLineItems"};
link_defs_Opportunities[ 'tag_link' ] = {"name":"tag_link","relationship_name":"opportunities_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Opportunities[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"opportunities_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Opportunities[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"opportunities_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Opportunities[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"opportunities_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Opportunities[ 'team_link' ] = {"name":"team_link","relationship_name":"opportunities_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Opportunities[ 'currencies' ] = {"name":"currencies","relationship_name":"opportunities_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Opportunities = new Object();
field_defs_Opportunities[ "amount"] = {"name":"amount","vname":"Likely","type":"currency","dbType":"currency","importable":"required","duplicate_merge":"enabled","options":"numeric_range_search_dom","enable_range_search":true,"convertToBase":true,"showTransactionalAmount":true,"comments":"Unconverted amount of the opportunity","duplicate_merge_dom_value":"1","merge_filter":"disabled","calculated":true,"enforced":true,"readonly":true};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"=", "text":"Equals"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"not_equal", "text":"Does Not Equal"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"greater_than", "text":"Greater Than"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"greater_than_equals", "text":"Greater Than Or Equal To"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"less_than", "text":"Less Than"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"less_than_equals", "text":"Less Than Or Equal To"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"between", "text":"Is Between"};

field_defs_Opportunities[ "amount"].options=option_arr_Opportunities;

field_defs_Opportunities[ "amount_usdollar"] = {"name":"amount_usdollar","vname":"Converted Amount","type":"currency","group":"amount","dbType":"currency","disable_num_format":true,"readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_Opportunities[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6","readonly":true};field_defs_Opportunities[ "best_case"] = {"name":"best_case","vname":"Best","dbType":"currency","type":"currency","len":"26,6","convertToBase":true,"showTransactionalAmount":true,"duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled","calculated":true,"enforced":true,"readonly":true};field_defs_Opportunities[ "closed_revenue_line_items"] = {"name":"closed_revenue_line_items","vname":"# of Closed Revenue Line Items","type":"int","calculated":true,"enforced":true,"reportable":true,"duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled"};field_defs_Opportunities[ "date_closed"] = {"name":"date_closed","vname":"Expected Close Date","type":"date","importable":"false","enable_range_search":true,"options":"date_range_search_dom","hidemassupdate":true,"comments":"Expected or actual date the oppportunity will close","duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled"};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"=", "text":"Equals"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"greater_than", "text":"After"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"less_than", "text":"Before"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_month", "text":"This Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_year", "text":"This Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"between", "text":"Is Between"};

field_defs_Opportunities[ "date_closed"].options=option_arr_Opportunities;

field_defs_Opportunities[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"=", "text":"Equals"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"greater_than", "text":"After"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"less_than", "text":"Before"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_month", "text":"This Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_year", "text":"This Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"between", "text":"Is Between"};

field_defs_Opportunities[ "date_entered"].options=option_arr_Opportunities;

field_defs_Opportunities[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"=", "text":"Equals"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"greater_than", "text":"After"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"less_than", "text":"Before"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_month", "text":"This Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"this_year", "text":"This Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"between", "text":"Is Between"};

field_defs_Opportunities[ "date_modified"].options=option_arr_Opportunities;

field_defs_Opportunities[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Opportunities[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Opportunities[ "lead_source"] = {"name":"lead_source","vname":"Lead Source","type":"enum","options":"lead_source_dom","len":"50","merge_filter":"enabled"};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"", "text":""};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Cold Call", "text":"Cold Call"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Existing Customer", "text":"Existing Customer"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Self Generated", "text":"Self Generated"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Employee", "text":"Employee"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Partner", "text":"Partner"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Public Relations", "text":"Public Relations"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Direct Mail", "text":"Direct Mail"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Conference", "text":"Conference"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Trade Show", "text":"Trade Show"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Web Site", "text":"Web Site"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Word of mouth", "text":"Word of mouth"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Email", "text":"Email"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Campaign", "text":"Campaign"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Support Portal User Registration", "text":"Support Portal User Registration"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Other", "text":"Other"};

field_defs_Opportunities[ "lead_source"].options=option_arr_Opportunities;

field_defs_Opportunities[ "mkto_id"] = {"name":"mkto_id","vname":"Marketo Lead ID","type":"int","audited":true,"duplicate_merge":true,"reportable":true,"importable":"false"};field_defs_Opportunities[ "mkto_sync"] = {"name":"mkto_sync","vname":"Sync to Marketo&reg;","type":"bool","massupdate":true,"audited":true,"duplicate_merge":true,"reportable":true,"importable":"true"};field_defs_Opportunities[ "name"] = {"name":"name","vname":"Opportunitie Name","type":"name","dbType":"varchar","len":"255","unified_search":true,"merge_filter":"selected","importable":"required","required":true};field_defs_Opportunities[ "next_step"] = {"name":"next_step","vname":"Next Step","type":"varchar","len":"100","merge_filter":"enabled","massupdate":true};field_defs_Opportunities[ "opportunity_type"] = {"name":"opportunity_type","vname":"Type","type":"enum","options":"opportunity_type_dom","len":"255","audited":true,"merge_filter":"enabled"};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"", "text":""};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Existing Business", "text":"Existing Business"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"New Business", "text":"New Business"};

field_defs_Opportunities[ "opportunity_type"].options=option_arr_Opportunities;

field_defs_Opportunities[ "renewal"] = {"name":"renewal","vname":"Renewal","type":"bool"};field_defs_Opportunities[ "sales_status"] = {"name":"sales_status","vname":"Status","type":"enum","options":"sales_status_dom","len":"255","readonly":true,"duplicate_merge":"disabled","studio":true,"reportable":true,"massupdate":true,"importable":true,"audited":true,"merge_filter":"disabled"};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"New", "text":"New"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"In Progress", "text":"In Progress"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Closed Won", "text":"Closed Won"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"Closed Lost", "text":"Closed Lost"};

field_defs_Opportunities[ "sales_status"].options=option_arr_Opportunities;

field_defs_Opportunities[ "service_duration_unit"] = {"name":"service_duration_unit","vname":"Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50};var option_arr_Opportunities = new Array();

option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"year", "text":"Year(s)"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"month", "text":"Month(s)"};
option_arr_Opportunities[option_arr_Opportunities.length] = { "value":"day", "text":"Day(s)"};

field_defs_Opportunities[ "service_duration_unit"].options=option_arr_Opportunities;

field_defs_Opportunities[ "service_duration_value"] = {"name":"service_duration_value","vname":"Service Duration Value","type":"int","min":"1","len":"5"};field_defs_Opportunities[ "service_start_date"] = {"name":"service_start_date","vname":"Service Start Date","type":"date","hidemassupdate":true,"comments":"Service start date field.","importable":"false","duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled"};field_defs_Opportunities[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Opportunities[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Opportunities[ "total_revenue_line_items"] = {"name":"total_revenue_line_items","vname":"# of Total Revenue Line Items","type":"int","calculated":true,"enforced":true,"reportable":true,"duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled"};field_defs_Opportunities[ "worst_case"] = {"name":"worst_case","vname":"Worst","dbType":"currency","type":"currency","len":"26,6","convertToBase":true,"showTransactionalAmount":true,"duplicate_merge":"enabled","duplicate_merge_dom_value":1,"merge_filter":"disabled","calculated":true,"enforced":true,"readonly":true};var default_table_columns_Opportunities = [""];




module_defs['Opportunities'] = new Object();
module_defs['Opportunities'].link_defs = link_defs_Opportunities;
module_defs['Opportunities'].field_defs = field_defs_Opportunities;
module_defs['Opportunities'].default_table_columns = default_table_columns_Opportunities;
module_defs['Opportunities'].summary_field_defs = new Object();
module_defs['Opportunities'].group_by_field_defs = new Object();
module_defs['Opportunities'].default_summary_columns = default_summary_columns;
module_defs['Opportunities'].label = "Opportunities";

var rel_defs = new Object();
var link_defs_Notes = new Object();
link_defs_Notes[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"notes_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Notes[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"notes_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Notes[ 'activities' ] = {"name":"activities","relationship_name":"note_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Notes[ 'contact' ] = {"name":"contact","relationship_name":"contact_notes","bean_is_lhs":false,"link_type":"one","label":"Contact","module":"Contacts"};
link_defs_Notes[ 'cases' ] = {"name":"cases","relationship_name":"case_notes","bean_is_lhs":false,"link_type":"one","label":"Cases","module":"Cases"};
link_defs_Notes[ 'accounts' ] = {"name":"accounts","relationship_name":"account_notes","bean_is_lhs":false,"link_type":"one","label":"Accounts","module":"Accounts"};
link_defs_Notes[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunity_notes","bean_is_lhs":false,"link_type":"one","label":"Opportunities","module":"Opportunities"};
link_defs_Notes[ 'leads' ] = {"name":"leads","relationship_name":"lead_notes","bean_is_lhs":false,"link_type":"one","label":"Leads","module":"Leads"};
link_defs_Notes[ 'products' ] = {"name":"products","relationship_name":"product_notes","bean_is_lhs":false,"link_type":"one","label":"Products","module":"Products"};
link_defs_Notes[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitem_notes","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Notes[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_notes","bean_is_lhs":false,"link_type":"one","label":"Quotes","module":"Quotes"};
link_defs_Notes[ 'contracts' ] = {"name":"contracts","relationship_name":"contract_notes","bean_is_lhs":false,"link_type":"one","label":"Contracts","module":"Contracts"};
link_defs_Notes[ 'prospects' ] = {"name":"prospects","relationship_name":"prospect_notes","bean_is_lhs":false,"link_type":"one","label":"Targets","module":"Prospects"};
link_defs_Notes[ 'bugs' ] = {"name":"bugs","relationship_name":"bug_notes","bean_is_lhs":false,"link_type":"one","label":"Bugs","module":"Bugs"};
link_defs_Notes[ 'kbcontents' ] = {"name":"kbcontents","relationship_name":"kbcontent_notes","bean_is_lhs":false,"link_type":"one","label":"Knowledge Base","module":"KBContents"};
link_defs_Notes[ 'emails' ] = {"name":"emails","relationship_name":"emails_notes_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Notes[ 'email_attachment_for' ] = {"name":"email_attachment_for","relationship_name":"emails_attachments","bean_is_lhs":false,"link_type":"one","label":"Email Attachment For","module":"Emails"};
link_defs_Notes[ 'emailtemplates_attachment_for' ] = {"name":"emailtemplates_attachment_for","relationship_name":"emailtemplates_attachments","bean_is_lhs":false,"link_type":"one","label":"LBL_EMAILTEMPLATES_ATTACHMENT_FOR","module":"EmailTemplates"};
link_defs_Notes[ 'projects' ] = {"name":"projects","relationship_name":"projects_notes","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Notes[ 'project_tasks' ] = {"name":"project_tasks","relationship_name":"project_tasks_notes","bean_is_lhs":false,"link_type":"one","label":"Project Tasks","module":"ProjectTask"};
link_defs_Notes[ 'meetings' ] = {"name":"meetings","relationship_name":"meetings_notes","bean_is_lhs":false,"link_type":"one","label":"Meetings","module":"Meetings"};
link_defs_Notes[ 'calls' ] = {"name":"calls","relationship_name":"calls_notes","bean_is_lhs":false,"link_type":"one","label":"Calls","module":"Calls"};
link_defs_Notes[ 'tasks' ] = {"name":"tasks","relationship_name":"tasks_notes","bean_is_lhs":false,"link_type":"one","label":"Tasks","module":"Tasks"};
link_defs_Notes[ 'schedulersjobs' ] = {"name":"schedulersjobs","relationship_name":"schedulersjob_notes","bean_is_lhs":false,"link_type":"one","label":"LBL_SCHEDULERS_JOBS","module":"SchedulersJobs"};
link_defs_Notes[ 'attachments' ] = {"name":"attachments","relationship_name":"notes_attachments","bean_is_lhs":true,"link_type":"many","label":"Attachments","module":"Notes"};
link_defs_Notes[ 'tag_link' ] = {"name":"tag_link","relationship_name":"notes_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Notes[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"notes_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Notes[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"notes_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Notes[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"notes_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Notes[ 'team_link' ] = {"name":"team_link","relationship_name":"notes_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Notes = new Object();
field_defs_Notes[ "attachment_flag"] = {"name":"attachment_flag","vname":"Is Attachment","type":"bool","readonly":true,"processes":true};field_defs_Notes[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Notes = new Array();

option_arr_Notes[option_arr_Notes.length] = { "value":"=", "text":"Equals"};
option_arr_Notes[option_arr_Notes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Notes[option_arr_Notes.length] = { "value":"greater_than", "text":"After"};
option_arr_Notes[option_arr_Notes.length] = { "value":"less_than", "text":"Before"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"between", "text":"Is Between"};

field_defs_Notes[ "date_entered"].options=option_arr_Notes;

field_defs_Notes[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Notes = new Array();

option_arr_Notes[option_arr_Notes.length] = { "value":"=", "text":"Equals"};
option_arr_Notes[option_arr_Notes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Notes[option_arr_Notes.length] = { "value":"greater_than", "text":"After"};
option_arr_Notes[option_arr_Notes.length] = { "value":"less_than", "text":"Before"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Notes[option_arr_Notes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Notes[option_arr_Notes.length] = { "value":"between", "text":"Is Between"};

field_defs_Notes[ "date_modified"].options=option_arr_Notes;

field_defs_Notes[ "description"] = {"name":"description","vname":"Description","type":"text","rows":30,"cols":90};field_defs_Notes[ "embed_flag"] = {"name":"embed_flag","vname":"Embed in email?","type":"bool"};field_defs_Notes[ "entry_source"] = {"name":"entry_source","vname":"Note Source","type":"enum","function":"getSourceTypes","function_bean":"Notes","len":"255","readonly":true,"processes":true};                    var option_arr_Notes = new Array();

option_arr_Notes[option_arr_Notes.length] = { "value":"external", "text":"External"};
option_arr_Notes[option_arr_Notes.length] = { "value":"internal", "text":"Internal"};
field_defs_Notes[ "entry_source"].options=option_arr_Notes;
field_defs_Notes[ "file_ext"] = {"name":"file_ext","vname":"File Extension","type":"varchar","len":100,"duplicate_on_record_copy":"always"};field_defs_Notes[ "file_mime_type"] = {"name":"file_mime_type","vname":"Mime Type","type":"varchar","len":"100","duplicate_on_record_copy":"always"};field_defs_Notes[ "file_size"] = {"name":"file_size","vname":"File Size","type":"int","duplicate_on_record_copy":"always"};field_defs_Notes[ "file_source"] = {"name":"file_source","vname":"File Source","type":"varchar","len":"32","duplicate_on_record_copy":"always"};field_defs_Notes[ "filename"] = {"name":"filename","vname":"Attachment","type":"file","dbType":"varchar","len":"255","reportable":true,"duplicate_on_record_copy":"always"};field_defs_Notes[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Notes[ "name"] = {"name":"name","vname":"Subject","dbType":"varchar","type":"name","len":"255","unified_search":true,"importable":"required","required":true};field_defs_Notes[ "note_parent_id"] = {"name":"note_parent_id","vname":"Note Parent ID","type":"id","reportable":true};field_defs_Notes[ "parent_id"] = {"name":"parent_id","vname":"Parent ID","type":"id","reportable":true};field_defs_Notes[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","group":"parent_name","options":"parent_type_display","len":"255"};var option_arr_Notes = new Array();

option_arr_Notes[option_arr_Notes.length] = { "value":"Accounts", "text":"Account"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Contacts", "text":"Contact"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Tasks", "text":"Task"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Opportunities", "text":"Opportunitie"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Products", "text":"Quoted Line Item"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Bugs", "text":"Bugs"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Cases", "text":"Case"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Leads", "text":"Lead"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Project", "text":"Projects"};
option_arr_Notes[option_arr_Notes.length] = { "value":"ProjectTask", "text":"Project Task"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Prospects", "text":"Target"};
option_arr_Notes[option_arr_Notes.length] = { "value":"KBContents", "text":"Knowledge Base"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Notes", "text":"Note"};
option_arr_Notes[option_arr_Notes.length] = { "value":"PurchasedLineItems", "text":"Purchased Line Item"};
option_arr_Notes[option_arr_Notes.length] = { "value":"Purchases", "text":"Purchase"};
option_arr_Notes[option_arr_Notes.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};

field_defs_Notes[ "parent_type"].options=option_arr_Notes;

field_defs_Notes[ "portal_flag"] = {"name":"portal_flag","vname":"Display in Portal?","type":"bool"};field_defs_Notes[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Notes[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Notes = [""];




module_defs['Notes'] = new Object();
module_defs['Notes'].link_defs = link_defs_Notes;
module_defs['Notes'].field_defs = field_defs_Notes;
module_defs['Notes'].default_table_columns = default_table_columns_Notes;
module_defs['Notes'].summary_field_defs = new Object();
module_defs['Notes'].group_by_field_defs = new Object();
module_defs['Notes'].default_summary_columns = default_summary_columns;
module_defs['Notes'].label = "Notes";

var rel_defs = new Object();
var link_defs_Calls = new Object();
link_defs_Calls[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"calls_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Calls[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"calls_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Calls[ 'activities' ] = {"name":"activities","relationship_name":"call_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Calls[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunity_calls","bean_is_lhs":false,"link_type":"one","label":"Opportunitie","module":"Opportunities"};
link_defs_Calls[ 'leads' ] = {"name":"leads","relationship_name":"calls_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Calls[ 'project' ] = {"name":"project","relationship_name":"projects_calls","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Calls[ 'cases' ] = {"name":"cases","relationship_name":"case_calls","bean_is_lhs":false,"link_type":"one","label":"Case","module":"Cases"};
link_defs_Calls[ 'accounts' ] = {"name":"accounts","relationship_name":"account_calls","bean_is_lhs":false,"link_type":"one","label":"Account","module":"Accounts"};
link_defs_Calls[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitem_calls","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Calls[ 'products' ] = {"name":"products","relationship_name":"product_calls","bean_is_lhs":false,"link_type":"one","label":"Products","module":"Products"};
link_defs_Calls[ 'bugs' ] = {"name":"bugs","relationship_name":"bug_calls","bean_is_lhs":false,"link_type":"one","label":"Bugs","module":"Bugs"};
link_defs_Calls[ 'contacts' ] = {"name":"contacts","relationship_name":"calls_contacts","bean_is_lhs":true,"link_type":"many","label":"Contact","module":"Contacts"};
link_defs_Calls[ 'prospects' ] = {"name":"prospects","relationship_name":"prospect_calls","bean_is_lhs":false,"link_type":"one","label":"Targets","module":"Prospects"};
link_defs_Calls[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_calls","bean_is_lhs":false,"link_type":"one","label":"Quotes","module":"Quotes"};
link_defs_Calls[ 'users' ] = {"name":"users","relationship_name":"calls_users","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_Calls[ 'notes' ] = {"name":"notes","relationship_name":"calls_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Calls[ 'messages' ] = {"name":"messages","relationship_name":"calls_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Calls[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"calls_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Calls[ 'tag_link' ] = {"name":"tag_link","relationship_name":"calls_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Calls[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"calls_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Calls[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"calls_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Calls[ 'team_link' ] = {"name":"team_link","relationship_name":"calls_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Calls = new Object();
field_defs_Calls[ "date_end"] = {"name":"date_end","vname":"End Date","type":"datetimecombo","dbType":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true,"group":"end_date","group_label":"LBL_DATE_END"};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"=", "text":"Equals"};
option_arr_Calls[option_arr_Calls.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Calls[option_arr_Calls.length] = { "value":"greater_than", "text":"After"};
option_arr_Calls[option_arr_Calls.length] = { "value":"less_than", "text":"Before"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_month", "text":"This Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_year", "text":"This Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"between", "text":"Is Between"};

field_defs_Calls[ "date_end"].options=option_arr_Calls;

field_defs_Calls[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"=", "text":"Equals"};
option_arr_Calls[option_arr_Calls.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Calls[option_arr_Calls.length] = { "value":"greater_than", "text":"After"};
option_arr_Calls[option_arr_Calls.length] = { "value":"less_than", "text":"Before"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_month", "text":"This Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_year", "text":"This Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"between", "text":"Is Between"};

field_defs_Calls[ "date_entered"].options=option_arr_Calls;

field_defs_Calls[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"=", "text":"Equals"};
option_arr_Calls[option_arr_Calls.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Calls[option_arr_Calls.length] = { "value":"greater_than", "text":"After"};
option_arr_Calls[option_arr_Calls.length] = { "value":"less_than", "text":"Before"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_month", "text":"This Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_year", "text":"This Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"between", "text":"Is Between"};

field_defs_Calls[ "date_modified"].options=option_arr_Calls;

field_defs_Calls[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"datetimecombo","dbType":"datetime","importable":"required","required":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"=", "text":"Equals"};
option_arr_Calls[option_arr_Calls.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Calls[option_arr_Calls.length] = { "value":"greater_than", "text":"After"};
option_arr_Calls[option_arr_Calls.length] = { "value":"less_than", "text":"Before"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_month", "text":"This Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Calls[option_arr_Calls.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"this_year", "text":"This Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Calls[option_arr_Calls.length] = { "value":"between", "text":"Is Between"};

field_defs_Calls[ "date_start"].options=option_arr_Calls;

field_defs_Calls[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Calls[ "direction"] = {"name":"direction","vname":"Direction","type":"enum","len":100,"options":"call_direction_dom"};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"Inbound", "text":"Inbound"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Outbound", "text":"Outbound"};

field_defs_Calls[ "direction"].options=option_arr_Calls;

field_defs_Calls[ "duration_hours"] = {"name":"duration_hours","vname":"Duration Hours","type":"int","required":true,"processes":true,"group":"end_date","group_label":"LBL_DATE_END"};field_defs_Calls[ "duration_minutes"] = {"name":"duration_minutes","vname":"Duration Minutes","type":"enum","dbType":"int","options":"duration_intervals","group":"end_date","group_label":"LBL_DATE_END","importable":"required","len":"2","required":true,"processes":true};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"0", "text":"00"};
option_arr_Calls[option_arr_Calls.length] = { "value":"15", "text":"15"};
option_arr_Calls[option_arr_Calls.length] = { "value":"30", "text":"30"};
option_arr_Calls[option_arr_Calls.length] = { "value":"45", "text":"45"};

field_defs_Calls[ "duration_minutes"].options=option_arr_Calls;

field_defs_Calls[ "email_reminder_sent"] = {"name":"email_reminder_sent","vname":"Email reminder sent","type":"bool"};field_defs_Calls[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Calls[ "name"] = {"name":"name","vname":"Subject","dbType":"varchar","type":"name","len":"50","unified_search":true,"required":true,"importable":"required"};field_defs_Calls[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","group":"parent_name","options":"parent_type_display","len":255};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"Accounts", "text":"Account"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Contacts", "text":"Contact"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Tasks", "text":"Task"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Opportunities", "text":"Opportunitie"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Products", "text":"Quoted Line Item"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Bugs", "text":"Bugs"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Cases", "text":"Case"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Leads", "text":"Lead"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Project", "text":"Projects"};
option_arr_Calls[option_arr_Calls.length] = { "value":"ProjectTask", "text":"Project Task"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Prospects", "text":"Target"};
option_arr_Calls[option_arr_Calls.length] = { "value":"KBContents", "text":"Knowledge Base"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Notes", "text":"Note"};
option_arr_Calls[option_arr_Calls.length] = { "value":"PurchasedLineItems", "text":"Purchased Line Item"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Purchases", "text":"Purchase"};
option_arr_Calls[option_arr_Calls.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};

field_defs_Calls[ "parent_type"].options=option_arr_Calls;

field_defs_Calls[ "status"] = {"name":"status","vname":"Status","type":"enum","len":100,"options":"call_status_dom","required":true,"importable":"required","duplicate_on_record_copy":"no"};var option_arr_Calls = new Array();

option_arr_Calls[option_arr_Calls.length] = { "value":"Planned", "text":"Scheduled"};
option_arr_Calls[option_arr_Calls.length] = { "value":"In Progress", "text":"In Progress"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Held", "text":"Held"};
option_arr_Calls[option_arr_Calls.length] = { "value":"Not Held", "text":"Canceled"};

field_defs_Calls[ "status"].options=option_arr_Calls;

field_defs_Calls[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Calls[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Calls = [""];




module_defs['Calls'] = new Object();
module_defs['Calls'].link_defs = link_defs_Calls;
module_defs['Calls'].field_defs = field_defs_Calls;
module_defs['Calls'].default_table_columns = default_table_columns_Calls;
module_defs['Calls'].summary_field_defs = new Object();
module_defs['Calls'].group_by_field_defs = new Object();
module_defs['Calls'].default_summary_columns = default_summary_columns;
module_defs['Calls'].label = "Calls";

var rel_defs = new Object();
var link_defs_Emails = new Object();
link_defs_Emails[ 'mailbox' ] = {"name":"mailbox","relationship_name":"inbound_email_emails","bean_is_lhs":false,"link_type":"one","label":"Inbound Account","module":"InboundEmail"};
link_defs_Emails[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"emails_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Emails[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"emails_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Emails[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"emails_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Emails[ 'accounts' ] = {"name":"accounts","relationship_name":"emails_accounts_rel","bean_is_lhs":true,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Emails[ 'bugs' ] = {"name":"bugs","relationship_name":"emails_bugs_rel","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Emails[ 'cases' ] = {"name":"cases","relationship_name":"emails_cases_rel","bean_is_lhs":true,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Emails[ 'contacts' ] = {"name":"contacts","relationship_name":"emails_contacts_rel","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Emails[ 'leads' ] = {"name":"leads","relationship_name":"emails_leads_rel","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Emails[ 'opportunities' ] = {"name":"opportunities","relationship_name":"emails_opportunities_rel","bean_is_lhs":true,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Emails[ 'purchases' ] = {"name":"purchases","relationship_name":"emails_purchases_rel","bean_is_lhs":true,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Emails[ 'purchasedlineitems' ] = {"name":"purchasedlineitems","relationship_name":"emails_purchasedlineitems_rel","bean_is_lhs":true,"link_type":"many","label":"Purchased Line Items","module":"PurchasedLineItems"};
link_defs_Emails[ 'project' ] = {"name":"project","relationship_name":"emails_projects_rel","bean_is_lhs":true,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Emails[ 'projecttask' ] = {"name":"projecttask","relationship_name":"emails_project_task_rel","bean_is_lhs":true,"link_type":"many","label":"Project Tasks","module":"ProjectTask"};
link_defs_Emails[ 'prospects' ] = {"name":"prospects","relationship_name":"emails_prospects_rel","bean_is_lhs":true,"link_type":"many","label":"Targets","module":"Prospects"};
link_defs_Emails[ 'quotes' ] = {"name":"quotes","relationship_name":"emails_quotes","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Emails[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"emails_revenuelineitems_rel","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Emails[ 'products' ] = {"name":"products","relationship_name":"emails_products_rel","bean_is_lhs":true,"link_type":"many","label":"Quoted Line Items","module":"Products"};
link_defs_Emails[ 'tasks' ] = {"name":"tasks","relationship_name":"emails_tasks_rel","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Emails[ 'users' ] = {"name":"users","relationship_name":"emails_users_rel","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_Emails[ 'notes' ] = {"name":"notes","relationship_name":"emails_notes_rel","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Emails[ 'messages' ] = {"name":"messages","relationship_name":"emails_messages_rel","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Emails[ 'tag_link' ] = {"name":"tag_link","relationship_name":"emails_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Emails[ 'team_link' ] = {"name":"team_link","relationship_name":"emails_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Emails = new Object();
field_defs_Emails[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","required":true,"readonly":true,"duplicate_on_record_copy":"no"};field_defs_Emails[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","required":true,"readonly":true,"duplicate_on_record_copy":"no"};field_defs_Emails[ "date_sent"] = {"name":"date_sent","vname":"Date Sent","type":"datetime","hideacl":true};field_defs_Emails[ "direction"] = {"name":"direction","vname":"Direction","type":"enum","options":"dom_email_direction","len":20,"required":true,"reportable":true,"mandatory_fetch":true};var option_arr_Emails = new Array();

option_arr_Emails[option_arr_Emails.length] = { "value":"Unknown", "text":"Unknown"};
option_arr_Emails[option_arr_Emails.length] = { "value":"Outbound", "text":"Outbound"};
option_arr_Emails[option_arr_Emails.length] = { "value":"Inbound", "text":"Inbound"};
option_arr_Emails[option_arr_Emails.length] = { "value":"Internal", "text":"Internal"};

field_defs_Emails[ "direction"].options=option_arr_Emails;

field_defs_Emails[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true};field_defs_Emails[ "intent"] = {"name":"intent","vname":"Intent","type":"varchar","len":100,"hideacl":true};field_defs_Emails[ "message_id"] = {"name":"message_id","vname":"Message ID","type":"varchar","len":255,"hideacl":true,"duplicate_on_record_copy":"no"};field_defs_Emails[ "message_uid"] = {"name":"message_uid","vname":"Message UID","type":"varchar","len":64,"hideacl":true};field_defs_Emails[ "name"] = {"name":"name","vname":"Subject","type":"name","dbType":"varchar","len":"255","hideacl":true};field_defs_Emails[ "status"] = {"name":"status","vname":"Email Status","type":"enum","len":100,"options":"dom_email_status","hideacl":true};var option_arr_Emails = new Array();

option_arr_Emails[option_arr_Emails.length] = { "value":"archived", "text":"Archived"};
option_arr_Emails[option_arr_Emails.length] = { "value":"closed", "text":"Closed"};
option_arr_Emails[option_arr_Emails.length] = { "value":"draft", "text":"In Draft"};
option_arr_Emails[option_arr_Emails.length] = { "value":"read", "text":"Read"};
option_arr_Emails[option_arr_Emails.length] = { "value":"replied", "text":"Replied"};
option_arr_Emails[option_arr_Emails.length] = { "value":"sent", "text":"Sent"};
option_arr_Emails[option_arr_Emails.length] = { "value":"send_error", "text":"Send Error"};
option_arr_Emails[option_arr_Emails.length] = { "value":"unread", "text":"Unread"};

field_defs_Emails[ "status"].options=option_arr_Emails;

field_defs_Emails[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"LBL_SYNC_KEY","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Emails[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Emails[ "type"] = {"name":"type","vname":"Type","type":"enum","options":"dom_email_types","len":100,"hideacl":true};var option_arr_Emails = new Array();

option_arr_Emails[option_arr_Emails.length] = { "value":"out", "text":"Sent"};
option_arr_Emails[option_arr_Emails.length] = { "value":"archived", "text":"Archived"};
option_arr_Emails[option_arr_Emails.length] = { "value":"draft", "text":"Draft"};
option_arr_Emails[option_arr_Emails.length] = { "value":"inbound", "text":"Inbound"};
option_arr_Emails[option_arr_Emails.length] = { "value":"campaign", "text":"Campaign"};

field_defs_Emails[ "type"].options=option_arr_Emails;

var default_table_columns_Emails = [""];




module_defs['Emails'] = new Object();
module_defs['Emails'].link_defs = link_defs_Emails;
module_defs['Emails'].field_defs = field_defs_Emails;
module_defs['Emails'].default_table_columns = default_table_columns_Emails;
module_defs['Emails'].summary_field_defs = new Object();
module_defs['Emails'].group_by_field_defs = new Object();
module_defs['Emails'].default_summary_columns = default_summary_columns;
module_defs['Emails'].label = "Emails";

var rel_defs = new Object();
var link_defs_Meetings = new Object();
link_defs_Meetings[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"meetings_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Meetings[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"meetings_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Meetings[ 'activities' ] = {"name":"activities","relationship_name":"meeting_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Meetings[ 'contacts' ] = {"name":"contacts","relationship_name":"meetings_contacts","bean_is_lhs":true,"link_type":"many","label":"Contact","module":"Contacts"};
link_defs_Meetings[ 'users' ] = {"name":"users","relationship_name":"meetings_users","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_Meetings[ 'accounts' ] = {"name":"accounts","relationship_name":"account_meetings","bean_is_lhs":false,"link_type":"one","label":"Account","module":"Accounts"};
link_defs_Meetings[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitem_meetings","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Meetings[ 'products' ] = {"name":"products","relationship_name":"product_meetings","bean_is_lhs":false,"link_type":"one","label":"Products","module":"Products"};
link_defs_Meetings[ 'bugs' ] = {"name":"bugs","relationship_name":"bug_meetings","bean_is_lhs":false,"link_type":"one","label":"Bugs","module":"Bugs"};
link_defs_Meetings[ 'leads' ] = {"name":"leads","relationship_name":"meetings_leads","bean_is_lhs":true,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Meetings[ 'project' ] = {"name":"project","relationship_name":"projects_meetings","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Meetings[ 'opportunity' ] = {"name":"opportunity","relationship_name":"opportunity_meetings","bean_is_lhs":false,"link_type":"one","label":"Opportunitie","module":"Opportunities"};
link_defs_Meetings[ 'prospects' ] = {"name":"prospects","relationship_name":"prospect_meetings","bean_is_lhs":false,"link_type":"one","label":"Targets","module":"Prospects"};
link_defs_Meetings[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_meetings","bean_is_lhs":false,"link_type":"one","label":"Quotes","module":"Quotes"};
link_defs_Meetings[ 'cases' ] = {"name":"cases","relationship_name":"case_meetings","bean_is_lhs":false,"link_type":"one","label":"Case","module":"Cases"};
link_defs_Meetings[ 'notes' ] = {"name":"notes","relationship_name":"meetings_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Meetings[ 'messages' ] = {"name":"messages","relationship_name":"meetings_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Meetings[ 'tag_link' ] = {"name":"tag_link","relationship_name":"meetings_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Meetings[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"meetings_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Meetings[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"meetings_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Meetings[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"meetings_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Meetings[ 'team_link' ] = {"name":"team_link","relationship_name":"meetings_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Meetings = new Object();
field_defs_Meetings[ "creator"] = {"name":"creator","vname":"Meeting Creator","type":"varchar","len":"50","studio":"false"};field_defs_Meetings[ "date_end"] = {"name":"date_end","vname":"End Date","type":"datetimecombo","dbType":"datetime","enable_range_search":true,"options":"date_range_search_dom","readonly":true,"group":"end_date","group_label":"LBL_DATE_END"};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"=", "text":"Equals"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"greater_than", "text":"After"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"less_than", "text":"Before"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_month", "text":"This Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_year", "text":"This Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"between", "text":"Is Between"};

field_defs_Meetings[ "date_end"].options=option_arr_Meetings;

field_defs_Meetings[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"=", "text":"Equals"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"greater_than", "text":"After"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"less_than", "text":"Before"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_month", "text":"This Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_year", "text":"This Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"between", "text":"Is Between"};

field_defs_Meetings[ "date_entered"].options=option_arr_Meetings;

field_defs_Meetings[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"=", "text":"Equals"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"greater_than", "text":"After"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"less_than", "text":"Before"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_month", "text":"This Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_year", "text":"This Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"between", "text":"Is Between"};

field_defs_Meetings[ "date_modified"].options=option_arr_Meetings;

field_defs_Meetings[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"datetimecombo","dbType":"datetime","importable":"required","required":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"=", "text":"Equals"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"greater_than", "text":"After"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"less_than", "text":"Before"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_month", "text":"This Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"this_year", "text":"This Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"between", "text":"Is Between"};

field_defs_Meetings[ "date_start"].options=option_arr_Meetings;

field_defs_Meetings[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Meetings[ "displayed_url"] = {"name":"displayed_url","vname":"Display URL","type":"url","len":"400"};field_defs_Meetings[ "duration_hours"] = {"name":"duration_hours","vname":"Duration Hours","type":"int","importable":"required","required":true,"processes":true,"group":"end_date","group_label":"LBL_DATE_END"};field_defs_Meetings[ "duration_minutes"] = {"name":"duration_minutes","vname":"Duration Minutes","type":"enum","dbType":"int","options":"duration_intervals","group":"end_date","group_label":"LBL_DATE_END","len":"2","required":true,"processes":true};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"0", "text":"00"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"15", "text":"15"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"30", "text":"30"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"45", "text":"45"};

field_defs_Meetings[ "duration_minutes"].options=option_arr_Meetings;

field_defs_Meetings[ "email_reminder_sent"] = {"name":"email_reminder_sent","vname":"Email reminder sent","type":"bool"};field_defs_Meetings[ "external_id"] = {"name":"external_id","vname":"External App ID","type":"varchar","len":"50","studio":"false"};field_defs_Meetings[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Meetings[ "location"] = {"name":"location","vname":"Location","type":"varchar","len":"50"};field_defs_Meetings[ "name"] = {"name":"name","vname":"Subject","required":true,"type":"name","dbType":"varchar","unified_search":true,"len":"50","importable":"required"};field_defs_Meetings[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","group":"parent_name","options":"parent_type_display","len":100};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"Accounts", "text":"Account"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Contacts", "text":"Contact"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Tasks", "text":"Task"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Opportunities", "text":"Opportunitie"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Products", "text":"Quoted Line Item"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Bugs", "text":"Bugs"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Cases", "text":"Case"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Leads", "text":"Lead"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Project", "text":"Projects"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"ProjectTask", "text":"Project Task"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Prospects", "text":"Target"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"KBContents", "text":"Knowledge Base"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Notes", "text":"Note"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"PurchasedLineItems", "text":"Purchased Line Item"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Purchases", "text":"Purchase"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};

field_defs_Meetings[ "parent_type"].options=option_arr_Meetings;

field_defs_Meetings[ "password"] = {"name":"password","vname":"Meeting Password","type":"varchar","len":"50"};field_defs_Meetings[ "status"] = {"name":"status","vname":"Status","type":"enum","len":100,"options":"meeting_status_dom","duplicate_on_record_copy":"no"};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"Planned", "text":"Scheduled"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Held", "text":"Held"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Not Held", "text":"Canceled"};

field_defs_Meetings[ "status"].options=option_arr_Meetings;

field_defs_Meetings[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Meetings[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Meetings[ "type"] = {"name":"type","vname":"Meeting Type","type":"enum","len":255,"function":"getMeetingsExternalApiDropDown","options":"eapm_list"};var option_arr_Meetings = new Array();

option_arr_Meetings[option_arr_Meetings.length] = { "value":"Sugar", "text":"Sugar"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"WebEx", "text":"WebEx"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"GoToMeeting", "text":"GoToMeeting"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"IBMSmartCloud", "text":"IBM SmartCloud"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Google", "text":"Google"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Box", "text":"Box.net"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Facebook", "text":"Facebook"};
option_arr_Meetings[option_arr_Meetings.length] = { "value":"Twitter", "text":"Twitter"};

field_defs_Meetings[ "type"].options=option_arr_Meetings;

var default_table_columns_Meetings = [""];




module_defs['Meetings'] = new Object();
module_defs['Meetings'].link_defs = link_defs_Meetings;
module_defs['Meetings'].field_defs = field_defs_Meetings;
module_defs['Meetings'].default_table_columns = default_table_columns_Meetings;
module_defs['Meetings'].summary_field_defs = new Object();
module_defs['Meetings'].group_by_field_defs = new Object();
module_defs['Meetings'].default_summary_columns = default_summary_columns;
module_defs['Meetings'].label = "Meetings";

var rel_defs = new Object();
var link_defs_Tasks = new Object();
link_defs_Tasks[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"tasks_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Tasks[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"tasks_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Tasks[ 'activities' ] = {"name":"activities","relationship_name":"task_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Tasks[ 'contacts' ] = {"name":"contacts","relationship_name":"contact_tasks","bean_is_lhs":false,"link_type":"one","label":"Contact Name ","module":"Contacts"};
link_defs_Tasks[ 'accounts' ] = {"name":"accounts","relationship_name":"account_tasks","bean_is_lhs":false,"link_type":"one","label":"Accounts","module":"Accounts"};
link_defs_Tasks[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunity_tasks","bean_is_lhs":false,"link_type":"one","label":"Opportunitie","module":"Opportunities"};
link_defs_Tasks[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitem_tasks","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Tasks[ 'cases' ] = {"name":"cases","relationship_name":"case_tasks","bean_is_lhs":false,"link_type":"one","label":"Case","module":"Cases"};
link_defs_Tasks[ 'bugs' ] = {"name":"bugs","relationship_name":"bug_tasks","bean_is_lhs":false,"link_type":"one","label":"Bugs","module":"Bugs"};
link_defs_Tasks[ 'emails' ] = {"name":"emails","relationship_name":"emails_tasks_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Tasks[ 'leads' ] = {"name":"leads","relationship_name":"lead_tasks","bean_is_lhs":false,"link_type":"one","label":"Leads","module":"Leads"};
link_defs_Tasks[ 'projects' ] = {"name":"projects","relationship_name":"projects_tasks","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Tasks[ 'project_tasks' ] = {"name":"project_tasks","relationship_name":"project_tasks_tasks","bean_is_lhs":false,"link_type":"one","label":"Project Tasks","module":"ProjectTask"};
link_defs_Tasks[ 'notes' ] = {"name":"notes","relationship_name":"tasks_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Tasks[ 'messages' ] = {"name":"messages","relationship_name":"tasks_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Tasks[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_tasks","bean_is_lhs":false,"link_type":"one","label":"Quotes","module":"Quotes"};
link_defs_Tasks[ 'project' ] = {"name":"project","relationship_name":"projects_tasks","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Tasks[ 'kbcontents' ] = {"name":"kbcontents","relationship_name":"kbcontent_tasks","bean_is_lhs":false,"link_type":"one","label":"Knowledge Base","module":"KBContents"};
link_defs_Tasks[ 'tag_link' ] = {"name":"tag_link","relationship_name":"tasks_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Tasks[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"tasks_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Tasks[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"tasks_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Tasks[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"tasks_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Tasks[ 'team_link' ] = {"name":"team_link","relationship_name":"tasks_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Tasks = new Object();
field_defs_Tasks[ "date_due"] = {"name":"date_due","vname":"Due Date","type":"datetimecombo","dbType":"datetime","group":"date_due","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"=", "text":"Equals"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"greater_than", "text":"After"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"less_than", "text":"Before"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"between", "text":"Is Between"};

field_defs_Tasks[ "date_due"].options=option_arr_Tasks;

field_defs_Tasks[ "date_due_flag"] = {"name":"date_due_flag","vname":"No Due Date","type":"bool","group":"date_due"};field_defs_Tasks[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"=", "text":"Equals"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"greater_than", "text":"After"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"less_than", "text":"Before"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"between", "text":"Is Between"};

field_defs_Tasks[ "date_entered"].options=option_arr_Tasks;

field_defs_Tasks[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"=", "text":"Equals"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"greater_than", "text":"After"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"less_than", "text":"Before"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"between", "text":"Is Between"};

field_defs_Tasks[ "date_modified"].options=option_arr_Tasks;

field_defs_Tasks[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"datetimecombo","dbType":"datetime","group":"date_start","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"=", "text":"Equals"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"greater_than", "text":"After"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"less_than", "text":"Before"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"between", "text":"Is Between"};

field_defs_Tasks[ "date_start"].options=option_arr_Tasks;

field_defs_Tasks[ "date_start_flag"] = {"name":"date_start_flag","vname":"No Start Date","type":"bool","group":"date_start"};field_defs_Tasks[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Tasks[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Tasks[ "name"] = {"name":"name","vname":"Subject","dbType":"varchar","type":"name","len":"50","unified_search":true,"importable":"required","required":true};field_defs_Tasks[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","group":"parent_name","options":"parent_type_display","len":"255"};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"Accounts", "text":"Account"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Contacts", "text":"Contact"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Tasks", "text":"Task"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Opportunities", "text":"Opportunitie"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Products", "text":"Quoted Line Item"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Bugs", "text":"Bugs"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Cases", "text":"Case"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Leads", "text":"Lead"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Project", "text":"Projects"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"ProjectTask", "text":"Project Task"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Prospects", "text":"Target"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"KBContents", "text":"Knowledge Base"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Notes", "text":"Note"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"PurchasedLineItems", "text":"Purchased Line Item"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Purchases", "text":"Purchase"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};

field_defs_Tasks[ "parent_type"].options=option_arr_Tasks;

field_defs_Tasks[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"task_priority_dom","len":100,"required":true};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"High", "text":"High"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Medium", "text":"Medium"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Low", "text":"Low"};

field_defs_Tasks[ "priority"].options=option_arr_Tasks;

field_defs_Tasks[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"task_status_dom","len":100,"required":true,"duplicate_on_record_copy":"no"};var option_arr_Tasks = new Array();

option_arr_Tasks[option_arr_Tasks.length] = { "value":"Not Started", "text":"Not Started"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"In Progress", "text":"In Progress"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Completed", "text":"Completed"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Pending Input", "text":"Pending Input"};
option_arr_Tasks[option_arr_Tasks.length] = { "value":"Deferred", "text":"Deferred"};

field_defs_Tasks[ "status"].options=option_arr_Tasks;

field_defs_Tasks[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Tasks[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Tasks = [""];




module_defs['Tasks'] = new Object();
module_defs['Tasks'].link_defs = link_defs_Tasks;
module_defs['Tasks'].field_defs = field_defs_Tasks;
module_defs['Tasks'].default_table_columns = default_table_columns_Tasks;
module_defs['Tasks'].summary_field_defs = new Object();
module_defs['Tasks'].group_by_field_defs = new Object();
module_defs['Tasks'].default_summary_columns = default_summary_columns;
module_defs['Tasks'].label = "Tasks";

var rel_defs = new Object();
var link_defs_Users = new Object();
link_defs_Users[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"users_created_by","bean_is_lhs":true,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Users[ 'business_centers' ] = {"name":"business_centers","relationship_name":"business_center_users","bean_is_lhs":false,"link_type":"one","label":"Business Center Name","module":"BusinessCenters"};
link_defs_Users[ 'shifts' ] = {"name":"shifts","relationship_name":"shifts_users","bean_is_lhs":false,"link_type":"many","label":"Shifts","module":"Shifts"};
link_defs_Users[ 'shift_exceptions' ] = {"name":"shift_exceptions","relationship_name":"shift_exceptions_users","bean_is_lhs":false,"link_type":"many","label":"Shift Exceptions","module":"ShiftExceptions"};
link_defs_Users[ 'team_link' ] = {"name":"team_link","relationship_name":"users_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Users[ 'team_memberships' ] = {"name":"team_memberships","relationship_name":"team_memberships","bean_is_lhs":false,"link_type":"many","label":"Team Membership","module":"Teams"};
link_defs_Users[ 'team_sets' ] = {"name":"team_sets","relationship_name":"users_team_sets","bean_is_lhs":false,"link_type":"many","label":"Team Set","module":"Teams"};
link_defs_Users[ 'calls' ] = {"name":"calls","relationship_name":"calls_users","bean_is_lhs":false,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Users[ 'meetings' ] = {"name":"meetings","relationship_name":"meetings_users","bean_is_lhs":false,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Users[ 'reports_to_link' ] = {"name":"reports_to_link","relationship_name":"user_direct_reports","bean_is_lhs":false,"link_type":"one","label":"Reports to","module":"Users"};
link_defs_Users[ 'email_addresses_primary' ] = {"name":"email_addresses_primary","relationship_name":"users_email_addresses_primary","bean_is_lhs":true,"link_type":"many","label":"Email Address","module":"EmailAddresses"};
link_defs_Users[ 'aclroles' ] = {"name":"aclroles","relationship_name":"acl_roles_users","bean_is_lhs":false,"link_type":"many","label":"LBL_ROLES","module":"ACLRoles"};
link_defs_Users[ 'prospect_lists' ] = {"name":"prospect_lists","relationship_name":"prospect_list_users","bean_is_lhs":false,"link_type":"many","label":"Target List","module":"ProspectLists"};
link_defs_Users[ 'emails_users' ] = {"name":"emails_users","relationship_name":"emails_users_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Users[ 'holidays' ] = {"name":"holidays","relationship_name":"users_holidays","bean_is_lhs":true,"link_type":"many","label":"LBL_HOLIDAYS","module":"Holidays"};
link_defs_Users[ 'eapm' ] = {"name":"eapm","relationship_name":"eapm_assigned_user","bean_is_lhs":true,"link_type":"many","label":"Assigned to User","module":"EAPM"};
link_defs_Users[ 'oauth_tokens' ] = {"name":"oauth_tokens","relationship_name":"oauthtokens_assigned_user","bean_is_lhs":true,"link_type":"one","label":"OAuth Tokens","module":"OAuthTokens"};
link_defs_Users[ 'project_resource' ] = {"name":"project_resource","relationship_name":"projects_users_resources","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Users[ 'quotas' ] = {"name":"quotas","relationship_name":"users_quotas","bean_is_lhs":true,"link_type":"one","label":"Quotas","module":"Quotas"};
link_defs_Users[ 'forecasts' ] = {"name":"forecasts","relationship_name":"users_forecasts","bean_is_lhs":true,"link_type":"one","label":"Forecasts","module":"Forecasts"};
link_defs_Users[ 'reportschedules' ] = {"name":"reportschedules","relationship_name":"reportschedules_users","bean_is_lhs":false,"link_type":"many","label":"LBL_REPORTSCHEDULES","module":"ReportSchedules"};
link_defs_Users[ 'activities' ] = {"name":"activities","relationship_name":"activities_users","bean_is_lhs":false,"link_type":"many","label":"activities","module":"Activities"};
link_defs_Users[ 'acl_role_sets' ] = {"name":"acl_role_sets","relationship_name":"users_acl_role_sets","bean_is_lhs":false,"link_type":"one","label":"acl_role_sets","module":"ACLRoleSets"};
var field_defs_Users = new Object();
field_defs_Users[ "address_city"] = {"name":"address_city","vname":"Address City","type":"varchar","len":"100","group":"address","idm_mode_disabled":true};field_defs_Users[ "address_country"] = {"name":"address_country","vname":"Address Country","type":"varchar","len":100,"group":"address","idm_mode_disabled":true};field_defs_Users[ "address_postalcode"] = {"name":"address_postalcode","vname":"Address Postal Code","type":"varchar","len":"20","group":"address","idm_mode_disabled":true};field_defs_Users[ "address_state"] = {"name":"address_state","vname":"Address State","type":"varchar","len":"100","group":"address","idm_mode_disabled":true};field_defs_Users[ "address_street"] = {"name":"address_street","vname":"Address Street","type":"text","dbType":"varchar","len":"150","group":"address","group_label":"LBL_ADDRESS","idm_mode_disabled":true};field_defs_Users[ "cookie_consent"] = {"name":"cookie_consent","vname":"Cookie Consent","type":"bool","audited":true,"duplicate_on_record_copy":"no"};field_defs_Users[ "cookie_consent_received_on"] = {"name":"cookie_consent_received_on","vname":"Cookie Consent Received On","type":"datetime","audited":true,"enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no"};var option_arr_Users = new Array();

option_arr_Users[option_arr_Users.length] = { "value":"=", "text":"Equals"};
option_arr_Users[option_arr_Users.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Users[option_arr_Users.length] = { "value":"greater_than", "text":"After"};
option_arr_Users[option_arr_Users.length] = { "value":"less_than", "text":"Before"};
option_arr_Users[option_arr_Users.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Users[option_arr_Users.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Users[option_arr_Users.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Users[option_arr_Users.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Users[option_arr_Users.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Users[option_arr_Users.length] = { "value":"this_month", "text":"This Month"};
option_arr_Users[option_arr_Users.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Users[option_arr_Users.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Users[option_arr_Users.length] = { "value":"this_year", "text":"This Year"};
option_arr_Users[option_arr_Users.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Users[option_arr_Users.length] = { "value":"between", "text":"Is Between"};

field_defs_Users[ "cookie_consent_received_on"].options=option_arr_Users;

field_defs_Users[ "date_entered"] = {"name":"date_entered","vname":"Date Entered","type":"datetime","required":true,"readonly":true};field_defs_Users[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","required":true,"readonly":true};field_defs_Users[ "department"] = {"name":"department","vname":"Department","type":"varchar","len":"50","idm_mode_disabled":true};field_defs_Users[ "description"] = {"name":"description","vname":"Description","type":"text"};field_defs_Users[ "employee_status"] = {"name":"employee_status","vname":"Employee Status","type":"enum","options":"employee_status_dom","len":100};var option_arr_Users = new Array();

option_arr_Users[option_arr_Users.length] = { "value":"Active", "text":"Active"};
option_arr_Users[option_arr_Users.length] = { "value":"Terminated", "text":"Terminated"};
option_arr_Users[option_arr_Users.length] = { "value":"Leave of Absence", "text":"Leave of Absence"};

field_defs_Users[ "employee_status"].options=option_arr_Users;

field_defs_Users[ "first_name"] = {"name":"first_name","vname":"First Name","dbType":"varchar","type":"name","len":"30","idm_mode_disabled":true};field_defs_Users[ "full_name"] = {"name":"full_name","vname":"Full Name","type":"fullname","source":"non-db","sort_on":"last_name","sort_on2":"first_name","len":"510","idm_mode_disabled":true};field_defs_Users[ "id"] = {"name":"id","vname":"ID","type":"id","required":true};field_defs_Users[ "is_admin"] = {"name":"is_admin","vname":"Is Administrator","type":"bool","idm_mode_disabled":true};field_defs_Users[ "is_group"] = {"name":"is_group","vname":"Group User","type":"bool"};field_defs_Users[ "last_login"] = {"name":"last_login","vname":"last login","type":"datetime","readonly":true};field_defs_Users[ "last_name"] = {"name":"last_name","vname":"Last Name","dbType":"varchar","type":"name","len":"30","importable":"required","required":true,"idm_mode_disabled":true};field_defs_Users[ "messenger_id"] = {"name":"messenger_id","vname":"IM Name","type":"varchar","len":100};field_defs_Users[ "messenger_type"] = {"name":"messenger_type","vname":"IM Type","type":"enum","options":"messenger_type_dom","len":100};var option_arr_Users = new Array();

option_arr_Users[option_arr_Users.length] = { "value":"", "text":""};
option_arr_Users[option_arr_Users.length] = { "value":"MSN", "text":"MSN"};
option_arr_Users[option_arr_Users.length] = { "value":"Yahoo!", "text":"Yahoo!"};
option_arr_Users[option_arr_Users.length] = { "value":"AOL", "text":"AOL"};

field_defs_Users[ "messenger_type"].options=option_arr_Users;

field_defs_Users[ "phone_fax"] = {"name":"phone_fax","vname":"Fax","type":"phone","dbType":"varchar","len":"50"};field_defs_Users[ "phone_home"] = {"name":"phone_home","vname":"Home Phone","type":"phone","dbType":"varchar","len":"50"};field_defs_Users[ "phone_mobile"] = {"name":"phone_mobile","vname":"Mobile","type":"phone","dbType":"varchar","len":"50"};field_defs_Users[ "phone_other"] = {"name":"phone_other","vname":"Other Phone","type":"phone","dbType":"varchar","len":"50"};field_defs_Users[ "phone_work"] = {"name":"phone_work","vname":"Work Phone","type":"phone","dbType":"varchar","len":"50","idm_mode_disabled":true};field_defs_Users[ "picture"] = {"name":"picture","vname":"Avatar","type":"image","dbType":"varchar","len":"255","width":"42","height":"42"};field_defs_Users[ "portal_only"] = {"name":"portal_only","vname":"Portal API User","type":"bool"};field_defs_Users[ "preferred_language"] = {"name":"preferred_language","type":"enum","vname":"Language Preference","options":"available_language_dom"};var option_arr_Users = new Array();

option_arr_Users[option_arr_Users.length] = { "value":"en_us", "text":"English (US)"};
option_arr_Users[option_arr_Users.length] = { "value":"bg_BG", "text":"??????????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"cs_CZ", "text":"??esky"};
option_arr_Users[option_arr_Users.length] = { "value":"da_DK", "text":"Dansk"};
option_arr_Users[option_arr_Users.length] = { "value":"de_DE", "text":"Deutsch"};
option_arr_Users[option_arr_Users.length] = { "value":"el_EL", "text":"????????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"es_ES", "text":"Espa??ol"};
option_arr_Users[option_arr_Users.length] = { "value":"fr_FR", "text":"Fran??ais"};
option_arr_Users[option_arr_Users.length] = { "value":"he_IL", "text":"??????????"};
option_arr_Users[option_arr_Users.length] = { "value":"hu_HU", "text":"Magyar"};
option_arr_Users[option_arr_Users.length] = { "value":"hr_HR", "text":"Hrvatski"};
option_arr_Users[option_arr_Users.length] = { "value":"it_it", "text":"Italiano"};
option_arr_Users[option_arr_Users.length] = { "value":"lt_LT", "text":"Lietuvi??"};
option_arr_Users[option_arr_Users.length] = { "value":"ja_JP", "text":"?????????"};
option_arr_Users[option_arr_Users.length] = { "value":"ko_KR", "text":"?????????"};
option_arr_Users[option_arr_Users.length] = { "value":"lv_LV", "text":"Latvie??u"};
option_arr_Users[option_arr_Users.length] = { "value":"nb_NO", "text":"Norsk"};
option_arr_Users[option_arr_Users.length] = { "value":"nl_NL", "text":"Nederlands"};
option_arr_Users[option_arr_Users.length] = { "value":"pl_PL", "text":"Polski"};
option_arr_Users[option_arr_Users.length] = { "value":"pt_PT", "text":"Portugu??s"};
option_arr_Users[option_arr_Users.length] = { "value":"ro_RO", "text":"Rom??n??"};
option_arr_Users[option_arr_Users.length] = { "value":"ru_RU", "text":"??????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"sv_SE", "text":"Svenska"};
option_arr_Users[option_arr_Users.length] = { "value":"th_TH", "text":"?????????"};
option_arr_Users[option_arr_Users.length] = { "value":"tr_TR", "text":"T??rk??e"};
option_arr_Users[option_arr_Users.length] = { "value":"zh_TW", "text":"????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"zh_CN", "text":"????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"pt_BR", "text":"Portugu??s Brasileiro"};
option_arr_Users[option_arr_Users.length] = { "value":"ca_ES", "text":"Catal??"};
option_arr_Users[option_arr_Users.length] = { "value":"en_UK", "text":"English (UK)"};
option_arr_Users[option_arr_Users.length] = { "value":"sr_RS", "text":"????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"sk_SK", "text":"Sloven??ina"};
option_arr_Users[option_arr_Users.length] = { "value":"sq_AL", "text":"Shqip"};
option_arr_Users[option_arr_Users.length] = { "value":"et_EE", "text":"Eesti"};
option_arr_Users[option_arr_Users.length] = { "value":"es_LA", "text":"Espa??ol (Latinoam??rica)"};
option_arr_Users[option_arr_Users.length] = { "value":"fi_FI", "text":"Suomi"};
option_arr_Users[option_arr_Users.length] = { "value":"ar_SA", "text":"??????????????"};
option_arr_Users[option_arr_Users.length] = { "value":"uk_UA", "text":"????????????????????"};

field_defs_Users[ "preferred_language"].options=option_arr_Users;

field_defs_Users[ "pwd_last_changed"] = {"name":"pwd_last_changed","vname":"Password Last Changed","type":"datetime","idm_mode_disabled":true};field_defs_Users[ "receive_notifications"] = {"name":"receive_notifications","vname":"Email on Assignment","type":"bool"};field_defs_Users[ "reports_to_id"] = {"name":"reports_to_id","vname":"Reports to ID","type":"id"};field_defs_Users[ "send_email_on_mention"] = {"name":"send_email_on_mention","vname":"Email on Mention","type":"bool"};field_defs_Users[ "show_on_employees"] = {"name":"show_on_employees","vname":"Display Employee Record","type":"bool","massupdate":true,"importable":true};field_defs_Users[ "status"] = {"name":"status","vname":"Status","type":"enum","len":100,"options":"user_status_dom","importable":"required","required":true,"idm_mode_disabled":true};var option_arr_Users = new Array();

option_arr_Users[option_arr_Users.length] = { "value":"Active", "text":"Active"};
option_arr_Users[option_arr_Users.length] = { "value":"Inactive", "text":"Inactive"};

field_defs_Users[ "status"].options=option_arr_Users;

field_defs_Users[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"LBL_SYNC_KEY","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Users[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false",invisible:true};field_defs_Users[ "title"] = {"name":"title","vname":"Title","type":"varchar","len":"50","idm_mode_disabled":true};field_defs_Users[ "user_name"] = {"name":"user_name","vname":"User Name","type":"username","dbType":"varchar","len":"60","importable":"required","required":true,"idm_mode_disabled":true};var default_table_columns_Users = [""];




module_defs['Users'] = new Object();
module_defs['Users'].link_defs = link_defs_Users;
module_defs['Users'].field_defs = field_defs_Users;
module_defs['Users'].default_table_columns = default_table_columns_Users;
module_defs['Users'].summary_field_defs = new Object();
module_defs['Users'].group_by_field_defs = new Object();
module_defs['Users'].default_summary_columns = default_summary_columns;
module_defs['Users'].label = "Users";

var rel_defs = new Object();
var link_defs_Trackers = new Object();
link_defs_Trackers[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"tracker_user_id","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Trackers[ 'monitor_id_link' ] = {"name":"monitor_id_link","relationship_name":"tracker_monitor_id","bean_is_lhs":false,"link_type":"one","label":"Monitor Id","module":"TrackerPerfs"};
var field_defs_Trackers = new Object();
field_defs_Trackers[ "action"] = {"name":"action","vname":"Action","type":"varchar","len":"255","isnull":"false"};field_defs_Trackers[ "date_modified"] = {"name":"date_modified","vname":"Date of Last Action","type":"datetime","isnull":"false"};field_defs_Trackers[ "id"] = {"name":"id","vname":"ID","type":"int","len":"11","isnull":"false","auto_increment":true,"readonly":true,"reportable":true};field_defs_Trackers[ "item_id"] = {"name":"item_id","vname":"Item Id","type":"id","isnull":"false"};field_defs_Trackers[ "item_summary"] = {"name":"item_summary","vname":"Item Summary","type":"varchar","len":"255","isnull":"false"};field_defs_Trackers[ "module_name"] = {"name":"module_name","vname":"Trackers","type":"varchar","len":"255","isnull":"false"};field_defs_Trackers[ "session_id"] = {"name":"session_id","vname":"Session Id","type":"id","isnull":"true"};field_defs_Trackers[ "team_id"] = {"name":"team_id","vname":"Team ID","type":"id"};field_defs_Trackers[ "user_id"] = {"name":"user_id","vname":"User Id","type":"id","isnull":"false"};field_defs_Trackers[ "visible"] = {"name":"visible","vname":"Record Visible","type":"bool","len":"1"};var default_table_columns_Trackers = [""];




module_defs['Trackers'] = new Object();
module_defs['Trackers'].link_defs = link_defs_Trackers;
module_defs['Trackers'].field_defs = field_defs_Trackers;
module_defs['Trackers'].default_table_columns = default_table_columns_Trackers;
module_defs['Trackers'].summary_field_defs = new Object();
module_defs['Trackers'].group_by_field_defs = new Object();
module_defs['Trackers'].default_summary_columns = default_summary_columns;
module_defs['Trackers'].label = "Trackers";

var rel_defs = new Object();
var link_defs_TrackerSessions = new Object();
link_defs_TrackerSessions[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"tracker_user_id","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
var field_defs_TrackerSessions = new Object();
field_defs_TrackerSessions[ "active"] = {"name":"active","vname":"Session Active","type":"bool"};field_defs_TrackerSessions[ "client_ip"] = {"name":"client_ip","vname":"Client IP Address","type":"varchar","len":"45","isnull":"false"};field_defs_TrackerSessions[ "date_end"] = {"name":"date_end","vname":"Date of Last Action","type":"datetime","isnull":"false"};field_defs_TrackerSessions[ "date_start"] = {"name":"date_start","vname":"Date Start","type":"datetime","isnull":"false"};field_defs_TrackerSessions[ "id"] = {"name":"id","vname":"ID","type":"int","len":"11","reportable":true,"isnull":"false","auto_increment":true};field_defs_TrackerSessions[ "seconds"] = {"name":"seconds","vname":"Seconds Active","type":"int","len":"9","isnull":"false"};field_defs_TrackerSessions[ "session_id"] = {"name":"session_id","vname":"Session Id","type":"id","isnull":"false"};field_defs_TrackerSessions[ "user_id"] = {"name":"user_id","vname":"User Id","type":"id","isnull":"false"};var default_table_columns_TrackerSessions = [""];




module_defs['TrackerSessions'] = new Object();
module_defs['TrackerSessions'].link_defs = link_defs_TrackerSessions;
module_defs['TrackerSessions'].field_defs = field_defs_TrackerSessions;
module_defs['TrackerSessions'].default_table_columns = default_table_columns_TrackerSessions;
module_defs['TrackerSessions'].summary_field_defs = new Object();
module_defs['TrackerSessions'].group_by_field_defs = new Object();
module_defs['TrackerSessions'].default_summary_columns = default_summary_columns;
module_defs['TrackerSessions'].label = "Tracker Sessions";

var rel_defs = new Object();
var link_defs_TrackerPerfs = new Object();
var field_defs_TrackerPerfs = new Object();
field_defs_TrackerPerfs[ "date_modified"] = {"name":"date_modified","vname":"Date of Last Action","type":"datetime","isnull":"false"};field_defs_TrackerPerfs[ "db_round_trips"] = {"name":"db_round_trips","vname":"Database Roundtrips","type":"int","len":"6","isnull":"false"};field_defs_TrackerPerfs[ "files_opened"] = {"name":"files_opened","vname":"Files Accessed","type":"int","len":"6","isnull":"false"};field_defs_TrackerPerfs[ "id"] = {"name":"id","vname":"ID","type":"int","len":"11","isnull":"false","auto_increment":true,"reportable":true};field_defs_TrackerPerfs[ "memory_usage"] = {"name":"memory_usage","vname":"Memory Usage (bytes)","type":"int","len":"11","isnull":"true"};field_defs_TrackerPerfs[ "server_response_time"] = {"name":"server_response_time","vname":"Server response time","type":"float","dbType":"double","isnull":"false"};var default_table_columns_TrackerPerfs = [""];




module_defs['TrackerPerfs'] = new Object();
module_defs['TrackerPerfs'].link_defs = link_defs_TrackerPerfs;
module_defs['TrackerPerfs'].field_defs = field_defs_TrackerPerfs;
module_defs['TrackerPerfs'].default_table_columns = default_table_columns_TrackerPerfs;
module_defs['TrackerPerfs'].summary_field_defs = new Object();
module_defs['TrackerPerfs'].group_by_field_defs = new Object();
module_defs['TrackerPerfs'].default_summary_columns = default_summary_columns;
module_defs['TrackerPerfs'].label = "Tracker Performance";

var rel_defs = new Object();
var link_defs_TrackerQueries = new Object();
var field_defs_TrackerQueries = new Object();
field_defs_TrackerQueries[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","isnull":"false"};field_defs_TrackerQueries[ "id"] = {"name":"id","vname":"ID","type":"int","len":"11","reportable":true,"isnull":"false","auto_increment":true};field_defs_TrackerQueries[ "run_count"] = {"name":"run_count","vname":"Query Count","type":"int","len":"6","isnull":"false"};field_defs_TrackerQueries[ "sec_avg"] = {"name":"sec_avg","vname":"Average Seconds","type":"float","dbType":"double","isnull":"false"};field_defs_TrackerQueries[ "sec_total"] = {"name":"sec_total","vname":"Total Seconds","type":"float","dbType":"double","isnull":"false"};field_defs_TrackerQueries[ "text"] = {"name":"text","vname":"SQL Text","type":"text","isnull":"false"};var default_table_columns_TrackerQueries = [""];




module_defs['TrackerQueries'] = new Object();
module_defs['TrackerQueries'].link_defs = link_defs_TrackerQueries;
module_defs['TrackerQueries'].field_defs = field_defs_TrackerQueries;
module_defs['TrackerQueries'].default_table_columns = default_table_columns_TrackerQueries;
module_defs['TrackerQueries'].summary_field_defs = new Object();
module_defs['TrackerQueries'].group_by_field_defs = new Object();
module_defs['TrackerQueries'].default_summary_columns = default_summary_columns;
module_defs['TrackerQueries'].label = "Tracker Queries";

var rel_defs = new Object();
var link_defs_Documents = new Object();
link_defs_Documents[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"documents_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Documents[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"documents_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by","module":"Users"};
link_defs_Documents[ 'activities' ] = {"name":"activities","relationship_name":"document_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Documents[ 'revisions' ] = {"name":"revisions","relationship_name":"document_revisions","bean_is_lhs":true,"link_type":"many","label":"Revisions","module":"DocumentRevisions"};
link_defs_Documents[ 'latest_document_revision_link' ] = {"name":"latest_document_revision_link","relationship_name":"latest_document_revision","bean_is_lhs":true,"link_type":"one","label":"Latest Revision","module":"DocumentRevisions"};
link_defs_Documents[ 'contracts' ] = {"name":"contracts","relationship_name":"contracts_documents","bean_is_lhs":false,"link_type":"many","label":"Contracts","module":"Contracts"};
link_defs_Documents[ 'contracttypes' ] = {"name":"contracttypes","relationship_name":"contracttype_documents","bean_is_lhs":false,"link_type":"many","label":"LBL_CONTRACTTYPES","module":"ContractTypes"};
link_defs_Documents[ 'accounts' ] = {"name":"accounts","relationship_name":"documents_accounts","bean_is_lhs":true,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Documents[ 'contacts' ] = {"name":"contacts","relationship_name":"documents_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Documents[ 'opportunities' ] = {"name":"opportunities","relationship_name":"documents_opportunities","bean_is_lhs":true,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Documents[ 'cases' ] = {"name":"cases","relationship_name":"documents_cases","bean_is_lhs":true,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Documents[ 'bugs' ] = {"name":"bugs","relationship_name":"documents_bugs","bean_is_lhs":true,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Documents[ 'quotes' ] = {"name":"quotes","relationship_name":"documents_quotes","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Documents[ 'products' ] = {"name":"products","relationship_name":"documents_products","bean_is_lhs":true,"link_type":"many","label":"Quoted Line Items","module":"Products"};
link_defs_Documents[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"documents_revenuelineitems","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Documents[ 'purchases' ] = {"name":"purchases","relationship_name":"documents_purchases","bean_is_lhs":true,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Documents[ 'purchasedlineitems' ] = {"name":"purchasedlineitems","relationship_name":"documents_purchasedlineitems","bean_is_lhs":true,"link_type":"many","label":"Purchased Line Items","module":"PurchasedLineItems"};
link_defs_Documents[ 'related_docs' ] = {"name":"related_docs","relationship_name":"related_documents","bean_is_lhs":true,"link_type":"many","label":"Related Document","module":"Documents"};
link_defs_Documents[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"documents_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Documents[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"documents_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Documents[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"documents_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Documents[ 'team_link' ] = {"name":"team_link","relationship_name":"documents_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Documents = new Object();
field_defs_Documents[ "active_date"] = {"name":"active_date","vname":"Publish Date","type":"date","importable":"required","required":true,"display_default":"now"};field_defs_Documents[ "category_id"] = {"name":"category_id","vname":"Category","type":"enum","len":100,"options":"document_category_dom","reportable":true};var option_arr_Documents = new Array();

option_arr_Documents[option_arr_Documents.length] = { "value":"", "text":""};
option_arr_Documents[option_arr_Documents.length] = { "value":"Marketing", "text":"Marketing"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Knowledege Base", "text":"Knowledge Base"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Sales", "text":"Sales"};

field_defs_Documents[ "category_id"].options=option_arr_Documents;

field_defs_Documents[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Documents = new Array();

option_arr_Documents[option_arr_Documents.length] = { "value":"=", "text":"Equals"};
option_arr_Documents[option_arr_Documents.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Documents[option_arr_Documents.length] = { "value":"greater_than", "text":"After"};
option_arr_Documents[option_arr_Documents.length] = { "value":"less_than", "text":"Before"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"this_month", "text":"This Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"this_year", "text":"This Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"between", "text":"Is Between"};

field_defs_Documents[ "date_entered"].options=option_arr_Documents;

field_defs_Documents[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Documents = new Array();

option_arr_Documents[option_arr_Documents.length] = { "value":"=", "text":"Equals"};
option_arr_Documents[option_arr_Documents.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Documents[option_arr_Documents.length] = { "value":"greater_than", "text":"After"};
option_arr_Documents[option_arr_Documents.length] = { "value":"less_than", "text":"Before"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"this_month", "text":"This Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Documents[option_arr_Documents.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"this_year", "text":"This Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Documents[option_arr_Documents.length] = { "value":"between", "text":"Is Between"};

field_defs_Documents[ "date_modified"].options=option_arr_Documents;

field_defs_Documents[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Documents[ "doc_id"] = {"name":"doc_id","vname":"Document Source ID","type":"varchar","len":"100","studio":"false"};field_defs_Documents[ "doc_type"] = {"name":"doc_type","vname":"Source","type":"enum","function":"getDocumentsExternalApiDropDown","len":"100","popupHelp":"LBL_DOC_TYPE_POPUP","options":"eapm_list"};var option_arr_Documents = new Array();

option_arr_Documents[option_arr_Documents.length] = { "value":"Sugar", "text":"Sugar"};
option_arr_Documents[option_arr_Documents.length] = { "value":"WebEx", "text":"WebEx"};
option_arr_Documents[option_arr_Documents.length] = { "value":"GoToMeeting", "text":"GoToMeeting"};
option_arr_Documents[option_arr_Documents.length] = { "value":"IBMSmartCloud", "text":"IBM SmartCloud"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Google", "text":"Google"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Box", "text":"Box.net"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Facebook", "text":"Facebook"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Twitter", "text":"Twitter"};

field_defs_Documents[ "doc_type"].options=option_arr_Documents;

field_defs_Documents[ "doc_url"] = {"name":"doc_url","vname":"Document Source URL","type":"varchar","len":"255","studio":"false"};field_defs_Documents[ "document_name"] = {"name":"document_name","vname":"Document Name","type":"varchar","len":"255","required":true,"importable":"required","unified_search":true};field_defs_Documents[ "exp_date"] = {"name":"exp_date","vname":"Expiration Date","type":"date"};field_defs_Documents[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Documents[ "subcategory_id"] = {"name":"subcategory_id","vname":"Sub Category","type":"enum","len":100,"options":"document_subcategory_dom","reportable":true};var option_arr_Documents = new Array();

option_arr_Documents[option_arr_Documents.length] = { "value":"", "text":""};
option_arr_Documents[option_arr_Documents.length] = { "value":"Marketing Collateral", "text":"Marketing Collateral"};
option_arr_Documents[option_arr_Documents.length] = { "value":"Product Brochures", "text":"Product Brochures"};
option_arr_Documents[option_arr_Documents.length] = { "value":"FAQ", "text":"FAQ"};

field_defs_Documents[ "subcategory_id"].options=option_arr_Documents;

field_defs_Documents[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Documents[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Documents = [""];




module_defs['Documents'] = new Object();
module_defs['Documents'].link_defs = link_defs_Documents;
module_defs['Documents'].field_defs = field_defs_Documents;
module_defs['Documents'].default_table_columns = default_table_columns_Documents;
module_defs['Documents'].summary_field_defs = new Object();
module_defs['Documents'].group_by_field_defs = new Object();
module_defs['Documents'].default_summary_columns = default_summary_columns;
module_defs['Documents'].label = "Documents";

var rel_defs = new Object();
var link_defs_DocumentRevisions = new Object();
link_defs_DocumentRevisions[ 'documents' ] = {"name":"documents","relationship_name":"document_revisions","bean_is_lhs":false,"link_type":"one","label":"Revisions","module":"Documents"};
link_defs_DocumentRevisions[ 'latest_document_revision_link' ] = {"name":"latest_document_revision_link","relationship_name":"latest_document_revision","bean_is_lhs":false,"link_type":"one","label":"Latest Revision","module":"Documents"};
link_defs_DocumentRevisions[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"revisions_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
var field_defs_DocumentRevisions = new Object();
field_defs_DocumentRevisions[ "change_log"] = {"name":"change_log","vname":"Change Log","type":"varchar","len":"255"};field_defs_DocumentRevisions[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime"};field_defs_DocumentRevisions[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime"};field_defs_DocumentRevisions[ "doc_id"] = {"name":"doc_id","vname":"Document Source ID","type":"varchar","len":"100","studio":"false"};field_defs_DocumentRevisions[ "doc_type"] = {"name":"doc_type","vname":"Source","type":"enum","function":"getDocumentsExternalApiDropDown","len":"100"};                    var option_arr_DocumentRevisions = new Array();

option_arr_DocumentRevisions[option_arr_DocumentRevisions.length] = { "value":"Sugar", "text":"Sugar"};
field_defs_DocumentRevisions[ "doc_type"].options=option_arr_DocumentRevisions;
field_defs_DocumentRevisions[ "doc_url"] = {"name":"doc_url","vname":"Document Source URL","type":"varchar","len":"255","studio":"false"};field_defs_DocumentRevisions[ "file_ext"] = {"name":"file_ext","vname":"File Extension","type":"varchar","len":100};field_defs_DocumentRevisions[ "file_mime_type"] = {"name":"file_mime_type","vname":"Mime Type","type":"varchar","len":"100"};field_defs_DocumentRevisions[ "file_size"] = {"name":"file_size","vname":"File Size","type":"int"};field_defs_DocumentRevisions[ "filename"] = {"name":"filename","vname":"File","type":"file","dbType":"varchar","required":true,"len":"255","allowEapm":true,"linkModuleOverride":"Documents"};field_defs_DocumentRevisions[ "revision"] = {"name":"revision","vname":"Revision","type":"varchar","len":100,"importable":"required"};var default_table_columns_DocumentRevisions = [""];




module_defs['DocumentRevisions'] = new Object();
module_defs['DocumentRevisions'].link_defs = link_defs_DocumentRevisions;
module_defs['DocumentRevisions'].field_defs = field_defs_DocumentRevisions;
module_defs['DocumentRevisions'].default_table_columns = default_table_columns_DocumentRevisions;
module_defs['DocumentRevisions'].summary_field_defs = new Object();
module_defs['DocumentRevisions'].group_by_field_defs = new Object();
module_defs['DocumentRevisions'].default_summary_columns = default_summary_columns;
module_defs['DocumentRevisions'].label = "Document Revisions";

var rel_defs = new Object();
var link_defs_EmailAddresses = new Object();
var field_defs_EmailAddresses = new Object();
field_defs_EmailAddresses[ "confirmation_requested_on"] = {"name":"confirmation_requested_on","type":"datetime","vname":"Confirmation Request Action Taken","audited":true};field_defs_EmailAddresses[ "date_created"] = {"name":"date_created","type":"datetime","vname":"Date Create"};field_defs_EmailAddresses[ "date_modified"] = {"name":"date_modified","type":"datetime","vname":"Date Modified"};field_defs_EmailAddresses[ "deleted"] = {"name":"deleted","type":"bool","vname":"Delete"};field_defs_EmailAddresses[ "email_address"] = {"name":"email_address","type":"varchar","vname":"Email Address","length":100,"required":true,"audited":true,"pii":true};field_defs_EmailAddresses[ "id"] = {"name":"id","type":"id","vname":"ID","required":true};field_defs_EmailAddresses[ "invalid_email"] = {"name":"invalid_email","type":"bool","vname":"Invalid Email","audited":true};field_defs_EmailAddresses[ "opt_out"] = {"name":"opt_out","type":"bool","vname":"Opted Out","audited":true};var default_table_columns_EmailAddresses = [""];




module_defs['EmailAddresses'] = new Object();
module_defs['EmailAddresses'].link_defs = link_defs_EmailAddresses;
module_defs['EmailAddresses'].field_defs = field_defs_EmailAddresses;
module_defs['EmailAddresses'].default_table_columns = default_table_columns_EmailAddresses;
module_defs['EmailAddresses'].summary_field_defs = new Object();
module_defs['EmailAddresses'].group_by_field_defs = new Object();
module_defs['EmailAddresses'].default_summary_columns = default_summary_columns;
module_defs['EmailAddresses'].label = "Email Address";

var rel_defs = new Object();
var link_defs_Teams = new Object();
link_defs_Teams[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"teams_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Teams[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"teams_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Teams[ 'activities' ] = {"name":"activities","relationship_name":"team_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Teams[ 'users' ] = {"name":"users","relationship_name":"team_memberships","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_Teams[ 'teams_sets' ] = {"name":"teams_sets","relationship_name":"team_sets_teams","bean_is_lhs":false,"link_type":"many","label":"Teams","module":"TeamSets"};
link_defs_Teams[ 'activities_teams' ] = {"name":"activities_teams","relationship_name":"activities_teams","bean_is_lhs":false,"link_type":"many","label":"activities_teams","module":"Activities"};
link_defs_Teams[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"teams_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Teams[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"teams_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
var field_defs_Teams = new Object();
field_defs_Teams[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Teams = new Array();

option_arr_Teams[option_arr_Teams.length] = { "value":"=", "text":"Equals"};
option_arr_Teams[option_arr_Teams.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Teams[option_arr_Teams.length] = { "value":"greater_than", "text":"After"};
option_arr_Teams[option_arr_Teams.length] = { "value":"less_than", "text":"Before"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"this_month", "text":"This Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"this_year", "text":"This Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"between", "text":"Is Between"};

field_defs_Teams[ "date_entered"].options=option_arr_Teams;

field_defs_Teams[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Teams = new Array();

option_arr_Teams[option_arr_Teams.length] = { "value":"=", "text":"Equals"};
option_arr_Teams[option_arr_Teams.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Teams[option_arr_Teams.length] = { "value":"greater_than", "text":"After"};
option_arr_Teams[option_arr_Teams.length] = { "value":"less_than", "text":"Before"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"this_month", "text":"This Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Teams[option_arr_Teams.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"this_year", "text":"This Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Teams[option_arr_Teams.length] = { "value":"between", "text":"Is Between"};

field_defs_Teams[ "date_modified"].options=option_arr_Teams;

field_defs_Teams[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Teams[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Teams[ "name"] = {"name":"name","vname":"Primary Team Name","type":"name","dbType":"varchar","len":128};field_defs_Teams[ "private"] = {"name":"private","vname":"Private","type":"bool"};field_defs_Teams[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};var default_table_columns_Teams = [""];




module_defs['Teams'] = new Object();
module_defs['Teams'].link_defs = link_defs_Teams;
module_defs['Teams'].field_defs = field_defs_Teams;
module_defs['Teams'].default_table_columns = default_table_columns_Teams;
module_defs['Teams'].summary_field_defs = new Object();
module_defs['Teams'].group_by_field_defs = new Object();
module_defs['Teams'].default_summary_columns = default_summary_columns;
module_defs['Teams'].label = "Teams";

var rel_defs = new Object();
var link_defs_Quotes = new Object();
link_defs_Quotes[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"quotes_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Quotes[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"quotes_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Quotes[ 'activities' ] = {"name":"activities","relationship_name":"quote_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Quotes[ 'shippers' ] = {"name":"shippers","relationship_name":"shipper_quotes","bean_is_lhs":false,"link_type":"one","label":"Shipping Provider","module":"Shippers"};
link_defs_Quotes[ 'taxrates' ] = {"name":"taxrates","relationship_name":"taxrate_quotes","bean_is_lhs":false,"link_type":"one","label":"Tax Rate","module":"TaxRates"};
link_defs_Quotes[ 'tasks' ] = {"name":"tasks","relationship_name":"quote_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Quotes[ 'notes' ] = {"name":"notes","relationship_name":"quote_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Quotes[ 'messages' ] = {"name":"messages","relationship_name":"quote_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Quotes[ 'meetings' ] = {"name":"meetings","relationship_name":"quote_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Quotes[ 'calls' ] = {"name":"calls","relationship_name":"quote_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Quotes[ 'emails' ] = {"name":"emails","relationship_name":"emails_quotes","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Quotes[ 'project' ] = {"name":"project","relationship_name":"projects_quotes","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Quotes[ 'products' ] = {"name":"products","relationship_name":"quote_products","bean_is_lhs":true,"link_type":"many","label":"Products","module":"Products"};
link_defs_Quotes[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"quote_revenuelineitems","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Quotes[ 'shipping_accounts' ] = {"name":"shipping_accounts","relationship_name":"quotes_shipto_accounts","bean_is_lhs":false,"link_type":"one","label":"Shipping Account Name","module":"Accounts"};
link_defs_Quotes[ 'billing_accounts' ] = {"name":"billing_accounts","relationship_name":"quotes_billto_accounts","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Quotes[ 'shipping_contacts' ] = {"name":"shipping_contacts","relationship_name":"quotes_contacts_shipto","bean_is_lhs":false,"link_type":"one","label":"Ship to Contact","module":"Contacts"};
link_defs_Quotes[ 'billing_contacts' ] = {"name":"billing_contacts","relationship_name":"quotes_contacts_billto","bean_is_lhs":false,"link_type":"one","label":"Bill to Contact","module":"Contacts"};
link_defs_Quotes[ 'product_bundles' ] = {"name":"product_bundles","relationship_name":"product_bundle_quote","bean_is_lhs":true,"link_type":"many","label":"Product Bundles","module":"ProductBundles"};
link_defs_Quotes[ 'opportunities' ] = {"name":"opportunities","relationship_name":"quotes_opportunities","bean_is_lhs":false,"link_type":"one","label":"Opportunitie Name","module":"Opportunities"};
link_defs_Quotes[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"quotes_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Quotes[ 'documents' ] = {"name":"documents","relationship_name":"documents_quotes","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Quotes[ 'contracts' ] = {"name":"contracts","relationship_name":"contracts_quotes","bean_is_lhs":false,"link_type":"one","label":"Contracts","module":"Contracts"};
link_defs_Quotes[ 'tag_link' ] = {"name":"tag_link","relationship_name":"quotes_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Quotes[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"quotes_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Quotes[ 'team_link' ] = {"name":"team_link","relationship_name":"quotes_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Quotes[ 'currencies' ] = {"name":"currencies","relationship_name":"quotes_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Quotes = new Object();
field_defs_Quotes[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Quotes[ "billing_address_city"] = {"name":"billing_address_city","vname":"Billing City","type":"varchar","group":"billing_address","len":"100"};field_defs_Quotes[ "billing_address_country"] = {"name":"billing_address_country","vname":"Billing Country","type":"varchar","group":"billing_address","len":"100"};field_defs_Quotes[ "billing_address_postalcode"] = {"name":"billing_address_postalcode","vname":"Billing Postal Code","type":"varchar","group":"billing_address","len":"20"};field_defs_Quotes[ "billing_address_state"] = {"name":"billing_address_state","vname":"Billing State","type":"varchar","group":"billing_address","len":"100"};field_defs_Quotes[ "billing_address_street"] = {"name":"billing_address_street","vname":"Billing Street","type":"text","dbType":"varchar","group":"billing_address","group_label":"LBL_BILLING_ADDRESS","len":"150","rows":2,"cols":20};field_defs_Quotes[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "date_entered"].options=option_arr_Quotes;

field_defs_Quotes[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "date_modified"].options=option_arr_Quotes;

field_defs_Quotes[ "date_quote_expected_closed"] = {"name":"date_quote_expected_closed","vname":"Valid Until","type":"date","audited":true,"reportable":true,"importable":"required","required":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "date_quote_expected_closed"].options=option_arr_Quotes;

field_defs_Quotes[ "deal_tot"] = {"name":"deal_tot","vname":"Discount Total","dbType":"decimal","type":"currency","len":"26,2","calculated":true,"enforced":true};field_defs_Quotes[ "deal_tot_discount_percentage"] = {"name":"deal_tot_discount_percentage","vname":"Discount Total Percentage","dbType":"decimal","type":"float","len":"26,2","calculated":true,"enforced":true};field_defs_Quotes[ "deal_tot_usdollar"] = {"name":"deal_tot_usdollar","vname":"Discount Total (US Dollar)","dbType":"decimal","type":"currency","currency_id":"-99","is_base_currency":true,"len":"26,2","calculated":true,"enforced":true};field_defs_Quotes[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Quotes[ "discount"] = {"name":"discount","vname":"Discount","dbType":"decimal","type":"currency","len":"26,6"};field_defs_Quotes[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Quotes[ "name"] = {"name":"name","vname":"Quote Subject","dbType":"varchar","type":"name","len":"255","unified_search":true,"importable":"required","required":true};field_defs_Quotes[ "new_sub"] = {"name":"new_sub","vname":"Discounted Subtotal","dbType":"decimal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "new_sub_usdollar"] = {"name":"new_sub_usdollar","vname":"Discounted Subtotal (US Dollar)","dbType":"decimal","type":"currency","currency_id":"-99","is_base_currency":true,"len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "order_stage"] = {"name":"order_stage","vname":"Order Stage","type":"enum","options":"order_stage_dom","len":100};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"Pending", "text":"Pending"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Confirmed", "text":"Confirmed"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"On Hold", "text":"On Hold"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Shipped", "text":"Shipped"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Cancelled", "text":"Cancelled"};

field_defs_Quotes[ "order_stage"].options=option_arr_Quotes;

field_defs_Quotes[ "original_po_date"] = {"name":"original_po_date","vname":"Original P.O. Date","type":"date","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "original_po_date"].options=option_arr_Quotes;

field_defs_Quotes[ "payment_terms"] = {"name":"payment_terms","vname":"Payment Terms","type":"enum","options":"payment_terms","len":"128"};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"", "text":""};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Net 15", "text":"Net 15"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Net 30", "text":"Net 30"};

field_defs_Quotes[ "payment_terms"].options=option_arr_Quotes;

field_defs_Quotes[ "purchase_order_num"] = {"name":"purchase_order_num","vname":"Purchase Order Num","type":"varchar","len":"50"};field_defs_Quotes[ "quote_num"] = {"name":"quote_num","vname":"Quote Number","type":"int","auto_increment":true,"readonly":true,"required":true,"unified_search":true,"disable_num_format":true,"enable_range_search":true,"options":"numeric_range_search_dom"};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Does Not Equal"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"Greater Than"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than_equals", "text":"Greater Than Or Equal To"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Less Than"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than_equals", "text":"Less Than Or Equal To"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "quote_num"].options=option_arr_Quotes;

field_defs_Quotes[ "quote_stage"] = {"name":"quote_stage","vname":"Quote Stage","type":"enum","options":"quote_stage_dom","len":100,"audited":true,"importable":"required","required":true};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"Draft", "text":"Draft"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Negotiation", "text":"Negotiation"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Delivered", "text":"Delivered"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"On Hold", "text":"On Hold"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Confirmed", "text":"Confirmed"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Closed Accepted", "text":"Closed Accepted"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Closed Lost", "text":"Closed Lost"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Closed Dead", "text":"Closed Dead"};

field_defs_Quotes[ "quote_stage"].options=option_arr_Quotes;

field_defs_Quotes[ "quote_type"] = {"name":"quote_type","vname":"Quote Type","type":"enum","dbtype":"varchar","options":"quote_type_dom"};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"Orders", "text":"Order"};

field_defs_Quotes[ "quote_type"].options=option_arr_Quotes;

field_defs_Quotes[ "renewal"] = {"name":"renewal","vname":"Renewal","type":"bool","readonly":true};field_defs_Quotes[ "shipping"] = {"name":"shipping","vname":"Shipping","dbType":"decimal","type":"currency","len":"26,6","calculated":true};field_defs_Quotes[ "shipping_address_city"] = {"name":"shipping_address_city","vname":"Shipping City","type":"varchar","group":"shipping_address","len":"100"};field_defs_Quotes[ "shipping_address_country"] = {"name":"shipping_address_country","vname":"Shipping Country","type":"varchar","group":"shipping_address","len":"100"};field_defs_Quotes[ "shipping_address_postalcode"] = {"name":"shipping_address_postalcode","vname":"Shipping Postal Code","type":"varchar","group":"shipping_address","len":"20"};field_defs_Quotes[ "shipping_address_state"] = {"name":"shipping_address_state","vname":"Shipping State","type":"varchar","group":"shipping_address","len":"100"};field_defs_Quotes[ "shipping_address_street"] = {"name":"shipping_address_street","vname":"Shipping Street","type":"text","dbType":"varchar","group":"shipping_address","group_label":"LBL_SHIPPING_ADDRESS","len":"150","rows":2,"cols":20};field_defs_Quotes[ "shipping_usdollar"] = {"name":"shipping_usdollar","vname":"Shipping (US Dollar)","group":"shipping","dbType":"decimal","type":"currency","currency_id":"-99","is_base_currency":true,"len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "subtotal"] = {"name":"subtotal","vname":"Subtotal","dbType":"decimal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "subtotal_usdollar"] = {"name":"subtotal_usdollar","group":"subtotal","vname":"Subtotal (US Dollar)","dbType":"decimal","type":"currency","is_base_currency":true,"len":"26,6","audited":true,"calculated":true,"enforced":true};field_defs_Quotes[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Quotes[ "tax"] = {"name":"tax","vname":"Tax","dbType":"decimal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "tax_usdollar"] = {"name":"tax_usdollar","vname":"Tax (US Dollar)","dbType":"decimal","group":"tax","type":"currency","is_base_currency":true,"len":"26,6","audited":true,"calculated":true,"enforced":true};field_defs_Quotes[ "taxable_subtotal"] = {"name":"taxable_subtotal","vname":"Taxable Subtotal","type":"currency","len":"26,6","disable_num_format":true,"calculated":true,"enforced":true};field_defs_Quotes[ "taxrate_value"] = {"name":"taxrate_value","vname":"Tax Rate Value","dbType":"decimal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Quotes[ "total"] = {"name":"total","vname":"Grand Total","dbType":"decimal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Quotes[ "total_usdollar"] = {"name":"total_usdollar","vname":"Grand Total (US Dollar)","dbType":"decimal","group":"total","type":"currency","currency_id":"-99","is_base_currency":true,"len":"26,6","audited":true,"enable_range_search":true,"options":"numeric_range_search_dom","calculated":true,"enforced":true};var option_arr_Quotes = new Array();

option_arr_Quotes[option_arr_Quotes.length] = { "value":"=", "text":"Equals"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"not_equal", "text":"Does Not Equal"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than", "text":"Greater Than"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"greater_than_equals", "text":"Greater Than Or Equal To"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than", "text":"Less Than"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"less_than_equals", "text":"Less Than Or Equal To"};
option_arr_Quotes[option_arr_Quotes.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotes[ "total_usdollar"].options=option_arr_Quotes;

var default_table_columns_Quotes = [""];




module_defs['Quotes'] = new Object();
module_defs['Quotes'].link_defs = link_defs_Quotes;
module_defs['Quotes'].field_defs = field_defs_Quotes;
module_defs['Quotes'].default_table_columns = default_table_columns_Quotes;
module_defs['Quotes'].summary_field_defs = new Object();
module_defs['Quotes'].group_by_field_defs = new Object();
module_defs['Quotes'].default_summary_columns = default_summary_columns;
module_defs['Quotes'].label = "Quotes";

var rel_defs = new Object();
var link_defs_RevenueLineItems = new Object();
link_defs_RevenueLineItems[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"revenuelineitems_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_RevenueLineItems[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"revenuelineitems_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_RevenueLineItems[ 'activities' ] = {"name":"activities","relationship_name":"revenuelineitem_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_RevenueLineItems[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_revenuelineitems","bean_is_lhs":false,"link_type":"one","label":"Primary Quote","module":"Quotes"};
link_defs_RevenueLineItems[ 'purchasedlineitem' ] = {"name":"purchasedlineitem","relationship_name":"purchasedlineitem_revenuelineitem","bean_is_lhs":true,"link_type":"one","label":"Generated Purchased Line Item","module":"PurchasedLineItems"};
link_defs_RevenueLineItems[ 'campaign_revenuelineitems' ] = {"name":"campaign_revenuelineitems","relationship_name":"campaign_revenuelineitems","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_RevenueLineItems[ 'notes' ] = {"name":"notes","relationship_name":"revenuelineitem_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_RevenueLineItems[ 'messages' ] = {"name":"messages","relationship_name":"revenuelineitem_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_RevenueLineItems[ 'tasks' ] = {"name":"tasks","relationship_name":"revenuelineitem_tasks","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Tasks"};
link_defs_RevenueLineItems[ 'documents' ] = {"name":"documents","relationship_name":"documents_revenuelineitems","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_RevenueLineItems[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunities_revenuelineitems","bean_is_lhs":false,"link_type":"one","label":"Opportunitie Name","module":"Opportunities"};
link_defs_RevenueLineItems[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"revenuelineitems_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_RevenueLineItems[ 'account_link' ] = {"name":"account_link","relationship_name":"revenuelineitems_accounts","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_RevenueLineItems[ 'rli_categories_link' ] = {"name":"rli_categories_link","relationship_name":"revenuelineitem_categories","bean_is_lhs":false,"link_type":"one","label":"Product Category","module":"ProductCategories"};
link_defs_RevenueLineItems[ 'rli_templates_link' ] = {"name":"rli_templates_link","relationship_name":"revenuelineitem_templates","bean_is_lhs":false,"link_type":"one","label":"Product","module":"ProductTemplates"};
link_defs_RevenueLineItems[ 'revenuelineitem_types_link' ] = {"name":"revenuelineitem_types_link","relationship_name":"revenuelineitem_types","bean_is_lhs":false,"link_type":"one","label":"Product Type","module":"ProductTypes"};
link_defs_RevenueLineItems[ 'pli_addons_link' ] = {"name":"pli_addons_link","relationship_name":"revenuelineitem_pli_addons","bean_is_lhs":false,"link_type":"one","label":"Add On To","module":"PurchasedLineItems"};
link_defs_RevenueLineItems[ 'products' ] = {"name":"products","relationship_name":"products_revenuelineitems","bean_is_lhs":true,"link_type":"one","label":"Products","module":"Products"};
link_defs_RevenueLineItems[ 'generated_products' ] = {"name":"generated_products","relationship_name":"products_parent_rli","bean_is_lhs":true,"link_type":"many","label":"Products","module":"Products"};
link_defs_RevenueLineItems[ 'projects' ] = {"name":"projects","relationship_name":"projects_revenuelineitems","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_RevenueLineItems[ 'emails' ] = {"name":"emails","relationship_name":"emails_revenuelineitems_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_RevenueLineItems[ 'calls' ] = {"name":"calls","relationship_name":"revenuelineitem_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_RevenueLineItems[ 'meetings' ] = {"name":"meetings","relationship_name":"revenuelineitem_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_RevenueLineItems[ 'manufacturers' ] = {"name":"manufacturers","relationship_name":"revenuelineitems_manufacturers","bean_is_lhs":false,"link_type":"one","label":"Manufacturer Name","module":"Manufacturers"};
link_defs_RevenueLineItems[ 'parent_rlis_link' ] = {"name":"parent_rlis_link","relationship_name":"revenuelineitems_renewal_rli","bean_is_lhs":true,"link_type":"many","label":"Parent Revenue Line Items","module":"RevenueLineItems"};
link_defs_RevenueLineItems[ 'renewal_rli_link' ] = {"name":"renewal_rli_link","relationship_name":"revenuelineitems_renewal_rli","bean_is_lhs":false,"link_type":"one","label":"Renewal Revenue Line Item","module":"RevenueLineItems"};
link_defs_RevenueLineItems[ 'tag_link' ] = {"name":"tag_link","relationship_name":"revenuelineitems_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_RevenueLineItems[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"revenuelineitems_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_RevenueLineItems[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"revenuelineitems_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_RevenueLineItems[ 'team_link' ] = {"name":"team_link","relationship_name":"revenuelineitems_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_RevenueLineItems[ 'currencies' ] = {"name":"currencies","relationship_name":"revenuelineitems_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_RevenueLineItems = new Object();
field_defs_RevenueLineItems[ "asset_number"] = {"name":"asset_number","vname":"Asset Number","type":"varchar","len":50};field_defs_RevenueLineItems[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6","readonly":true};field_defs_RevenueLineItems[ "best_case"] = {"calculated":true,"name":"best_case","vname":"Best","type":"currency","len":"26,6","audited":true,"showTransactionalAmount":true};field_defs_RevenueLineItems[ "book_value"] = {"name":"book_value","vname":"Book Value","type":"currency","len":"26,6"};field_defs_RevenueLineItems[ "book_value_date"] = {"name":"book_value_date","vname":"Book Value Date","type":"date"};field_defs_RevenueLineItems[ "book_value_usdollar"] = {"name":"book_value_usdollar","vname":"Book Value (US Dollar)","group":"book_value","type":"currency","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "catalog_service_duration_unit"] = {"name":"catalog_service_duration_unit","vname":"Catalog Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50,"readonly":true};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"year", "text":"Year(s)"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"month", "text":"Month(s)"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"day", "text":"Day(s)"};

field_defs_RevenueLineItems[ "catalog_service_duration_unit"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "catalog_service_duration_value"] = {"name":"catalog_service_duration_value","vname":"Catalog Service Duration Value","type":"int","min":"1","len":"5","readonly":true};field_defs_RevenueLineItems[ "category_id"] = {"name":"category_id","vname":"Product Category ID","type":"id","group":"category_name","reportable":true};field_defs_RevenueLineItems[ "commit_stage"] = {"name":"commit_stage","vname":"Forecast","type":"enum","len":"50","function":"getCommitStageDropdown","function_bean":"Forecasts","calculated":true,"duplicate_merge":"enabled"};                    var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"include", "text":"Include"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"exclude", "text":"Exclude"};
field_defs_RevenueLineItems[ "commit_stage"].options=option_arr_RevenueLineItems;
field_defs_RevenueLineItems[ "cost_price"] = {"name":"cost_price","vname":"Cost","type":"currency","len":"26,6","audited":true};field_defs_RevenueLineItems[ "cost_usdollar"] = {"name":"cost_usdollar","vname":"Cost (US Dollar)","group":"cost_price","type":"currency","currency_id":"-99","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "date_closed"] = {"name":"date_closed","vname":"Expected Close Date","required":true,"type":"date","audited":true,"importable":"required","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"=", "text":"Equals"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"not_equal", "text":"Not On"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"greater_than", "text":"After"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"less_than", "text":"Before"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_month", "text":"Last Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_month", "text":"This Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_month", "text":"Next Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_year", "text":"Last Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_year", "text":"This Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_year", "text":"Next Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"between", "text":"Is Between"};

field_defs_RevenueLineItems[ "date_closed"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"=", "text":"Equals"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"not_equal", "text":"Not On"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"greater_than", "text":"After"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"less_than", "text":"Before"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_month", "text":"Last Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_month", "text":"This Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_month", "text":"Next Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_year", "text":"Last Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_year", "text":"This Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_year", "text":"Next Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"between", "text":"Is Between"};

field_defs_RevenueLineItems[ "date_entered"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"=", "text":"Equals"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"not_equal", "text":"Not On"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"greater_than", "text":"After"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"less_than", "text":"Before"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_month", "text":"Last Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_month", "text":"This Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_month", "text":"Next Month"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"last_year", "text":"Last Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"this_year", "text":"This Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"next_year", "text":"Next Year"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"between", "text":"Is Between"};

field_defs_RevenueLineItems[ "date_modified"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "date_purchased"] = {"name":"date_purchased","vname":"Purchased","type":"date"};field_defs_RevenueLineItems[ "date_support_expires"] = {"name":"date_support_expires","vname":"Support Expires","type":"date"};field_defs_RevenueLineItems[ "date_support_starts"] = {"name":"date_support_starts","vname":"Support Starts","type":"date"};field_defs_RevenueLineItems[ "deal_calc"] = {"name":"deal_calc","vname":"Discount Total","type":"currency","len":"26,6","group":"deal_calc","calculated":true,"enforced":true,"customCode":"{$fields.currency_symbol.value}{$fields.deal_calc.value}&nbsp;"};field_defs_RevenueLineItems[ "deal_calc_usdollar"] = {"name":"deal_calc_usdollar","vname":"Discount (US Dollar)","type":"currency","currency_id":"-99","len":"26,6","group":"deal_calc","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_RevenueLineItems[ "discount_amount"] = {"name":"discount_amount","vname":"Discount Amount","dbType":"currency","type":"discount-amount","len":"26,6","precision":"6"};field_defs_RevenueLineItems[ "discount_amount_signed"] = {"name":"discount_amount_signed","vname":"Signed Discount Amount","type":"currency","len":"26,6","audited":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "discount_amount_usdollar"] = {"name":"discount_amount_usdollar","vname":"Discount Rate (US Dollar)","type":"decimal","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "discount_price"] = {"name":"discount_price","vname":"Unit Price","type":"currency","len":"26,6","audited":true,"calculated":true};field_defs_RevenueLineItems[ "discount_usdollar"] = {"name":"discount_usdollar","vname":"Unit Price (US Dollar)","group":"discount_price","type":"currency","currency_id":"-99","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_RevenueLineItems[ "lead_source"] = {"name":"lead_source","vname":"Lead Source","type":"enum","options":"lead_source_dom","len":"50","merge_filter":"enabled"};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"", "text":""};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Cold Call", "text":"Cold Call"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Existing Customer", "text":"Existing Customer"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Self Generated", "text":"Self Generated"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Employee", "text":"Employee"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Partner", "text":"Partner"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Public Relations", "text":"Public Relations"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Direct Mail", "text":"Direct Mail"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Conference", "text":"Conference"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Trade Show", "text":"Trade Show"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Web Site", "text":"Web Site"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Word of mouth", "text":"Word of mouth"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Email", "text":"Email"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Campaign", "text":"Campaign"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Support Portal User Registration", "text":"Support Portal User Registration"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Other", "text":"Other"};

field_defs_RevenueLineItems[ "lead_source"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "likely_case"] = {"calculated":true,"name":"likely_case","vname":"Likely","required":true,"type":"currency","len":"26,6","audited":true,"showTransactionalAmount":true};field_defs_RevenueLineItems[ "list_price"] = {"name":"list_price","vname":"List Price","type":"currency","len":"26,6","audited":true};field_defs_RevenueLineItems[ "list_usdollar"] = {"name":"list_usdollar","vname":"List Price (US Dollar)","type":"currency","currency_id":"-99","group":"list_price","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_RevenueLineItems[ "lock_duration"] = {"name":"lock_duration","vname":"Lock Duration","type":"bool","enforced":true,"calculated":true};field_defs_RevenueLineItems[ "mft_part_num"] = {"name":"mft_part_num","vname":"Part Number","type":"varchar","len":"50"};field_defs_RevenueLineItems[ "name"] = {"name":"name","vname":"Name","dbType":"varchar","type":"name","len":"255","unified_search":true,"reportable":true,"importable":"required","required":true,"audited":true};field_defs_RevenueLineItems[ "next_step"] = {"name":"next_step","vname":"Next Step","type":"varchar","len":"100","merge_filter":"enabled"};field_defs_RevenueLineItems[ "pricing_factor"] = {"name":"pricing_factor","vname":"Pricing Factor","type":"int","group":"pricing_formula","len":4};field_defs_RevenueLineItems[ "pricing_formula"] = {"name":"pricing_formula","vname":"Pricing Formula","type":"varchar","len":100};field_defs_RevenueLineItems[ "probability"] = {"name":"probability","vname":"Probability (%)","type":"int","dbType":"double","audited":true,"merge_filter":"enabled","calculated":true,"enforced":true};field_defs_RevenueLineItems[ "product_type"] = {"name":"product_type","vname":"Type","type":"enum","options":"opportunity_type_dom","len":"255","audited":true,"merge_filter":"enabled"};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"", "text":""};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Existing Business", "text":"Existing Business"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"New Business", "text":"New Business"};

field_defs_RevenueLineItems[ "product_type"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "quantity"] = {"name":"quantity","vname":"Quantity","type":"decimal","len":12,"precision":2};field_defs_RevenueLineItems[ "renewable"] = {"name":"renewable","vname":"Renewable","type":"bool"};field_defs_RevenueLineItems[ "renewal"] = {"name":"renewal","vname":"Renewal","type":"bool","readonly":true};field_defs_RevenueLineItems[ "sales_stage"] = {"name":"sales_stage","vname":"Sales Stage","type":"enum","options":"sales_stage_dom","len":"255","audited":true,"merge_filter":"enabled","importable":"required","required":true};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Prospecting", "text":"Prospecting"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Qualification", "text":"Qualification"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Needs Analysis", "text":"Needs Analysis"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Value Proposition", "text":"Value Proposition"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Id. Decision Makers", "text":"Id. Decision Makers"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Perception Analysis", "text":"Perception Analysis"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Proposal/Price Quote", "text":"Proposal/Price Quote"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Negotiation/Review", "text":"Negotiation/Review"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Closed Won", "text":"Closed Won"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Closed Lost", "text":"Closed Lost"};

field_defs_RevenueLineItems[ "sales_stage"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "serial_number"] = {"name":"serial_number","vname":"Serial Number","type":"varchar","len":50};field_defs_RevenueLineItems[ "service"] = {"name":"service","vname":"Service","type":"bool"};field_defs_RevenueLineItems[ "service_duration_multiplier"] = {"name":"service_duration_multiplier","vname":"Service Duration Multiplier","type":"decimal","calculated":true,"enforced":true};field_defs_RevenueLineItems[ "service_duration_unit"] = {"name":"service_duration_unit","vname":"Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"year", "text":"Year(s)"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"month", "text":"Month(s)"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"day", "text":"Day(s)"};

field_defs_RevenueLineItems[ "service_duration_unit"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "service_duration_value"] = {"name":"service_duration_value","vname":"Service Duration Value","type":"int","min":"1","len":"5"};field_defs_RevenueLineItems[ "service_end_date"] = {"name":"service_end_date","vname":"Service End Date","type":"service-enddate","dbType":"date"};field_defs_RevenueLineItems[ "service_start_date"] = {"name":"service_start_date","vname":"Service Start Date","type":"date"};field_defs_RevenueLineItems[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"product_status_dom","len":100,"audited":true};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"", "text":""};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Quotes", "text":"Quoted"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Orders", "text":"Ordered"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Ship", "text":"Shipped"};

field_defs_RevenueLineItems[ "status"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "subtotal"] = {"name":"subtotal","vname":"Subtotal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_RevenueLineItems[ "support_contact"] = {"name":"support_contact","vname":"Support Contact","type":"varchar","len":50};field_defs_RevenueLineItems[ "support_description"] = {"name":"support_description","vname":"Support Desc","type":"varchar","len":255};field_defs_RevenueLineItems[ "support_name"] = {"name":"support_name","vname":"Support Title","type":"varchar","len":50};field_defs_RevenueLineItems[ "support_term"] = {"name":"support_term","vname":"Support Term","type":"varchar","len":100};field_defs_RevenueLineItems[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_RevenueLineItems[ "tax_class"] = {"name":"tax_class","vname":"Tax Class","type":"enum","options":"tax_class_dom","len":100};var option_arr_RevenueLineItems = new Array();

option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Taxable", "text":"Taxable"};
option_arr_RevenueLineItems[option_arr_RevenueLineItems.length] = { "value":"Non-Taxable", "text":"Non-Taxable"};

field_defs_RevenueLineItems[ "tax_class"].options=option_arr_RevenueLineItems;

field_defs_RevenueLineItems[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_RevenueLineItems[ "vendor_part_num"] = {"name":"vendor_part_num","vname":"Vendor Part Number","type":"varchar","len":50};field_defs_RevenueLineItems[ "website"] = {"name":"website","vname":"Product URL","type":"varchar","len":255};field_defs_RevenueLineItems[ "weight"] = {"name":"weight","vname":"Weight","type":"decimal","len":"12,2","precision":2};field_defs_RevenueLineItems[ "worst_case"] = {"calculated":true,"name":"worst_case","vname":"Worst","type":"currency","len":"26,6","audited":true,"showTransactionalAmount":true};var default_table_columns_RevenueLineItems = [""];




module_defs['RevenueLineItems'] = new Object();
module_defs['RevenueLineItems'].link_defs = link_defs_RevenueLineItems;
module_defs['RevenueLineItems'].field_defs = field_defs_RevenueLineItems;
module_defs['RevenueLineItems'].default_table_columns = default_table_columns_RevenueLineItems;
module_defs['RevenueLineItems'].summary_field_defs = new Object();
module_defs['RevenueLineItems'].group_by_field_defs = new Object();
module_defs['RevenueLineItems'].default_summary_columns = default_summary_columns;
module_defs['RevenueLineItems'].label = "Revenue Line Items";

var rel_defs = new Object();
var link_defs_Products = new Object();
link_defs_Products[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"products_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Products[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"products_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Products[ 'activities' ] = {"name":"activities","relationship_name":"product_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Products[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_products","bean_is_lhs":false,"link_type":"one","label":"Quote Name","module":"Quotes"};
link_defs_Products[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"products_revenuelineitems","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Item Name","module":"RevenueLineItems"};
link_defs_Products[ 'campaign_products' ] = {"name":"campaign_products","relationship_name":"campaign_products","bean_is_lhs":false,"link_type":"one","label":"Campaign","module":"Campaigns"};
link_defs_Products[ 'related_products' ] = {"name":"related_products","relationship_name":"product_product","bean_is_lhs":true,"link_type":"many","label":"Related Quoted Line Items","module":"Products"};
link_defs_Products[ 'notes' ] = {"name":"notes","relationship_name":"product_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Products[ 'messages' ] = {"name":"messages","relationship_name":"product_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Products[ 'documents' ] = {"name":"documents","relationship_name":"documents_products","bean_is_lhs":false,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Products[ 'contracts' ] = {"name":"contracts","relationship_name":"contracts_products","bean_is_lhs":false,"link_type":"one","label":"Contracts","module":"Contracts"};
link_defs_Products[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunities_products","bean_is_lhs":false,"link_type":"one","label":"Opportunitie Name","module":"Opportunities"};
link_defs_Products[ 'account_link' ] = {"name":"account_link","relationship_name":"products_accounts","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Products[ 'product_categories_link' ] = {"name":"product_categories_link","relationship_name":"product_categories","bean_is_lhs":false,"link_type":"one","label":"Category Name","module":"ProductCategories"};
link_defs_Products[ 'product_templates_link' ] = {"name":"product_templates_link","relationship_name":"product_templates","bean_is_lhs":false,"link_type":"one","label":"Product","module":"ProductTemplates"};
link_defs_Products[ 'product_types_link' ] = {"name":"product_types_link","relationship_name":"product_types","bean_is_lhs":false,"link_type":"one","label":"Product Type","module":"ProductTypes"};
link_defs_Products[ 'contact_link' ] = {"name":"contact_link","relationship_name":"contact_products","bean_is_lhs":false,"link_type":"one","label":"Contact Name","module":"Contacts"};
link_defs_Products[ 'pli_addons_link' ] = {"name":"pli_addons_link","relationship_name":"product_pli_addons","bean_is_lhs":false,"link_type":"one","label":"Add On To","module":"PurchasedLineItems"};
link_defs_Products[ 'parent_rli_link' ] = {"name":"parent_rli_link","relationship_name":"products_parent_rli","bean_is_lhs":false,"link_type":"one","label":"Revenue Line Item","module":"RevenueLineItems"};
link_defs_Products[ 'emails' ] = {"name":"emails","relationship_name":"emails_products_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Products[ 'projects' ] = {"name":"projects","relationship_name":"projects_products","bean_is_lhs":false,"link_type":"many","label":"Projects","module":"Project"};
link_defs_Products[ 'product_bundles' ] = {"name":"product_bundles","relationship_name":"product_bundle_product","bean_is_lhs":false,"link_type":"one","label":"Products","module":"ProductBundles"};
link_defs_Products[ 'calls' ] = {"name":"calls","relationship_name":"product_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Products[ 'meetings' ] = {"name":"meetings","relationship_name":"product_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Products[ 'manufacturers' ] = {"name":"manufacturers","relationship_name":"product_manufacturers","bean_is_lhs":false,"link_type":"one","label":"Manufacturer Name","module":"Manufacturers"};
link_defs_Products[ 'tag_link' ] = {"name":"tag_link","relationship_name":"products_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Products[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"products_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Products[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"products_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Products[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"products_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Products[ 'team_link' ] = {"name":"team_link","relationship_name":"products_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Products[ 'currencies' ] = {"name":"currencies","relationship_name":"products_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Products = new Object();
field_defs_Products[ "asset_number"] = {"name":"asset_number","vname":"Asset Number","type":"varchar","len":50};field_defs_Products[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Products[ "book_value"] = {"name":"book_value","vname":"Book Value","type":"currency","len":"26,6"};field_defs_Products[ "book_value_date"] = {"name":"book_value_date","vname":"Book Value Date","type":"date"};field_defs_Products[ "book_value_usdollar"] = {"name":"book_value_usdollar","vname":"Book Value (US Dollar)","group":"book_value","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "catalog_service_duration_unit"] = {"name":"catalog_service_duration_unit","vname":"Catalog Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50,"readonly":true};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"year", "text":"Year(s)"};
option_arr_Products[option_arr_Products.length] = { "value":"month", "text":"Month(s)"};
option_arr_Products[option_arr_Products.length] = { "value":"day", "text":"Day(s)"};

field_defs_Products[ "catalog_service_duration_unit"].options=option_arr_Products;

field_defs_Products[ "catalog_service_duration_value"] = {"name":"catalog_service_duration_value","vname":"Catalog Service Duration Value","type":"int","min":"1","len":"5","readonly":true};field_defs_Products[ "category_id"] = {"name":"category_id","vname":"Category","type":"id","group":"category_name","reportable":true};field_defs_Products[ "cost_price"] = {"name":"cost_price","vname":"Cost","type":"currency","len":"26,6","audited":true};field_defs_Products[ "cost_usdollar"] = {"name":"cost_usdollar","vname":"Cost (US Dollar)","dbType":"decimal","group":"cost_price","type":"currency","currency_id":"-99","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "date_closed"] = {"name":"date_closed","vname":"Expected Close Date","type":"date","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"=", "text":"Equals"};
option_arr_Products[option_arr_Products.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Products[option_arr_Products.length] = { "value":"greater_than", "text":"After"};
option_arr_Products[option_arr_Products.length] = { "value":"less_than", "text":"Before"};
option_arr_Products[option_arr_Products.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Products[option_arr_Products.length] = { "value":"this_month", "text":"This Month"};
option_arr_Products[option_arr_Products.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Products[option_arr_Products.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Products[option_arr_Products.length] = { "value":"this_year", "text":"This Year"};
option_arr_Products[option_arr_Products.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Products[option_arr_Products.length] = { "value":"between", "text":"Is Between"};

field_defs_Products[ "date_closed"].options=option_arr_Products;

field_defs_Products[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"=", "text":"Equals"};
option_arr_Products[option_arr_Products.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Products[option_arr_Products.length] = { "value":"greater_than", "text":"After"};
option_arr_Products[option_arr_Products.length] = { "value":"less_than", "text":"Before"};
option_arr_Products[option_arr_Products.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Products[option_arr_Products.length] = { "value":"this_month", "text":"This Month"};
option_arr_Products[option_arr_Products.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Products[option_arr_Products.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Products[option_arr_Products.length] = { "value":"this_year", "text":"This Year"};
option_arr_Products[option_arr_Products.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Products[option_arr_Products.length] = { "value":"between", "text":"Is Between"};

field_defs_Products[ "date_entered"].options=option_arr_Products;

field_defs_Products[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"=", "text":"Equals"};
option_arr_Products[option_arr_Products.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Products[option_arr_Products.length] = { "value":"greater_than", "text":"After"};
option_arr_Products[option_arr_Products.length] = { "value":"less_than", "text":"Before"};
option_arr_Products[option_arr_Products.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Products[option_arr_Products.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Products[option_arr_Products.length] = { "value":"this_month", "text":"This Month"};
option_arr_Products[option_arr_Products.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Products[option_arr_Products.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Products[option_arr_Products.length] = { "value":"this_year", "text":"This Year"};
option_arr_Products[option_arr_Products.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Products[option_arr_Products.length] = { "value":"between", "text":"Is Between"};

field_defs_Products[ "date_modified"].options=option_arr_Products;

field_defs_Products[ "date_purchased"] = {"name":"date_purchased","vname":"Purchased","type":"date"};field_defs_Products[ "date_support_expires"] = {"name":"date_support_expires","vname":"Support Expires","type":"date"};field_defs_Products[ "date_support_starts"] = {"name":"date_support_starts","vname":"Support Starts","type":"date"};field_defs_Products[ "deal_calc"] = {"name":"deal_calc","vname":"Discount Total","type":"currency","len":"26,6","group":"deal_calc","calculated":true,"enforced":true};field_defs_Products[ "deal_calc_usdollar"] = {"name":"deal_calc_usdollar","vname":"Discount (US Dollar)","type":"currency","currency_id":"-99","len":"26,6","group":"deal_calc","calculated":true,"enforced":true};field_defs_Products[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Products[ "discount_amount"] = {"name":"discount_amount","vname":"Discount Amount","dbType":"currency","type":"discount-amount","len":"26,6","precision":"6"};field_defs_Products[ "discount_amount_signed"] = {"name":"discount_amount_signed","vname":"Signed Discount Amount","type":"currency","len":"26,6","audited":true,"calculated":true,"enforced":true};field_defs_Products[ "discount_amount_usdollar"] = {"name":"discount_amount_usdollar","vname":"Discount Rate (US Dollar)","type":"currency","currency_id":"-99","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "discount_price"] = {"name":"discount_price","vname":"Unit Price","type":"currency","len":"26,6","audited":true};field_defs_Products[ "discount_usdollar"] = {"name":"discount_usdollar","vname":"Unit Price (US Dollar)","dbType":"decimal","group":"discount_price","type":"currency","currency_id":"-99","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Products[ "list_price"] = {"name":"list_price","vname":"List Price","type":"currency","len":"26,6","audited":true};field_defs_Products[ "list_usdollar"] = {"name":"list_usdollar","vname":"List Price (US Dollar)","dbType":"decimal","type":"currency","currency_id":"-99","group":"list_price","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "lock_duration"] = {"name":"lock_duration","vname":"Lock Duration","type":"bool","enforced":true,"calculated":true};field_defs_Products[ "mft_part_num"] = {"name":"mft_part_num","vname":"Part Number","type":"varchar","len":"50"};field_defs_Products[ "name"] = {"name":"name","vname":"Name","dbType":"varchar","type":"name","len":"255","unified_search":true,"reportable":true,"importable":"required","required":true};field_defs_Products[ "next_step"] = {"name":"next_step","vname":"Next Step","type":"varchar","len":"100","merge_filter":"enabled"};field_defs_Products[ "pricing_factor"] = {"name":"pricing_factor","vname":"Pricing Factor","type":"int","group":"pricing_formula","len":4};field_defs_Products[ "pricing_formula"] = {"name":"pricing_formula","vname":"Pricing Formula","type":"varchar","len":100};field_defs_Products[ "quantity"] = {"name":"quantity","vname":"Quantity","type":"decimal","len":12,"precision":2};field_defs_Products[ "renewable"] = {"name":"renewable","vname":"Renewable","type":"bool"};field_defs_Products[ "renewal"] = {"name":"renewal","vname":"Renewal","type":"bool","readonly":true};field_defs_Products[ "serial_number"] = {"name":"serial_number","vname":"Serial Number","type":"varchar","len":50};field_defs_Products[ "service"] = {"name":"service","vname":"Service","type":"bool"};field_defs_Products[ "service_duration_multiplier"] = {"name":"service_duration_multiplier","vname":"Service Duration Multiplier","type":"decimal","calculated":true,"enforced":true};field_defs_Products[ "service_duration_unit"] = {"name":"service_duration_unit","vname":"Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"year", "text":"Year(s)"};
option_arr_Products[option_arr_Products.length] = { "value":"month", "text":"Month(s)"};
option_arr_Products[option_arr_Products.length] = { "value":"day", "text":"Day(s)"};

field_defs_Products[ "service_duration_unit"].options=option_arr_Products;

field_defs_Products[ "service_duration_value"] = {"name":"service_duration_value","vname":"Service Duration Value","type":"int","min":"1","len":"5"};field_defs_Products[ "service_end_date"] = {"name":"service_end_date","vname":"Service End Date","type":"service-enddate","dbType":"date"};field_defs_Products[ "service_start_date"] = {"name":"service_start_date","vname":"Service Start Date","type":"date"};field_defs_Products[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"product_status_dom","len":100,"audited":true};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"", "text":""};
option_arr_Products[option_arr_Products.length] = { "value":"Quotes", "text":"Quoted"};
option_arr_Products[option_arr_Products.length] = { "value":"Orders", "text":"Ordered"};
option_arr_Products[option_arr_Products.length] = { "value":"Ship", "text":"Shipped"};

field_defs_Products[ "status"].options=option_arr_Products;

field_defs_Products[ "subtotal"] = {"name":"subtotal","vname":"Subtotal","type":"currency","len":"26,6","calculated":true,"enforced":true};field_defs_Products[ "support_contact"] = {"name":"support_contact","vname":"Support Contact","type":"varchar","len":50};field_defs_Products[ "support_description"] = {"name":"support_description","vname":"Support Desc","type":"varchar","len":255};field_defs_Products[ "support_name"] = {"name":"support_name","vname":"Support Title","type":"varchar","len":50};field_defs_Products[ "support_term"] = {"name":"support_term","vname":"Support Term","type":"varchar","len":100};field_defs_Products[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Products[ "tax_class"] = {"name":"tax_class","vname":"Tax Class","type":"enum","options":"tax_class_dom","len":100};var option_arr_Products = new Array();

option_arr_Products[option_arr_Products.length] = { "value":"Taxable", "text":"Taxable"};
option_arr_Products[option_arr_Products.length] = { "value":"Non-Taxable", "text":"Non-Taxable"};

field_defs_Products[ "tax_class"].options=option_arr_Products;

field_defs_Products[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Products[ "vendor_part_num"] = {"name":"vendor_part_num","vname":"Vendor Part Number","type":"varchar","len":50};field_defs_Products[ "website"] = {"name":"website","vname":"Product URL","type":"varchar","len":255};field_defs_Products[ "weight"] = {"name":"weight","vname":"Weight","type":"decimal","len":"12,2","precision":2};var default_table_columns_Products = [""];




module_defs['Products'] = new Object();
module_defs['Products'].link_defs = link_defs_Products;
module_defs['Products'].field_defs = field_defs_Products;
module_defs['Products'].default_table_columns = default_table_columns_Products;
module_defs['Products'].summary_field_defs = new Object();
module_defs['Products'].group_by_field_defs = new Object();
module_defs['Products'].default_summary_columns = default_summary_columns;
module_defs['Products'].label = "Quoted Line Items";

var rel_defs = new Object();
var link_defs_ProductTemplates = new Object();
link_defs_ProductTemplates[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"producttemplates_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ProductTemplates[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"producttemplates_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ProductTemplates[ 'activities' ] = {"name":"activities","relationship_name":"producttemplate_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_ProductTemplates[ 'category_link' ] = {"name":"category_link","relationship_name":"product_templates_product_categories","bean_is_lhs":false,"link_type":"one","label":"Category Name","module":"ProductCategories"};
link_defs_ProductTemplates[ 'type_link' ] = {"name":"type_link","relationship_name":"product_templates_product_types","bean_is_lhs":false,"link_type":"one","label":"Product Type","module":"ProductTypes"};
link_defs_ProductTemplates[ 'manufacturer_link' ] = {"name":"manufacturer_link","relationship_name":"product_templates_manufacturers","bean_is_lhs":false,"link_type":"one","label":"Manufacturer Name","module":"Manufacturers"};
link_defs_ProductTemplates[ 'forecastworksheet' ] = {"name":"forecastworksheet","relationship_name":"forecastworksheets_templates","bean_is_lhs":true,"link_type":"many","label":"Forecast Worksheet","module":"ForecastWorksheets"};
link_defs_ProductTemplates[ 'tag_link' ] = {"name":"tag_link","relationship_name":"producttemplates_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_ProductTemplates[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"producttemplates_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_ProductTemplates[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"producttemplates_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_ProductTemplates[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"producttemplates_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_ProductTemplates[ 'currencies' ] = {"name":"currencies","relationship_name":"producttemplates_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
link_defs_ProductTemplates[ 'team_link' ] = {"name":"team_link","relationship_name":"producttemplates_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_ProductTemplates = new Object();
field_defs_ProductTemplates[ "base_rate"] = {"name":"base_rate","vname":"Base Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_ProductTemplates[ "cost_price"] = {"name":"cost_price","vname":"Cost","type":"currency","required":true,"len":"26,6","importable":"required","convertToBase":true,"showTransactionalAmount":true};field_defs_ProductTemplates[ "cost_usdollar"] = {"name":"cost_usdollar","vname":"Cost USD","type":"currency","currency_id":"-99","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_ProductTemplates[ "date_available"] = {"name":"date_available","vname":"Date Available","type":"date"};field_defs_ProductTemplates[ "date_cost_price"] = {"name":"date_cost_price","vname":"Date-Cost-Price","type":"date"};field_defs_ProductTemplates[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"=", "text":"Equals"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductTemplates[ "date_entered"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"=", "text":"Equals"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductTemplates[ "date_modified"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_ProductTemplates[ "discount_price"] = {"name":"discount_price","vname":"Unit Price","type":"currency","len":"26,6","importable":"required","required":true,"convertToBase":true,"showTransactionalAmount":true};field_defs_ProductTemplates[ "discount_usdollar"] = {"name":"discount_usdollar","vname":"Discount Price USD","type":"currency","currency_id":"-99","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_ProductTemplates[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_ProductTemplates[ "list_price"] = {"name":"list_price","vname":"List Price","type":"currency","len":"26,6","importable":"required","required":true,"convertToBase":true,"showTransactionalAmount":true};field_defs_ProductTemplates[ "list_usdollar"] = {"name":"list_usdollar","vname":"List USD","type":"currency","currency_id":"-99","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_ProductTemplates[ "lock_duration"] = {"name":"lock_duration","vname":"Lock Duration","type":"bool"};field_defs_ProductTemplates[ "mft_part_num"] = {"name":"mft_part_num","vname":"Part Number","type":"varchar","len":"50"};field_defs_ProductTemplates[ "name"] = {"name":"name","vname":"Product Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_ProductTemplates[ "pricing_factor"] = {"name":"pricing_factor","vname":"Pricing Factor","type":"decimal","len":"8","precision":"2"};field_defs_ProductTemplates[ "pricing_formula"] = {"name":"pricing_formula","vname":"Default Pricing Formula","type":"pricing-formula","dbType":"enum","options":"pricing_formula_dom","len":100};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"Fixed", "text":"Fixed Price"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"ProfitMargin", "text":"Profit Margin"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"PercentageMarkup", "text":"Markup over Cost"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"PercentageDiscount", "text":"Discount from List"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"IsList", "text":"Same as List"};

field_defs_ProductTemplates[ "pricing_formula"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "qty_in_stock"] = {"name":"qty_in_stock","vname":"Quantity in Stock","type":"int","len":"5"};field_defs_ProductTemplates[ "renewable"] = {"name":"renewable","vname":"Renewable","type":"bool"};field_defs_ProductTemplates[ "service"] = {"name":"service","vname":"Service","type":"bool"};field_defs_ProductTemplates[ "service_duration_unit"] = {"name":"service_duration_unit","vname":"Service Duration Unit","type":"enum","options":"service_duration_unit_dom","len":50};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"year", "text":"Year(s)"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"month", "text":"Month(s)"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"day", "text":"Day(s)"};

field_defs_ProductTemplates[ "service_duration_unit"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "service_duration_value"] = {"name":"service_duration_value","vname":"Service Duration Value","type":"int","min":"1","len":"5"};field_defs_ProductTemplates[ "status"] = {"name":"status","vname":"Availability","type":"enum","options":"product_template_status_dom","len":100};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"Available", "text":"In Stock"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"Unavailable", "text":"Out Of Stock"};

field_defs_ProductTemplates[ "status"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "support_contact"] = {"name":"support_contact","vname":"Support Contact","type":"varchar","len":"50"};field_defs_ProductTemplates[ "support_description"] = {"name":"support_description","vname":"Support Desc","type":"varchar","len":"255"};field_defs_ProductTemplates[ "support_name"] = {"name":"support_name","vname":"Support Name","type":"varchar","len":"50"};field_defs_ProductTemplates[ "support_term"] = {"name":"support_term","vname":"Support Term","type":"enum","options":"support_term_dom","len":100};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"+6 months", "text":"Six months"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"+1 year", "text":"One year"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"+2 years", "text":"Two years"};

field_defs_ProductTemplates[ "support_term"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_ProductTemplates[ "tax_class"] = {"name":"tax_class","vname":"Tax Class","type":"enum","options":"tax_class_dom","len":100};var option_arr_ProductTemplates = new Array();

option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"Taxable", "text":"Taxable"};
option_arr_ProductTemplates[option_arr_ProductTemplates.length] = { "value":"Non-Taxable", "text":"Non-Taxable"};

field_defs_ProductTemplates[ "tax_class"].options=option_arr_ProductTemplates;

field_defs_ProductTemplates[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_ProductTemplates[ "vendor_part_num"] = {"name":"vendor_part_num","vname":"Vendor Part Number","type":"varchar","len":"50"};field_defs_ProductTemplates[ "website"] = {"name":"website","vname":"Product URL","type":"varchar","len":"255"};field_defs_ProductTemplates[ "weight"] = {"name":"weight","vname":"Weight","type":"decimal","len":"12","precision":"2"};var default_table_columns_ProductTemplates = [""];




module_defs['ProductTemplates'] = new Object();
module_defs['ProductTemplates'].link_defs = link_defs_ProductTemplates;
module_defs['ProductTemplates'].field_defs = field_defs_ProductTemplates;
module_defs['ProductTemplates'].default_table_columns = default_table_columns_ProductTemplates;
module_defs['ProductTemplates'].summary_field_defs = new Object();
module_defs['ProductTemplates'].group_by_field_defs = new Object();
module_defs['ProductTemplates'].default_summary_columns = default_summary_columns;
module_defs['ProductTemplates'].label = "Product Catalog";

var rel_defs = new Object();
var link_defs_ProductTypes = new Object();
link_defs_ProductTypes[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"producttypes_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ProductTypes[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"producttypes_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ProductTypes[ 'activities' ] = {"name":"activities","relationship_name":"producttype_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_ProductTypes[ 'tag_link' ] = {"name":"tag_link","relationship_name":"producttypes_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_ProductTypes[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"producttypes_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_ProductTypes[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"producttypes_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
var field_defs_ProductTypes = new Object();
field_defs_ProductTypes[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductTypes = new Array();

option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"=", "text":"Equals"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductTypes[ "date_entered"].options=option_arr_ProductTypes;

field_defs_ProductTypes[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductTypes = new Array();

option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"=", "text":"Equals"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductTypes[option_arr_ProductTypes.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductTypes[ "date_modified"].options=option_arr_ProductTypes;

field_defs_ProductTypes[ "description"] = {"name":"description","vname":"Description","type":"text","massupdate":true};field_defs_ProductTypes[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_ProductTypes[ "list_order"] = {"name":"list_order","vname":"Order","type":"int","len":"4","importable":"required","required":true};field_defs_ProductTypes[ "name"] = {"name":"name","vname":"Product Type","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_ProductTypes[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};var default_table_columns_ProductTypes = [""];




module_defs['ProductTypes'] = new Object();
module_defs['ProductTypes'].link_defs = link_defs_ProductTypes;
module_defs['ProductTypes'].field_defs = field_defs_ProductTypes;
module_defs['ProductTypes'].default_table_columns = default_table_columns_ProductTypes;
module_defs['ProductTypes'].summary_field_defs = new Object();
module_defs['ProductTypes'].group_by_field_defs = new Object();
module_defs['ProductTypes'].default_summary_columns = default_summary_columns;
module_defs['ProductTypes'].label = "Product Types";

var rel_defs = new Object();
var link_defs_ProductCategories = new Object();
link_defs_ProductCategories[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"productcategories_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ProductCategories[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"productcategories_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ProductCategories[ 'activities' ] = {"name":"activities","relationship_name":"productcategory_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_ProductCategories[ 'parent_category' ] = {"name":"parent_category","relationship_name":"member_categories","bean_is_lhs":false,"link_type":"one","label":"Parent Category","module":"ProductCategories"};
link_defs_ProductCategories[ 'categories' ] = {"name":"categories","relationship_name":"member_categories","bean_is_lhs":true,"link_type":"many","label":"Categories","module":"ProductCategories"};
link_defs_ProductCategories[ 'forecastworksheet' ] = {"name":"forecastworksheet","relationship_name":"forecastworksheets_categories","bean_is_lhs":true,"link_type":"many","label":"Forecast Worksheet","module":"ForecastWorksheets"};
link_defs_ProductCategories[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"productcategories_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_ProductCategories[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"productcategories_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
var field_defs_ProductCategories = new Object();
field_defs_ProductCategories[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductCategories = new Array();

option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"=", "text":"Equals"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductCategories[ "date_entered"].options=option_arr_ProductCategories;

field_defs_ProductCategories[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ProductCategories = new Array();

option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"=", "text":"Equals"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"greater_than", "text":"After"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"less_than", "text":"Before"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"this_month", "text":"This Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"this_year", "text":"This Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ProductCategories[option_arr_ProductCategories.length] = { "value":"between", "text":"Is Between"};

field_defs_ProductCategories[ "date_modified"].options=option_arr_ProductCategories;

field_defs_ProductCategories[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_ProductCategories[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_ProductCategories[ "list_order"] = {"name":"list_order","vname":"Order","type":"int","len":"4"};field_defs_ProductCategories[ "name"] = {"name":"name","vname":"Product Category","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_ProductCategories[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};var default_table_columns_ProductCategories = [""];




module_defs['ProductCategories'] = new Object();
module_defs['ProductCategories'].link_defs = link_defs_ProductCategories;
module_defs['ProductCategories'].field_defs = field_defs_ProductCategories;
module_defs['ProductCategories'].default_table_columns = default_table_columns_ProductCategories;
module_defs['ProductCategories'].summary_field_defs = new Object();
module_defs['ProductCategories'].group_by_field_defs = new Object();
module_defs['ProductCategories'].default_summary_columns = default_summary_columns;
module_defs['ProductCategories'].label = "Product Categories";

var rel_defs = new Object();
var link_defs_Manufacturers = new Object();
link_defs_Manufacturers[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"manufacturers_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Manufacturers[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"manufacturers_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Manufacturers[ 'activities' ] = {"name":"activities","relationship_name":"manufacturer_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Manufacturers[ 'revenue_line_items' ] = {"name":"revenue_line_items","relationship_name":"revenuelineitems_manufacturers","bean_is_lhs":true,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Manufacturers[ 'tag_link' ] = {"name":"tag_link","relationship_name":"manufacturers_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Manufacturers[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"manufacturers_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Manufacturers[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"manufacturers_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
var field_defs_Manufacturers = new Object();
field_defs_Manufacturers[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Manufacturers = new Array();

option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"=", "text":"Equals"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"greater_than", "text":"After"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"less_than", "text":"Before"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"this_month", "text":"This Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"this_year", "text":"This Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"between", "text":"Is Between"};

field_defs_Manufacturers[ "date_entered"].options=option_arr_Manufacturers;

field_defs_Manufacturers[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Manufacturers = new Array();

option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"=", "text":"Equals"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"greater_than", "text":"After"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"less_than", "text":"Before"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"this_month", "text":"This Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"this_year", "text":"This Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"between", "text":"Is Between"};

field_defs_Manufacturers[ "date_modified"].options=option_arr_Manufacturers;

field_defs_Manufacturers[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Manufacturers[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Manufacturers[ "list_order"] = {"name":"list_order","vname":"Order","type":"int","len":"4","importable":"required"};field_defs_Manufacturers[ "name"] = {"name":"name","vname":"Manufacturer","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_Manufacturers[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"manufacturer_status_dom","len":100,"dbType":"varchar","importable":"required"};var option_arr_Manufacturers = new Array();

option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"Active", "text":"Active"};
option_arr_Manufacturers[option_arr_Manufacturers.length] = { "value":"Inactive", "text":"Inactive"};

field_defs_Manufacturers[ "status"].options=option_arr_Manufacturers;

field_defs_Manufacturers[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};var default_table_columns_Manufacturers = [""];




module_defs['Manufacturers'] = new Object();
module_defs['Manufacturers'].link_defs = link_defs_Manufacturers;
module_defs['Manufacturers'].field_defs = field_defs_Manufacturers;
module_defs['Manufacturers'].default_table_columns = default_table_columns_Manufacturers;
module_defs['Manufacturers'].summary_field_defs = new Object();
module_defs['Manufacturers'].group_by_field_defs = new Object();
module_defs['Manufacturers'].default_summary_columns = default_summary_columns;
module_defs['Manufacturers'].label = "Manufacturers";

var rel_defs = new Object();
var link_defs_Forecasts = new Object();
link_defs_Forecasts[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"forecasts_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Forecasts[ 'currencies' ] = {"name":"currencies","relationship_name":"forecasts_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Forecasts = new Object();
field_defs_Forecasts[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Forecasts[ "best_case"] = {"name":"best_case","vname":"Best","type":"currency"};field_defs_Forecasts[ "closed_amount"] = {"name":"closed_amount","vname":"Closed Won","type":"currency"};field_defs_Forecasts[ "date_entered"] = {"name":"date_entered","vname":"Date Entered","type":"datetime","required":true};field_defs_Forecasts[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","required":true};field_defs_Forecasts[ "likely_case"] = {"name":"likely_case","vname":"Likely Case","type":"currency"};field_defs_Forecasts[ "opp_count"] = {"name":"opp_count","vname":"Total Opportunitie Count","type":"int","len":"5"};field_defs_Forecasts[ "pipeline_amount"] = {"name":"pipeline_amount","vname":"Pipeline Revenue","type":"currency"};field_defs_Forecasts[ "pipeline_opp_count"] = {"name":"pipeline_opp_count","vname":"Pipeline Opportunitie Count","type":"int","len":"5"};field_defs_Forecasts[ "timeperiod_id"] = {"name":"timeperiod_id","vname":"Time Period ID","type":"enum","dbType":"id","reportable":true,"function":"getTimePeriodsDropDownForForecasts"};                    var option_arr_Forecasts = new Array();

field_defs_Forecasts[ "timeperiod_id"].options=option_arr_Forecasts;
field_defs_Forecasts[ "worst_case"] = {"name":"worst_case","vname":"Worst","type":"currency"};var default_table_columns_Forecasts = [""];




module_defs['Forecasts'] = new Object();
module_defs['Forecasts'].link_defs = link_defs_Forecasts;
module_defs['Forecasts'].field_defs = field_defs_Forecasts;
module_defs['Forecasts'].default_table_columns = default_table_columns_Forecasts;
module_defs['Forecasts'].summary_field_defs = new Object();
module_defs['Forecasts'].group_by_field_defs = new Object();
module_defs['Forecasts'].default_summary_columns = default_summary_columns;
module_defs['Forecasts'].label = "Forecasts";

var rel_defs = new Object();
var link_defs_Quotas = new Object();
link_defs_Quotas[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"quotas_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Quotas[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"quotas_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Quotas[ 'activities' ] = {"name":"activities","relationship_name":"quota_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Quotas[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"quotas_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Quotas[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"quotas_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Quotas[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"quotas_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Quotas[ 'currencies' ] = {"name":"currencies","relationship_name":"quotas_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Quotas = new Object();
field_defs_Quotas[ "amount"] = {"name":"amount","vname":"Amount","type":"currency","required":true,"reportable":true,"importable":"required","audited":true};field_defs_Quotas[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Quotas[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Quotas = new Array();

option_arr_Quotas[option_arr_Quotas.length] = { "value":"=", "text":"Equals"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotas[ "date_entered"].options=option_arr_Quotas;

field_defs_Quotas[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Quotas = new Array();

option_arr_Quotas[option_arr_Quotas.length] = { "value":"=", "text":"Equals"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"greater_than", "text":"After"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"less_than", "text":"Before"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"this_month", "text":"This Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"this_year", "text":"This Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Quotas[option_arr_Quotas.length] = { "value":"between", "text":"Is Between"};

field_defs_Quotas[ "date_modified"].options=option_arr_Quotas;

field_defs_Quotas[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Quotas[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Quotas[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_Quotas[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Quotas[ "timeperiod_id"] = {"name":"timeperiod_id","vname":"Timeperiod","type":"enum","dbType":"id","function":"getTimePeriodsDropDownForQuotas","reportable":true,"audited":true};                    var option_arr_Quotas = new Array();

field_defs_Quotas[ "timeperiod_id"].options=option_arr_Quotas;
var default_table_columns_Quotas = [""];




module_defs['Quotas'] = new Object();
module_defs['Quotas'].link_defs = link_defs_Quotas;
module_defs['Quotas'].field_defs = field_defs_Quotas;
module_defs['Quotas'].default_table_columns = default_table_columns_Quotas;
module_defs['Quotas'].summary_field_defs = new Object();
module_defs['Quotas'].group_by_field_defs = new Object();
module_defs['Quotas'].default_summary_columns = default_summary_columns;
module_defs['Quotas'].label = "Quotas";

var rel_defs = new Object();
var link_defs_Contracts = new Object();
link_defs_Contracts[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"contracts_created_by","bean_is_lhs":false,"link_type":"one","label":"Created User","module":"Users"};
link_defs_Contracts[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"contracts_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified User","module":"Users"};
link_defs_Contracts[ 'activities' ] = {"name":"activities","relationship_name":"contract_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Contracts[ 'quotes' ] = {"name":"quotes","relationship_name":"contracts_quotes","bean_is_lhs":true,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Contracts[ 'opportunities' ] = {"name":"opportunities","relationship_name":"contracts_opportunities","bean_is_lhs":false,"link_type":"one","label":"Opportunitie Name","module":"Opportunities"};
link_defs_Contracts[ 'accounts' ] = {"name":"accounts","relationship_name":"account_contracts","bean_is_lhs":false,"link_type":"one","label":"Account Name","module":"Accounts"};
link_defs_Contracts[ 'contract_types' ] = {"name":"contract_types","relationship_name":"contracts_contract_types","bean_is_lhs":false,"link_type":"one","label":"Type Name","module":"ContractTypes"};
link_defs_Contracts[ 'contracts_documents' ] = {"name":"contracts_documents","relationship_name":"contracts_documents","bean_is_lhs":true,"link_type":"many","label":"Documents","module":"Documents"};
link_defs_Contracts[ 'contacts' ] = {"name":"contacts","relationship_name":"contracts_contacts","bean_is_lhs":true,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Contracts[ 'notes' ] = {"name":"notes","relationship_name":"contract_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Contracts[ 'messages' ] = {"name":"messages","relationship_name":"contract_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Contracts[ 'products' ] = {"name":"products","relationship_name":"contracts_products","bean_is_lhs":true,"link_type":"one","label":"Products","module":"Products"};
link_defs_Contracts[ 'tag_link' ] = {"name":"tag_link","relationship_name":"contracts_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Contracts[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"contracts_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Contracts[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"contracts_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Contracts[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"contracts_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Contracts[ 'team_link' ] = {"name":"team_link","relationship_name":"contracts_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_Contracts[ 'currencies' ] = {"name":"currencies","relationship_name":"contracts_currencies","bean_is_lhs":false,"link_type":"one","label":"Currency Name","module":"Currencies"};
var field_defs_Contracts = new Object();
field_defs_Contracts[ "base_rate"] = {"name":"base_rate","vname":"Currency Rate","type":"text","dbType":"decimal","len":"26,6"};field_defs_Contracts[ "company_signed_date"] = {"name":"company_signed_date","vname":"Company Signed Date","type":"date","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "company_signed_date"].options=option_arr_Contracts;

field_defs_Contracts[ "customer_signed_date"] = {"name":"customer_signed_date","vname":"Customer Signed Date","type":"date","enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "customer_signed_date"].options=option_arr_Contracts;

field_defs_Contracts[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "date_entered"].options=option_arr_Contracts;

field_defs_Contracts[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "date_modified"].options=option_arr_Contracts;

field_defs_Contracts[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Contracts[ "end_date"] = {"name":"end_date","vname":"End Date","type":"date","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "end_date"].options=option_arr_Contracts;

field_defs_Contracts[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Contracts[ "name"] = {"name":"name","vname":"Contract Name","dbType":"varchar","type":"name","len":"255","required":true,"importable":"required","unified_search":true};field_defs_Contracts[ "reference_code"] = {"name":"reference_code","vname":"Reference Code","type":"varchar","len":"255"};field_defs_Contracts[ "start_date"] = {"name":"start_date","vname":"Start Date","type":"date","audited":true,"enable_range_search":true,"options":"date_range_search_dom"};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"=", "text":"Equals"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"greater_than", "text":"After"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"less_than", "text":"Before"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"between", "text":"Is Between"};

field_defs_Contracts[ "start_date"].options=option_arr_Contracts;

field_defs_Contracts[ "status"] = {"name":"status","vname":"Status","type":"enum","len":100,"required":true,"options":"contract_status_dom","audited":true,"importable":"required"};var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"notstarted", "text":"Not Started"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"inprogress", "text":"In Progress"};
option_arr_Contracts[option_arr_Contracts.length] = { "value":"signed", "text":"Signed"};

field_defs_Contracts[ "status"].options=option_arr_Contracts;

field_defs_Contracts[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Contracts[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Contracts[ "total_contract_value"] = {"name":"total_contract_value","vname":"Contract Value","dbType":"decimal","type":"currency","len":"26,6","convertToBase":true};field_defs_Contracts[ "total_contract_value_usdollar"] = {"name":"total_contract_value_usdollar","vname":"Contract Value (USD)","dbType":"decimal","type":"currency","len":"26,6","readonly":true,"is_base_currency":true,"calculated":true,"enforced":true};field_defs_Contracts[ "type"] = {"name":"type","vname":"Type","type":"enum","function":"getContractTypesDropDown","merge_filter":"enabled","duplicate_merge":"disabled"};                    var option_arr_Contracts = new Array();

option_arr_Contracts[option_arr_Contracts.length] = { "value":"", "text":""};
field_defs_Contracts[ "type"].options=option_arr_Contracts;
var default_table_columns_Contracts = [""];




module_defs['Contracts'] = new Object();
module_defs['Contracts'].link_defs = link_defs_Contracts;
module_defs['Contracts'].field_defs = field_defs_Contracts;
module_defs['Contracts'].default_table_columns = default_table_columns_Contracts;
module_defs['Contracts'].summary_field_defs = new Object();
module_defs['Contracts'].group_by_field_defs = new Object();
module_defs['Contracts'].default_summary_columns = default_summary_columns;
module_defs['Contracts'].label = "Contracts";

var rel_defs = new Object();
var link_defs_Shifts = new Object();
link_defs_Shifts[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"shifts_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Shifts[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"shifts_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Shifts[ 'activities' ] = {"name":"activities","relationship_name":"shift_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Shifts[ 'shifts_users' ] = {"name":"shifts_users","relationship_name":"shifts_users","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_Shifts[ 'tag_link' ] = {"name":"tag_link","relationship_name":"shifts_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Shifts[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"shifts_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Shifts[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"shifts_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Shifts[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"shifts_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Shifts[ 'team_link' ] = {"name":"team_link","relationship_name":"shifts_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Shifts = new Object();
field_defs_Shifts[ "date_end"] = {"name":"date_end","vname":"End Date","type":"date","dbType":"date","required":true,"audited":true};field_defs_Shifts[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"=", "text":"Equals"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"greater_than", "text":"After"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"less_than", "text":"Before"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"between", "text":"Is Between"};

field_defs_Shifts[ "date_entered"].options=option_arr_Shifts;

field_defs_Shifts[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"=", "text":"Equals"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"greater_than", "text":"After"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"less_than", "text":"Before"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"this_month", "text":"This Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"this_year", "text":"This Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"between", "text":"Is Between"};

field_defs_Shifts[ "date_modified"].options=option_arr_Shifts;

field_defs_Shifts[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"date","dbType":"date","required":true,"audited":true};field_defs_Shifts[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Shifts[ "friday_close_hour"] = {"name":"friday_close_hour","vname":"Hour closed on Friday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"friday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "friday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "friday_close_minutes"] = {"name":"friday_close_minutes","vname":"Minutes closed on Friday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"friday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "friday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "friday_open_hour"] = {"name":"friday_open_hour","vname":"Hour open on Friday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"friday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "friday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "friday_open_minutes"] = {"name":"friday_open_minutes","vname":"Minutes open on Friday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"friday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "friday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Shifts[ "is_open_friday"] = {"name":"is_open_friday","vname":"Friday Hours","type":"bool","group":"friday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_monday"] = {"name":"is_open_monday","vname":"Monday Hours","type":"bool","group":"monday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_saturday"] = {"name":"is_open_saturday","vname":"Saturday Hours","type":"bool","group":"saturday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_sunday"] = {"name":"is_open_sunday","vname":"Sunday Hours","type":"bool","group":"sunday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_thursday"] = {"name":"is_open_thursday","vname":"Thursday Hours","type":"bool","group":"thursday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_tuesday"] = {"name":"is_open_tuesday","vname":"Tuesday Hours","type":"bool","group":"tuesday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "is_open_wednesday"] = {"name":"is_open_wednesday","vname":"Wednesday Hours","type":"bool","group":"wednesday_hours","duplicate_on_record_copy":"no","audited":true};field_defs_Shifts[ "monday_close_hour"] = {"name":"monday_close_hour","vname":"Hour closed on Monday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"monday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "monday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "monday_close_minutes"] = {"name":"monday_close_minutes","vname":"Minutes closed on Monday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"monday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "monday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "monday_open_hour"] = {"name":"monday_open_hour","vname":"Hour open on Monday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"monday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "monday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "monday_open_minutes"] = {"name":"monday_open_minutes","vname":"Minutes open on Monday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"monday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "monday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_Shifts[ "saturday_close_hour"] = {"name":"saturday_close_hour","vname":"Hour closed on Saturday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"saturday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "saturday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "saturday_close_minutes"] = {"name":"saturday_close_minutes","vname":"Minutes closed on Saturday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"saturday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "saturday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "saturday_open_hour"] = {"name":"saturday_open_hour","vname":"Hour open on Saturday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"saturday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "saturday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "saturday_open_minutes"] = {"name":"saturday_open_minutes","vname":"Minutes open on Saturday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"saturday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "saturday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "sunday_close_hour"] = {"name":"sunday_close_hour","vname":"Hour closed on Sunday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"sunday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "sunday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "sunday_close_minutes"] = {"name":"sunday_close_minutes","vname":"Minutes closed on Sunday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"sunday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "sunday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "sunday_open_hour"] = {"name":"sunday_open_hour","vname":"Hour open on Sunday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"sunday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "sunday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "sunday_open_minutes"] = {"name":"sunday_open_minutes","vname":"Minutes open on Sunday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"sunday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "sunday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Shifts[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_Shifts[ "thursday_close_hour"] = {"name":"thursday_close_hour","vname":"Hour closed on Thursday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"thursday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "thursday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "thursday_close_minutes"] = {"name":"thursday_close_minutes","vname":"Minutes closed on Thursday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"thursday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "thursday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "thursday_open_hour"] = {"name":"thursday_open_hour","vname":"Hour open on Thursday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"thursday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "thursday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "thursday_open_minutes"] = {"name":"thursday_open_minutes","vname":"Minutes open on Thursday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"thursday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "thursday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "timezone"] = {"name":"timezone","vname":"Time Zone","type":"enum","options":"timezone_dom","required":true,"audited":true};var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Algiers", "text":"Africa/Algiers"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Luanda", "text":"Africa/Luanda"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Porto-Novo", "text":"Africa/Porto-Novo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Gaborone", "text":"Africa/Gaborone"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Ouagadougou", "text":"Africa/Ouagadougou"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Bujumbura", "text":"Africa/Bujumbura"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Douala", "text":"Africa/Douala"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Cape_Verde", "text":"Atlantic/Cape_Verde"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Bangui", "text":"Africa/Bangui"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Ndjamena", "text":"Africa/Ndjamena"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Comoro", "text":"Indian/Comoro"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Kinshasa", "text":"Africa/Kinshasa"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Lubumbashi", "text":"Africa/Lubumbashi"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Brazzaville", "text":"Africa/Brazzaville"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Abidjan", "text":"Africa/Abidjan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Djibouti", "text":"Africa/Djibouti"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Cairo", "text":"Africa/Cairo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Malabo", "text":"Africa/Malabo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Asmera", "text":"Africa/Asmera"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Addis_Ababa", "text":"Africa/Addis_Ababa"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Libreville", "text":"Africa/Libreville"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Banjul", "text":"Africa/Banjul"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Accra", "text":"Africa/Accra"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Conakry", "text":"Africa/Conakry"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Bissau", "text":"Africa/Bissau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Nairobi", "text":"Africa/Nairobi"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Maseru", "text":"Africa/Maseru"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Monrovia", "text":"Africa/Monrovia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Tripoli", "text":"Africa/Tripoli"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Antananarivo", "text":"Indian/Antananarivo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Blantyre", "text":"Africa/Blantyre"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Bamako", "text":"Africa/Bamako"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Nouakchott", "text":"Africa/Nouakchott"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Mauritius", "text":"Indian/Mauritius"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Mayotte", "text":"Indian/Mayotte"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Casablanca", "text":"Africa/Casablanca"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/El_Aaiun", "text":"Africa/El_Aaiun"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Maputo", "text":"Africa/Maputo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Windhoek", "text":"Africa/Windhoek"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Niamey", "text":"Africa/Niamey"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Lagos", "text":"Africa/Lagos"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Reunion", "text":"Indian/Reunion"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Kigali", "text":"Africa/Kigali"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/St_Helena", "text":"Atlantic/St_Helena"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Sao_Tome", "text":"Africa/Sao_Tome"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Dakar", "text":"Africa/Dakar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Mahe", "text":"Indian/Mahe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Freetown", "text":"Africa/Freetown"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Mogadishu", "text":"Africa/Mogadishu"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Johannesburg", "text":"Africa/Johannesburg"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Khartoum", "text":"Africa/Khartoum"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Mbabane", "text":"Africa/Mbabane"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Dar_es_Salaam", "text":"Africa/Dar_es_Salaam"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Lome", "text":"Africa/Lome"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Tunis", "text":"Africa/Tunis"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Kampala", "text":"Africa/Kampala"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Lusaka", "text":"Africa/Lusaka"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Harare", "text":"Africa/Harare"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Casey", "text":"Antarctica/Casey"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Davis", "text":"Antarctica/Davis"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Mawson", "text":"Antarctica/Mawson"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Kerguelen", "text":"Indian/Kerguelen"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/DumontDUrville", "text":"Antarctica/DumontDUrville"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Syowa", "text":"Antarctica/Syowa"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Vostok", "text":"Antarctica/Vostok"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Rothera", "text":"Antarctica/Rothera"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/Palmer", "text":"Antarctica/Palmer"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Antarctica/McMurdo", "text":"Antarctica/McMurdo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kabul", "text":"Asia/Kabul"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Yerevan", "text":"Asia/Yerevan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Baku", "text":"Asia/Baku"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Bahrain", "text":"Asia/Bahrain"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Dhaka", "text":"Asia/Dhaka"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Thimphu", "text":"Asia/Thimphu"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Chagos", "text":"Indian/Chagos"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Brunei", "text":"Asia/Brunei"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Rangoon", "text":"Asia/Rangoon"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Phnom_Penh", "text":"Asia/Phnom_Penh"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Beijing", "text":"Asia/Beijing"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Harbin", "text":"Asia/Harbin"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Shanghai", "text":"Asia/Shanghai"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Chongqing", "text":"Asia/Chongqing"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Urumqi", "text":"Asia/Urumqi"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kashgar", "text":"Asia/Kashgar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Hong_Kong", "text":"Asia/Hong_Kong"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Taipei", "text":"Asia/Taipei"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Macau", "text":"Asia/Macau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Nicosia", "text":"Asia/Nicosia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Tbilisi", "text":"Asia/Tbilisi"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Dili", "text":"Asia/Dili"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Calcutta", "text":"Asia/Calcutta"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Jakarta", "text":"Asia/Jakarta"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Pontianak", "text":"Asia/Pontianak"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Makassar", "text":"Asia/Makassar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Jayapura", "text":"Asia/Jayapura"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Tehran", "text":"Asia/Tehran"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Baghdad", "text":"Asia/Baghdad"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Jerusalem", "text":"Asia/Jerusalem"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Tokyo", "text":"Asia/Tokyo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Amman", "text":"Asia/Amman"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Almaty", "text":"Asia/Almaty"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Qyzylorda", "text":"Asia/Qyzylorda"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Aqtobe", "text":"Asia/Aqtobe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Aqtau", "text":"Asia/Aqtau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Oral", "text":"Asia/Oral"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Bishkek", "text":"Asia/Bishkek"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Seoul", "text":"Asia/Seoul"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Pyongyang", "text":"Asia/Pyongyang"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kuwait", "text":"Asia/Kuwait"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Vientiane", "text":"Asia/Vientiane"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Beirut", "text":"Asia/Beirut"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kuala_Lumpur", "text":"Asia/Kuala_Lumpur"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kuching", "text":"Asia/Kuching"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Maldives", "text":"Indian/Maldives"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Hovd", "text":"Asia/Hovd"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Ulaanbaatar", "text":"Asia/Ulaanbaatar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Choibalsan", "text":"Asia/Choibalsan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Katmandu", "text":"Asia/Katmandu"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Muscat", "text":"Asia/Muscat"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Karachi", "text":"Asia/Karachi"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Gaza", "text":"Asia/Gaza"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Manila", "text":"Asia/Manila"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Qatar", "text":"Asia/Qatar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Riyadh", "text":"Asia/Riyadh"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Singapore", "text":"Asia/Singapore"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Colombo", "text":"Asia/Colombo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Damascus", "text":"Asia/Damascus"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Dushanbe", "text":"Asia/Dushanbe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Bangkok", "text":"Asia/Bangkok"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Ashgabat", "text":"Asia/Ashgabat"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Dubai", "text":"Asia/Dubai"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Samarkand", "text":"Asia/Samarkand"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Tashkent", "text":"Asia/Tashkent"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Saigon", "text":"Asia/Saigon"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Aden", "text":"Asia/Aden"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Darwin", "text":"Australia/Darwin"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Perth", "text":"Australia/Perth"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Brisbane", "text":"Australia/Brisbane"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Lindeman", "text":"Australia/Lindeman"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Adelaide", "text":"Australia/Adelaide"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Hobart", "text":"Australia/Hobart"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Currie", "text":"Australia/Currie"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Melbourne", "text":"Australia/Melbourne"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Sydney", "text":"Australia/Sydney"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Australia/Broken_Hill", "text":"Australia/Broken_Hill"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Christmas", "text":"Indian/Christmas"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Rarotonga", "text":"Pacific/Rarotonga"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Indian/Cocos", "text":"Indian/Cocos"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Fiji", "text":"Pacific/Fiji"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Gambier", "text":"Pacific/Gambier"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Marquesas", "text":"Pacific/Marquesas"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Tahiti", "text":"Pacific/Tahiti"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Guam", "text":"Pacific/Guam"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Tarawa", "text":"Pacific/Tarawa"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Enderbury", "text":"Pacific/Enderbury"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Kiritimati", "text":"Pacific/Kiritimati"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Saipan", "text":"Pacific/Saipan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Majuro", "text":"Pacific/Majuro"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Kwajalein", "text":"Pacific/Kwajalein"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Truk", "text":"Pacific/Truk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Ponape", "text":"Pacific/Ponape"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Kosrae", "text":"Pacific/Kosrae"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Nauru", "text":"Pacific/Nauru"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Noumea", "text":"Pacific/Noumea"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Auckland", "text":"Pacific/Auckland"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Chatham", "text":"Pacific/Chatham"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Niue", "text":"Pacific/Niue"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Norfolk", "text":"Pacific/Norfolk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Palau", "text":"Pacific/Palau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Port_Moresby", "text":"Pacific/Port_Moresby"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Pitcairn", "text":"Pacific/Pitcairn"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Pago_Pago", "text":"Pacific/Pago_Pago"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Apia", "text":"Pacific/Apia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Guadalcanal", "text":"Pacific/Guadalcanal"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Fakaofo", "text":"Pacific/Fakaofo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Tongatapu", "text":"Pacific/Tongatapu"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Funafuti", "text":"Pacific/Funafuti"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Johnston", "text":"Pacific/Johnston"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Midway", "text":"Pacific/Midway"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Wake", "text":"Pacific/Wake"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Efate", "text":"Pacific/Efate"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Wallis", "text":"Pacific/Wallis"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/London", "text":"Europe/London"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Dublin", "text":"Europe/Dublin"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"WET", "text":"WET"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"CET", "text":"CET"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"MET", "text":"MET"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"EET", "text":"EET"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Tirane", "text":"Europe/Tirane"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Andorra", "text":"Europe/Andorra"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Vienna", "text":"Europe/Vienna"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Minsk", "text":"Europe/Minsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Brussels", "text":"Europe/Brussels"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Sofia", "text":"Europe/Sofia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Prague", "text":"Europe/Prague"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Copenhagen", "text":"Europe/Copenhagen"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Faeroe", "text":"Atlantic/Faeroe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Danmarkshavn", "text":"America/Danmarkshavn"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Scoresbysund", "text":"America/Scoresbysund"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Godthab", "text":"America/Godthab"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Thule", "text":"America/Thule"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Tallinn", "text":"Europe/Tallinn"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Helsinki", "text":"Europe/Helsinki"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Paris", "text":"Europe/Paris"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Berlin", "text":"Europe/Berlin"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Gibraltar", "text":"Europe/Gibraltar"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Athens", "text":"Europe/Athens"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Budapest", "text":"Europe/Budapest"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Reykjavik", "text":"Atlantic/Reykjavik"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Rome", "text":"Europe/Rome"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Riga", "text":"Europe/Riga"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Vaduz", "text":"Europe/Vaduz"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Vilnius", "text":"Europe/Vilnius"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Luxembourg", "text":"Europe/Luxembourg"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Malta", "text":"Europe/Malta"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Chisinau", "text":"Europe/Chisinau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Monaco", "text":"Europe/Monaco"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Amsterdam", "text":"Europe/Amsterdam"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Oslo", "text":"Europe/Oslo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Warsaw", "text":"Europe/Warsaw"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Lisbon", "text":"Europe/Lisbon"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Azores", "text":"Atlantic/Azores"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Madeira", "text":"Atlantic/Madeira"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Bucharest", "text":"Europe/Bucharest"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Kaliningrad", "text":"Europe/Kaliningrad"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Moscow", "text":"Europe/Moscow"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Samara", "text":"Europe/Samara"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Yekaterinburg", "text":"Asia/Yekaterinburg"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Omsk", "text":"Asia/Omsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Novosibirsk", "text":"Asia/Novosibirsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Krasnoyarsk", "text":"Asia/Krasnoyarsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Irkutsk", "text":"Asia/Irkutsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Yakutsk", "text":"Asia/Yakutsk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Vladivostok", "text":"Asia/Vladivostok"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Sakhalin", "text":"Asia/Sakhalin"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Magadan", "text":"Asia/Magadan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Kamchatka", "text":"Asia/Kamchatka"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Asia/Anadyr", "text":"Asia/Anadyr"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Belgrade", "text":"Europe/Belgrade"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Madrid", "text":"Europe/Madrid"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Africa/Ceuta", "text":"Africa/Ceuta"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Canary", "text":"Atlantic/Canary"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Stockholm", "text":"Europe/Stockholm"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Zurich", "text":"Europe/Zurich"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Istanbul", "text":"Europe/Istanbul"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Kiev", "text":"Europe/Kiev"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Uzhgorod", "text":"Europe/Uzhgorod"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Zaporozhye", "text":"Europe/Zaporozhye"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Europe/Simferopol", "text":"Europe/Simferopol"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/New_York", "text":"America/New_York"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Chicago", "text":"America/Chicago"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/North_Dakota/Center", "text":"America/North_Dakota/Center"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Denver", "text":"America/Denver"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Los_Angeles", "text":"America/Los_Angeles"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Juneau", "text":"America/Juneau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Yakutat", "text":"America/Yakutat"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Anchorage", "text":"America/Anchorage"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Nome", "text":"America/Nome"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Adak", "text":"America/Adak"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Honolulu", "text":"Pacific/Honolulu"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Phoenix", "text":"America/Phoenix"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Boise", "text":"America/Boise"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Indiana/Indianapolis", "text":"America/Indiana/Indianapolis"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Indiana/Marengo", "text":"America/Indiana/Marengo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Indiana/Knox", "text":"America/Indiana/Knox"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Indiana/Vevay", "text":"America/Indiana/Vevay"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Kentucky/Louisville", "text":"America/Kentucky/Louisville"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Kentucky/Monticello", "text":"America/Kentucky/Monticello"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Detroit", "text":"America/Detroit"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Menominee", "text":"America/Menominee"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/St_Johns", "text":"America/St_Johns"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Goose_Bay", "text":"America/Goose_Bay"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Halifax", "text":"America/Halifax"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Glace_Bay", "text":"America/Glace_Bay"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Montreal", "text":"America/Montreal"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Toronto", "text":"America/Toronto"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Thunder_Bay", "text":"America/Thunder_Bay"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Nipigon", "text":"America/Nipigon"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Rainy_River", "text":"America/Rainy_River"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Winnipeg", "text":"America/Winnipeg"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Regina", "text":"America/Regina"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Swift_Current", "text":"America/Swift_Current"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Edmonton", "text":"America/Edmonton"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Vancouver", "text":"America/Vancouver"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Dawson_Creek", "text":"America/Dawson_Creek"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Pangnirtung", "text":"America/Pangnirtung"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Iqaluit", "text":"America/Iqaluit"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Coral_Harbour", "text":"America/Coral_Harbour"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Rankin_Inlet", "text":"America/Rankin_Inlet"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Cambridge_Bay", "text":"America/Cambridge_Bay"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Yellowknife", "text":"America/Yellowknife"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Inuvik", "text":"America/Inuvik"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Whitehorse", "text":"America/Whitehorse"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Dawson", "text":"America/Dawson"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Cancun", "text":"America/Cancun"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Merida", "text":"America/Merida"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Monterrey", "text":"America/Monterrey"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Mexico_City", "text":"America/Mexico_City"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Chihuahua", "text":"America/Chihuahua"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Hermosillo", "text":"America/Hermosillo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Mazatlan", "text":"America/Mazatlan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Tijuana", "text":"America/Tijuana"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Anguilla", "text":"America/Anguilla"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Antigua", "text":"America/Antigua"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Nassau", "text":"America/Nassau"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Barbados", "text":"America/Barbados"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Belize", "text":"America/Belize"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Bermuda", "text":"Atlantic/Bermuda"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Cayman", "text":"America/Cayman"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Costa_Rica", "text":"America/Costa_Rica"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Havana", "text":"America/Havana"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Dominica", "text":"America/Dominica"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Santo_Domingo", "text":"America/Santo_Domingo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/El_Salvador", "text":"America/El_Salvador"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Grenada", "text":"America/Grenada"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Guadeloupe", "text":"America/Guadeloupe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Guatemala", "text":"America/Guatemala"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Port-au-Prince", "text":"America/Port-au-Prince"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Tegucigalpa", "text":"America/Tegucigalpa"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Jamaica", "text":"America/Jamaica"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Martinique", "text":"America/Martinique"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Montserrat", "text":"America/Montserrat"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Managua", "text":"America/Managua"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Panama", "text":"America/Panama"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Puerto_Rico", "text":"America/Puerto_Rico"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/St_Kitts", "text":"America/St_Kitts"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/St_Lucia", "text":"America/St_Lucia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Miquelon", "text":"America/Miquelon"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/St_Vincent", "text":"America/St_Vincent"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Grand_Turk", "text":"America/Grand_Turk"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Tortola", "text":"America/Tortola"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/St_Thomas", "text":"America/St_Thomas"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Buenos_Aires", "text":"America/Argentina/Buenos_Aires"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Cordoba", "text":"America/Argentina/Cordoba"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Tucuman", "text":"America/Argentina/Tucuman"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/La_Rioja", "text":"America/Argentina/La_Rioja"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/San_Juan", "text":"America/Argentina/San_Juan"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Jujuy", "text":"America/Argentina/Jujuy"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Catamarca", "text":"America/Argentina/Catamarca"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Mendoza", "text":"America/Argentina/Mendoza"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Rio_Gallegos", "text":"America/Argentina/Rio_Gallegos"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Argentina/Ushuaia", "text":"America/Argentina/Ushuaia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Aruba", "text":"America/Aruba"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/La_Paz", "text":"America/La_Paz"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Noronha", "text":"America/Noronha"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Belem", "text":"America/Belem"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Fortaleza", "text":"America/Fortaleza"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Recife", "text":"America/Recife"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Araguaina", "text":"America/Araguaina"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Maceio", "text":"America/Maceio"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Bahia", "text":"America/Bahia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Sao_Paulo", "text":"America/Sao_Paulo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Campo_Grande", "text":"America/Campo_Grande"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Cuiaba", "text":"America/Cuiaba"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Porto_Velho", "text":"America/Porto_Velho"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Boa_Vista", "text":"America/Boa_Vista"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Manaus", "text":"America/Manaus"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Eirunepe", "text":"America/Eirunepe"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Rio_Branco", "text":"America/Rio_Branco"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Santiago", "text":"America/Santiago"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Easter", "text":"Pacific/Easter"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Bogota", "text":"America/Bogota"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Curacao", "text":"America/Curacao"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Guayaquil", "text":"America/Guayaquil"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Pacific/Galapagos", "text":"Pacific/Galapagos"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/Stanley", "text":"Atlantic/Stanley"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Cayenne", "text":"America/Cayenne"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Guyana", "text":"America/Guyana"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Asuncion", "text":"America/Asuncion"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Lima", "text":"America/Lima"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"Atlantic/South_Georgia", "text":"Atlantic/South_Georgia"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Paramaribo", "text":"America/Paramaribo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Port_of_Spain", "text":"America/Port_of_Spain"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Montevideo", "text":"America/Montevideo"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"America/Caracas", "text":"America/Caracas"};

field_defs_Shifts[ "timezone"].options=option_arr_Shifts;

field_defs_Shifts[ "tuesday_close_hour"] = {"name":"tuesday_close_hour","vname":"Hour closed on Tuesday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"tuesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "tuesday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "tuesday_close_minutes"] = {"name":"tuesday_close_minutes","vname":"Minutes closed on Tuesday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"tuesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "tuesday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "tuesday_open_hour"] = {"name":"tuesday_open_hour","vname":"Hour open on Tuesday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"tuesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "tuesday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "tuesday_open_minutes"] = {"name":"tuesday_open_minutes","vname":"Minutes open on Tuesday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"tuesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "tuesday_open_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "wednesday_close_hour"] = {"name":"wednesday_close_hour","vname":"Hour closed on Wednesday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"wednesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "wednesday_close_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "wednesday_close_minutes"] = {"name":"wednesday_close_minutes","vname":"Minutes closed on Wednesday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"wednesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "wednesday_close_minutes"].options=option_arr_Shifts;
field_defs_Shifts[ "wednesday_open_hour"] = {"name":"wednesday_open_hour","vname":"Hour open on Wednesday","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"wednesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
field_defs_Shifts[ "wednesday_open_hour"].options=option_arr_Shifts;
field_defs_Shifts[ "wednesday_open_minutes"] = {"name":"wednesday_open_minutes","vname":"Minutes open on Wednesday","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"wednesday_hours","merge_filter":"enabled","audited":true};                    var option_arr_Shifts = new Array();

option_arr_Shifts[option_arr_Shifts.length] = { "value":"0", "text":"00"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"1", "text":"01"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"2", "text":"02"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"3", "text":"03"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"4", "text":"04"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"5", "text":"05"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"6", "text":"06"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"7", "text":"07"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"8", "text":"08"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"9", "text":"09"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"10", "text":"10"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"11", "text":"11"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"12", "text":"12"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"13", "text":"13"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"14", "text":"14"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"15", "text":"15"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"16", "text":"16"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"17", "text":"17"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"18", "text":"18"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"19", "text":"19"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"20", "text":"20"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"21", "text":"21"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"22", "text":"22"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"23", "text":"23"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"24", "text":"24"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"25", "text":"25"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"26", "text":"26"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"27", "text":"27"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"28", "text":"28"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"29", "text":"29"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"30", "text":"30"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"31", "text":"31"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"32", "text":"32"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"33", "text":"33"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"34", "text":"34"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"35", "text":"35"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"36", "text":"36"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"37", "text":"37"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"38", "text":"38"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"39", "text":"39"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"40", "text":"40"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"41", "text":"41"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"42", "text":"42"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"43", "text":"43"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"44", "text":"44"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"45", "text":"45"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"46", "text":"46"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"47", "text":"47"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"48", "text":"48"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"49", "text":"49"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"50", "text":"50"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"51", "text":"51"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"52", "text":"52"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"53", "text":"53"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"54", "text":"54"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"55", "text":"55"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"56", "text":"56"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"57", "text":"57"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"58", "text":"58"};
option_arr_Shifts[option_arr_Shifts.length] = { "value":"59", "text":"59"};
field_defs_Shifts[ "wednesday_open_minutes"].options=option_arr_Shifts;
var default_table_columns_Shifts = [""];




module_defs['Shifts'] = new Object();
module_defs['Shifts'].link_defs = link_defs_Shifts;
module_defs['Shifts'].field_defs = field_defs_Shifts;
module_defs['Shifts'].default_table_columns = default_table_columns_Shifts;
module_defs['Shifts'].summary_field_defs = new Object();
module_defs['Shifts'].group_by_field_defs = new Object();
module_defs['Shifts'].default_summary_columns = default_summary_columns;
module_defs['Shifts'].label = "Shifts";

var rel_defs = new Object();
var link_defs_ShiftExceptions = new Object();
link_defs_ShiftExceptions[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"shiftexceptions_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ShiftExceptions[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"shiftexceptions_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ShiftExceptions[ 'activities' ] = {"name":"activities","relationship_name":"shiftexception_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_ShiftExceptions[ 'shift_exceptions_users' ] = {"name":"shift_exceptions_users","relationship_name":"shift_exceptions_users","bean_is_lhs":true,"link_type":"many","label":"Users","module":"Users"};
link_defs_ShiftExceptions[ 'tag_link' ] = {"name":"tag_link","relationship_name":"shiftexceptions_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_ShiftExceptions[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"shiftexceptions_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_ShiftExceptions[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"shiftexceptions_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_ShiftExceptions[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"shiftexceptions_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_ShiftExceptions[ 'team_link' ] = {"name":"team_link","relationship_name":"shiftexceptions_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_ShiftExceptions = new Object();
field_defs_ShiftExceptions[ "all_day"] = {"name":"all_day","vname":"All Day","type":"bool","duplicate_on_record_copy":"always","audited":true};field_defs_ShiftExceptions[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"=", "text":"Equals"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"greater_than", "text":"After"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"less_than", "text":"Before"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"this_month", "text":"This Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"this_year", "text":"This Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"between", "text":"Is Between"};

field_defs_ShiftExceptions[ "date_entered"].options=option_arr_ShiftExceptions;

field_defs_ShiftExceptions[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"=", "text":"Equals"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"greater_than", "text":"After"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"less_than", "text":"Before"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"this_month", "text":"This Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"this_year", "text":"This Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"between", "text":"Is Between"};

field_defs_ShiftExceptions[ "date_modified"].options=option_arr_ShiftExceptions;

field_defs_ShiftExceptions[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_ShiftExceptions[ "enabled"] = {"name":"enabled","vname":"Enabled","type":"bool","audited":true,"duplicate_on_record_copy":"always"};field_defs_ShiftExceptions[ "end_date"] = {"name":"end_date","vname":"End Date","type":"date","required":true,"audited":true};field_defs_ShiftExceptions[ "end_hour"] = {"name":"end_hour","vname":"End Hour","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"end_hours","merge_filter":"enabled","required":true,"audited":true};                    var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"0", "text":"00"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"1", "text":"01"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"2", "text":"02"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"3", "text":"03"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"4", "text":"04"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"5", "text":"05"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"6", "text":"06"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"7", "text":"07"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"8", "text":"08"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"9", "text":"09"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"10", "text":"10"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"11", "text":"11"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"12", "text":"12"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"13", "text":"13"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"14", "text":"14"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"15", "text":"15"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"16", "text":"16"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"17", "text":"17"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"18", "text":"18"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"19", "text":"19"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"20", "text":"20"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"21", "text":"21"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"22", "text":"22"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"23", "text":"23"};
field_defs_ShiftExceptions[ "end_hour"].options=option_arr_ShiftExceptions;
field_defs_ShiftExceptions[ "end_minutes"] = {"name":"end_minutes","vname":"End Minutes","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"end_hours","merge_filter":"enabled","required":true,"audited":true};                    var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"0", "text":"00"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"1", "text":"01"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"2", "text":"02"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"3", "text":"03"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"4", "text":"04"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"5", "text":"05"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"6", "text":"06"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"7", "text":"07"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"8", "text":"08"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"9", "text":"09"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"10", "text":"10"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"11", "text":"11"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"12", "text":"12"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"13", "text":"13"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"14", "text":"14"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"15", "text":"15"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"16", "text":"16"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"17", "text":"17"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"18", "text":"18"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"19", "text":"19"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"20", "text":"20"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"21", "text":"21"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"22", "text":"22"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"23", "text":"23"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"24", "text":"24"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"25", "text":"25"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"26", "text":"26"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"27", "text":"27"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"28", "text":"28"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"29", "text":"29"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"30", "text":"30"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"31", "text":"31"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"32", "text":"32"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"33", "text":"33"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"34", "text":"34"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"35", "text":"35"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"36", "text":"36"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"37", "text":"37"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"38", "text":"38"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"39", "text":"39"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"40", "text":"40"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"41", "text":"41"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"42", "text":"42"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"43", "text":"43"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"44", "text":"44"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"45", "text":"45"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"46", "text":"46"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"47", "text":"47"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"48", "text":"48"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"49", "text":"49"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"50", "text":"50"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"51", "text":"51"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"52", "text":"52"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"53", "text":"53"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"54", "text":"54"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"55", "text":"55"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"56", "text":"56"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"57", "text":"57"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"58", "text":"58"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"59", "text":"59"};
field_defs_ShiftExceptions[ "end_minutes"].options=option_arr_ShiftExceptions;
field_defs_ShiftExceptions[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_ShiftExceptions[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_ShiftExceptions[ "shift_exception_type"] = {"name":"shift_exception_type","vname":"Type","type":"enum","options":"shift_exception_type_dom","len":50,"duplicate_on_record_copy":"always","required":true,"audited":true};var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"time_off", "text":"Time Off"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"event", "text":"Event"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"other", "text":"Other"};

field_defs_ShiftExceptions[ "shift_exception_type"].options=option_arr_ShiftExceptions;

field_defs_ShiftExceptions[ "start_date"] = {"name":"start_date","vname":"Start Date","type":"date","required":true,"audited":true};field_defs_ShiftExceptions[ "start_hour"] = {"name":"start_hour","vname":"Start Hour","type":"enum","function":"getHoursDropdown","function_bean":"BusinessCenters","len":2,"group":"star_hours","merge_filter":"enabled","required":true,"audited":true};                    var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"0", "text":"00"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"1", "text":"01"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"2", "text":"02"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"3", "text":"03"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"4", "text":"04"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"5", "text":"05"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"6", "text":"06"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"7", "text":"07"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"8", "text":"08"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"9", "text":"09"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"10", "text":"10"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"11", "text":"11"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"12", "text":"12"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"13", "text":"13"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"14", "text":"14"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"15", "text":"15"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"16", "text":"16"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"17", "text":"17"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"18", "text":"18"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"19", "text":"19"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"20", "text":"20"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"21", "text":"21"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"22", "text":"22"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"23", "text":"23"};
field_defs_ShiftExceptions[ "start_hour"].options=option_arr_ShiftExceptions;
field_defs_ShiftExceptions[ "start_minutes"] = {"name":"start_minutes","vname":"Start Minutes","type":"enum","function":"getMinutesDropdown","function_bean":"BusinessCenters","len":2,"group":"start_hours","merge_filter":"enabled","required":true,"audited":true};                    var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"0", "text":"00"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"1", "text":"01"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"2", "text":"02"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"3", "text":"03"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"4", "text":"04"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"5", "text":"05"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"6", "text":"06"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"7", "text":"07"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"8", "text":"08"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"9", "text":"09"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"10", "text":"10"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"11", "text":"11"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"12", "text":"12"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"13", "text":"13"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"14", "text":"14"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"15", "text":"15"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"16", "text":"16"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"17", "text":"17"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"18", "text":"18"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"19", "text":"19"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"20", "text":"20"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"21", "text":"21"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"22", "text":"22"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"23", "text":"23"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"24", "text":"24"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"25", "text":"25"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"26", "text":"26"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"27", "text":"27"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"28", "text":"28"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"29", "text":"29"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"30", "text":"30"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"31", "text":"31"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"32", "text":"32"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"33", "text":"33"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"34", "text":"34"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"35", "text":"35"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"36", "text":"36"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"37", "text":"37"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"38", "text":"38"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"39", "text":"39"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"40", "text":"40"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"41", "text":"41"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"42", "text":"42"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"43", "text":"43"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"44", "text":"44"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"45", "text":"45"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"46", "text":"46"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"47", "text":"47"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"48", "text":"48"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"49", "text":"49"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"50", "text":"50"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"51", "text":"51"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"52", "text":"52"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"53", "text":"53"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"54", "text":"54"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"55", "text":"55"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"56", "text":"56"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"57", "text":"57"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"58", "text":"58"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"59", "text":"59"};
field_defs_ShiftExceptions[ "start_minutes"].options=option_arr_ShiftExceptions;
field_defs_ShiftExceptions[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_ShiftExceptions[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_ShiftExceptions[ "timezone"] = {"name":"timezone","vname":"Time Zone","type":"enum","options":"timezone_dom","required":true,"audited":true};var option_arr_ShiftExceptions = new Array();

option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Algiers", "text":"Africa/Algiers"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Luanda", "text":"Africa/Luanda"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Porto-Novo", "text":"Africa/Porto-Novo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Gaborone", "text":"Africa/Gaborone"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Ouagadougou", "text":"Africa/Ouagadougou"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Bujumbura", "text":"Africa/Bujumbura"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Douala", "text":"Africa/Douala"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Cape_Verde", "text":"Atlantic/Cape_Verde"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Bangui", "text":"Africa/Bangui"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Ndjamena", "text":"Africa/Ndjamena"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Comoro", "text":"Indian/Comoro"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Kinshasa", "text":"Africa/Kinshasa"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Lubumbashi", "text":"Africa/Lubumbashi"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Brazzaville", "text":"Africa/Brazzaville"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Abidjan", "text":"Africa/Abidjan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Djibouti", "text":"Africa/Djibouti"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Cairo", "text":"Africa/Cairo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Malabo", "text":"Africa/Malabo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Asmera", "text":"Africa/Asmera"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Addis_Ababa", "text":"Africa/Addis_Ababa"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Libreville", "text":"Africa/Libreville"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Banjul", "text":"Africa/Banjul"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Accra", "text":"Africa/Accra"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Conakry", "text":"Africa/Conakry"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Bissau", "text":"Africa/Bissau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Nairobi", "text":"Africa/Nairobi"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Maseru", "text":"Africa/Maseru"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Monrovia", "text":"Africa/Monrovia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Tripoli", "text":"Africa/Tripoli"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Antananarivo", "text":"Indian/Antananarivo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Blantyre", "text":"Africa/Blantyre"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Bamako", "text":"Africa/Bamako"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Nouakchott", "text":"Africa/Nouakchott"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Mauritius", "text":"Indian/Mauritius"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Mayotte", "text":"Indian/Mayotte"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Casablanca", "text":"Africa/Casablanca"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/El_Aaiun", "text":"Africa/El_Aaiun"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Maputo", "text":"Africa/Maputo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Windhoek", "text":"Africa/Windhoek"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Niamey", "text":"Africa/Niamey"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Lagos", "text":"Africa/Lagos"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Reunion", "text":"Indian/Reunion"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Kigali", "text":"Africa/Kigali"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/St_Helena", "text":"Atlantic/St_Helena"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Sao_Tome", "text":"Africa/Sao_Tome"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Dakar", "text":"Africa/Dakar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Mahe", "text":"Indian/Mahe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Freetown", "text":"Africa/Freetown"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Mogadishu", "text":"Africa/Mogadishu"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Johannesburg", "text":"Africa/Johannesburg"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Khartoum", "text":"Africa/Khartoum"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Mbabane", "text":"Africa/Mbabane"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Dar_es_Salaam", "text":"Africa/Dar_es_Salaam"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Lome", "text":"Africa/Lome"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Tunis", "text":"Africa/Tunis"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Kampala", "text":"Africa/Kampala"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Lusaka", "text":"Africa/Lusaka"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Harare", "text":"Africa/Harare"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Casey", "text":"Antarctica/Casey"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Davis", "text":"Antarctica/Davis"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Mawson", "text":"Antarctica/Mawson"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Kerguelen", "text":"Indian/Kerguelen"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/DumontDUrville", "text":"Antarctica/DumontDUrville"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Syowa", "text":"Antarctica/Syowa"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Vostok", "text":"Antarctica/Vostok"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Rothera", "text":"Antarctica/Rothera"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/Palmer", "text":"Antarctica/Palmer"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Antarctica/McMurdo", "text":"Antarctica/McMurdo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kabul", "text":"Asia/Kabul"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Yerevan", "text":"Asia/Yerevan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Baku", "text":"Asia/Baku"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Bahrain", "text":"Asia/Bahrain"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Dhaka", "text":"Asia/Dhaka"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Thimphu", "text":"Asia/Thimphu"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Chagos", "text":"Indian/Chagos"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Brunei", "text":"Asia/Brunei"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Rangoon", "text":"Asia/Rangoon"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Phnom_Penh", "text":"Asia/Phnom_Penh"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Beijing", "text":"Asia/Beijing"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Harbin", "text":"Asia/Harbin"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Shanghai", "text":"Asia/Shanghai"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Chongqing", "text":"Asia/Chongqing"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Urumqi", "text":"Asia/Urumqi"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kashgar", "text":"Asia/Kashgar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Hong_Kong", "text":"Asia/Hong_Kong"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Taipei", "text":"Asia/Taipei"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Macau", "text":"Asia/Macau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Nicosia", "text":"Asia/Nicosia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Tbilisi", "text":"Asia/Tbilisi"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Dili", "text":"Asia/Dili"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Calcutta", "text":"Asia/Calcutta"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Jakarta", "text":"Asia/Jakarta"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Pontianak", "text":"Asia/Pontianak"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Makassar", "text":"Asia/Makassar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Jayapura", "text":"Asia/Jayapura"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Tehran", "text":"Asia/Tehran"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Baghdad", "text":"Asia/Baghdad"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Jerusalem", "text":"Asia/Jerusalem"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Tokyo", "text":"Asia/Tokyo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Amman", "text":"Asia/Amman"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Almaty", "text":"Asia/Almaty"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Qyzylorda", "text":"Asia/Qyzylorda"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Aqtobe", "text":"Asia/Aqtobe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Aqtau", "text":"Asia/Aqtau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Oral", "text":"Asia/Oral"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Bishkek", "text":"Asia/Bishkek"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Seoul", "text":"Asia/Seoul"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Pyongyang", "text":"Asia/Pyongyang"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kuwait", "text":"Asia/Kuwait"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Vientiane", "text":"Asia/Vientiane"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Beirut", "text":"Asia/Beirut"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kuala_Lumpur", "text":"Asia/Kuala_Lumpur"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kuching", "text":"Asia/Kuching"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Maldives", "text":"Indian/Maldives"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Hovd", "text":"Asia/Hovd"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Ulaanbaatar", "text":"Asia/Ulaanbaatar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Choibalsan", "text":"Asia/Choibalsan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Katmandu", "text":"Asia/Katmandu"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Muscat", "text":"Asia/Muscat"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Karachi", "text":"Asia/Karachi"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Gaza", "text":"Asia/Gaza"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Manila", "text":"Asia/Manila"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Qatar", "text":"Asia/Qatar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Riyadh", "text":"Asia/Riyadh"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Singapore", "text":"Asia/Singapore"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Colombo", "text":"Asia/Colombo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Damascus", "text":"Asia/Damascus"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Dushanbe", "text":"Asia/Dushanbe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Bangkok", "text":"Asia/Bangkok"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Ashgabat", "text":"Asia/Ashgabat"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Dubai", "text":"Asia/Dubai"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Samarkand", "text":"Asia/Samarkand"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Tashkent", "text":"Asia/Tashkent"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Saigon", "text":"Asia/Saigon"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Aden", "text":"Asia/Aden"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Darwin", "text":"Australia/Darwin"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Perth", "text":"Australia/Perth"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Brisbane", "text":"Australia/Brisbane"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Lindeman", "text":"Australia/Lindeman"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Adelaide", "text":"Australia/Adelaide"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Hobart", "text":"Australia/Hobart"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Currie", "text":"Australia/Currie"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Melbourne", "text":"Australia/Melbourne"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Sydney", "text":"Australia/Sydney"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Australia/Broken_Hill", "text":"Australia/Broken_Hill"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Christmas", "text":"Indian/Christmas"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Rarotonga", "text":"Pacific/Rarotonga"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Indian/Cocos", "text":"Indian/Cocos"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Fiji", "text":"Pacific/Fiji"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Gambier", "text":"Pacific/Gambier"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Marquesas", "text":"Pacific/Marquesas"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Tahiti", "text":"Pacific/Tahiti"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Guam", "text":"Pacific/Guam"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Tarawa", "text":"Pacific/Tarawa"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Enderbury", "text":"Pacific/Enderbury"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Kiritimati", "text":"Pacific/Kiritimati"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Saipan", "text":"Pacific/Saipan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Majuro", "text":"Pacific/Majuro"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Kwajalein", "text":"Pacific/Kwajalein"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Truk", "text":"Pacific/Truk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Ponape", "text":"Pacific/Ponape"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Kosrae", "text":"Pacific/Kosrae"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Nauru", "text":"Pacific/Nauru"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Noumea", "text":"Pacific/Noumea"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Auckland", "text":"Pacific/Auckland"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Chatham", "text":"Pacific/Chatham"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Niue", "text":"Pacific/Niue"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Norfolk", "text":"Pacific/Norfolk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Palau", "text":"Pacific/Palau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Port_Moresby", "text":"Pacific/Port_Moresby"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Pitcairn", "text":"Pacific/Pitcairn"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Pago_Pago", "text":"Pacific/Pago_Pago"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Apia", "text":"Pacific/Apia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Guadalcanal", "text":"Pacific/Guadalcanal"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Fakaofo", "text":"Pacific/Fakaofo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Tongatapu", "text":"Pacific/Tongatapu"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Funafuti", "text":"Pacific/Funafuti"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Johnston", "text":"Pacific/Johnston"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Midway", "text":"Pacific/Midway"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Wake", "text":"Pacific/Wake"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Efate", "text":"Pacific/Efate"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Wallis", "text":"Pacific/Wallis"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/London", "text":"Europe/London"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Dublin", "text":"Europe/Dublin"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"WET", "text":"WET"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"CET", "text":"CET"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"MET", "text":"MET"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"EET", "text":"EET"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Tirane", "text":"Europe/Tirane"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Andorra", "text":"Europe/Andorra"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Vienna", "text":"Europe/Vienna"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Minsk", "text":"Europe/Minsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Brussels", "text":"Europe/Brussels"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Sofia", "text":"Europe/Sofia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Prague", "text":"Europe/Prague"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Copenhagen", "text":"Europe/Copenhagen"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Faeroe", "text":"Atlantic/Faeroe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Danmarkshavn", "text":"America/Danmarkshavn"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Scoresbysund", "text":"America/Scoresbysund"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Godthab", "text":"America/Godthab"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Thule", "text":"America/Thule"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Tallinn", "text":"Europe/Tallinn"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Helsinki", "text":"Europe/Helsinki"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Paris", "text":"Europe/Paris"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Berlin", "text":"Europe/Berlin"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Gibraltar", "text":"Europe/Gibraltar"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Athens", "text":"Europe/Athens"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Budapest", "text":"Europe/Budapest"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Reykjavik", "text":"Atlantic/Reykjavik"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Rome", "text":"Europe/Rome"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Riga", "text":"Europe/Riga"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Vaduz", "text":"Europe/Vaduz"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Vilnius", "text":"Europe/Vilnius"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Luxembourg", "text":"Europe/Luxembourg"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Malta", "text":"Europe/Malta"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Chisinau", "text":"Europe/Chisinau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Monaco", "text":"Europe/Monaco"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Amsterdam", "text":"Europe/Amsterdam"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Oslo", "text":"Europe/Oslo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Warsaw", "text":"Europe/Warsaw"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Lisbon", "text":"Europe/Lisbon"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Azores", "text":"Atlantic/Azores"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Madeira", "text":"Atlantic/Madeira"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Bucharest", "text":"Europe/Bucharest"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Kaliningrad", "text":"Europe/Kaliningrad"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Moscow", "text":"Europe/Moscow"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Samara", "text":"Europe/Samara"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Yekaterinburg", "text":"Asia/Yekaterinburg"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Omsk", "text":"Asia/Omsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Novosibirsk", "text":"Asia/Novosibirsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Krasnoyarsk", "text":"Asia/Krasnoyarsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Irkutsk", "text":"Asia/Irkutsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Yakutsk", "text":"Asia/Yakutsk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Vladivostok", "text":"Asia/Vladivostok"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Sakhalin", "text":"Asia/Sakhalin"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Magadan", "text":"Asia/Magadan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Kamchatka", "text":"Asia/Kamchatka"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Asia/Anadyr", "text":"Asia/Anadyr"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Belgrade", "text":"Europe/Belgrade"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Madrid", "text":"Europe/Madrid"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Africa/Ceuta", "text":"Africa/Ceuta"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Canary", "text":"Atlantic/Canary"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Stockholm", "text":"Europe/Stockholm"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Zurich", "text":"Europe/Zurich"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Istanbul", "text":"Europe/Istanbul"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Kiev", "text":"Europe/Kiev"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Uzhgorod", "text":"Europe/Uzhgorod"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Zaporozhye", "text":"Europe/Zaporozhye"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Europe/Simferopol", "text":"Europe/Simferopol"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/New_York", "text":"America/New_York"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Chicago", "text":"America/Chicago"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/North_Dakota/Center", "text":"America/North_Dakota/Center"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Denver", "text":"America/Denver"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Los_Angeles", "text":"America/Los_Angeles"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Juneau", "text":"America/Juneau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Yakutat", "text":"America/Yakutat"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Anchorage", "text":"America/Anchorage"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Nome", "text":"America/Nome"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Adak", "text":"America/Adak"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Honolulu", "text":"Pacific/Honolulu"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Phoenix", "text":"America/Phoenix"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Boise", "text":"America/Boise"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Indiana/Indianapolis", "text":"America/Indiana/Indianapolis"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Indiana/Marengo", "text":"America/Indiana/Marengo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Indiana/Knox", "text":"America/Indiana/Knox"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Indiana/Vevay", "text":"America/Indiana/Vevay"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Kentucky/Louisville", "text":"America/Kentucky/Louisville"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Kentucky/Monticello", "text":"America/Kentucky/Monticello"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Detroit", "text":"America/Detroit"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Menominee", "text":"America/Menominee"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/St_Johns", "text":"America/St_Johns"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Goose_Bay", "text":"America/Goose_Bay"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Halifax", "text":"America/Halifax"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Glace_Bay", "text":"America/Glace_Bay"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Montreal", "text":"America/Montreal"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Toronto", "text":"America/Toronto"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Thunder_Bay", "text":"America/Thunder_Bay"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Nipigon", "text":"America/Nipigon"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Rainy_River", "text":"America/Rainy_River"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Winnipeg", "text":"America/Winnipeg"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Regina", "text":"America/Regina"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Swift_Current", "text":"America/Swift_Current"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Edmonton", "text":"America/Edmonton"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Vancouver", "text":"America/Vancouver"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Dawson_Creek", "text":"America/Dawson_Creek"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Pangnirtung", "text":"America/Pangnirtung"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Iqaluit", "text":"America/Iqaluit"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Coral_Harbour", "text":"America/Coral_Harbour"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Rankin_Inlet", "text":"America/Rankin_Inlet"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Cambridge_Bay", "text":"America/Cambridge_Bay"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Yellowknife", "text":"America/Yellowknife"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Inuvik", "text":"America/Inuvik"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Whitehorse", "text":"America/Whitehorse"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Dawson", "text":"America/Dawson"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Cancun", "text":"America/Cancun"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Merida", "text":"America/Merida"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Monterrey", "text":"America/Monterrey"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Mexico_City", "text":"America/Mexico_City"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Chihuahua", "text":"America/Chihuahua"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Hermosillo", "text":"America/Hermosillo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Mazatlan", "text":"America/Mazatlan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Tijuana", "text":"America/Tijuana"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Anguilla", "text":"America/Anguilla"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Antigua", "text":"America/Antigua"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Nassau", "text":"America/Nassau"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Barbados", "text":"America/Barbados"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Belize", "text":"America/Belize"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Bermuda", "text":"Atlantic/Bermuda"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Cayman", "text":"America/Cayman"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Costa_Rica", "text":"America/Costa_Rica"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Havana", "text":"America/Havana"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Dominica", "text":"America/Dominica"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Santo_Domingo", "text":"America/Santo_Domingo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/El_Salvador", "text":"America/El_Salvador"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Grenada", "text":"America/Grenada"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Guadeloupe", "text":"America/Guadeloupe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Guatemala", "text":"America/Guatemala"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Port-au-Prince", "text":"America/Port-au-Prince"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Tegucigalpa", "text":"America/Tegucigalpa"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Jamaica", "text":"America/Jamaica"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Martinique", "text":"America/Martinique"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Montserrat", "text":"America/Montserrat"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Managua", "text":"America/Managua"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Panama", "text":"America/Panama"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Puerto_Rico", "text":"America/Puerto_Rico"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/St_Kitts", "text":"America/St_Kitts"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/St_Lucia", "text":"America/St_Lucia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Miquelon", "text":"America/Miquelon"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/St_Vincent", "text":"America/St_Vincent"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Grand_Turk", "text":"America/Grand_Turk"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Tortola", "text":"America/Tortola"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/St_Thomas", "text":"America/St_Thomas"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Buenos_Aires", "text":"America/Argentina/Buenos_Aires"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Cordoba", "text":"America/Argentina/Cordoba"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Tucuman", "text":"America/Argentina/Tucuman"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/La_Rioja", "text":"America/Argentina/La_Rioja"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/San_Juan", "text":"America/Argentina/San_Juan"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Jujuy", "text":"America/Argentina/Jujuy"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Catamarca", "text":"America/Argentina/Catamarca"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Mendoza", "text":"America/Argentina/Mendoza"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Rio_Gallegos", "text":"America/Argentina/Rio_Gallegos"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Argentina/Ushuaia", "text":"America/Argentina/Ushuaia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Aruba", "text":"America/Aruba"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/La_Paz", "text":"America/La_Paz"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Noronha", "text":"America/Noronha"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Belem", "text":"America/Belem"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Fortaleza", "text":"America/Fortaleza"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Recife", "text":"America/Recife"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Araguaina", "text":"America/Araguaina"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Maceio", "text":"America/Maceio"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Bahia", "text":"America/Bahia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Sao_Paulo", "text":"America/Sao_Paulo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Campo_Grande", "text":"America/Campo_Grande"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Cuiaba", "text":"America/Cuiaba"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Porto_Velho", "text":"America/Porto_Velho"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Boa_Vista", "text":"America/Boa_Vista"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Manaus", "text":"America/Manaus"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Eirunepe", "text":"America/Eirunepe"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Rio_Branco", "text":"America/Rio_Branco"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Santiago", "text":"America/Santiago"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Easter", "text":"Pacific/Easter"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Bogota", "text":"America/Bogota"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Curacao", "text":"America/Curacao"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Guayaquil", "text":"America/Guayaquil"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Pacific/Galapagos", "text":"Pacific/Galapagos"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/Stanley", "text":"Atlantic/Stanley"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Cayenne", "text":"America/Cayenne"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Guyana", "text":"America/Guyana"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Asuncion", "text":"America/Asuncion"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Lima", "text":"America/Lima"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"Atlantic/South_Georgia", "text":"Atlantic/South_Georgia"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Paramaribo", "text":"America/Paramaribo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Port_of_Spain", "text":"America/Port_of_Spain"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Montevideo", "text":"America/Montevideo"};
option_arr_ShiftExceptions[option_arr_ShiftExceptions.length] = { "value":"America/Caracas", "text":"America/Caracas"};

field_defs_ShiftExceptions[ "timezone"].options=option_arr_ShiftExceptions;

var default_table_columns_ShiftExceptions = [""];




module_defs['ShiftExceptions'] = new Object();
module_defs['ShiftExceptions'].link_defs = link_defs_ShiftExceptions;
module_defs['ShiftExceptions'].field_defs = field_defs_ShiftExceptions;
module_defs['ShiftExceptions'].default_table_columns = default_table_columns_ShiftExceptions;
module_defs['ShiftExceptions'].summary_field_defs = new Object();
module_defs['ShiftExceptions'].group_by_field_defs = new Object();
module_defs['ShiftExceptions'].default_summary_columns = default_summary_columns;
module_defs['ShiftExceptions'].label = "Shift Exceptions";

var rel_defs = new Object();
var link_defs_ChangeTimers = new Object();
link_defs_ChangeTimers[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"changetimers_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_ChangeTimers[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"changetimers_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_ChangeTimers[ 'activities' ] = {"name":"activities","relationship_name":"changetimer_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_ChangeTimers[ 'cases' ] = {"name":"cases","relationship_name":"cases_changetimers","bean_is_lhs":false,"link_type":"one","label":"Cases","module":"Cases"};
var field_defs_ChangeTimers = new Object();
field_defs_ChangeTimers[ "business_hours"] = {"name":"business_hours","vname":"Business Hours","type":"decimal","len":"12,2","precision":2,"readonly":true};field_defs_ChangeTimers[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ChangeTimers = new Array();

option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"=", "text":"Equals"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"greater_than", "text":"After"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"less_than", "text":"Before"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"this_month", "text":"This Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"this_year", "text":"This Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"between", "text":"Is Between"};

field_defs_ChangeTimers[ "date_entered"].options=option_arr_ChangeTimers;

field_defs_ChangeTimers[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_ChangeTimers = new Array();

option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"=", "text":"Equals"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"not_equal", "text":"Not On"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"greater_than", "text":"After"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"less_than", "text":"Before"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_month", "text":"Last Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"this_month", "text":"This Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_month", "text":"Next Month"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"last_year", "text":"Last Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"this_year", "text":"This Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"next_year", "text":"Next Year"};
option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"between", "text":"Is Between"};

field_defs_ChangeTimers[ "date_modified"].options=option_arr_ChangeTimers;

field_defs_ChangeTimers[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_ChangeTimers[ "field_name"] = {"name":"field_name","vname":"Field Name","type":"varchar","len":100};field_defs_ChangeTimers[ "from_datetime"] = {"name":"from_datetime","vname":"From Time","type":"datetime"};field_defs_ChangeTimers[ "hours"] = {"name":"hours","vname":"Hours","type":"decimal","len":"12,2","precision":2,"readonly":true};field_defs_ChangeTimers[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_ChangeTimers[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_ChangeTimers[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","len":"255","required":true,"options":"changetimer_parent_type"};var option_arr_ChangeTimers = new Array();

option_arr_ChangeTimers[option_arr_ChangeTimers.length] = { "value":"Cases", "text":"Case"};

field_defs_ChangeTimers[ "parent_type"].options=option_arr_ChangeTimers;

field_defs_ChangeTimers[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_ChangeTimers[ "to_datetime"] = {"name":"to_datetime","vname":"To Time","type":"datetime"};field_defs_ChangeTimers[ "value_string"] = {"name":"value_string","vname":"Value","type":"varchar"};var default_table_columns_ChangeTimers = [""];




module_defs['ChangeTimers'] = new Object();
module_defs['ChangeTimers'].link_defs = link_defs_ChangeTimers;
module_defs['ChangeTimers'].field_defs = field_defs_ChangeTimers;
module_defs['ChangeTimers'].default_table_columns = default_table_columns_ChangeTimers;
module_defs['ChangeTimers'].summary_field_defs = new Object();
module_defs['ChangeTimers'].group_by_field_defs = new Object();
module_defs['ChangeTimers'].default_summary_columns = default_summary_columns;
module_defs['ChangeTimers'].label = "Change Timers";

var rel_defs = new Object();
var link_defs_Messages = new Object();
link_defs_Messages[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"messages_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Messages[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"messages_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Messages[ 'activities' ] = {"name":"activities","relationship_name":"message_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Messages[ 'contact' ] = {"name":"contact","relationship_name":"contact_messages","bean_is_lhs":false,"link_type":"one","label":"Contact","module":"Contacts"};
link_defs_Messages[ 'cases' ] = {"name":"cases","relationship_name":"case_messages","bean_is_lhs":false,"link_type":"one","label":"Cases","module":"Cases"};
link_defs_Messages[ 'accounts' ] = {"name":"accounts","relationship_name":"account_messages","bean_is_lhs":false,"link_type":"one","label":"Accounts","module":"Accounts"};
link_defs_Messages[ 'opportunities' ] = {"name":"opportunities","relationship_name":"opportunity_messages","bean_is_lhs":false,"link_type":"one","label":"Opportunities","module":"Opportunities"};
link_defs_Messages[ 'leads' ] = {"name":"leads","relationship_name":"lead_messages","bean_is_lhs":false,"link_type":"one","label":"Leads","module":"Leads"};
link_defs_Messages[ 'products' ] = {"name":"products","relationship_name":"product_messages","bean_is_lhs":false,"link_type":"one","label":"Products","module":"Products"};
link_defs_Messages[ 'revenuelineitems' ] = {"name":"revenuelineitems","relationship_name":"revenuelineitem_messages","bean_is_lhs":false,"link_type":"one","label":"LBL_REVENUELINEITEMS","module":"RevenueLineItems"};
link_defs_Messages[ 'quotes' ] = {"name":"quotes","relationship_name":"quote_messages","bean_is_lhs":false,"link_type":"one","label":"Quotes","module":"Quotes"};
link_defs_Messages[ 'contracts' ] = {"name":"contracts","relationship_name":"contract_messages","bean_is_lhs":false,"link_type":"one","label":"Contracts","module":"Contracts"};
link_defs_Messages[ 'prospects' ] = {"name":"prospects","relationship_name":"prospect_messages","bean_is_lhs":false,"link_type":"one","label":"Targets","module":"Prospects"};
link_defs_Messages[ 'bugs' ] = {"name":"bugs","relationship_name":"bug_messages","bean_is_lhs":false,"link_type":"one","label":"Bugs","module":"Bugs"};
link_defs_Messages[ 'kbcontents' ] = {"name":"kbcontents","relationship_name":"kbcontent_messages","bean_is_lhs":false,"link_type":"one","label":"Knowledge Base","module":"KBContents"};
link_defs_Messages[ 'emails' ] = {"name":"emails","relationship_name":"emails_messages_rel","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Messages[ 'projects' ] = {"name":"projects","relationship_name":"projects_messages","bean_is_lhs":false,"link_type":"one","label":"Projects","module":"Project"};
link_defs_Messages[ 'project_tasks' ] = {"name":"project_tasks","relationship_name":"project_tasks_messages","bean_is_lhs":false,"link_type":"one","label":"Project Tasks","module":"ProjectTask"};
link_defs_Messages[ 'meetings' ] = {"name":"meetings","relationship_name":"meetings_messages","bean_is_lhs":false,"link_type":"one","label":"Meetings","module":"Meetings"};
link_defs_Messages[ 'calls' ] = {"name":"calls","relationship_name":"calls_messages","bean_is_lhs":false,"link_type":"one","label":"Calls","module":"Calls"};
link_defs_Messages[ 'tasks' ] = {"name":"tasks","relationship_name":"tasks_messages","bean_is_lhs":false,"link_type":"one","label":"Tasks","module":"Tasks"};
link_defs_Messages[ 'tag_link' ] = {"name":"tag_link","relationship_name":"messages_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_Messages[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"messages_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Messages[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"messages_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Messages[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"messages_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_Messages[ 'team_link' ] = {"name":"team_link","relationship_name":"messages_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_Messages = new Object();
field_defs_Messages[ "channel_type"] = {"name":"channel_type","vname":"Channel Type","type":"enum","options":"message_channel_type_dom","len":50,"duplicate_on_record_copy":"always","merge_filter":"enabled"};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"", "text":""};
option_arr_Messages[option_arr_Messages.length] = { "value":"Chat", "text":"Chat"};

field_defs_Messages[ "channel_type"].options=option_arr_Messages;

field_defs_Messages[ "conversation"] = {"name":"conversation","vname":"Conversation","readonly":true,"type":"longtext","duplicate_on_record_copy":"always"};field_defs_Messages[ "conversation_link"] = {"name":"conversation_link","vname":"Conversation Link","type":"varchar","len":512,"duplicate_on_record_copy":"always","audited":true};field_defs_Messages[ "date_end"] = {"name":"date_end","vname":"End Date","type":"datetimecombo","dbType":"datetime","group":"date_end","enable_range_search":true,"options":"date_range_search_dom","audited":true};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"=", "text":"Equals"};
option_arr_Messages[option_arr_Messages.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Messages[option_arr_Messages.length] = { "value":"greater_than", "text":"After"};
option_arr_Messages[option_arr_Messages.length] = { "value":"less_than", "text":"Before"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_month", "text":"This Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_year", "text":"This Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"between", "text":"Is Between"};

field_defs_Messages[ "date_end"].options=option_arr_Messages;

field_defs_Messages[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"=", "text":"Equals"};
option_arr_Messages[option_arr_Messages.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Messages[option_arr_Messages.length] = { "value":"greater_than", "text":"After"};
option_arr_Messages[option_arr_Messages.length] = { "value":"less_than", "text":"Before"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_month", "text":"This Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_year", "text":"This Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"between", "text":"Is Between"};

field_defs_Messages[ "date_entered"].options=option_arr_Messages;

field_defs_Messages[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"=", "text":"Equals"};
option_arr_Messages[option_arr_Messages.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Messages[option_arr_Messages.length] = { "value":"greater_than", "text":"After"};
option_arr_Messages[option_arr_Messages.length] = { "value":"less_than", "text":"Before"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_month", "text":"This Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_year", "text":"This Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"between", "text":"Is Between"};

field_defs_Messages[ "date_modified"].options=option_arr_Messages;

field_defs_Messages[ "date_start"] = {"name":"date_start","vname":"Start Date","type":"datetimecombo","dbType":"datetime","group":"date_start","enable_range_search":true,"options":"date_range_search_dom","audited":true};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"=", "text":"Equals"};
option_arr_Messages[option_arr_Messages.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Messages[option_arr_Messages.length] = { "value":"greater_than", "text":"After"};
option_arr_Messages[option_arr_Messages.length] = { "value":"less_than", "text":"Before"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_month", "text":"This Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Messages[option_arr_Messages.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"this_year", "text":"This Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Messages[option_arr_Messages.length] = { "value":"between", "text":"Is Between"};

field_defs_Messages[ "date_start"].options=option_arr_Messages;

field_defs_Messages[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Messages[ "direction"] = {"name":"direction","vname":"Direction","type":"enum","options":"message_direction_dom","len":50,"duplicate_on_record_copy":"always","merge_filter":"enabled"};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"", "text":""};
option_arr_Messages[option_arr_Messages.length] = { "value":"Inbound", "text":"Inbound"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Outbound", "text":"Outbound"};

field_defs_Messages[ "direction"].options=option_arr_Messages;

field_defs_Messages[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Messages[ "name"] = {"name":"name","vname":"Subject","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_Messages[ "parent_id"] = {"name":"parent_id","vname":"Parent ID","type":"id","reportable":true};field_defs_Messages[ "parent_type"] = {"name":"parent_type","vname":"Parent Type","type":"parent_type","dbType":"varchar","group":"parent_name","options":"parent_type_display","len":"255"};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"Accounts", "text":"Account"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Contacts", "text":"Contact"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Tasks", "text":"Task"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Opportunities", "text":"Opportunitie"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Products", "text":"Quoted Line Item"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Quotes", "text":"Quote"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Bugs", "text":"Bugs"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Cases", "text":"Case"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Leads", "text":"Lead"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Project", "text":"Projects"};
option_arr_Messages[option_arr_Messages.length] = { "value":"ProjectTask", "text":"Project Task"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Prospects", "text":"Target"};
option_arr_Messages[option_arr_Messages.length] = { "value":"KBContents", "text":"Knowledge Base"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Notes", "text":"Note"};
option_arr_Messages[option_arr_Messages.length] = { "value":"PurchasedLineItems", "text":"Purchased Line Item"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Purchases", "text":"Purchase"};
option_arr_Messages[option_arr_Messages.length] = { "value":"RevenueLineItems", "text":"Revenue Line Items"};

field_defs_Messages[ "parent_type"].options=option_arr_Messages;

field_defs_Messages[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"message_status_dom","len":50,"duplicate_on_record_copy":"always","audited":true};var option_arr_Messages = new Array();

option_arr_Messages[option_arr_Messages.length] = { "value":"", "text":""};
option_arr_Messages[option_arr_Messages.length] = { "value":"In Progress", "text":"In Progress"};
option_arr_Messages[option_arr_Messages.length] = { "value":"Completed", "text":"Completed"};

field_defs_Messages[ "status"].options=option_arr_Messages;

field_defs_Messages[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_Messages[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};var default_table_columns_Messages = [""];




module_defs['Messages'] = new Object();
module_defs['Messages'].link_defs = link_defs_Messages;
module_defs['Messages'].field_defs = field_defs_Messages;
module_defs['Messages'].default_table_columns = default_table_columns_Messages;
module_defs['Messages'].summary_field_defs = new Object();
module_defs['Messages'].group_by_field_defs = new Object();
module_defs['Messages'].default_summary_columns = default_summary_columns;
module_defs['Messages'].label = "Messages";

var rel_defs = new Object();
var link_defs_DataPrivacy = new Object();
link_defs_DataPrivacy[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"dataprivacy_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_DataPrivacy[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"dataprivacy_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_DataPrivacy[ 'activities' ] = {"name":"activities","relationship_name":"dataprivacy_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_DataPrivacy[ 'leads' ] = {"name":"leads","relationship_name":"leads_dataprivacy","bean_is_lhs":false,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_DataPrivacy[ 'accounts' ] = {"name":"accounts","relationship_name":"accounts_dataprivacy","bean_is_lhs":false,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_DataPrivacy[ 'contacts' ] = {"name":"contacts","relationship_name":"contacts_dataprivacy","bean_is_lhs":false,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_DataPrivacy[ 'prospects' ] = {"name":"prospects","relationship_name":"prospects_dataprivacy","bean_is_lhs":false,"link_type":"many","label":"Targets","module":"Prospects"};
link_defs_DataPrivacy[ 'tag_link' ] = {"name":"tag_link","relationship_name":"dataprivacy_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_DataPrivacy[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"dataprivacy_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_DataPrivacy[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"dataprivacy_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_DataPrivacy[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"dataprivacy_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
link_defs_DataPrivacy[ 'team_link' ] = {"name":"team_link","relationship_name":"dataprivacy_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
var field_defs_DataPrivacy = new Object();
field_defs_DataPrivacy[ "business_purpose"] = {"name":"business_purpose","vname":"Business Purposes Consented for","type":"multienum","options":"dataprivacy_business_purpose_dom","len":255,"sortable":true,"duplicate_on_record_copy":"always","isMultiSelect":true,"audited":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Business Communications", "text":"Business Communications"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Marketing Communications by company", "text":"Marketing Communications by company"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Marketing Communications by partners", "text":"Marketing Communications by partners"};

field_defs_DataPrivacy[ "business_purpose"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "dataprivacy_number"] = {"name":"dataprivacy_number","vname":"Number","type":"int","readonly":true,"len":11,"required":true,"auto_increment":true,"unified_search":true,"duplicate_merge":"disabled","disable_num_format":true,"duplicate_on_record_copy":"no"};field_defs_DataPrivacy[ "date_closed"] = {"name":"date_closed","vname":"Date Closed","type":"date","options":"date_range_search_dom","enable_range_search":true,"audited":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"=", "text":"Equals"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"not_equal", "text":"Not On"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"greater_than", "text":"After"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"less_than", "text":"Before"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_month", "text":"Last Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_month", "text":"This Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_month", "text":"Next Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_year", "text":"Last Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_year", "text":"This Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_year", "text":"Next Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"between", "text":"Is Between"};

field_defs_DataPrivacy[ "date_closed"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "date_due"] = {"name":"date_due","vname":"Due Date","type":"date","options":"date_range_search_dom","enable_range_search":true,"audited":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"=", "text":"Equals"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"not_equal", "text":"Not On"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"greater_than", "text":"After"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"less_than", "text":"Before"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_month", "text":"Last Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_month", "text":"This Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_month", "text":"Next Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_year", "text":"Last Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_year", "text":"This Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_year", "text":"Next Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"between", "text":"Is Between"};

field_defs_DataPrivacy[ "date_due"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"=", "text":"Equals"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"not_equal", "text":"Not On"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"greater_than", "text":"After"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"less_than", "text":"Before"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_month", "text":"Last Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_month", "text":"This Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_month", "text":"Next Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_year", "text":"Last Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_year", "text":"This Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_year", "text":"Next Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"between", "text":"Is Between"};

field_defs_DataPrivacy[ "date_entered"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"=", "text":"Equals"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"not_equal", "text":"Not On"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"greater_than", "text":"After"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"less_than", "text":"Before"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_month", "text":"Last Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_month", "text":"This Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_month", "text":"Next Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_year", "text":"Last Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_year", "text":"This Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_year", "text":"Next Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"between", "text":"Is Between"};

field_defs_DataPrivacy[ "date_modified"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "date_opened"] = {"name":"date_opened","vname":"Date Opened","type":"date","display_default":"now","options":"date_range_search_dom","enable_range_search":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"=", "text":"Equals"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"not_equal", "text":"Not On"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"greater_than", "text":"After"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"less_than", "text":"Before"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_month", "text":"Last Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_month", "text":"This Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_month", "text":"Next Month"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"last_year", "text":"Last Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"this_year", "text":"This Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"next_year", "text":"Next Year"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"between", "text":"Is Between"};

field_defs_DataPrivacy[ "date_opened"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_DataPrivacy[ "follow_up_datetime"] = {"name":"follow_up_datetime","vname":"Follow Up Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_DataPrivacy[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_DataPrivacy[ "name"] = {"name":"name","vname":"Subject","type":"name","dbType":"varchar","len":255,"audited":true,"unified_search":true,"merge_filter":"selected","required":true,"importable":"required","duplicate_on_record_copy":"always"};field_defs_DataPrivacy[ "priority"] = {"name":"priority","vname":"Priority","type":"enum","options":"dataprivacy_priority_dom","len":100,"audited":true,"merge_filter":"enabled","sortable":true,"duplicate_on_record_copy":"always"};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Low", "text":"Low"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Medium", "text":"Medium"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"High", "text":"High"};

field_defs_DataPrivacy[ "priority"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "requested_by"] = {"name":"requested_by","vname":"Requested By","type":"varchar","len":255,"audited":true};field_defs_DataPrivacy[ "resolution"] = {"name":"resolution","vname":"Resolution","type":"text","audited":true};field_defs_DataPrivacy[ "resolved_datetime"] = {"name":"resolved_datetime","vname":"Resolved Date","type":"datetimecombo","dbType":"datetime","audited":true};field_defs_DataPrivacy[ "source"] = {"name":"source","vname":"Source","type":"varchar","len":255,"audited":true};field_defs_DataPrivacy[ "status"] = {"name":"status","vname":"Status","type":"enum","options":"dataprivacy_status_dom","len":100,"sortable":true,"duplicate_on_record_copy":"always","audited":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Open", "text":"Open"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Closed", "text":"Completed"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Rejected", "text":"Rejected"};

field_defs_DataPrivacy[ "status"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_DataPrivacy[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_DataPrivacy[ "type"] = {"name":"type","vname":"Type","type":"enum","options":"dataprivacy_type_dom","len":255,"unified_search":true,"sortable":true,"duplicate_on_record_copy":"always","required":true,"audited":true};var option_arr_DataPrivacy = new Array();

option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"", "text":""};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Request for Data Privacy Policy", "text":"Request for Data Privacy Policy"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Send Personal Information being processed", "text":"Send Personal Information Being Processed"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Rectify Information", "text":"Rectify Information"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Request to Erase Information", "text":"Request to Erase Information"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Export Information", "text":"Export Information"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Restrict Processing", "text":"Restrict Processing"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Object to Processing", "text":"Object to Processing"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Consent to Process", "text":"Consent to Process"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Withdraw Consent", "text":"Withdraw Consent"};
option_arr_DataPrivacy[option_arr_DataPrivacy.length] = { "value":"Other", "text":"Other"};

field_defs_DataPrivacy[ "type"].options=option_arr_DataPrivacy;

field_defs_DataPrivacy[ "work_log"] = {"name":"work_log","vname":"Work Log","type":"text","duplicate_on_record_copy":"always"};var default_table_columns_DataPrivacy = [""];




module_defs['DataPrivacy'] = new Object();
module_defs['DataPrivacy'].link_defs = link_defs_DataPrivacy;
module_defs['DataPrivacy'].field_defs = field_defs_DataPrivacy;
module_defs['DataPrivacy'].default_table_columns = default_table_columns_DataPrivacy;
module_defs['DataPrivacy'].summary_field_defs = new Object();
module_defs['DataPrivacy'].group_by_field_defs = new Object();
module_defs['DataPrivacy'].default_summary_columns = default_summary_columns;
module_defs['DataPrivacy'].label = "Data Privacy";

var rel_defs = new Object();
var link_defs_Tags = new Object();
link_defs_Tags[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"tags_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_Tags[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"tags_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_Tags[ 'activities' ] = {"name":"activities","relationship_name":"tag_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_Tags[ 'aclrolesets_link' ] = {"name":"aclrolesets_link","relationship_name":"aclrolesets_tags","bean_is_lhs":false,"link_type":"many","label":"ACLRoleSets","module":"ACLRoleSets"};
link_defs_Tags[ 'leads_link' ] = {"name":"leads_link","relationship_name":"leads_tags","bean_is_lhs":false,"link_type":"many","label":"Leads","module":"Leads"};
link_defs_Tags[ 'cases_link' ] = {"name":"cases_link","relationship_name":"cases_tags","bean_is_lhs":false,"link_type":"many","label":"Cases","module":"Cases"};
link_defs_Tags[ 'bugs_link' ] = {"name":"bugs_link","relationship_name":"bugs_tags","bean_is_lhs":false,"link_type":"many","label":"Bugs","module":"Bugs"};
link_defs_Tags[ 'prospectlists_link' ] = {"name":"prospectlists_link","relationship_name":"prospectlists_tags","bean_is_lhs":false,"link_type":"many","label":"Target Lists","module":"ProspectLists"};
link_defs_Tags[ 'prospects_link' ] = {"name":"prospects_link","relationship_name":"prospects_tags","bean_is_lhs":false,"link_type":"many","label":"Targets","module":"Prospects"};
link_defs_Tags[ 'contacts_link' ] = {"name":"contacts_link","relationship_name":"contacts_tags","bean_is_lhs":false,"link_type":"many","label":"Contacts","module":"Contacts"};
link_defs_Tags[ 'accounts_link' ] = {"name":"accounts_link","relationship_name":"accounts_tags","bean_is_lhs":false,"link_type":"many","label":"Accounts","module":"Accounts"};
link_defs_Tags[ 'opportunities_link' ] = {"name":"opportunities_link","relationship_name":"opportunities_tags","bean_is_lhs":false,"link_type":"many","label":"Opportunities","module":"Opportunities"};
link_defs_Tags[ 'emailtemplates_link' ] = {"name":"emailtemplates_link","relationship_name":"emailtemplates_tags","bean_is_lhs":false,"link_type":"many","label":"Email Templates","module":"EmailTemplates"};
link_defs_Tags[ 'usersignatures_link' ] = {"name":"usersignatures_link","relationship_name":"usersignatures_tags","bean_is_lhs":false,"link_type":"many","label":"Email Signatures","module":"UserSignatures"};
link_defs_Tags[ 'notes_link' ] = {"name":"notes_link","relationship_name":"notes_tags","bean_is_lhs":false,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_Tags[ 'calls_link' ] = {"name":"calls_link","relationship_name":"calls_tags","bean_is_lhs":false,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_Tags[ 'emails_link' ] = {"name":"emails_link","relationship_name":"emails_tags","bean_is_lhs":false,"link_type":"many","label":"Emails","module":"Emails"};
link_defs_Tags[ 'meetings_link' ] = {"name":"meetings_link","relationship_name":"meetings_tags","bean_is_lhs":false,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_Tags[ 'tasks_link' ] = {"name":"tasks_link","relationship_name":"tasks_tags","bean_is_lhs":false,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_Tags[ 'reports_link' ] = {"name":"reports_link","relationship_name":"reports_tags","bean_is_lhs":false,"link_type":"many","label":"Reports","module":"Reports"};
link_defs_Tags[ 'quotes_link' ] = {"name":"quotes_link","relationship_name":"quotes_tags","bean_is_lhs":false,"link_type":"many","label":"Quotes","module":"Quotes"};
link_defs_Tags[ 'revenuelineitems_link' ] = {"name":"revenuelineitems_link","relationship_name":"revenuelineitems_tags","bean_is_lhs":false,"link_type":"many","label":"Revenue Line Items","module":"RevenueLineItems"};
link_defs_Tags[ 'products_link' ] = {"name":"products_link","relationship_name":"products_tags","bean_is_lhs":false,"link_type":"many","label":"Quoted Line Items","module":"Products"};
link_defs_Tags[ 'producttemplates_link' ] = {"name":"producttemplates_link","relationship_name":"producttemplates_tags","bean_is_lhs":false,"link_type":"many","label":"Product Catalog","module":"ProductTemplates"};
link_defs_Tags[ 'producttypes_link' ] = {"name":"producttypes_link","relationship_name":"producttypes_tags","bean_is_lhs":false,"link_type":"many","label":"Product Types","module":"ProductTypes"};
link_defs_Tags[ 'manufacturers_link' ] = {"name":"manufacturers_link","relationship_name":"manufacturers_tags","bean_is_lhs":false,"link_type":"many","label":"Manufacturers","module":"Manufacturers"};
link_defs_Tags[ 'shippers_link' ] = {"name":"shippers_link","relationship_name":"shippers_tags","bean_is_lhs":false,"link_type":"many","label":"Shipping Providers","module":"Shippers"};
link_defs_Tags[ 'taxrates_link' ] = {"name":"taxrates_link","relationship_name":"taxrates_tags","bean_is_lhs":false,"link_type":"many","label":"Tax Rates","module":"TaxRates"};
link_defs_Tags[ 'contracts_link' ] = {"name":"contracts_link","relationship_name":"contracts_tags","bean_is_lhs":false,"link_type":"many","label":"Contracts","module":"Contracts"};
link_defs_Tags[ 'contracttypes_link' ] = {"name":"contracttypes_link","relationship_name":"contracttypes_tags","bean_is_lhs":false,"link_type":"many","label":"Contract Types","module":"ContractTypes"};
link_defs_Tags[ 'pmse_project_link' ] = {"name":"pmse_project_link","relationship_name":"pmse_project_tags","bean_is_lhs":false,"link_type":"many","label":"Process Definitions","module":"pmse_Project"};
link_defs_Tags[ 'pmse_business_rules_link' ] = {"name":"pmse_business_rules_link","relationship_name":"pmse_business_rules_tags","bean_is_lhs":false,"link_type":"many","label":"Process Business Rules","module":"pmse_Business_Rules"};
link_defs_Tags[ 'pmse_emails_templates_link' ] = {"name":"pmse_emails_templates_link","relationship_name":"pmse_emails_templates_tags","bean_is_lhs":false,"link_type":"many","label":"Process Email Templates","module":"pmse_Emails_Templates"};
link_defs_Tags[ 'businesscenters_link' ] = {"name":"businesscenters_link","relationship_name":"businesscenters_tags","bean_is_lhs":false,"link_type":"many","label":"Business Centers","module":"BusinessCenters"};
link_defs_Tags[ 'shifts_link' ] = {"name":"shifts_link","relationship_name":"shifts_tags","bean_is_lhs":false,"link_type":"many","label":"Shifts","module":"Shifts"};
link_defs_Tags[ 'shiftexceptions_link' ] = {"name":"shiftexceptions_link","relationship_name":"shiftexceptions_tags","bean_is_lhs":false,"link_type":"many","label":"Shift Exceptions","module":"ShiftExceptions"};
link_defs_Tags[ 'messages_link' ] = {"name":"messages_link","relationship_name":"messages_tags","bean_is_lhs":false,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_Tags[ 'purchases_link' ] = {"name":"purchases_link","relationship_name":"purchases_tags","bean_is_lhs":false,"link_type":"many","label":"Purchases","module":"Purchases"};
link_defs_Tags[ 'purchasedlineitems_link' ] = {"name":"purchasedlineitems_link","relationship_name":"purchasedlineitems_tags","bean_is_lhs":false,"link_type":"many","label":"Purchased Line Items","module":"PurchasedLineItems"};
link_defs_Tags[ 'dataprivacy_link' ] = {"name":"dataprivacy_link","relationship_name":"dataprivacy_tags","bean_is_lhs":false,"link_type":"many","label":"Data Privacy","module":"DataPrivacy"};
link_defs_Tags[ 'kbcontents_link' ] = {"name":"kbcontents_link","relationship_name":"kbcontents_tags","bean_is_lhs":false,"link_type":"many","label":"Knowledge Base","module":"KBContents"};
link_defs_Tags[ 'visualpipeline_link' ] = {"name":"visualpipeline_link","relationship_name":"visualpipeline_tags","bean_is_lhs":false,"link_type":"many","label":"Visual Pipeline","module":"VisualPipeline"};
link_defs_Tags[ 'consoleconfiguration_link' ] = {"name":"consoleconfiguration_link","relationship_name":"consoleconfiguration_tags","bean_is_lhs":false,"link_type":"many","label":"Console Configuration","module":"ConsoleConfiguration"};
link_defs_Tags[ 'sugarlive_link' ] = {"name":"sugarlive_link","relationship_name":"sugarlive_tags","bean_is_lhs":false,"link_type":"many","label":"SugarLive","module":"SugarLive"};
link_defs_Tags[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"commentlog_tags","bean_is_lhs":false,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_Tags[ 'dataarchiver_link' ] = {"name":"dataarchiver_link","relationship_name":"dataarchiver_tags","bean_is_lhs":false,"link_type":"many","label":"Data Archiver","module":"DataArchiver"};
link_defs_Tags[ 'archiveruns_link' ] = {"name":"archiveruns_link","relationship_name":"archiveruns_tags","bean_is_lhs":false,"link_type":"many","label":"Archive Runs","module":"ArchiveRuns"};
link_defs_Tags[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"tags_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_Tags[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"tags_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
var field_defs_Tags = new Object();
field_defs_Tags[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Tags = new Array();

option_arr_Tags[option_arr_Tags.length] = { "value":"=", "text":"Equals"};
option_arr_Tags[option_arr_Tags.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tags[option_arr_Tags.length] = { "value":"greater_than", "text":"After"};
option_arr_Tags[option_arr_Tags.length] = { "value":"less_than", "text":"Before"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"between", "text":"Is Between"};

field_defs_Tags[ "date_entered"].options=option_arr_Tags;

field_defs_Tags[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_Tags = new Array();

option_arr_Tags[option_arr_Tags.length] = { "value":"=", "text":"Equals"};
option_arr_Tags[option_arr_Tags.length] = { "value":"not_equal", "text":"Not On"};
option_arr_Tags[option_arr_Tags.length] = { "value":"greater_than", "text":"After"};
option_arr_Tags[option_arr_Tags.length] = { "value":"less_than", "text":"Before"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_month", "text":"Last Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"this_month", "text":"This Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_month", "text":"Next Month"};
option_arr_Tags[option_arr_Tags.length] = { "value":"last_year", "text":"Last Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"this_year", "text":"This Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"next_year", "text":"Next Year"};
option_arr_Tags[option_arr_Tags.length] = { "value":"between", "text":"Is Between"};

field_defs_Tags[ "date_modified"].options=option_arr_Tags;

field_defs_Tags[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_Tags[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_Tags[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always"};field_defs_Tags[ "source_id"] = {"name":"source_id","vname":"External source ID","type":"varchar"};field_defs_Tags[ "source_meta"] = {"name":"source_meta","vname":"External source meta","type":"text"};field_defs_Tags[ "source_type"] = {"name":"source_type","vname":"External source","type":"varchar"};field_defs_Tags[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};var default_table_columns_Tags = [""];




module_defs['Tags'] = new Object();
module_defs['Tags'].link_defs = link_defs_Tags;
module_defs['Tags'].field_defs = field_defs_Tags;
module_defs['Tags'].default_table_columns = default_table_columns_Tags;
module_defs['Tags'].summary_field_defs = new Object();
module_defs['Tags'].group_by_field_defs = new Object();
module_defs['Tags'].default_summary_columns = default_summary_columns;
module_defs['Tags'].label = "Tags";

var rel_defs = new Object();
var link_defs_KBContents = new Object();
link_defs_KBContents[ 'created_by_link' ] = {"name":"created_by_link","relationship_name":"kbcontents_created_by","bean_is_lhs":false,"link_type":"one","label":"Created by User","module":"Users"};
link_defs_KBContents[ 'modified_user_link' ] = {"name":"modified_user_link","relationship_name":"kbcontents_modified_user","bean_is_lhs":false,"link_type":"one","label":"Modified by User","module":"Users"};
link_defs_KBContents[ 'activities' ] = {"name":"activities","relationship_name":"kbcontent_activities","bean_is_lhs":true,"link_type":"many","label":"Activity Stream","module":"Activities"};
link_defs_KBContents[ 'notes' ] = {"name":"notes","relationship_name":"kbcontent_notes","bean_is_lhs":true,"link_type":"many","label":"Notes","module":"Notes"};
link_defs_KBContents[ 'messages' ] = {"name":"messages","relationship_name":"kbcontent_messages","bean_is_lhs":true,"link_type":"many","label":"Messages","module":"Messages"};
link_defs_KBContents[ 'attachments' ] = {"name":"attachments","relationship_name":"kbcontent_attachments","bean_is_lhs":true,"link_type":"many","label":"Attachments","module":"Notes"};
link_defs_KBContents[ 'kbdocuments_kbcontents' ] = {"name":"kbdocuments_kbcontents","relationship_name":"kbdocuments_kbcontents","bean_is_lhs":false,"link_type":"one","label":"KBDocument","module":"KBDocuments"};
link_defs_KBContents[ 'kbarticles_kbcontents' ] = {"name":"kbarticles_kbcontents","relationship_name":"kbarticles_kbcontents","bean_is_lhs":false,"link_type":"one","label":"Article","module":"KBArticles"};
link_defs_KBContents[ 'localizations' ] = {"name":"localizations","relationship_name":"localizations","bean_is_lhs":true,"link_type":"many","label":"Localizations","module":"KBContents"};
link_defs_KBContents[ 'revisions' ] = {"name":"revisions","relationship_name":"revisions","bean_is_lhs":true,"link_type":"many","label":"Revisions","module":"KBContents"};
link_defs_KBContents[ 'kbsapprovers_kbcontents' ] = {"name":"kbsapprovers_kbcontents","relationship_name":"kbsapprovers_kbcontents","bean_is_lhs":false,"link_type":"one","label":"Approvers","module":"Users"};
link_defs_KBContents[ 'cases' ] = {"name":"cases","relationship_name":"relcases_kbcontents","bean_is_lhs":false,"link_type":"one","label":"Related Case","module":"Cases"};
link_defs_KBContents[ 'calls' ] = {"name":"calls","relationship_name":"kbcontent_calls","bean_is_lhs":true,"link_type":"many","label":"Calls","module":"Calls"};
link_defs_KBContents[ 'meetings' ] = {"name":"meetings","relationship_name":"kbcontent_meetings","bean_is_lhs":true,"link_type":"many","label":"Meetings","module":"Meetings"};
link_defs_KBContents[ 'tasks' ] = {"name":"tasks","relationship_name":"kbcontent_tasks","bean_is_lhs":true,"link_type":"many","label":"Tasks","module":"Tasks"};
link_defs_KBContents[ 'tag_link' ] = {"name":"tag_link","relationship_name":"kbcontents_tags","bean_is_lhs":true,"link_type":"many","label":"Tags","module":"Tags"};
link_defs_KBContents[ 'commentlog_link' ] = {"name":"commentlog_link","relationship_name":"kbcontents_commentlog","bean_is_lhs":true,"link_type":"many","label":"Comment Log","module":"CommentLog"};
link_defs_KBContents[ 'locked_fields_link' ] = {"name":"locked_fields_link","relationship_name":"kbcontents_locked_fields","bean_is_lhs":true,"link_type":"many","label":"Fields locked for editing","module":"pmse_BpmProcessDefinition"};
link_defs_KBContents[ 'team_link' ] = {"name":"team_link","relationship_name":"kbcontents_team","bean_is_lhs":false,"link_type":"one","label":"Teams","module":"Teams"};
link_defs_KBContents[ 'assigned_user_link' ] = {"name":"assigned_user_link","relationship_name":"kbcontents_assigned_user","bean_is_lhs":false,"link_type":"one","label":"Assigned to User","module":"Users"};
var field_defs_KBContents = new Object();
field_defs_KBContents[ "active_date"] = {"name":"active_date","vname":"Publish Date","type":"date","sortable":true,"studio":true,"duplicate_on_record_copy":"no"};field_defs_KBContents[ "active_rev"] = {"name":"active_rev","vname":"Active Revision","type":"tinyint","isnull":"true","duplicate_on_record_copy":"no","readonly":true};field_defs_KBContents[ "approved"] = {"name":"approved","vname":"Approved","type":"bool","sortable":true,"duplicate_on_record_copy":"no"};field_defs_KBContents[ "category_id"] = {"name":"category_id","vname":"Category Id","type":"id","isnull":"true","audited":true,"duplicate_on_record_copy":"always"};field_defs_KBContents[ "date_entered"] = {"name":"date_entered","vname":"Date Created","type":"datetime","group":"created_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_KBContents = new Array();

option_arr_KBContents[option_arr_KBContents.length] = { "value":"=", "text":"Equals"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"not_equal", "text":"Not On"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"greater_than", "text":"After"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"less_than", "text":"Before"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_month", "text":"Last Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"this_month", "text":"This Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_month", "text":"Next Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_year", "text":"Last Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"this_year", "text":"This Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_year", "text":"Next Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"between", "text":"Is Between"};

field_defs_KBContents[ "date_entered"].options=option_arr_KBContents;

field_defs_KBContents[ "date_modified"] = {"name":"date_modified","vname":"Date Modified","type":"datetime","group":"modified_by_name","enable_range_search":true,"options":"date_range_search_dom","duplicate_on_record_copy":"no","readonly":true};var option_arr_KBContents = new Array();

option_arr_KBContents[option_arr_KBContents.length] = { "value":"=", "text":"Equals"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"not_equal", "text":"Not On"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"greater_than", "text":"After"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"less_than", "text":"Before"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_7_days", "text":"Last 7 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_7_days", "text":"Next 7 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_30_days", "text":"Last 30 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_30_days", "text":"Next 30 Days"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_month", "text":"Last Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"this_month", "text":"This Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_month", "text":"Next Month"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"last_year", "text":"Last Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"this_year", "text":"This Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"next_year", "text":"Next Year"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"between", "text":"Is Between"};

field_defs_KBContents[ "date_modified"].options=option_arr_KBContents;

field_defs_KBContents[ "description"] = {"name":"description","vname":"Description","type":"text","rows":6,"cols":80,"duplicate_on_record_copy":"always"};field_defs_KBContents[ "exp_date"] = {"name":"exp_date","vname":"Expiration Date","type":"date","sortable":true,"duplicate_on_record_copy":"no","studio":true};field_defs_KBContents[ "id"] = {"name":"id","vname":"ID","type":"id","required":true,"reportable":true,"duplicate_on_record_copy":"no","mandatory_fetch":true};field_defs_KBContents[ "is_external"] = {"name":"is_external","vname":"External Article","type":"tinyint","isnull":"true","studio":true,"duplicate_on_record_copy":"always"};field_defs_KBContents[ "kbdocument_body"] = {"name":"kbdocument_body","vname":"Body","dbType":"longtext","type":"htmleditable_tinymce","duplicate_on_record_copy":"always"};field_defs_KBContents[ "language"] = {"name":"language","type":"enum","function_bean":"KBContents","len":"2","required":true,"vname":"Language","duplicate_on_record_copy":"always"};                    var option_arr_KBContents = new Array();

option_arr_KBContents[option_arr_KBContents.length] = { "value":"en", "text":"English"};
field_defs_KBContents[ "language"].options=option_arr_KBContents;
field_defs_KBContents[ "name"] = {"name":"name","vname":"Name","type":"name","dbType":"varchar","len":255,"unified_search":true,"required":true,"importable":"required","duplicate_merge":"enabled","merge_filter":"selected","duplicate_on_record_copy":"always","audited":true};field_defs_KBContents[ "notuseful"] = {"name":"notuseful","vname":"Not Useful","type":"int","duplicate_on_record_copy":"no","group":"usefulness","hideacl":true};field_defs_KBContents[ "revision"] = {"name":"revision","vname":"Revision","type":"int","duplicate_on_record_copy":"no","studio":true,"duplicate_merge":"disabled"};field_defs_KBContents[ "status"] = {"name":"status","vname":"Status","type":"enum","len":100,"options":"kbdocument_status_dom","reportable":true,"audited":true,"studio":true,"duplicate_on_record_copy":"no"};var option_arr_KBContents = new Array();

option_arr_KBContents[option_arr_KBContents.length] = { "value":"draft", "text":"Draft"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"in-review", "text":"In Review"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"approved", "text":"Approved"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"published", "text":"Published"};
option_arr_KBContents[option_arr_KBContents.length] = { "value":"expired", "text":"Expired"};

field_defs_KBContents[ "status"].options=option_arr_KBContents;

field_defs_KBContents[ "sync_key"] = {"is_sync_key":true,"name":"sync_key","vname":"Integration Sync ID","type":"varchar","readonly":true,"isnull":true,"comments":"External default id of the remote integration record","importable":"true","duplicate_merge":"disabled","merge_filter":"disabled","duplicate_on_record_copy":"no","audited":true,"reportable":true,"len":"100","size":"20"};field_defs_KBContents[ "team_set_id"] = {"name":"team_set_id","rname":"id","id_name":"team_set_id","vname":"Team Set ID","type":"team_set_id","audited":true,"studio":"false","dbType":"id","duplicate_on_record_copy":"always",invisible:true};field_defs_KBContents[ "useful"] = {"name":"useful","vname":"Useful","type":"int","duplicate_on_record_copy":"no","group":"usefulness","hideacl":true};field_defs_KBContents[ "viewcount"] = {"name":"viewcount","vname":"View Count","type":"int","importable":"required","sortable":true,"duplicate_on_record_copy":"no","studio":true,"readonly":true,"duplicate_merge":"disabled"};var default_table_columns_KBContents = [""];




module_defs['KBContents'] = new Object();
module_defs['KBContents'].link_defs = link_defs_KBContents;
module_defs['KBContents'].field_defs = field_defs_KBContents;
module_defs['KBContents'].default_table_columns = default_table_columns_KBContents;
module_defs['KBContents'].summary_field_defs = new Object();
module_defs['KBContents'].group_by_field_defs = new Object();
module_defs['KBContents'].default_summary_columns = default_summary_columns;
module_defs['KBContents'].label = "Knowledge Base";
rel_defs['leads_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Lead","name":"leads_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['leads_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Lead","name":"leads_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['lead_activities'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Activity","name":"lead_activities","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Leads"};
rel_defs['leads_dataprivacy'] = {"lhs_bean_name":"Lead","rhs_bean_name":"DataPrivacy","name":"leads_dataprivacy","table":"leads_dataprivacy","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"id","relationship_type":"many-to-many","join_table":"leads_dataprivacy","join_key_lhs":"lead_id","join_key_rhs":"dataprivacy_id"};
rel_defs['account_leads'] = {"lhs_bean_name":"Account","rhs_bean_name":"Lead","name":"account_leads","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['opportunity_leads'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Lead","name":"opportunity_leads","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"opportunity_id","relationship_type":"one-to-many"};
rel_defs['campaign_leads'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Lead","name":"campaign_leads","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['business_center_leads'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"Lead","name":"business_center_leads","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"business_center_id","relationship_type":"one-to-many"};
rel_defs['lead_messages'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Message","name":"lead_messages","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Leads"};
rel_defs['lead_tasks'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Task","name":"lead_tasks","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Leads"};
rel_defs['lead_notes'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Note","name":"lead_notes","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Leads"};
rel_defs['meetings_leads'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Lead","name":"meetings_leads","table":"meetings_leads","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"id","relationship_type":"many-to-many","join_table":"meetings_leads","join_key_lhs":"meeting_id","join_key_rhs":"lead_id"};
rel_defs['calls_leads'] = {"lhs_bean_name":"Call","rhs_bean_name":"Lead","name":"calls_leads","table":"calls_leads","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"id","relationship_type":"many-to-many","join_table":"calls_leads","join_key_lhs":"call_id","join_key_rhs":"lead_id"};
rel_defs['emails_leads_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Lead","name":"emails_leads_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Leads"};
rel_defs['lead_campaign_log'] = {"lhs_bean_name":"Lead","rhs_bean_name":"CampaignLog","name":"lead_campaign_log","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"CampaignLog","rhs_table":"campaign_log","rhs_key":"target_id","relationship_type":"one-to-many"};
rel_defs['prospect_list_leads'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Lead","name":"prospect_list_leads","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_lists_prospects","join_key_lhs":"prospect_list_id","join_key_rhs":"related_id","relationship_role_column":"related_type","relationship_role_column_value":"Leads"};
rel_defs['lead_prospect'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Prospect","name":"lead_prospect","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"lead_id","relationship_type":"one-to-one"};
rel_defs['leads_tags'] = {"lhs_bean_name":"Lead","rhs_bean_name":"Tag","name":"leads_tags","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Leads","dynamic_subpanel":"1"};
rel_defs['leads_commentlog'] = {"lhs_bean_name":"Lead","rhs_bean_name":"CommentLog","name":"leads_commentlog","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Leads"};
rel_defs['leads_locked_fields'] = {"lhs_bean_name":"Lead","rhs_bean_name":"pmse_BpmProcessDefinition","name":"leads_locked_fields","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Leads"};
rel_defs['leads_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Lead","name":"leads_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['leads_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Lead","name":"leads_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['leads_email_addresses_primary'] = {"lhs_bean_name":"Lead","rhs_bean_name":"EmailAddress","name":"leads_email_addresses_primary","lhs_module":"Leads","lhs_table":"leads","lhs_key":"id","rhs_module":"EmailAddresses","rhs_table":"email_addresses","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_addr_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"email_address_id","relationship_role_column":"bean_module","relationship_role_column_value":"Leads","primary_flag_column":"primary_address"};
rel_defs['cases_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"aCase","name":"cases_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['cases_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"aCase","name":"cases_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['case_activities'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Activity","name":"case_activities","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['business_center_cases'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"aCase","name":"business_center_cases","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"business_center_id","relationship_type":"one-to-many"};
rel_defs['cases_changetimers'] = {"lhs_bean_name":"aCase","rhs_bean_name":"ChangeTimer","name":"cases_changetimers","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"ChangeTimers","rhs_table":"changetimers","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['cases_purchases'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Purchase","name":"cases_purchases","table":"cases_purchases","true_relationship_type":"many-to-many","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Purchases","rhs_table":"purchases","rhs_key":"id","relationship_type":"many-to-many","join_table":"cases_purchases","join_key_lhs":"case_id","join_key_rhs":"purchase_id"};
rel_defs['case_messages'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Message","name":"case_messages","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['case_tasks'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Task","name":"case_tasks","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['case_notes'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Note","name":"case_notes","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['case_meetings'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Meeting","name":"case_meetings","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['emails_cases_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"aCase","name":"emails_cases_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Cases"};
rel_defs['documents_cases'] = {"lhs_bean_name":"Document","rhs_bean_name":"aCase","name":"documents_cases","true_relationship_type":"many-to-many","table":"documents_cases","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_cases","join_key_lhs":"document_id","join_key_rhs":"case_id"};
rel_defs['case_calls'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Call","name":"case_calls","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Cases"};
rel_defs['cases_bugs'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Bug","name":"cases_bugs","table":"cases_bugs","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"cases_bugs","join_key_lhs":"case_id","join_key_rhs":"bug_id"};
rel_defs['contacts_cases'] = {"lhs_bean_name":"Contact","rhs_bean_name":"aCase","name":"contacts_cases","table":"contacts_cases","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"id","relationship_type":"many-to-many","join_table":"contacts_cases","join_key_lhs":"contact_id","join_key_rhs":"case_id"};
rel_defs['account_cases'] = {"lhs_bean_name":"Account","rhs_bean_name":"aCase","name":"account_cases","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['projects_cases'] = {"lhs_bean_name":"Project","rhs_bean_name":"aCase","name":"projects_cases","table":"projects_cases","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_cases","join_key_lhs":"project_id","join_key_rhs":"case_id"};
rel_defs['relcases_kbcontents'] = {"lhs_bean_name":"aCase","rhs_bean_name":"KBContent","name":"relcases_kbcontents","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbscase_id","relationship_type":"one-to-many"};
rel_defs['contact_cases'] = {"lhs_bean_name":"Contact","rhs_bean_name":"aCase","name":"contact_cases","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"primary_contact_id","relationship_type":"one-to-many"};
rel_defs['cases_tags'] = {"lhs_bean_name":"aCase","rhs_bean_name":"Tag","name":"cases_tags","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Cases","dynamic_subpanel":"1"};
rel_defs['cases_commentlog'] = {"lhs_bean_name":"aCase","rhs_bean_name":"CommentLog","name":"cases_commentlog","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Cases"};
rel_defs['cases_locked_fields'] = {"lhs_bean_name":"aCase","rhs_bean_name":"pmse_BpmProcessDefinition","name":"cases_locked_fields","lhs_module":"Cases","lhs_table":"cases","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Cases"};
rel_defs['cases_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"aCase","name":"cases_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['cases_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"aCase","name":"cases_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['cases_first_response_user'] = {"lhs_bean_name":"User","rhs_bean_name":"aCase","name":"cases_first_response_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Cases","rhs_table":"cases","rhs_key":"first_response_user_id","relationship_type":"one-to-many"};
rel_defs['bugs_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Bug","name":"bugs_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['bugs_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Bug","name":"bugs_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['bug_activities'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Activity","name":"bug_activities","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['bug_messages'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Message","name":"bug_messages","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['bug_tasks'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Task","name":"bug_tasks","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['bug_notes'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Note","name":"bug_notes","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['bug_meetings'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Meeting","name":"bug_meetings","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['bug_calls'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Call","name":"bug_calls","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Bugs"};
rel_defs['emails_bugs_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Bug","name":"emails_bugs_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Bugs"};
rel_defs['documents_bugs'] = {"lhs_bean_name":"Document","rhs_bean_name":"Bug","name":"documents_bugs","true_relationship_type":"many-to-many","table":"documents_bugs","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_bugs","join_key_lhs":"document_id","join_key_rhs":"bug_id"};
rel_defs['contacts_bugs'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Bug","name":"contacts_bugs","table":"contacts_bugs","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"contacts_bugs","join_key_lhs":"contact_id","join_key_rhs":"bug_id"};
rel_defs['accounts_bugs'] = {"lhs_bean_name":"Account","rhs_bean_name":"Bug","name":"accounts_bugs","table":"accounts_bugs","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"accounts_bugs","join_key_lhs":"account_id","join_key_rhs":"bug_id"};
rel_defs['projects_bugs'] = {"lhs_bean_name":"Project","rhs_bean_name":"Bug","name":"projects_bugs","table":"projects_bugs","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_bugs","join_key_lhs":"project_id","join_key_rhs":"bug_id"};
rel_defs['bugs_release'] = {"lhs_bean_name":"Release","rhs_bean_name":"Bug","name":"bugs_release","lhs_module":"Releases","lhs_table":"releases","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"found_in_release","relationship_type":"one-to-many"};
rel_defs['bugs_fixed_in_release'] = {"lhs_bean_name":"Release","rhs_bean_name":"Bug","name":"bugs_fixed_in_release","lhs_module":"Releases","lhs_table":"releases","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"fixed_in_release","relationship_type":"one-to-many"};
rel_defs['bugs_tags'] = {"lhs_bean_name":"Bug","rhs_bean_name":"Tag","name":"bugs_tags","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Bugs","dynamic_subpanel":"1"};
rel_defs['bugs_commentlog'] = {"lhs_bean_name":"Bug","rhs_bean_name":"CommentLog","name":"bugs_commentlog","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Bugs"};
rel_defs['bugs_locked_fields'] = {"lhs_bean_name":"Bug","rhs_bean_name":"pmse_BpmProcessDefinition","name":"bugs_locked_fields","lhs_module":"Bugs","lhs_table":"bugs","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Bugs"};
rel_defs['bugs_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Bug","name":"bugs_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['bugs_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Bug","name":"bugs_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Bugs","rhs_table":"bugs","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['prospect_list_prospects'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Prospect","name":"prospect_list_prospects","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_lists_prospects","join_key_lhs":"prospect_list_id","join_key_rhs":"related_id","relationship_role_column":"related_type","relationship_role_column_value":"Prospects"};
rel_defs['prospect_list_contacts'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Contact","name":"prospect_list_contacts","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_lists_prospects","join_key_lhs":"prospect_list_id","join_key_rhs":"related_id","relationship_role_column":"related_type","relationship_role_column_value":"Contacts"};
rel_defs['prospect_list_accounts'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Account","name":"prospect_list_accounts","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_lists_prospects","join_key_lhs":"prospect_list_id","join_key_rhs":"related_id","relationship_role_column":"related_type","relationship_role_column_value":"Accounts"};
rel_defs['prospect_list_campaigns'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Campaign","name":"prospect_list_campaigns","table":"prospect_list_campaigns","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_list_campaigns","join_key_lhs":"prospect_list_id","join_key_rhs":"campaign_id"};
rel_defs['prospect_list_users'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"User","name":"prospect_list_users","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospect_lists_prospects","join_key_lhs":"prospect_list_id","join_key_rhs":"related_id","relationship_role_column":"related_type","relationship_role_column_value":"Users"};
rel_defs['email_marketing_prospect_lists'] = {"lhs_bean_name":"EmailMarketing","rhs_bean_name":"ProspectList","name":"email_marketing_prospect_lists","table":"email_marketing_prospect_lists","lhs_module":"EmailMarketing","lhs_table":"email_marketing","lhs_key":"id","rhs_module":"ProspectLists","rhs_table":"prospect_lists","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_marketing_prospect_lists","join_key_lhs":"email_marketing_id","join_key_rhs":"prospect_list_id"};
rel_defs['prospectlists_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProspectList","name":"prospectlists_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProspectLists","rhs_table":"prospect_lists","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['prospectlists_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ProspectList","name":"prospectlists_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProspectLists","rhs_table":"prospect_lists","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['prospectlists_tags'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"Tag","name":"prospectlists_tags","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProspectLists","dynamic_subpanel":"1"};
rel_defs['prospectlists_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProspectList","name":"prospectlists_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProspectLists","rhs_table":"prospect_lists","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['prospectlists_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"ProspectList","name":"prospectlists_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"ProspectLists","rhs_table":"prospect_lists","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['prospectlists_commentlog'] = {"lhs_bean_name":"ProspectList","rhs_bean_name":"CommentLog","name":"prospectlists_commentlog","lhs_module":"ProspectLists","lhs_table":"prospect_lists","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"ProspectLists"};
rel_defs['prospects_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Prospect","name":"prospects_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['prospects_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Prospect","name":"prospects_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['prospect_activities'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Activity","name":"prospect_activities","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['prospects_email_addresses_primary'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"EmailAddress","name":"prospects_email_addresses_primary","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"EmailAddresses","rhs_table":"email_addresses","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_addr_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"email_address_id","relationship_role_column":"bean_module","relationship_role_column_value":"Prospects","primary_flag_column":"primary_address"};
rel_defs['prospect_campaign_log'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"CampaignLog","name":"prospect_campaign_log","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"CampaignLog","rhs_table":"campaign_log","rhs_key":"target_id","relationship_type":"one-to-many"};
rel_defs['prospect_calls'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Call","name":"prospect_calls","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['prospect_meetings'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Meeting","name":"prospect_meetings","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['prospect_notes'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Note","name":"prospect_notes","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['prospect_messages'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Message","name":"prospect_messages","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['prospects_dataprivacy'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"DataPrivacy","name":"prospects_dataprivacy","table":"prospects_dataprivacy","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"id","relationship_type":"many-to-many","join_table":"prospects_dataprivacy","join_key_lhs":"prospect_id","join_key_rhs":"dataprivacy_id"};
rel_defs['prospect_tasks'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Task","name":"prospect_tasks","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Prospects"};
rel_defs['emails_prospects_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Prospect","name":"emails_prospects_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Prospects"};
rel_defs['prospects_tags'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"Tag","name":"prospects_tags","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Prospects","dynamic_subpanel":"1"};
rel_defs['prospects_commentlog'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"CommentLog","name":"prospects_commentlog","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Prospects"};
rel_defs['prospects_locked_fields'] = {"lhs_bean_name":"Prospect","rhs_bean_name":"pmse_BpmProcessDefinition","name":"prospects_locked_fields","lhs_module":"Prospects","lhs_table":"prospects","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Prospects"};
rel_defs['prospects_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Prospect","name":"prospects_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['prospects_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Prospect","name":"prospects_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Prospects","rhs_table":"prospects","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['projects_accounts'] = {"lhs_bean_name":"Project","rhs_bean_name":"Account","name":"projects_accounts","table":"projects_accounts","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_accounts","join_key_lhs":"project_id","join_key_rhs":"account_id"};
rel_defs['projects_quotes'] = {"lhs_bean_name":"Project","rhs_bean_name":"Quote","name":"projects_quotes","table":"projects_quotes","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_quotes","join_key_lhs":"project_id","join_key_rhs":"quote_id"};
rel_defs['projects_contacts'] = {"lhs_bean_name":"Project","rhs_bean_name":"Contact","name":"projects_contacts","table":"projects_contacts","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_contacts","join_key_lhs":"project_id","join_key_rhs":"contact_id"};
rel_defs['projects_opportunities'] = {"lhs_bean_name":"Project","rhs_bean_name":"Opportunity","name":"projects_opportunities","table":"projects_opportunities","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_opportunities","join_key_lhs":"project_id","join_key_rhs":"opportunity_id"};
rel_defs['projects_notes'] = {"lhs_bean_name":"Project","rhs_bean_name":"Note","name":"projects_notes","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Project"};
rel_defs['projects_messages'] = {"lhs_bean_name":"Project","rhs_bean_name":"Message","name":"projects_messages","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Project"};
rel_defs['projects_tasks'] = {"lhs_bean_name":"Project","rhs_bean_name":"Task","name":"projects_tasks","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Project"};
rel_defs['projects_meetings'] = {"lhs_bean_name":"Project","rhs_bean_name":"Meeting","name":"projects_meetings","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Project"};
rel_defs['projects_calls'] = {"lhs_bean_name":"Project","rhs_bean_name":"Call","name":"projects_calls","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Project"};
rel_defs['emails_projects_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Project","name":"emails_projects_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Project","rhs_table":"project","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Project"};
rel_defs['projects_project_tasks'] = {"lhs_bean_name":"Project","rhs_bean_name":"ProjectTask","name":"projects_project_tasks","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"project_id","relationship_type":"one-to-many"};
rel_defs['projects_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Project","name":"projects_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Project","rhs_table":"project","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['projects_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Project","name":"projects_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Project","rhs_table":"project","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['projects_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Project","name":"projects_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Project","rhs_table":"project","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['projects_products'] = {"lhs_bean_name":"Project","rhs_bean_name":"Product","name":"projects_products","table":"projects_products","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_products","join_key_lhs":"project_id","join_key_rhs":"product_id"};
rel_defs['projects_revenuelineitems'] = {"lhs_bean_name":"Project","rhs_bean_name":"RevenueLineItem","name":"projects_revenuelineitems","table":"projects_revenue_line_items","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"id","relationship_type":"many-to-many","join_table":"projects_products","join_key_lhs":"project_id","join_key_rhs":"rli_id"};
rel_defs['projects_users_resources'] = {"lhs_bean_name":"Project","rhs_bean_name":"User","name":"projects_users_resources","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"project_resources","join_key_lhs":"project_id","join_key_rhs":"resource_id","relationship_role_column":"resource_type","relationship_role_column_value":"Users"};
rel_defs['projects_contacts_resources'] = {"lhs_bean_name":"Project","rhs_bean_name":"Contact","name":"projects_contacts_resources","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"project_resources","join_key_lhs":"project_id","join_key_rhs":"resource_id","relationship_role_column":"resource_type","relationship_role_column_value":"Contacts"};
rel_defs['projects_holidays'] = {"lhs_bean_name":"Project","rhs_bean_name":"Holiday","name":"projects_holidays","lhs_module":"Project","lhs_table":"project","lhs_key":"id","rhs_module":"Holidays","rhs_table":"holidays","rhs_key":"related_module_id","relationship_type":"one-to-many","relationship_role_column":"related_module","relationship_role_column_value":"Project"};
rel_defs['project_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Project","name":"project_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Project","rhs_table":"project","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['project_tasks_notes'] = {"lhs_bean_name":"ProjectTask","rhs_bean_name":"Note","name":"project_tasks_notes","lhs_module":"ProjectTask","lhs_table":"project_task","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"ProjectTask"};
rel_defs['project_tasks_messages'] = {"lhs_bean_name":"ProjectTask","rhs_bean_name":"Message","name":"project_tasks_messages","lhs_module":"ProjectTask","lhs_table":"project_task","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"ProjectTask"};
rel_defs['project_tasks_tasks'] = {"lhs_bean_name":"ProjectTask","rhs_bean_name":"Task","name":"project_tasks_tasks","lhs_module":"ProjectTask","lhs_table":"project_task","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"ProjectTask"};
rel_defs['project_tasks_meetings'] = {"lhs_bean_name":"ProjectTask","rhs_bean_name":"Meeting","name":"project_tasks_meetings","lhs_module":"ProjectTask","lhs_table":"project_task","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"ProjectTask"};
rel_defs['project_tasks_calls'] = {"lhs_bean_name":"ProjectTask","rhs_bean_name":"Call","name":"project_tasks_calls","lhs_module":"ProjectTask","lhs_table":"project_task","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"ProjectTask"};
rel_defs['emails_project_task_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"ProjectTask","name":"emails_project_task_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProjectTask"};
rel_defs['project_tasks_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ProjectTask","name":"project_tasks_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['project_tasks_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProjectTask","name":"project_tasks_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['project_tasks_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProjectTask","name":"project_tasks_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['projecttask_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"ProjectTask","name":"projecttask_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"ProjectTask","rhs_table":"project_task","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['campaigns_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Campaign","name":"campaigns_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['campaigns_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Campaign","name":"campaigns_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['campaign_activities'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Activity","name":"campaign_activities","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Campaigns"};
rel_defs['campaign_email_marketing'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"EmailMarketing","name":"campaign_email_marketing","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"EmailMarketing","rhs_table":"email_marketing","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_emailman'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"EmailMan","name":"campaign_emailman","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"EmailMan","rhs_table":"emailman","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_campaignlog'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"CampaignLog","name":"campaign_campaignlog","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"CampaignLog","rhs_table":"campaign_log","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_campaigntrakers'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"CampaignTracker","name":"campaign_campaigntrakers","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"CampaignTrackers","rhs_table":"campaign_trkrs","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_opportunities'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Opportunity","name":"campaign_opportunities","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_contacts'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Contact","name":"campaign_contacts","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaign_accounts'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Account","name":"campaign_accounts","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['forecastworksheets_campaigns'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"ForecastWorksheet","name":"forecastworksheets_campaigns","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"ForecastWorksheets","rhs_table":"forecast_worksheets","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['campaigns_commentlog'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"CommentLog","name":"campaigns_commentlog","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Campaigns"};
rel_defs['campaigns_locked_fields'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"pmse_BpmProcessDefinition","name":"campaigns_locked_fields","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Campaigns"};
rel_defs['campaigns_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Campaign","name":"campaigns_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['campaigns_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Campaign","name":"campaigns_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['campaigns_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Campaign","name":"campaigns_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Campaigns","rhs_table":"campaigns","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['campaignlog_contact'] = {"lhs_bean_name":"CampaignLog","rhs_bean_name":"Contact","name":"campaignlog_contact","lhs_module":"CampaignLog","lhs_table":"campaign_log","lhs_key":"related_id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['campaignlog_lead'] = {"lhs_bean_name":"CampaignLog","rhs_bean_name":"Lead","name":"campaignlog_lead","lhs_module":"CampaignLog","lhs_table":"campaign_log","lhs_key":"related_id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['campaignlog_created_opportunities'] = {"lhs_bean_name":"CampaignLog","rhs_bean_name":"Opportunity","name":"campaignlog_created_opportunities","lhs_module":"CampaignLog","lhs_table":"campaign_log","lhs_key":"related_id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['campaignlog_targeted_users'] = {"lhs_bean_name":"CampaignLog","rhs_bean_name":"User","name":"campaignlog_targeted_users","lhs_module":"CampaignLog","lhs_table":"campaign_log","lhs_key":"target_id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['account_campaign_log'] = {"lhs_bean_name":"Account","rhs_bean_name":"CampaignLog","name":"account_campaign_log","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"CampaignLog","rhs_table":"campaign_log","rhs_key":"target_id","relationship_type":"one-to-many"};
rel_defs['contact_campaign_log'] = {"lhs_bean_name":"Contact","rhs_bean_name":"CampaignLog","name":"contact_campaign_log","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"CampaignLog","rhs_table":"campaign_log","rhs_key":"target_id","relationship_type":"one-to-many"};
rel_defs['campaignlog_sent_emails'] = {"lhs_bean_name":"CampaignLog","rhs_bean_name":"Email","name":"campaignlog_sent_emails","lhs_module":"CampaignLog","lhs_table":"campaign_log","lhs_key":"related_id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['contacts_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Contact","name":"contacts_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['contacts_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Contact","name":"contacts_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['contact_activities'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Activity","name":"contact_activities","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Contacts"};
rel_defs['business_center_contacts'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"Contact","name":"business_center_contacts","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"business_center_id","relationship_type":"one-to-many"};
rel_defs['contacts_purchases'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Purchase","name":"contacts_purchases","table":"contacts_purchases","true_relationship_type":"many-to-many","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Purchases","rhs_table":"purchases","rhs_key":"id","relationship_type":"many-to-many","join_table":"contacts_purchases","join_key_lhs":"contact_id","join_key_rhs":"purchase_id"};
rel_defs['accounts_contacts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Contact","name":"accounts_contacts","table":"accounts_contacts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"accounts_contacts","join_key_lhs":"account_id","join_key_rhs":"contact_id","primary_flag_column":"primary_account","primary_flag_side":"rhs","primary_flag_default":"1"};
rel_defs['contact_direct_reports'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Contact","name":"contact_direct_reports","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"reports_to_id","relationship_type":"one-to-many"};
rel_defs['opportunities_contacts'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Contact","name":"opportunities_contacts","table":"opportunities_contacts","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"opportunities_contacts","join_key_lhs":"opportunity_id","join_key_rhs":"contact_id"};
rel_defs['calls_contacts'] = {"lhs_bean_name":"Call","rhs_bean_name":"Contact","name":"calls_contacts","table":"calls_contacts","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"calls_contacts","join_key_lhs":"call_id","join_key_rhs":"contact_id"};
rel_defs['contacts_dataprivacy'] = {"lhs_bean_name":"Contact","rhs_bean_name":"DataPrivacy","name":"contacts_dataprivacy","table":"contacts_dataprivacy","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"id","relationship_type":"many-to-many","join_table":"contacts_dataprivacy","join_key_lhs":"contact_id","join_key_rhs":"dataprivacy_id"};
rel_defs['emails_contacts_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Contact","name":"emails_contacts_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","relationship_role_column":"bean_module","relationship_role_column_value":"Contacts","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id"};
rel_defs['documents_contacts'] = {"lhs_bean_name":"Document","rhs_bean_name":"Contact","name":"documents_contacts","true_relationship_type":"many-to-many","table":"documents_contacts","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_contacts","join_key_lhs":"document_id","join_key_rhs":"contact_id"};
rel_defs['contact_leads'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Lead","name":"contact_leads","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Leads","rhs_table":"leads","rhs_key":"contact_id","relationship_type":"one-to-many"};
rel_defs['contact_products'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Product","name":"contact_products","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"contact_id","relationship_type":"one-to-many"};
rel_defs['contracts_contacts'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Contact","name":"contracts_contacts","table":"contracts_contacts","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"contracts_contacts","join_key_lhs":"contract_id","join_key_rhs":"contact_id"};
rel_defs['meetings_contacts'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Contact","name":"meetings_contacts","table":"meetings_contacts","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"many-to-many","join_table":"meetings_contacts","join_key_lhs":"meeting_id","join_key_rhs":"contact_id"};
rel_defs['contact_notes'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Note","name":"contact_notes","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"contact_id","relationship_type":"one-to-many"};
rel_defs['contact_messages'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Message","name":"contact_messages","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"contact_id","relationship_type":"one-to-many"};
rel_defs['quotes_contacts_shipto'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Quote","name":"quotes_contacts_shipto","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","relationship_type":"many-to-many","true_relationship_type":"one-to-many","join_table":"quotes_contacts","join_key_rhs":"quote_id","join_key_lhs":"contact_id","relationship_role_column":"contact_role","relationship_role_column_value":"Ship To"};
rel_defs['quotes_contacts_billto'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Quote","name":"quotes_contacts_billto","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","relationship_type":"many-to-many","true_relationship_type":"one-to-many","join_table":"quotes_contacts","join_key_rhs":"quote_id","join_key_lhs":"contact_id","relationship_role_column":"contact_role","relationship_role_column_value":"Bill To"};
rel_defs['contact_tasks'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Task","name":"contact_tasks","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"contact_id","relationship_type":"one-to-many"};
rel_defs['contacts_users'] = {"lhs_bean_name":"User","rhs_bean_name":"Contact","name":"contacts_users","table":"contacts_users","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"id","relationship_type":"user-based","join_table":"contacts_users","join_key_lhs":"user_id","join_key_rhs":"contact_id","user_field":"user_id"};
rel_defs['contacts_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Contact","name":"contacts_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['contacts_tags'] = {"lhs_bean_name":"Contact","rhs_bean_name":"Tag","name":"contacts_tags","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Contacts","dynamic_subpanel":"1"};
rel_defs['contacts_commentlog'] = {"lhs_bean_name":"Contact","rhs_bean_name":"CommentLog","name":"contacts_commentlog","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Contacts"};
rel_defs['contacts_locked_fields'] = {"lhs_bean_name":"Contact","rhs_bean_name":"pmse_BpmProcessDefinition","name":"contacts_locked_fields","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Contacts"};
rel_defs['contacts_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Contact","name":"contacts_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Contacts","rhs_table":"contacts","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['contacts_email_addresses_primary'] = {"lhs_bean_name":"Contact","rhs_bean_name":"EmailAddress","name":"contacts_email_addresses_primary","lhs_module":"Contacts","lhs_table":"contacts","lhs_key":"id","rhs_module":"EmailAddresses","rhs_table":"email_addresses","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_addr_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"email_address_id","relationship_role_column":"bean_module","relationship_role_column_value":"Contacts","primary_flag_column":"primary_address"};
rel_defs['accounts_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Account","name":"accounts_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['accounts_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Account","name":"accounts_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['account_activities'] = {"lhs_bean_name":"Account","rhs_bean_name":"Activity","name":"account_activities","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['member_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Account","name":"member_accounts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"parent_id","relationship_type":"one-to-many"};
rel_defs['business_center_accounts'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"Account","name":"business_center_accounts","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"business_center_id","relationship_type":"one-to-many"};
rel_defs['account_messages'] = {"lhs_bean_name":"Account","rhs_bean_name":"Message","name":"account_messages","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['account_tasks'] = {"lhs_bean_name":"Account","rhs_bean_name":"Task","name":"account_tasks","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['account_notes'] = {"lhs_bean_name":"Account","rhs_bean_name":"Note","name":"account_notes","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['account_meetings'] = {"lhs_bean_name":"Account","rhs_bean_name":"Meeting","name":"account_meetings","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['account_calls'] = {"lhs_bean_name":"Account","rhs_bean_name":"Call","name":"account_calls","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Accounts"};
rel_defs['emails_accounts_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Account","name":"emails_accounts_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Accounts"};
rel_defs['documents_accounts'] = {"lhs_bean_name":"Document","rhs_bean_name":"Account","name":"documents_accounts","true_relationship_type":"many-to-many","table":"documents_accounts","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_accounts","join_key_lhs":"document_id","join_key_rhs":"account_id"};
rel_defs['accounts_opportunities'] = {"lhs_bean_name":"Account","rhs_bean_name":"Opportunity","name":"accounts_opportunities","table":"accounts_opportunities","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"id","relationship_type":"one-to-many","join_table":"accounts_opportunities","join_key_lhs":"account_id","join_key_rhs":"opportunity_id","true_relationship_type":"one-to-many"};
rel_defs['quotes_billto_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Quote","name":"quotes_billto_accounts","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","relationship_type":"many-to-many","true_relationship_type":"one-to-many","join_table":"quotes_accounts","join_key_rhs":"quote_id","join_key_lhs":"account_id","relationship_role_column":"account_role","relationship_role_column_value":"Bill To"};
rel_defs['quotes_shipto_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Quote","name":"quotes_shipto_accounts","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","relationship_type":"many-to-many","true_relationship_type":"one-to-many","join_table":"quotes_accounts","join_key_rhs":"quote_id","join_key_lhs":"account_id","relationship_role_column":"account_role","relationship_role_column_value":"Ship To"};
rel_defs['revenuelineitems_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_accounts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['purchasedlineitems_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"PurchasedLineItem","name":"purchasedlineitems_accounts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"PurchasedLineItems","rhs_table":"purchased_line_items","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['forecastworksheets_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"ForecastWorksheet","name":"forecastworksheets_accounts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"ForecastWorksheets","rhs_table":"forecast_worksheets","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['products_accounts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Product","name":"products_accounts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['account_contracts'] = {"lhs_bean_name":"Account","rhs_bean_name":"Contract","name":"account_contracts","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['accounts_dataprivacy'] = {"lhs_bean_name":"Account","rhs_bean_name":"DataPrivacy","name":"accounts_dataprivacy","table":"accounts_dataprivacy","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"id","relationship_type":"many-to-many","join_table":"accounts_dataprivacy","join_key_lhs":"account_id","join_key_rhs":"dataprivacy_id"};
rel_defs['account_purchases'] = {"lhs_bean_name":"Account","rhs_bean_name":"Purchase","name":"account_purchases","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Purchases","rhs_table":"purchases","rhs_key":"account_id","relationship_type":"one-to-many"};
rel_defs['accounts_tags'] = {"lhs_bean_name":"Account","rhs_bean_name":"Tag","name":"accounts_tags","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Accounts","dynamic_subpanel":"1"};
rel_defs['accounts_commentlog'] = {"lhs_bean_name":"Account","rhs_bean_name":"CommentLog","name":"accounts_commentlog","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Accounts"};
rel_defs['accounts_locked_fields'] = {"lhs_bean_name":"Account","rhs_bean_name":"pmse_BpmProcessDefinition","name":"accounts_locked_fields","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Accounts"};
rel_defs['accounts_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Account","name":"accounts_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['accounts_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Account","name":"accounts_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Accounts","rhs_table":"accounts","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['accounts_email_addresses_primary'] = {"lhs_bean_name":"Account","rhs_bean_name":"EmailAddress","name":"accounts_email_addresses_primary","lhs_module":"Accounts","lhs_table":"accounts","lhs_key":"id","rhs_module":"EmailAddresses","rhs_table":"email_addresses","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_addr_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"email_address_id","relationship_role_column":"bean_module","relationship_role_column_value":"Accounts","primary_flag_column":"primary_address"};
rel_defs['opportunities_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Opportunity","name":"opportunities_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['opportunities_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Opportunity","name":"opportunities_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['opportunity_activities'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Activity","name":"opportunity_activities","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['renewals_opportunities'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Opportunity","name":"renewals_opportunities","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"renewal_parent_id","relationship_type":"one-to-many"};
rel_defs['opportunity_tasks'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Task","name":"opportunity_tasks","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['opportunity_notes'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Note","name":"opportunity_notes","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['opportunity_messages'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Message","name":"opportunity_messages","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['opportunity_meetings'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Meeting","name":"opportunity_meetings","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['opportunity_calls'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Call","name":"opportunity_calls","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Opportunities"};
rel_defs['emails_opportunities_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Opportunity","name":"emails_opportunities_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Opportunities"};
rel_defs['documents_opportunities'] = {"lhs_bean_name":"Document","rhs_bean_name":"Opportunity","name":"documents_opportunities","true_relationship_type":"many-to-many","table":"documents_opportunities","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_opportunities","join_key_lhs":"document_id","join_key_rhs":"opportunity_id"};
rel_defs['quotes_opportunities'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Quote","name":"quotes_opportunities","table":"quotes_opportunities","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","relationship_type":"many-to-many","true_relationship_type":"one-to-many","join_table":"quotes_opportunities","join_key_lhs":"opportunity_id","join_key_rhs":"quote_id"};
rel_defs['contracts_opportunities'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Contract","name":"contracts_opportunities","table":"contracts_opportunities","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"id","relationship_type":"one-to-many","join_table":"contracts_opportunities","join_key_lhs":"opportunity_id","join_key_rhs":"contract_id","true_relationship_type":"one-to-many"};
rel_defs['opportunities_revenuelineitems'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"RevenueLineItem","name":"opportunities_revenuelineitems","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"opportunity_id","relationship_type":"one-to-many"};
rel_defs['forecastworksheets_opportunities'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"ForecastWorksheet","name":"forecastworksheets_opportunities","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"ForecastWorksheets","rhs_table":"forecast_worksheets","rhs_key":"opportunity_id","relationship_type":"one-to-many"};
rel_defs['opportunities_products'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Product","name":"opportunities_products","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"opportunity_id","relationship_type":"one-to-many"};
rel_defs['purchasedlineitem_renewal_opp'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"PurchasedLineItem","name":"purchasedlineitem_renewal_opp","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"PurchasedLineItems","rhs_table":"purchased_line_items","rhs_key":"renewal_opp_id","relationship_type":"one-to-many"};
rel_defs['opportunities_tags'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"Tag","name":"opportunities_tags","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Opportunities","dynamic_subpanel":"1"};
rel_defs['opportunities_commentlog'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"CommentLog","name":"opportunities_commentlog","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Opportunities"};
rel_defs['opportunities_locked_fields'] = {"lhs_bean_name":"Opportunity","rhs_bean_name":"pmse_BpmProcessDefinition","name":"opportunities_locked_fields","lhs_module":"Opportunities","lhs_table":"opportunities","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Opportunities"};
rel_defs['opportunities_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Opportunity","name":"opportunities_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['opportunities_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Opportunity","name":"opportunities_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['opportunities_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Opportunity","name":"opportunities_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Opportunities","rhs_table":"opportunities","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['notes_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Note","name":"notes_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['notes_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Note","name":"notes_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['note_activities'] = {"lhs_bean_name":"Note","rhs_bean_name":"Activity","name":"note_activities","lhs_module":"Notes","lhs_table":"notes","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Notes"};
rel_defs['product_notes'] = {"lhs_bean_name":"Product","rhs_bean_name":"Note","name":"product_notes","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Products"};
rel_defs['revenuelineitem_notes'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Note","name":"revenuelineitem_notes","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['quote_notes'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Note","name":"quote_notes","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['contract_notes'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Note","name":"contract_notes","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_role_column":"parent_type","relationship_role_column_value":"Contracts","relationship_type":"one-to-many"};
rel_defs['kbcontent_notes'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Note","name":"kbcontent_notes","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['emails_notes_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Note","name":"emails_notes_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Notes"};
rel_defs['emails_attachments'] = {"lhs_bean_name":"Email","rhs_bean_name":"Note","name":"emails_attachments","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"email_id","relationship_type":"one-to-many","relationship_class":"EmailAttachmentRelationship","relationship_file":"modules/Emails/EmailAttachmentRelationship.php","relationship_role_column":"email_type","relationship_role_column_value":"Emails"};
rel_defs['emailtemplates_attachments'] = {"lhs_bean_name":"EmailTemplate","rhs_bean_name":"Note","name":"emailtemplates_attachments","lhs_module":"EmailTemplates","lhs_table":"email_templates","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"email_id","relationship_type":"one-to-many","relationship_role_column":"email_type","relationship_role_column_value":"EmailTemplates"};
rel_defs['meetings_notes'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Note","name":"meetings_notes","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Meetings"};
rel_defs['calls_notes'] = {"lhs_bean_name":"Call","rhs_bean_name":"Note","name":"calls_notes","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Calls"};
rel_defs['tasks_notes'] = {"lhs_bean_name":"Task","rhs_bean_name":"Note","name":"tasks_notes","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Tasks"};
rel_defs['schedulersjob_notes'] = {"lhs_bean_name":"SchedulersJob","rhs_bean_name":"Note","name":"schedulersjob_notes","lhs_module":"SchedulersJobs","lhs_table":"job_queue","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type"};
rel_defs['notes_attachments'] = {"lhs_bean_name":"Note","rhs_bean_name":"Note","name":"notes_attachments","lhs_module":"Notes","lhs_table":"notes","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"note_parent_id","relationship_type":"one-to-many"};
rel_defs['notes_tags'] = {"lhs_bean_name":"Note","rhs_bean_name":"Tag","name":"notes_tags","lhs_module":"Notes","lhs_table":"notes","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Notes","dynamic_subpanel":"1"};
rel_defs['notes_commentlog'] = {"lhs_bean_name":"Note","rhs_bean_name":"CommentLog","name":"notes_commentlog","lhs_module":"Notes","lhs_table":"notes","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Notes"};
rel_defs['notes_locked_fields'] = {"lhs_bean_name":"Note","rhs_bean_name":"pmse_BpmProcessDefinition","name":"notes_locked_fields","lhs_module":"Notes","lhs_table":"notes","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Notes"};
rel_defs['notes_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Note","name":"notes_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['notes_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Note","name":"notes_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['calls_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Call","name":"calls_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['calls_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Call","name":"calls_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['call_activities'] = {"lhs_bean_name":"Call","rhs_bean_name":"Activity","name":"call_activities","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Calls"};
rel_defs['revenuelineitem_calls'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Call","name":"revenuelineitem_calls","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['product_calls'] = {"lhs_bean_name":"Product","rhs_bean_name":"Call","name":"product_calls","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Products"};
rel_defs['quote_calls'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Call","name":"quote_calls","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['calls_users'] = {"lhs_bean_name":"Call","rhs_bean_name":"User","name":"calls_users","table":"calls_users","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"calls_users","join_key_lhs":"call_id","join_key_rhs":"user_id"};
rel_defs['calls_messages'] = {"lhs_bean_name":"Call","rhs_bean_name":"Message","name":"calls_messages","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Calls"};
rel_defs['calls_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Call","name":"calls_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['calls_tags'] = {"lhs_bean_name":"Call","rhs_bean_name":"Tag","name":"calls_tags","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Calls","dynamic_subpanel":"1"};
rel_defs['calls_commentlog'] = {"lhs_bean_name":"Call","rhs_bean_name":"CommentLog","name":"calls_commentlog","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Calls"};
rel_defs['calls_locked_fields'] = {"lhs_bean_name":"Call","rhs_bean_name":"pmse_BpmProcessDefinition","name":"calls_locked_fields","lhs_module":"Calls","lhs_table":"calls","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Calls"};
rel_defs['calls_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Call","name":"calls_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['inbound_email_emails'] = {"lhs_bean_name":"InboundEmail","rhs_bean_name":"Email","name":"inbound_email_emails","lhs_module":"InboundEmail","lhs_table":"inbound_email","lhs_key":"id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"mailbox_id","relationship_type":"one-to-many"};
rel_defs['emails_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Email","name":"emails_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['emails_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Email","name":"emails_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['emails_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Email","name":"emails_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['emails_purchases_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Purchase","name":"emails_purchases_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Purchases","rhs_table":"purchases","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Purchases"};
rel_defs['emails_purchasedlineitems_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"PurchasedLineItem","name":"emails_purchasedlineitems_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"PurchasedLineItems","rhs_table":"purchased_line_items","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"PurchasedLineItems"};
rel_defs['emails_quotes'] = {"lhs_bean_name":"Email","rhs_bean_name":"Quote","name":"emails_quotes","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Quotes"};
rel_defs['emails_revenuelineitems_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"RevenueLineItem","name":"emails_revenuelineitems_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"RevenueLineItems"};
rel_defs['emails_products_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Product","name":"emails_products_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Products"};
rel_defs['emails_tasks_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Task","name":"emails_tasks_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Tasks"};
rel_defs['emails_users_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"User","name":"emails_users_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Users"};
rel_defs['emails_messages_rel'] = {"lhs_bean_name":"Email","rhs_bean_name":"Message","name":"emails_messages_rel","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"id","relationship_type":"many-to-many","join_table":"emails_beans","join_key_lhs":"email_id","join_key_rhs":"bean_id","relationship_role_column":"bean_module","relationship_role_column_value":"Messages"};
rel_defs['emails_tags'] = {"lhs_bean_name":"Email","rhs_bean_name":"Tag","name":"emails_tags","lhs_module":"Emails","lhs_table":"emails","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Emails","dynamic_subpanel":"1"};
rel_defs['emails_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Email","name":"emails_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Emails","rhs_table":"emails","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['meetings_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Meeting","name":"meetings_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['meetings_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Meeting","name":"meetings_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['meeting_activities'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Activity","name":"meeting_activities","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Meetings"};
rel_defs['meetings_users'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"User","name":"meetings_users","table":"meetings_users","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"meetings_users","join_key_lhs":"meeting_id","join_key_rhs":"user_id"};
rel_defs['revenuelineitem_meetings'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Meeting","name":"revenuelineitem_meetings","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['product_meetings'] = {"lhs_bean_name":"Product","rhs_bean_name":"Meeting","name":"product_meetings","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Products"};
rel_defs['quote_meetings'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Meeting","name":"quote_meetings","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['meetings_messages'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Message","name":"meetings_messages","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Meetings"};
rel_defs['meetings_tags'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"Tag","name":"meetings_tags","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Meetings","dynamic_subpanel":"1"};
rel_defs['meetings_commentlog'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"CommentLog","name":"meetings_commentlog","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Meetings"};
rel_defs['meetings_locked_fields'] = {"lhs_bean_name":"Meeting","rhs_bean_name":"pmse_BpmProcessDefinition","name":"meetings_locked_fields","lhs_module":"Meetings","lhs_table":"meetings","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Meetings"};
rel_defs['meetings_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Meeting","name":"meetings_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['meetings_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Meeting","name":"meetings_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['tasks_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Task","name":"tasks_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['tasks_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Task","name":"tasks_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['task_activities'] = {"lhs_bean_name":"Task","rhs_bean_name":"Activity","name":"task_activities","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Tasks"};
rel_defs['revenuelineitem_tasks'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Task","name":"revenuelineitem_tasks","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['tasks_messages'] = {"lhs_bean_name":"Task","rhs_bean_name":"Message","name":"tasks_messages","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Tasks"};
rel_defs['quote_tasks'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Task","name":"quote_tasks","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['kbcontent_tasks'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Task","name":"kbcontent_tasks","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['tasks_tags'] = {"lhs_bean_name":"Task","rhs_bean_name":"Tag","name":"tasks_tags","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Tasks","dynamic_subpanel":"1"};
rel_defs['tasks_commentlog'] = {"lhs_bean_name":"Task","rhs_bean_name":"CommentLog","name":"tasks_commentlog","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Tasks"};
rel_defs['tasks_locked_fields'] = {"lhs_bean_name":"Task","rhs_bean_name":"pmse_BpmProcessDefinition","name":"tasks_locked_fields","lhs_module":"Tasks","lhs_table":"tasks","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Tasks"};
rel_defs['tasks_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Task","name":"tasks_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['tasks_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Task","name":"tasks_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Tasks","rhs_table":"tasks","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['users_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"User","name":"users_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"created_by","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"one-to-many"};
rel_defs['business_center_users'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"User","name":"business_center_users","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"business_center_id","relationship_type":"one-to-many"};
rel_defs['shifts_users'] = {"lhs_bean_name":"Shift","rhs_bean_name":"User","name":"shifts_users","table":"shifts_users","lhs_module":"Shifts","lhs_table":"shifts","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"shifts_users","join_key_lhs":"shift_id","join_key_rhs":"user_id","true_relationship_type":"many-to-many"};
rel_defs['shift_exceptions_users'] = {"lhs_bean_name":"ShiftException","rhs_bean_name":"User","name":"shift_exceptions_users","table":"shift_exceptions_users","lhs_module":"ShiftExceptions","lhs_table":"shift_exceptions","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"shift_exceptions_users","join_key_lhs":"shift_exception_id","join_key_rhs":"user_id","true_relationship_type":"many-to-many"};
rel_defs['users_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"User","name":"users_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"default_team","relationship_type":"one-to-many"};
rel_defs['team_memberships'] = {"lhs_bean_name":"Team","rhs_bean_name":"User","name":"team_memberships","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"team_memberships","join_key_lhs":"team_id","join_key_rhs":"user_id"};
rel_defs['users_team_sets'] = {"lhs_bean_name":"Team","rhs_bean_name":"User","name":"users_team_sets","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"team_set_id","relationship_type":"many-to-many","join_table":"team_sets_teams","join_key_lhs":"team_id","join_key_rhs":"team_set_id"};
rel_defs['user_direct_reports'] = {"lhs_bean_name":"User","rhs_bean_name":"User","name":"user_direct_reports","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"reports_to_id","relationship_type":"one-to-many"};
rel_defs['users_email_addresses_primary'] = {"lhs_bean_name":"User","rhs_bean_name":"EmailAddress","name":"users_email_addresses_primary","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"EmailAddresses","rhs_table":"email_addresses","rhs_key":"id","relationship_type":"many-to-many","join_table":"email_addr_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"email_address_id"};
rel_defs['acl_roles_users'] = {"lhs_bean_name":"ACLRole","rhs_bean_name":"User","name":"acl_roles_users","table":"acl_roles_users","lhs_module":"ACLRoles","lhs_table":"acl_roles","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"acl_roles_users","join_key_lhs":"role_id","join_key_rhs":"user_id","relationship_class":"ACLRoleUserRelationship","relationship_file":"modules/ACLRoles/ACLRoleUserRelationship.php"};
rel_defs['users_holidays'] = {"lhs_bean_name":"User","rhs_bean_name":"Holiday","name":"users_holidays","table":"users_holidays","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Holidays","rhs_table":"holidays","rhs_key":"person_id","relationship_type":"one-to-many","relationship_role_column":"related_module","relationship_role_column_value":""};
rel_defs['eapm_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"EAPM","name":"eapm_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"EAPM","rhs_table":"eapm","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['oauthtokens_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"OAuthToken","name":"oauthtokens_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"OAuthTokens","rhs_table":"oauth_tokens","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['users_quotas'] = {"lhs_bean_name":"User","rhs_bean_name":"Quota","name":"users_quotas","rhs_module":"Quotas","rhs_table":"quotas","rhs_key":"user_id","lhs_module":"Users","lhs_table":"users","lhs_key":"id","relationship_type":"one-to-many","relationship_role_column":"quota_type","relationship_role_column_value":"Direct"};
rel_defs['users_forecasts'] = {"lhs_bean_name":"User","rhs_bean_name":"Forecast","name":"users_forecasts","rhs_module":"Forecasts","rhs_table":"forecasts","rhs_key":"user_id","lhs_module":"Users","lhs_table":"users","lhs_key":"id","relationship_type":"one-to-many","relationship_role_column":"forecast_type","relationship_role_column_value":"Rollup"};
rel_defs['reportschedules_users'] = {"lhs_bean_name":"ReportSchedule","rhs_bean_name":"User","name":"reportschedules_users","table":"reportschedules_users","lhs_module":"ReportSchedules","lhs_table":"report_schedules","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"reportschedules_users","join_key_lhs":"reportschedule_id","join_key_rhs":"user_id"};
rel_defs['activities_users'] = {"lhs_bean_name":"Activity","rhs_bean_name":"User","name":"activities_users","table":"activities_users","lhs_module":"Activities","lhs_table":"activities","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"id","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"activity_id","join_key_rhs":"parent_id","relationship_role_column":"parent_type","relationship_role_column_value":"Users"};
rel_defs['users_acl_role_sets'] = {"lhs_bean_name":"ACLRoleSet","rhs_bean_name":"User","name":"users_acl_role_sets","lhs_module":"ACLRoleSets","lhs_table":"acl_role_sets","lhs_key":"id","rhs_module":"Users","rhs_table":"users","rhs_key":"acl_role_set_id","relationship_type":"one-to-many"};
rel_defs['tracker_user_id'] = {"lhs_bean_name":"User","rhs_bean_name":"TrackerSession","name":"tracker_user_id","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"TrackerSessions","rhs_table":"tracker","rhs_key":"user_id","relationship_type":"one-to-many"};
rel_defs['tracker_monitor_id'] = {"lhs_bean_name":"TrackerPerf","rhs_bean_name":"Tracker","name":"tracker_monitor_id","lhs_module":"TrackerPerfs","lhs_table":"tracker_perf","lhs_key":"monitor_id","rhs_module":"Trackers","rhs_table":"tracker","rhs_key":"monitor_id","relationship_type":"one-to-one"};
rel_defs['documents_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Document","name":"documents_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['documents_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Document","name":"documents_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['document_activities'] = {"lhs_bean_name":"Document","rhs_bean_name":"Activity","name":"document_activities","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Documents"};
rel_defs['document_revisions'] = {"lhs_bean_name":"Document","rhs_bean_name":"DocumentRevision","name":"document_revisions","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"DocumentRevisions","rhs_table":"document_revisions","rhs_key":"document_id","relationship_type":"one-to-many"};
rel_defs['latest_document_revision'] = {"lhs_bean_name":"Document","rhs_bean_name":"DocumentRevision","name":"latest_document_revision","lhs_module":"Documents","lhs_table":"documents","lhs_key":"document_revision_id","rhs_module":"DocumentRevisions","rhs_table":"document_revisions","rhs_key":"id","relationship_type":"one-to-one"};
rel_defs['contracts_documents'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Document","name":"contracts_documents","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"id","relationship_type":"many-to-many","join_table":"linked_documents","join_key_lhs":"parent_id","join_key_rhs":"document_id","relationship_role_column":"parent_type","relationship_role_column_value":"Contracts"};
rel_defs['contracttype_documents'] = {"lhs_bean_name":"ContractType","rhs_bean_name":"Document","name":"contracttype_documents","lhs_module":"ContractTypes","lhs_table":"contract_types","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"id","relationship_type":"many-to-many","join_table":"linked_documents","join_key_lhs":"parent_id","join_key_rhs":"document_id","relationship_role_column":"parent_type","relationship_role_column_value":"ContracTemplates"};
rel_defs['documents_quotes'] = {"lhs_bean_name":"Document","rhs_bean_name":"Quote","name":"documents_quotes","true_relationship_type":"many-to-many","table":"documents_quotes","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_quotes","join_key_lhs":"document_id","join_key_rhs":"quote_id"};
rel_defs['documents_products'] = {"lhs_bean_name":"Document","rhs_bean_name":"Product","name":"documents_products","true_relationship_type":"many-to-many","table":"documents_products","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_products","join_key_lhs":"document_id","join_key_rhs":"product_id"};
rel_defs['documents_revenuelineitems'] = {"lhs_bean_name":"Document","rhs_bean_name":"RevenueLineItem","name":"documents_revenuelineitems","true_relationship_type":"many-to-many","table":"documents_revenuelineitems","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_revenuelineitems","join_key_lhs":"document_id","join_key_rhs":"rli_id"};
rel_defs['documents_purchases'] = {"lhs_bean_name":"Document","rhs_bean_name":"Purchase","name":"documents_purchases","table":"documents_purchases","true_relationship_type":"many-to-many","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Purchases","rhs_table":"purchases","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_purchases","join_key_lhs":"document_id","join_key_rhs":"purchase_id"};
rel_defs['documents_purchasedlineitems'] = {"lhs_bean_name":"Document","rhs_bean_name":"PurchasedLineItem","name":"documents_purchasedlineitems","table":"documents_purchasedlineitems","true_relationship_type":"many-to-many","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"PurchasedLineItems","rhs_table":"purchased_line_items","rhs_key":"id","relationship_type":"many-to-many","join_table":"documents_purchasedlineitems","join_key_lhs":"document_id","join_key_rhs":"purchasedlineitem_id"};
rel_defs['related_documents'] = {"lhs_bean_name":"Document","rhs_bean_name":"Document","name":"related_documents","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"related_doc_id","relationship_type":"one-to-many"};
rel_defs['documents_commentlog'] = {"lhs_bean_name":"Document","rhs_bean_name":"CommentLog","name":"documents_commentlog","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Documents"};
rel_defs['documents_locked_fields'] = {"lhs_bean_name":"Document","rhs_bean_name":"pmse_BpmProcessDefinition","name":"documents_locked_fields","lhs_module":"Documents","lhs_table":"documents","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Documents"};
rel_defs['documents_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Document","name":"documents_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['documents_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Document","name":"documents_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Documents","rhs_table":"documents","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['revisions_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"DocumentRevision","name":"revisions_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"DocumentRevisions","rhs_table":"document_revisions","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['teams_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Team","name":"teams_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Teams","rhs_table":"teams","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['teams_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Team","name":"teams_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Teams","rhs_table":"teams","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['team_activities'] = {"lhs_bean_name":"Team","rhs_bean_name":"Activity","name":"team_activities","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Teams"};
rel_defs['team_sets_teams'] = {"lhs_bean_name":"TeamSet","rhs_bean_name":"Team","name":"team_sets_teams","table":"team_sets_teams","lhs_module":"TeamSets","lhs_table":"team_sets","lhs_key":"id","rhs_module":"Teams","rhs_table":"teams","rhs_key":"id","relationship_type":"many-to-many","join_table":"team_sets_teams","join_key_lhs":"team_set_id","join_key_rhs":"team_id"};
rel_defs['activities_teams'] = {"lhs_bean_name":"Activity","rhs_bean_name":"Team","name":"activities_teams","lhs_module":"Activities","lhs_table":"activities","lhs_key":"id","rhs_module":"Teams","rhs_table":"teams","rhs_key":"id","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"activity_id","join_key_rhs":"parent_id","relationship_role_column":"parent_type","relationship_role_column_value":"Teams"};
rel_defs['teams_commentlog'] = {"lhs_bean_name":"Team","rhs_bean_name":"CommentLog","name":"teams_commentlog","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Teams"};
rel_defs['teams_locked_fields'] = {"lhs_bean_name":"Team","rhs_bean_name":"pmse_BpmProcessDefinition","name":"teams_locked_fields","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Teams"};
rel_defs['quotes_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Quote","name":"quotes_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['quotes_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Quote","name":"quotes_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['quote_activities'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Activity","name":"quote_activities","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['shipper_quotes'] = {"lhs_bean_name":"Shipper","rhs_bean_name":"Quote","name":"shipper_quotes","lhs_module":"Shippers","lhs_table":"shippers","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"shipper_id","relationship_type":"one-to-many"};
rel_defs['taxrate_quotes'] = {"lhs_bean_name":"TaxRate","rhs_bean_name":"Quote","name":"taxrate_quotes","lhs_module":"TaxRates","lhs_table":"taxrates","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"taxrate_id","relationship_type":"one-to-many"};
rel_defs['quote_messages'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Message","name":"quote_messages","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Quotes"};
rel_defs['quote_products'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Product","name":"quote_products","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"quote_id","relationship_type":"one-to-many"};
rel_defs['quote_revenuelineitems'] = {"lhs_bean_name":"Quote","rhs_bean_name":"RevenueLineItem","name":"quote_revenuelineitems","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"quote_id","relationship_type":"one-to-many"};
rel_defs['product_bundle_quote'] = {"lhs_bean_name":"Quote","rhs_bean_name":"ProductBundle","name":"product_bundle_quote","table":"product_bundle_quote","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"ProductBundles","rhs_table":"product_bundles","rhs_key":"id","relationship_type":"one-to-many","join_table":"product_bundle_quote","join_key_lhs":"quote_id","join_key_rhs":"bundle_id","true_relationship_type":"one-to-many"};
rel_defs['quotes_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Quote","name":"quotes_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['contracts_quotes'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Quote","name":"contracts_quotes","table":"contracts_quotes","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"id","relationship_type":"many-to-many","join_table":"contracts_quotes","join_key_lhs":"contract_id","join_key_rhs":"quote_id"};
rel_defs['quotes_tags'] = {"lhs_bean_name":"Quote","rhs_bean_name":"Tag","name":"quotes_tags","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Quotes","dynamic_subpanel":"1"};
rel_defs['quotes_locked_fields'] = {"lhs_bean_name":"Quote","rhs_bean_name":"pmse_BpmProcessDefinition","name":"quotes_locked_fields","lhs_module":"Quotes","lhs_table":"quotes","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Quotes"};
rel_defs['quotes_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Quote","name":"quotes_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['quotes_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Quote","name":"quotes_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Quotes","rhs_table":"quotes","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitem_activities'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Activity","name":"revenuelineitem_activities","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['purchasedlineitem_revenuelineitem'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"PurchasedLineItem","name":"purchasedlineitem_revenuelineitem","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"PurchasedLineItems","rhs_table":"purchased_line_items","rhs_key":"revenuelineitem_id","relationship_type":"one-to-one"};
rel_defs['campaign_revenuelineitems'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"RevenueLineItem","name":"campaign_revenuelineitems","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"campaign_id","relationship_type":"one-to-many","workflow":""};
rel_defs['revenuelineitem_messages'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Message","name":"revenuelineitem_messages","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"RevenueLineItems"};
rel_defs['revenuelineitems_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitem_categories'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"RevenueLineItem","name":"revenuelineitem_categories","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"category_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitem_templates'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"RevenueLineItem","name":"revenuelineitem_templates","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"product_template_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitem_types'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"RevenueLineItem","name":"revenuelineitem_types","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"type_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitem_pli_addons'] = {"lhs_bean_name":"PurchasedLineItem","rhs_bean_name":"RevenueLineItem","name":"revenuelineitem_pli_addons","lhs_module":"PurchasedLineItems","lhs_table":"purchased_line_items","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"add_on_to_id","relationship_type":"one-to-many"};
rel_defs['products_revenuelineitems'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Product","name":"products_revenuelineitems","rhs_module":"Products","rhs_table":"products","rhs_key":"revenuelineitem_id","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","relationship_type":"one-to-one"};
rel_defs['products_parent_rli'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Product","name":"products_parent_rli","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"parent_rli_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_manufacturers'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_manufacturers","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"manufacturer_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_renewal_rli'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_renewal_rli","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"renewal_rli_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_tags'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"Tag","name":"revenuelineitems_tags","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"RevenueLineItems","dynamic_subpanel":"1"};
rel_defs['revenuelineitems_commentlog'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"CommentLog","name":"revenuelineitems_commentlog","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"RevenueLineItems"};
rel_defs['revenuelineitems_locked_fields'] = {"lhs_bean_name":"RevenueLineItem","rhs_bean_name":"pmse_BpmProcessDefinition","name":"revenuelineitems_locked_fields","lhs_module":"RevenueLineItems","lhs_table":"revenue_line_items","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"RevenueLineItems"};
rel_defs['revenuelineitems_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['revenuelineitems_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"RevenueLineItem","name":"revenuelineitems_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"RevenueLineItems","rhs_table":"revenue_line_items","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['products_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Product","name":"products_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['products_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Product","name":"products_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['product_activities'] = {"lhs_bean_name":"Product","rhs_bean_name":"Activity","name":"product_activities","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Products"};
rel_defs['campaign_products'] = {"lhs_bean_name":"Campaign","rhs_bean_name":"Product","name":"campaign_products","lhs_module":"Campaigns","lhs_table":"campaigns","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"campaign_id","relationship_type":"one-to-many"};
rel_defs['product_product'] = {"lhs_bean_name":"Product","rhs_bean_name":"Product","name":"product_product","table":"product_product","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"product_product","join_key_lhs":"parent_id","join_key_rhs":"child_id","reverse":"1"};
rel_defs['product_messages'] = {"lhs_bean_name":"Product","rhs_bean_name":"Message","name":"product_messages","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"Products"};
rel_defs['contracts_products'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Product","name":"contracts_products","table":"contracts_products","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"contracts_products","join_key_lhs":"contract_id","join_key_rhs":"product_id"};
rel_defs['product_categories'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"Product","name":"product_categories","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"category_id","relationship_type":"one-to-many"};
rel_defs['product_templates'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"Product","name":"product_templates","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"product_template_id","relationship_type":"one-to-many"};
rel_defs['product_types'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"Product","name":"product_types","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"type_id","relationship_type":"one-to-many"};
rel_defs['product_pli_addons'] = {"lhs_bean_name":"PurchasedLineItem","rhs_bean_name":"Product","name":"product_pli_addons","lhs_module":"PurchasedLineItems","lhs_table":"purchased_line_items","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"add_on_to_id","relationship_type":"one-to-many"};
rel_defs['product_bundle_product'] = {"lhs_bean_name":"ProductBundle","rhs_bean_name":"Product","name":"product_bundle_product","table":"product_bundle_product","lhs_module":"ProductBundles","lhs_table":"product_bundles","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"id","relationship_type":"many-to-many","join_table":"product_bundle_product","join_key_lhs":"bundle_id","join_key_rhs":"product_id","true_relationship_type":"one-to-many"};
rel_defs['product_manufacturers'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"Product","name":"product_manufacturers","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"manufacturer_id","relationship_type":"one-to-many"};
rel_defs['products_tags'] = {"lhs_bean_name":"Product","rhs_bean_name":"Tag","name":"products_tags","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Products","dynamic_subpanel":"1"};
rel_defs['products_commentlog'] = {"lhs_bean_name":"Product","rhs_bean_name":"CommentLog","name":"products_commentlog","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Products"};
rel_defs['products_locked_fields'] = {"lhs_bean_name":"Product","rhs_bean_name":"pmse_BpmProcessDefinition","name":"products_locked_fields","lhs_module":"Products","lhs_table":"products","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Products"};
rel_defs['products_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Product","name":"products_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['products_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Product","name":"products_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['products_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Product","name":"products_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Products","rhs_table":"products","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['producttemplates_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductTemplate","name":"producttemplates_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['producttemplates_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductTemplate","name":"producttemplates_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['producttemplate_activities'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"Activity","name":"producttemplate_activities","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"ProductTemplates"};
rel_defs['product_templates_product_categories'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"ProductTemplate","name":"product_templates_product_categories","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"category_id","relationship_type":"one-to-many"};
rel_defs['product_templates_product_types'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"ProductTemplate","name":"product_templates_product_types","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"type_id","relationship_type":"one-to-many"};
rel_defs['product_templates_manufacturers'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"ProductTemplate","name":"product_templates_manufacturers","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"manufacturer_id","relationship_type":"one-to-many"};
rel_defs['forecastworksheets_templates'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"ForecastWorksheet","name":"forecastworksheets_templates","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"ForecastWorksheets","rhs_table":"forecast_worksheets","rhs_key":"product_template_id","relationship_type":"one-to-many"};
rel_defs['producttemplates_tags'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"Tag","name":"producttemplates_tags","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProductTemplates","dynamic_subpanel":"1"};
rel_defs['producttemplates_commentlog'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"CommentLog","name":"producttemplates_commentlog","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"ProductTemplates"};
rel_defs['producttemplates_locked_fields'] = {"lhs_bean_name":"ProductTemplate","rhs_bean_name":"pmse_BpmProcessDefinition","name":"producttemplates_locked_fields","lhs_module":"ProductTemplates","lhs_table":"product_templates","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProductTemplates"};
rel_defs['producttemplates_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductTemplate","name":"producttemplates_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['producttemplates_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"ProductTemplate","name":"producttemplates_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['producttemplates_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"ProductTemplate","name":"producttemplates_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"ProductTemplates","rhs_table":"product_templates","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['producttypes_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductType","name":"producttypes_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductTypes","rhs_table":"product_types","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['producttypes_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductType","name":"producttypes_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductTypes","rhs_table":"product_types","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['producttype_activities'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"Activity","name":"producttype_activities","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"ProductTypes"};
rel_defs['producttypes_tags'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"Tag","name":"producttypes_tags","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProductTypes","dynamic_subpanel":"1"};
rel_defs['producttypes_commentlog'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"CommentLog","name":"producttypes_commentlog","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"ProductTypes"};
rel_defs['producttypes_locked_fields'] = {"lhs_bean_name":"ProductType","rhs_bean_name":"pmse_BpmProcessDefinition","name":"producttypes_locked_fields","lhs_module":"ProductTypes","lhs_table":"product_types","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProductTypes"};
rel_defs['productcategories_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductCategory","name":"productcategories_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductCategories","rhs_table":"product_categories","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['productcategories_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductCategory","name":"productcategories_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductCategories","rhs_table":"product_categories","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['productcategory_activities'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"Activity","name":"productcategory_activities","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"ProductCategories"};
rel_defs['member_categories'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"ProductCategory","name":"member_categories","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"ProductCategories","rhs_table":"product_categories","rhs_key":"parent_id","relationship_type":"one-to-many"};
rel_defs['forecastworksheets_categories'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"ForecastWorksheet","name":"forecastworksheets_categories","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"ForecastWorksheets","rhs_table":"forecast_worksheets","rhs_key":"category_id","relationship_type":"one-to-many"};
rel_defs['productcategories_locked_fields'] = {"lhs_bean_name":"ProductCategory","rhs_bean_name":"pmse_BpmProcessDefinition","name":"productcategories_locked_fields","lhs_module":"ProductCategories","lhs_table":"product_categories","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"ProductCategories"};
rel_defs['productcategories_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ProductCategory","name":"productcategories_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ProductCategories","rhs_table":"product_categories","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['manufacturers_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Manufacturer","name":"manufacturers_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Manufacturers","rhs_table":"manufacturers","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['manufacturers_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Manufacturer","name":"manufacturers_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Manufacturers","rhs_table":"manufacturers","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['manufacturer_activities'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"Activity","name":"manufacturer_activities","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Manufacturers"};
rel_defs['manufacturers_tags'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"Tag","name":"manufacturers_tags","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Manufacturers","dynamic_subpanel":"1"};
rel_defs['manufacturers_commentlog'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"CommentLog","name":"manufacturers_commentlog","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Manufacturers"};
rel_defs['manufacturers_locked_fields'] = {"lhs_bean_name":"Manufacturer","rhs_bean_name":"pmse_BpmProcessDefinition","name":"manufacturers_locked_fields","lhs_module":"Manufacturers","lhs_table":"manufacturers","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Manufacturers"};
rel_defs['forecasts_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Forecast","name":"forecasts_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Forecasts","rhs_table":"forecasts","rhs_key":"user_id","relationship_type":"one-to-many"};
rel_defs['forecasts_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Forecast","name":"forecasts_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Forecasts","rhs_table":"forecasts","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['quotas_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Quota","name":"quotas_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotas","rhs_table":"quotas","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['quotas_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Quota","name":"quotas_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotas","rhs_table":"quotas","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['quota_activities'] = {"lhs_bean_name":"Quota","rhs_bean_name":"Activity","name":"quota_activities","lhs_module":"Quotas","lhs_table":"quotas","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Quotas"};
rel_defs['quotas_commentlog'] = {"lhs_bean_name":"Quota","rhs_bean_name":"CommentLog","name":"quotas_commentlog","lhs_module":"Quotas","lhs_table":"quotas","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Quotas"};
rel_defs['quotas_locked_fields'] = {"lhs_bean_name":"Quota","rhs_bean_name":"pmse_BpmProcessDefinition","name":"quotas_locked_fields","lhs_module":"Quotas","lhs_table":"quotas","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Quotas"};
rel_defs['quotas_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Quota","name":"quotas_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Quotas","rhs_table":"quotas","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['quotas_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Quota","name":"quotas_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Quotas","rhs_table":"quotas","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['contracts_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Contract","name":"contracts_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['contracts_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Contract","name":"contracts_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['contract_activities'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Activity","name":"contract_activities","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Contracts"};
rel_defs['contracts_contract_types'] = {"lhs_bean_name":"ContractType","rhs_bean_name":"Contract","name":"contracts_contract_types","lhs_module":"ContractTypes","lhs_table":"contract_types","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"type","relationship_type":"one-to-many"};
rel_defs['contract_messages'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Message","name":"contract_messages","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_role_column":"parent_type","relationship_role_column_value":"Contracts","relationship_type":"one-to-many"};
rel_defs['contracts_tags'] = {"lhs_bean_name":"Contract","rhs_bean_name":"Tag","name":"contracts_tags","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Contracts","dynamic_subpanel":"1"};
rel_defs['contracts_commentlog'] = {"lhs_bean_name":"Contract","rhs_bean_name":"CommentLog","name":"contracts_commentlog","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Contracts"};
rel_defs['contracts_locked_fields'] = {"lhs_bean_name":"Contract","rhs_bean_name":"pmse_BpmProcessDefinition","name":"contracts_locked_fields","lhs_module":"Contracts","lhs_table":"contracts","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Contracts"};
rel_defs['contracts_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Contract","name":"contracts_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['contracts_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Contract","name":"contracts_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['contracts_currencies'] = {"lhs_bean_name":"Currency","rhs_bean_name":"Contract","name":"contracts_currencies","lhs_module":"Currencies","lhs_table":"currencies","lhs_key":"id","rhs_module":"Contracts","rhs_table":"contracts","rhs_key":"currency_id","relationship_type":"one-to-many"};
rel_defs['shifts_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Shift","name":"shifts_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Shifts","rhs_table":"shifts","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['shifts_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Shift","name":"shifts_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Shifts","rhs_table":"shifts","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['shift_activities'] = {"lhs_bean_name":"Shift","rhs_bean_name":"Activity","name":"shift_activities","lhs_module":"Shifts","lhs_table":"shifts","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Shifts"};
rel_defs['shifts_tags'] = {"lhs_bean_name":"Shift","rhs_bean_name":"Tag","name":"shifts_tags","lhs_module":"Shifts","lhs_table":"shifts","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Shifts","dynamic_subpanel":"1"};
rel_defs['shifts_commentlog'] = {"lhs_bean_name":"Shift","rhs_bean_name":"CommentLog","name":"shifts_commentlog","lhs_module":"Shifts","lhs_table":"shifts","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Shifts"};
rel_defs['shifts_locked_fields'] = {"lhs_bean_name":"Shift","rhs_bean_name":"pmse_BpmProcessDefinition","name":"shifts_locked_fields","lhs_module":"Shifts","lhs_table":"shifts","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Shifts"};
rel_defs['shifts_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Shift","name":"shifts_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Shifts","rhs_table":"shifts","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['shifts_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Shift","name":"shifts_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Shifts","rhs_table":"shifts","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['shiftexceptions_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ShiftException","name":"shiftexceptions_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ShiftExceptions","rhs_table":"shift_exceptions","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['shiftexceptions_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ShiftException","name":"shiftexceptions_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ShiftExceptions","rhs_table":"shift_exceptions","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['shiftexception_activities'] = {"lhs_bean_name":"ShiftException","rhs_bean_name":"Activity","name":"shiftexception_activities","lhs_module":"ShiftExceptions","lhs_table":"shift_exceptions","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"ShiftExceptions"};
rel_defs['shiftexceptions_tags'] = {"lhs_bean_name":"ShiftException","rhs_bean_name":"Tag","name":"shiftexceptions_tags","lhs_module":"ShiftExceptions","lhs_table":"shift_exceptions","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ShiftExceptions","dynamic_subpanel":"1"};
rel_defs['shiftexceptions_commentlog'] = {"lhs_bean_name":"ShiftException","rhs_bean_name":"CommentLog","name":"shiftexceptions_commentlog","lhs_module":"ShiftExceptions","lhs_table":"shift_exceptions","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"ShiftExceptions"};
rel_defs['shiftexceptions_locked_fields'] = {"lhs_bean_name":"ShiftException","rhs_bean_name":"pmse_BpmProcessDefinition","name":"shiftexceptions_locked_fields","lhs_module":"ShiftExceptions","lhs_table":"shift_exceptions","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"ShiftExceptions"};
rel_defs['shiftexceptions_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ShiftException","name":"shiftexceptions_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ShiftExceptions","rhs_table":"shift_exceptions","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['shiftexceptions_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"ShiftException","name":"shiftexceptions_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"ShiftExceptions","rhs_table":"shift_exceptions","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['changetimers_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"ChangeTimer","name":"changetimers_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ChangeTimers","rhs_table":"changetimers","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['changetimers_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"ChangeTimer","name":"changetimers_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"ChangeTimers","rhs_table":"changetimers","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['changetimer_activities'] = {"lhs_bean_name":"ChangeTimer","rhs_bean_name":"Activity","name":"changetimer_activities","lhs_module":"ChangeTimers","lhs_table":"changetimers","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"ChangeTimers"};
rel_defs['messages_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Message","name":"messages_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['messages_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Message","name":"messages_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['message_activities'] = {"lhs_bean_name":"Message","rhs_bean_name":"Activity","name":"message_activities","lhs_module":"Messages","lhs_table":"messages","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Messages"};
rel_defs['kbcontent_messages'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Message","name":"kbcontent_messages","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['messages_tags'] = {"lhs_bean_name":"Message","rhs_bean_name":"Tag","name":"messages_tags","lhs_module":"Messages","lhs_table":"messages","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Messages","dynamic_subpanel":"1"};
rel_defs['messages_commentlog'] = {"lhs_bean_name":"Message","rhs_bean_name":"CommentLog","name":"messages_commentlog","lhs_module":"Messages","lhs_table":"messages","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"Messages"};
rel_defs['messages_locked_fields'] = {"lhs_bean_name":"Message","rhs_bean_name":"pmse_BpmProcessDefinition","name":"messages_locked_fields","lhs_module":"Messages","lhs_table":"messages","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Messages"};
rel_defs['messages_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Message","name":"messages_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['messages_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"Message","name":"messages_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"Messages","rhs_table":"messages","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['dataprivacy_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"DataPrivacy","name":"dataprivacy_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['dataprivacy_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"DataPrivacy","name":"dataprivacy_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['dataprivacy_activities'] = {"lhs_bean_name":"DataPrivacy","rhs_bean_name":"Activity","name":"dataprivacy_activities","lhs_module":"DataPrivacy","lhs_table":"data_privacy","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"DataPrivacy"};
rel_defs['dataprivacy_tags'] = {"lhs_bean_name":"DataPrivacy","rhs_bean_name":"Tag","name":"dataprivacy_tags","lhs_module":"DataPrivacy","lhs_table":"data_privacy","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"DataPrivacy","dynamic_subpanel":"1"};
rel_defs['dataprivacy_commentlog'] = {"lhs_bean_name":"DataPrivacy","rhs_bean_name":"CommentLog","name":"dataprivacy_commentlog","lhs_module":"DataPrivacy","lhs_table":"data_privacy","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"DataPrivacy"};
rel_defs['dataprivacy_locked_fields'] = {"lhs_bean_name":"DataPrivacy","rhs_bean_name":"pmse_BpmProcessDefinition","name":"dataprivacy_locked_fields","lhs_module":"DataPrivacy","lhs_table":"data_privacy","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"DataPrivacy"};
rel_defs['dataprivacy_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"DataPrivacy","name":"dataprivacy_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['dataprivacy_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"DataPrivacy","name":"dataprivacy_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"DataPrivacy","rhs_table":"data_privacy","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['tags_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"Tag","name":"tags_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['tags_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Tag","name":"tags_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['tag_activities'] = {"lhs_bean_name":"Tag","rhs_bean_name":"Activity","name":"tag_activities","lhs_module":"Tags","lhs_table":"tags","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"Tags"};
rel_defs['aclrolesets_tags'] = {"lhs_bean_name":"ACLRoleSet","rhs_bean_name":"Tag","name":"aclrolesets_tags","lhs_module":"ACLRoleSets","lhs_table":"acl_role_sets","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ACLRoleSets","dynamic_subpanel":"1"};
rel_defs['emailtemplates_tags'] = {"lhs_bean_name":"EmailTemplate","rhs_bean_name":"Tag","name":"emailtemplates_tags","lhs_module":"EmailTemplates","lhs_table":"email_templates","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"EmailTemplates","dynamic_subpanel":"1"};
rel_defs['usersignatures_tags'] = {"lhs_bean_name":"UserSignature","rhs_bean_name":"Tag","name":"usersignatures_tags","lhs_module":"UserSignatures","lhs_table":"users_signatures","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"UserSignatures","dynamic_subpanel":"1"};
rel_defs['reports_tags'] = {"lhs_bean_name":"SavedReport","rhs_bean_name":"Tag","name":"reports_tags","lhs_module":"Reports","lhs_table":"saved_reports","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Reports","dynamic_subpanel":"1"};
rel_defs['shippers_tags'] = {"lhs_bean_name":"Shipper","rhs_bean_name":"Tag","name":"shippers_tags","lhs_module":"Shippers","lhs_table":"shippers","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Shippers","dynamic_subpanel":"1"};
rel_defs['taxrates_tags'] = {"lhs_bean_name":"TaxRate","rhs_bean_name":"Tag","name":"taxrates_tags","lhs_module":"TaxRates","lhs_table":"taxrates","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"TaxRates","dynamic_subpanel":"1"};
rel_defs['contracttypes_tags'] = {"lhs_bean_name":"ContractType","rhs_bean_name":"Tag","name":"contracttypes_tags","lhs_module":"ContractTypes","lhs_table":"contract_types","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ContractTypes","dynamic_subpanel":"1"};
rel_defs['pmse_project_tags'] = {"lhs_bean_name":"pmse_Project","rhs_bean_name":"Tag","name":"pmse_project_tags","lhs_module":"pmse_Project","lhs_table":"pmse_project","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"pmse_Project","dynamic_subpanel":"1"};
rel_defs['pmse_business_rules_tags'] = {"lhs_bean_name":"pmse_Business_Rules","rhs_bean_name":"Tag","name":"pmse_business_rules_tags","lhs_module":"pmse_Business_Rules","lhs_table":"pmse_business_rules","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"pmse_Business_Rules","dynamic_subpanel":"1"};
rel_defs['pmse_emails_templates_tags'] = {"lhs_bean_name":"pmse_Emails_Templates","rhs_bean_name":"Tag","name":"pmse_emails_templates_tags","lhs_module":"pmse_Emails_Templates","lhs_table":"pmse_emails_templates","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"pmse_Emails_Templates","dynamic_subpanel":"1"};
rel_defs['businesscenters_tags'] = {"lhs_bean_name":"BusinessCenter","rhs_bean_name":"Tag","name":"businesscenters_tags","lhs_module":"BusinessCenters","lhs_table":"business_centers","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"BusinessCenters","dynamic_subpanel":"1"};
rel_defs['purchases_tags'] = {"lhs_bean_name":"Purchase","rhs_bean_name":"Tag","name":"purchases_tags","lhs_module":"Purchases","lhs_table":"purchases","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"Purchases","dynamic_subpanel":"1"};
rel_defs['purchasedlineitems_tags'] = {"lhs_bean_name":"PurchasedLineItem","rhs_bean_name":"Tag","name":"purchasedlineitems_tags","lhs_module":"PurchasedLineItems","lhs_table":"purchased_line_items","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"PurchasedLineItems","dynamic_subpanel":"1"};
rel_defs['kbcontents_tags'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Tag","name":"kbcontents_tags","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"KBContents","dynamic_subpanel":"1"};
rel_defs['visualpipeline_tags'] = {"lhs_bean_name":"VisualPipeline","rhs_bean_name":"Tag","name":"visualpipeline_tags","lhs_module":"VisualPipeline","lhs_table":"visual_pipeline","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"VisualPipeline","dynamic_subpanel":"1"};
rel_defs['consoleconfiguration_tags'] = {"lhs_bean_name":"ConsoleConfiguration","rhs_bean_name":"Tag","name":"consoleconfiguration_tags","lhs_module":"ConsoleConfiguration","lhs_table":"console_configuration","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ConsoleConfiguration","dynamic_subpanel":"1"};
rel_defs['sugarlive_tags'] = {"lhs_bean_name":"SugarLive","rhs_bean_name":"Tag","name":"sugarlive_tags","lhs_module":"SugarLive","lhs_table":"sugar_live","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"SugarLive","dynamic_subpanel":"1"};
rel_defs['commentlog_tags'] = {"lhs_bean_name":"CommentLog","rhs_bean_name":"Tag","name":"commentlog_tags","lhs_module":"CommentLog","lhs_table":"commentlog","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"CommentLog","dynamic_subpanel":"1"};
rel_defs['dataarchiver_tags'] = {"lhs_bean_name":"DataArchiver","rhs_bean_name":"Tag","name":"dataarchiver_tags","lhs_module":"DataArchiver","lhs_table":"data_archivers","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"DataArchiver","dynamic_subpanel":"1"};
rel_defs['archiveruns_tags'] = {"lhs_bean_name":"ArchiveRuns","rhs_bean_name":"Tag","name":"archiveruns_tags","lhs_module":"ArchiveRuns","lhs_table":"archive_runs","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"id","relationship_type":"many-to-many","join_table":"tag_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"tag_id","relationship_role_column":"bean_module","relationship_role_column_value":"ArchiveRuns","dynamic_subpanel":"1"};
rel_defs['tags_locked_fields'] = {"lhs_bean_name":"Tag","rhs_bean_name":"pmse_BpmProcessDefinition","name":"tags_locked_fields","lhs_module":"Tags","lhs_table":"tags","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"Tags"};
rel_defs['tags_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"Tag","name":"tags_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"Tags","rhs_table":"tags","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
rel_defs['kbcontents_created_by'] = {"lhs_bean_name":"User","rhs_bean_name":"KBContent","name":"kbcontents_created_by","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"created_by","relationship_type":"one-to-many"};
rel_defs['kbcontents_modified_user'] = {"lhs_bean_name":"User","rhs_bean_name":"KBContent","name":"kbcontents_modified_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"modified_user_id","relationship_type":"one-to-many"};
rel_defs['kbcontent_activities'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Activity","name":"kbcontent_activities","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Activities","rhs_table":"activities","rhs_key":"id","rhs_vname":"LBL_ACTIVITY_STREAM","relationship_type":"many-to-many","join_table":"activities_users","join_key_lhs":"parent_id","join_key_rhs":"activity_id","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['kbcontent_attachments'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Note","name":"kbcontent_attachments","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Notes","rhs_table":"notes","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['kbdocuments_kbcontents'] = {"lhs_bean_name":"KBDocument","rhs_bean_name":"KBContent","name":"kbdocuments_kbcontents","lhs_module":"KBDocuments","lhs_table":"kbdocuments","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbdocument_id","relationship_type":"one-to-many"};
rel_defs['kbarticles_kbcontents'] = {"lhs_bean_name":"KBArticle","rhs_bean_name":"KBContent","name":"kbarticles_kbcontents","lhs_module":"KBArticles","lhs_table":"kbarticles","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbarticle_id","relationship_type":"one-to-many"};
rel_defs['localizations'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"KBContent","name":"localizations","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"kbdocument_id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbdocument_id","join_table":"kbcontents","join_key_lhs":"kbdocument_id","join_key_rhs":"kbdocument_id","relationship_type":"one-to-many"};
rel_defs['revisions'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"KBContent","name":"revisions","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"kbarticle_id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbarticle_id","join_table":"kbcontents","join_key_lhs":"kbarticle_id","join_key_rhs":"kbarticle_id","relationship_type":"one-to-many"};
rel_defs['kbsapprovers_kbcontents'] = {"lhs_bean_name":"User","rhs_bean_name":"KBContent","name":"kbsapprovers_kbcontents","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"kbsapprover_id","relationship_type":"one-to-many"};
rel_defs['kbcontent_calls'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Call","name":"kbcontent_calls","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Calls","rhs_table":"calls","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['kbcontent_meetings'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"Meeting","name":"kbcontent_meetings","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"Meetings","rhs_table":"meetings","rhs_key":"parent_id","relationship_type":"one-to-many","relationship_role_column":"parent_type","relationship_role_column_value":"KBContents"};
rel_defs['kbcontents_commentlog'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"CommentLog","name":"kbcontents_commentlog","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"CommentLog","rhs_table":"commentlog","rhs_key":"id","relationship_type":"many-to-many","join_table":"commentlog_rel","join_key_lhs":"record_id","join_key_rhs":"commentlog_id","relationship_role_column":"module","relationship_role_column_value":"KBContents"};
rel_defs['kbcontents_locked_fields'] = {"lhs_bean_name":"KBContent","rhs_bean_name":"pmse_BpmProcessDefinition","name":"kbcontents_locked_fields","lhs_module":"KBContents","lhs_table":"kbcontents","lhs_key":"id","rhs_module":"pmse_BpmProcessDefinition","rhs_table":"pmse_bpm_process_definition","rhs_key":"id","relationship_type":"many-to-many","join_table":"locked_field_bean_rel","join_key_lhs":"bean_id","join_key_rhs":"pd_id","relationship_role_column":"bean_module","relationship_role_column_value":"KBContents"};
rel_defs['kbcontents_team'] = {"lhs_bean_name":"Team","rhs_bean_name":"KBContent","name":"kbcontents_team","lhs_module":"Teams","lhs_table":"teams","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"team_id","relationship_type":"one-to-many"};
rel_defs['kbcontents_assigned_user'] = {"lhs_bean_name":"User","rhs_bean_name":"KBContent","name":"kbcontents_assigned_user","lhs_module":"Users","lhs_table":"users","lhs_key":"id","rhs_module":"KBContents","rhs_table":"kbcontents","rhs_key":"assigned_user_id","relationship_type":"one-to-many"};
var summary_types = {sum:'SUM',avg:'AVG',max:'MAX',min:'MIN'};
    var date_summary_types = {
        day:'Day',
        week:'Week',
        month:'Month',
        year:'Year',
        quarter:'Quarter'
    };

// create summary_defs_field and group_by_field_defs for every module

for(module_name in module_defs)
{
	module_defs[module_name].summary_field_defs = new Object();
	// default summary column

	//alert(module_defs[module_name].field_defs.length);
	var got_probability = 0;
	var got_first_name = 0;
	var got_last_name = 0;
	var got_amount = 0;

	module_defs[module_name].summary_field_defs['count'] = { name:'count', vname: 'Count',"group_function":"count",summary_type:'group' };

	for(field_name in module_defs[module_name].field_defs)
	{
		var field_def =  module_defs[module_name].field_defs[field_name];
		// allow those of type 'int' for summary info
		var field_type = field_def.type;
        var field_source = (typeof field_def.source == 'undefined') ? '' : field_def.source;

		if(typeof(field_def.custom_type) != 'undefined')
		{
			field_type = field_def.custom_type;
		}

        // do not allow group bys of text fields or fields not from the db
        if(field_type != 'text' && (field_source != 'non-db' || typeof(field_def.ext2) != 'undefined') && field_def.name != 'full_name') {
		      module_defs[module_name].group_by_field_defs[ field_def.name] = field_def;
        }


		if(field_type == 'int' || field_type == 'float' || field_type=='currency' || field_type=='decimal' || field_type == 'long')
		{
			// create a new "column" for each summary type
			for(stype in summary_types)
			{

				module_defs[module_name].summary_field_defs[ field_def.name+':'+stype] = { name: field_def.name+':'+stype, field_def_name: field_def.name, vname: summary_types[stype]+': '+ field_def.vname,group_function:stype,summary_type:'group', field_type:field_type};
			}

		}
		else if(field_type == 'date' || field_type == 'datetime' || field_type == 'datetimecombo')
		{

			// create a new "column" for each datetimecombo summary type
			for(stype in date_summary_types)
			{

				module_defs[module_name].group_by_field_defs[field_def.name+':'+stype] = { name: field_def.name+':'+stype, field_def_name: field_def.name, vname: date_summary_types[stype]+': '+ field_def.vname,column_function:stype,summary_type:'column',field_type:field_type };
			}

		}

		if(field_def.name == 'amount')
		{
			got_amount = 1;
		}

		if(field_def.name == 'probability')
		{
			got_probability = 1;
		}

	}


	if(got_probability == 1 && got_amount == 1)
	{
		module_defs[module_name].summary_field_defs['weighted_amount'] = { name: 'weighted_amount', vname: 'Weighted Avg Amount', group_function: 'weighted_amount' };
		module_defs[module_name].summary_field_defs['weighted_sum'] = { name: 'weighted_sum', vname: 'Weighted Sum Amount', group_function: 'weighted_sum' };
	}
}

var filter_defs = new Object();
var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'equals',value:'Equals'};
qualifiers[qualifiers.length] = {name:'not_equals_str',value:'Does Not Equal'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['encrypt'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'equals',value:'Equals'};
qualifiers[qualifiers.length] = {name:'not_equals_str',value:'Does Not Equal'};
qualifiers[qualifiers.length] = {name:'contains',value:'Contains'};
qualifiers[qualifiers.length] = {name:'does_not_contain',value:'Does Not Contain'};
qualifiers[qualifiers.length] = {name:'starts_with',value:'Starts With'};
qualifiers[qualifiers.length] = {name:'ends_with',value:'Ends With'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['varchar'] = qualifiers;
filter_defs['char'] = qualifiers;
filter_defs['text'] = qualifiers;
filter_defs['email'] = qualifiers;
filter_defs['yim'] = qualifiers;
filter_defs['time'] = qualifiers;
filter_defs['phone'] = qualifiers;
filter_defs['url'] = qualifiers;


var qualifiers_name = new Array();
var is_def = {name:'is',value:'Is'};
var is_not_def = {name:'is_not',value:"Is Not"};
var one_of_def = {name:'one_of',value:'Is One Of'};
var not_one_of_def = {name:'not_one_of',value:'Is Not One Of'};
qualifiers_name = qualifiers_name.concat(qualifiers);
qualifiers_name.unshift(is_not_def);
qualifiers_name.unshift(is_def);
filter_defs['name'] = qualifiers_name;
filter_defs['fullname'] = qualifiers_name;


var qualifiers_name = new Array();
var is_not_empty_def = {name:'not_empty',value:'Is Not Empty'};
var is_empty_def = {name:'empty',value:'Is Empty'};
var reports_to_def = {name:'reports_to',value:'Reports To'};
qualifiers_name.unshift(reports_to_def);
qualifiers_name.unshift(is_not_empty_def);
qualifiers_name.unshift(is_empty_def);
qualifiers_name.unshift(not_one_of_def);
qualifiers_name.unshift(one_of_def);
qualifiers_name.unshift(is_not_def);
qualifiers_name.unshift(is_def);
filter_defs['username'] = qualifiers_name;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'on',value:'On'};
qualifiers[qualifiers.length] = {name:'before',value:'Before'};
qualifiers[qualifiers.length] = {name:'after',value:'After'};
qualifiers[qualifiers.length] = {name:'between_dates',value:'Is Between'};
qualifiers[qualifiers.length] = {name:'not_equals_str',value:'Not On'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};



qualifiers[qualifiers.length] = {name:'tp_yesterday',value:'Yesterday'};
qualifiers[qualifiers.length] = {name:'tp_today',value:'Today'};
qualifiers[qualifiers.length] = {name:'tp_tomorrow',value:'Tomorrow'};
qualifiers[qualifiers.length] = {name:'tp_last_n_days',value:'Last # Days'};
qualifiers[qualifiers.length] = {name:'tp_next_n_days',value:'Next # Days'};
qualifiers[qualifiers.length] = {name:'tp_last_7_days',value:'Last 7 Days'};
qualifiers[qualifiers.length] = {name:'tp_next_7_days',value:'Next 7 Days'};
qualifiers[qualifiers.length] = {name:'tp_last_month',value:'Last Month'};
qualifiers[qualifiers.length] = {name:'tp_this_month',value:'This Month'};
qualifiers[qualifiers.length] = {name:'tp_next_month',value:'Next Month'};
qualifiers[qualifiers.length] = {name:'tp_last_30_days',value:'Last 30 Days'};
qualifiers[qualifiers.length] = {name:'tp_next_30_days',value:'Next 30 Days'};

    qualifiers[qualifiers.length] = {name:'tp_last_quarter',value:'Last Quarter'};
    qualifiers[qualifiers.length] = {name:'tp_this_quarter',value:'This Quarter'};
    qualifiers[qualifiers.length] = {name:'tp_next_quarter',value:'Next Quarter'};

qualifiers[qualifiers.length] = {name:'tp_last_year',value:'Last Year'};
qualifiers[qualifiers.length] = {name:'tp_this_year',value:'This Year'};
qualifiers[qualifiers.length] = {name:'tp_next_year',value:'Next Year'};

filter_defs['date'] = qualifiers;
filter_defs['datetime'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'on',value:'On'};
qualifiers[qualifiers.length] = {name:'before',value:'Before'};
qualifiers[qualifiers.length] = {name:'after',value:'After'};
qualifiers[qualifiers.length] = {name:'between_datetimes',value:'Is Between'};
qualifiers[qualifiers.length] = {name:'not_equals_str',value:'Not On'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
qualifiers[qualifiers.length] = {name:'tp_yesterday',value:'Yesterday'};
qualifiers[qualifiers.length] = {name:'tp_today',value:'Today'};
qualifiers[qualifiers.length] = {name:'tp_tomorrow',value:'Tomorrow'};
qualifiers[qualifiers.length] = {name:'tp_last_n_days',value:'Last # Days'};
qualifiers[qualifiers.length] = {name:'tp_next_n_days',value:'Next # Days'};
qualifiers[qualifiers.length] = {name:'tp_last_7_days',value:'Last 7 Days'};
qualifiers[qualifiers.length] = {name:'tp_next_7_days',value:'Next 7 Days'};
qualifiers[qualifiers.length] = {name:'tp_last_month',value:'Last Month'};
qualifiers[qualifiers.length] = {name:'tp_this_month',value:'This Month'};
qualifiers[qualifiers.length] = {name:'tp_next_month',value:'Next Month'};
qualifiers[qualifiers.length] = {name:'tp_last_30_days',value:'Last 30 Days'};
qualifiers[qualifiers.length] = {name:'tp_next_30_days',value:'Next 30 Days'};

    qualifiers[qualifiers.length] = {name:'tp_last_quarter',value:'Last Quarter'};
    qualifiers[qualifiers.length] = {name:'tp_this_quarter',value:'This Quarter'};
    qualifiers[qualifiers.length] = {name:'tp_next_quarter',value:'Next Quarter'};

qualifiers[qualifiers.length] = {name:'tp_last_year',value:'Last Year'};
qualifiers[qualifiers.length] = {name:'tp_this_year',value:'This Year'};
qualifiers[qualifiers.length] = {name:'tp_next_year',value:'Next Year'};

filter_defs['datetimecombo'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'equals',value:'Equals'};
qualifiers[qualifiers.length] = {name:'not_equals',value:'Does Not Equal'};
qualifiers[qualifiers.length] = {name:'less',value:'Less Than'};
qualifiers[qualifiers.length] = {name:'less_equal',value:'Less Than Equal To'};
qualifiers[qualifiers.length] = {name:'greater_equal',value:'Greater Than Equal To'};
qualifiers[qualifiers.length] = {name:'greater',value:'Greater Than'};
qualifiers[qualifiers.length] = {name:'between',value:'Is Between'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['int'] = qualifiers;
filter_defs['long'] = qualifiers;
filter_defs['float'] = qualifiers;
filter_defs['decimal'] = qualifiers;
filter_defs['currency'] = qualifiers;
filter_defs['num'] = qualifiers;
filter_defs['autoincrement'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'is',value:'Is'};
qualifiers[qualifiers.length] = {name:'is_not',value:"Is Not"};
qualifiers[qualifiers.length] = {name:'one_of',value:'Is One Of'};
qualifiers[qualifiers.length] = {name:'not_one_of',value:"Is Not One Of"};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['enum'] = qualifiers;
filter_defs['radioenum'] = qualifiers;
filter_defs['parent_type'] = qualifiers;
filter_defs['timeperiod'] = qualifiers;
filter_defs['currency_id'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'is',value:'Is'};
qualifiers[qualifiers.length] = {name:'is_not',value:"Is Not"};
qualifiers[qualifiers.length] = {name:'one_of',value:'Is One Of'};
qualifiers[qualifiers.length] = {name:'not_one_of',value:'Is Not One Of'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['multienum'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'is',value:'Is'};
qualifiers[qualifiers.length] = {name:'is_not',value:"Is Not"};
qualifiers[qualifiers.length] = {name:'one_of',value:'Is One Of'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['assigned_user_name'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'is',value:'Is'};
qualifiers[qualifiers.length] = {name:'is_not',value:"Is Not"};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['relate'] = qualifiers;
filter_defs['id'] = qualifiers;

var qualifiers =  new Array();
qualifiers[qualifiers.length] = {name:'equals',value:'Equals'};
qualifiers[qualifiers.length] = {name:'empty',value:'Is Empty'};
qualifiers[qualifiers.length] = {name:'not_empty',value:'Is Not Empty'};
filter_defs['bool'] = qualifiers;

var date_group_defs =  new Array();
date_group_defs[date_group_defs.length] = {name:'day', value:'By Day'};
date_group_defs[date_group_defs.length] = {name:'week', value:'By Week'};
date_group_defs[date_group_defs.length] = {name:'month', value:'By Month'};
date_group_defs[date_group_defs.length] = {name:'year', value:'By Year'};
date_group_defs[date_group_defs.length] = {name:'quarter', value:'By Quarter'};

var qualifiers = new Array();
qualifiers[qualifiers.length] = {name:'any',value:'Any'};
qualifiers[qualifiers.length] = {name:'all',value:'At Least'};
qualifiers[qualifiers.length] = {name:'exact',value:'Exact'};
filter_defs['team_set_id'] = qualifiers;

// Dropdown for filtering on basis of tag name in the Tags module
var qualifiers = new Array();
qualifiers[qualifiers.length] = {name:'equals',value:'Equals'};
qualifiers[qualifiers.length] = {name:'not_equals_str',value:'Does Not Equal'};
qualifiers[qualifiers.length] = {name:'contains',value:'Contains'};
qualifiers[qualifiers.length] = {name:'does_not_contain',value:'Does Not Contain'};
filter_defs['Tags:name'] = qualifiers;

    filter_defs['file'] = [
        {name:'empty',value:'Is Empty'},
        {name:'not_empty',value:'Is Not Empty'}
    ];

function in_array(n, h){
    var i = 0;
    while (i < h.length) {
        if (n == h[i]) return true;
        i++;
    }
    return false;
}

for(i in module_defs) {
    if(!in_array(i, ACLAllowedModules)) {
        delete module_defs[i];
    }
}

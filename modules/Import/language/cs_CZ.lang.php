<?php
/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/Resources/Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/*********************************************************************************

 * Description:    Defines the English language pack for the base application.
 * Portions created by SugarCRM are Copyright (C) SugarCRM, Inc.
 * All Rights Reserved.
 ********************************************************************************/
global $timedate;
 
$mod_strings = array (
    'LBL_GOOD_FILE' => 'Import souboru proběhl úspěšně',
    'LBL_RECORD_CONTAIN_LOCK_FIELD' => 'Importovaný záznam se účastní procesu a nelze ho upravit, protože některá pole jsou procesem uzamčena pro úpravy.',
    'LBL_RECORDS_SKIPPED_DUE_TO_ERROR' => 'Záznamy přeskočeny kvůli chybě',
    'LBL_UPDATE_SUCCESSFULLY' => 'Záznamy úspěšně aktualizovány',
    'LBL_SUCCESSFULLY_IMPORTED' => 'Záznamy úspěšně vytvořeny',
    'LBL_STEP_4_TITLE' => 'Krok 4: Soubor s importem',
    'LBL_STEP_5_TITLE' => 'Krok 5: Výsledek',
    'LBL_CUSTOM_ENCLOSURE' => 'Kvalifikovaná pole:',
    'LBL_ERROR_UNABLE_TO_PUBLISH' => 'Nelze zveřejnit',
    'LBL_ERROR_UNABLE_TO_UNPUBLISH' => 'Nelze od-publikovat namapování, které vlastní jiný uživatel. Vy vlastníte Importovací mapu stejného jména.',
    'LBL_ERROR_IMPORTS_NOT_SET_UP' => 'Importy nejsou stanoveny pro tento typ modulu',
    'LBL_IMPORT_TYPE' => 'Importovat akce',
    'LBL_IDM_IMPORT_TYPE_CREATE' => 'Create New Records',
    'LBL_IDM_IMPORT_TYPE_UPDATE' => 'Update Existing Records',
    'LBL_IMPORT_BUTTON' => 'Vytvořit záznamy',
    'LBL_UPDATE_BUTTON' => 'Vytvořit a aktualizovat záznamy',
    'LBL_CREATE_BUTTON_HELP' => 'Použijte tuto možnost k vytvoření nových záznamů. Poznámka: Řádky v importním souboru obsahující hodnotu označenou jako ID již stávajícího záznamu nebudou importovány.',
    'LBL_UPDATE_BUTTON_HELP' => 'Použijte tuto možnost k aktualizace stávajících záznamů. Data v importním souboru bude spárovány k existujícím záznamům dle sloupce ID',
    'LBL_NO_ID' => 'ID je povinné',
    'LBL_PRE_CHECK_SKIPPED' => 'Před-kontrola přeskočena',
    'LBL_NOLOCALE_NEEDED' => 'Není třeba konvertovat lokální nastavení',
    'LBL_FIELD_NAME' => 'Název pole',
    'LBL_VALUE' => 'Hodnota',
    'LBL_ROW_NUMBER' => 'Číslo řádku',
    'LBL_NONE' => 'žádný',
    'LBL_REQUIRED_VALUE' => 'Požadovaná hodnota chybí',
    'LBL_ERROR_SYNC_USERS' => 'Neplatnáý hodnota pro synchronizaci do Outlooku:',
    'LBL_ID_EXISTS_ALREADY' => 'V této tabulte ID již existuje',
    'LBL_ASSIGNED_USER' => 'Pokud uživatel neexistuje, použijte aktuálního uživatele',
    'LBL_SHOW_HIDDEN' => 'Ukázat pole která nejsou běžně importovatelná',
    'LBL_UPDATE_RECORDS' => 'Aktualizovat existující zínamy namísto importování (nelze vrátit)',
    'LBL_TEST'=> 'Testovcí import (neukládat nebo měnit data)',
    'LBL_TRUNCATE_TABLE' => 'Vyprázdnit tabulku před importem (vymazat všechny záznamy)',
    'LBL_RELATED_ACCOUNTS' => 'Nevytvářet relační záznamy',
    'LBL_NO_DATECHECK' => 'Přeskočit kontrolu data (rychlejší, ale chybné, pokud je datum uvedeno chybně)',
    'LBL_NO_WORKFLOW' => 'Nespouštějte Workflow během importu',
    'LBL_NO_EMAILS' => 'Neodesílejte zprávy během importu',
    'LBL_NO_PRECHECK' => 'Nativní mód formátu',
    'LBL_STRICT_CHECKS' => 'Použití přísného třídícího pravidla (zkontrolujte e-mailové adresy a také telefonní čísla)',
    'LBL_ERROR_SELECTING_RECORD' => 'Chyba při výběru údaje',
    'LBL_ERROR_DELETING_RECORD' => 'Chyba při mazání údaje',
    'LBL_NOT_SET_UP' => 'Import není nastaven pro tento typ modulu',
    'LBL_ARE_YOU_SURE' => 'Jste si jisti? Tímto vymažete všechna data v modulu.',
    'LBL_NO_RECORD' => 'Žádný údaj s tímto ID k aktualizaci',
    'LBL_NOT_SET_UP_FOR_IMPORTS' => 'Import není nastaven pro tento typ modulu',
    'LBL_DEBUG_MODE' => 'Povolit režim ladění',
    'LBL_ERROR_INVALID_ID' => 'ID příliš dlouhé pro dané pole (max. délka je 36 znaků)',
    'LBL_ERROR_INVALID_PHONE' => 'Neplatné telefonní číslo',
    'LBL_ERROR_INVALID_NAME' => 'Řetězec příliš dlouhý pro dané pole',
    'LBL_ERROR_INVALID_VARCHAR' => 'Řetězec příliš dlouhý pro dané pole',
    'LBL_ERROR_INVALID_DATETIME' => 'Chybné datum a čas',
    'LBL_ERROR_INVALID_DATETIMECOMBO' => 'Chybné datum a čas',
    'LBL_ERROR_INVALID_INT' => 'Chybný integer',
    'LBL_ERROR_INVALID_NUM' => 'Neplatná číselná hodnota',
    'LBL_ERROR_INVALID_TIME' => 'Neplatný čas',
    'LBL_ERROR_INVALID_EMAIL'=>'Neplatná emailová adresa',
    'LBL_ERROR_INVALID_BOOL'=>'Neplatná hodnota (musí být 1 nebo 0)',
    'LBL_ERROR_INVALID_DATE'=>'Neplatný datový řetězec',
    'LBL_ERROR_INVALID_USER'=>'Neplatné uživatelské jméno nebo ID',
    'LBL_ERROR_INVALID_TEAM' => 'Špatné jméno či ID týmu',
    'LBL_ERROR_INVALID_ACCOUNT' => 'Špatné jméno či ID společnosti',
    'LBL_ERROR_INVALID_RELATE' => 'Špatné relační pole',
    'LBL_ERROR_INVALID_CURRENCY' => 'Špatná hodnota měny',
    'LBL_ERROR_INVALID_FLOAT' => 'Neplatné číslo s plovoucí desetinnou čárkou',
    'LBL_ERROR_NOT_IN_ENUM' => 'Value not in dropDown list. Allowed values are:',
    'LBL_ERROR_ENUM_EMPTY' => 'Hodnota není obsažena v rozevíracím seznamu. Rozevírací seznam je prázdný',
    'LBL_NOT_MULTIENUM' => 'Není MultiEnum',
    'LBL_IMPORT_MODULE_NO_TYPE' => 'Import není nastaven pro tento typ modulu',
    'LBL_IMPORT_MODULE_NO_USERS' => 'VAROVÁNÍ: V tomto systému definované žádné uživatele. Pokud provedete import bez toho, abyste nejprve přidali nějaké uživatele, vlastníkem všech záznamů bude Správce.',
    'LBL_IMPORT_MODULE_MAP_ERROR' => 'Nelze publikovat. Existuje jiná publikovaná sestava se stejným názvem.',
    'LBL_IMPORT_MODULE_MAP_ERROR2' => 'Nelze zrušit publikování mapy vlastnění jiným uživatelem. Vlastníte mapu importu se stejným názvem.',
    'LBL_IMPORT_MODULE_NO_DIRECTORY' => 'Adresář',
    'LBL_IMPORT_MODULE_NO_DIRECTORY_END' => 'neexistuje nebo není zapisovatelný',
    'LBL_IMPORT_MODULE_ERROR_NO_UPLOAD' => 'Soubor nebyl úspěšně nahrán. Může to být způsobeno nastavením nízkého čísla pro direktivu [upload_max_filesize] ve vašem php.ini souboru',
    'LBL_IMPORT_MODULE_ERROR_LARGE_FILE' => 'Soubor je příliš velký. Maximálně',
    'LBL_IMPORT_MODULE_ERROR_LARGE_FILE_END' => 'Bytů. Změnte nastavení $sugar_config[upload_maxsize] v konfiguračním souboru config.php',
    'LBL_MODULE_NAME' => 'Importovat',
    'LBL_MODULE_NAME_SINGULAR' => 'Importovat',
    'LBL_TRY_AGAIN' => 'Zkusit znovu',
    'LBL_START_OVER' => 'Začít znovu',
    'LBL_ERROR' => 'Chyba:',
    'LBL_IMPORT_ERROR_MAX_REC_LIMIT_REACHED' => 'Importní soubor obsahuje {0} řádků. Doporučený počet řádků je {1}. Více řádků může zpomalit importovací proces.',
    'ERR_IMPORT_SYSTEM_ADMININSTRATOR'  => 'Nelze importovat uživatele správce systému',
    'ERR_REPORT_LOOP' => 'System detekoval smyčku. Uživatel se nemůže zodpovídat sám sobě, nebo žádný jejich manažer se nemůže zodpovídat jemu.',
    'ERR_MULTIPLE' => 'Několik sloupců bylo definováno se stejným názvem pole.',
    'ERR_MISSING_REQUIRED_FIELDS' => 'Chybějící požadovaná pole:',
    'ERR_MISSING_MAP_NAME' => 'Chybí název vlastního mapování',
    'ERR_USERS_IMPORT_DISABLED_TO_IDM_MODE' => 'Import uživatelů je v režimu IDM zakázán.',
    'ERR_SELECT_FULL_NAME' => 'Nemůžete zvolit Plné jméno pokud křestní jméno a příjmení jsou označeny.',
    'ERR_SELECT_FILE' => 'Zvolte soubor pro nahrání.',
    'LBL_SELECT_FILE' => 'Vyberte soubor:',
    'LBL_CUSTOM' => 'Uživatelský',
    'LBL_CUSTOM_CSV' => 'Uživatelský soubor s oddělovačem čárka',
    'LBL_CSV' => 'Soubor - hodnoty oddělené čárkami',
    'LBL_EXTERNAL_SOURCE' => 'Externí aplikace nebo služba',
    'LBL_TAB' => 'Soubor - hodnoty oddělené TABulátorem',
    'LBL_CUSTOM_DELIMITED' => 'Vlastní omezený soubor',
    'LBL_CUSTOM_DELIMITER' => 'Pole omezil(a):',
    'LBL_FILE_OPTIONS' => 'Možnosti souboru',
    'LBL_CUSTOM_TAB' => 'Uživatelský soubor s oddělovačem tabulátor',
    'LBL_DONT_MAP' => '-- Nemapovat toto pole --',
    'LBL_STEP_MODULE' => 'Do kterého modulu chcete data importovat?',
    'LBL_STEP_1_TITLE' => 'Krok 1: Volba zdroje dat',
    'LBL_CONFIRM_TITLE' => 'Krok {0}: Potvrdit vlastnosti importovaného souboru',
    'LBL_CONFIRM_EXT_TITLE' => 'Krok {0}: Potvrdit vlastnosti externího zdroje',
    'LBL_WHAT_IS' => 'Jaký je zdroj dat?',
    'LBL_MICROSOFT_OUTLOOK' => 'Microsoft Outlook',
    'LBL_MICROSOFT_OUTLOOK_HELP' => 'Vlastní namapování pro Microsoft Outlook předpokládá, že importní soubor bude oddělen čárkou (.csv). Pokud je importní soubor oddělen tabulátory, mapování nebude fungovat.',
    'LBL_ACT' => 'Act!',
    'LBL_SALESFORCE' => 'Salesforce.com',
    'LBL_MY_SAVED' => 'Moje uložené zdroje:',
    'LBL_PUBLISH' => 'Publikovat',
    'LBL_DELETE' => 'Smazat',
    'LBL_PUBLISHED_SOURCES' => 'Publikované zdroje:',
    'LBL_UNPUBLISH' => 'Zrušit publikaci',
    'LBL_NEXT' => 'Pokračovat',
    'LBL_BACK' => 'Jdi zpět',
    'LBL_STEP_2_TITLE' => 'Krok 2: Nahrát exportní soubor',
    'LBL_HAS_HEADER' => 'Má záhlaví:',
    'LBL_NUM_1' => '1.',
    'LBL_NUM_2' => '2.',
    'LBL_NUM_3' => '3.',
    'LBL_NUM_4' => '4.',
    'LBL_NUM_5' => '5.',
    'LBL_NUM_6' => '6.',
    'LBL_NUM_7' => '7.',
    'LBL_NUM_8' => '8.',
    'LBL_NUM_9' => '9.',
    'LBL_NUM_10' => '10.',
    'LBL_NUM_11' => '11.',
    'LBL_NUM_12' => '12.',
    'LBL_NOTES' => 'Poznámky:',
    'LBL_NOW_CHOOSE' => 'Nyní zvolte typ souboru pro import:',
    'LBL_IMPORT_OUTLOOK_TITLE' => 'Microsoft Outlook 98 a 2000 umí exportovat data ve formátu <b>oddělovač středník</b> format který může být používán k importu dat do systému. Export vašich dat z Outlooku, následující kroky pod:',
    'LBL_OUTLOOK_NUM_1' => 'Spusťte <b>Outlook</b>',
    'LBL_OUTLOOK_NUM_2' => 'Zvolte menu <b>soubor</b>, potom <b>import a export ...</b>',
    'LBL_OUTLOOK_NUM_3' => 'Zvolte <b>export do souboru</b> a klikněte na <b>Pokračovat</b>',
    'LBL_OUTLOOK_NUM_4' => 'Zvolte <b>hodnoty oddělené středníkem (Windows)</b> a klikněte na <b>Pokračovat</b>.<br>  Poznámka: Můžete být vyzváni k instalaci exportu komponentů',
    'LBL_OUTLOOK_NUM_5' => 'Označte soubor <b>Kontakty</b> a klikněte na <b>Pokračovat</b>. Můžete vybrat různé kontaktní soubory pokud vaše kontakty jsou uloženy ve složených souborech',
    'LBL_OUTLOOK_NUM_6' => 'Vybrat jméno souboru a kliknout <b>Následující</b>',
    'LBL_OUTLOOK_NUM_7' => 'Kliknout <b>Ukončit</b>',
    'LBL_IMPORT_SF_TITLE' => 'Salesforce.com mohu exportovat data do <b> hodnoty oddělené středníkem </ b> ve formátu, který lze použít pro import dat do systému. Chcete-li exportovat data z Salesforce.com, postupujte podle následujících kroků:',
    'LBL_SF_NUM_1' => 'Otevřete svůj prohlížeč, přejděte na http://www.salesforce.com a přihlášte se e-mailovou adreseu a heslem',
    'LBL_SF_NUM_2' => 'Klikněte na <b>Reporty</b> v horním menu',
    'LBL_SF_NUM_3' => '<b>Export spoečností:</b> Klikněte na odkaz <b>Aktivní společnosti</b> <br><b>Export kontaktů:</b> Klikněte na odkaz <b>Mailing List</b>',
    'LBL_SF_NUM_4' => '<b>Krok 1: vyberte typ reportu</b>, vyberte <b>Tabular Report</b> klikněte na <b>Next</b>',
    'LBL_SF_NUM_5' => '<b>Krok 2: vyberte sloupce reportu</b>, vyberte sloupce, které chcete exportovat a klikněte na <b>Next</b>',
    'LBL_SF_NUM_6' => '<b>Krok 3: Zkontrolujte informace o exportu</b>, a klikněte na <b>Next</b>',
    'LBL_SF_NUM_7' => '<b>Krok 4: Pořadí sloupců</b>, klikněte na <b>Next</b>',
    'LBL_SF_NUM_8' => '<b>Krok 5: vyberte podmínky reportu</b>, u <b>Start Date</b>, zvolte datum zpět do minulosti, aby zahrnovalo všechny vaše účty. Můžete exportovat také jen část pomocí nastavení pokročilých kritérií. Klikněte na <b>Run Report</b>',
    'LBL_SF_NUM_9' => 'Repor bude vygenerován a mělo by se zobrazit <b>Status generovaného reportu: Hotovo.</b> nyní klikněte na <b>Export to Excel</b>',
    'LBL_SF_NUM_10' => '<b>Export Report:</b>, pro <b>Export File Format:</b>, vyberte <b>Comma Delimited .csv</b>. Click <b>Export</b>.',
    'LBL_SF_NUM_11' => 'Objeví se dialogové okno pro uložení souboru do počítače.',
    'LBL_IMPORT_ACT_TITLE' => 'Řešení Act! může exportovat data do formátu <b>CSV</b> (Comma Separated Values – hodnoty oddělené čárkami), který lze využít k importu dat do systému. Chcete-li exportovat data z řešení Act!, postupujte takto:',
    'LBL_ACT_NUM_1' => 'Spustit <b>ACT!</b>',
    'LBL_ACT_NUM_2' => 'Vyberte nabídku <b>Soubor</b>, volbu <b>Výměna dat</b>, dále volbu <b>Exportovat...</b>',
    'LBL_ACT_NUM_3' => 'Vyberte typ souboru <b>Text-Delimited</b>',
    'LBL_ACT_NUM_4' => 'Zvolte název souboru a umístění pro exportovaná data a klepněte na položku <b>Další</b>',
    'LBL_ACT_NUM_5' => 'Vyberte položku <b>Pouze záznamy kontaktů</b>',
    'LBL_ACT_NUM_6' => 'Klepněte na tlačítko <b>Možnosti...</b>',
    'LBL_ACT_NUM_7' => 'Jako znak pro oddělování polí vyberte <b>Čárku</b>',
    'LBL_ACT_NUM_8' => 'Zaškrtněte políčko <b>Ano, exportovat názvy polí</b> a klepněte na položku <b>OK</b>',
    'LBL_ACT_NUM_9' => 'Klikněte Další',
    'LBL_ACT_NUM_10' => 'Vyberte volbu <b>Všechny záznamy</b> a poté klepněte na položku <b>Dokončit</b>',
    'LBL_IMPORT_CUSTOM_TITLE' => 'Mnoho aplikací dovoluje exportovat data v <b>textovém souboru odděleným středníkem (.csv)</b>. Zpravidla ve všech aplikacích následujte tyto kroky:',
    'LBL_CUSTOM_NUM_1' => 'Pusťte aplikaci a Otevřete datový soubor',
    'LBL_CUSTOM_NUM_2' => 'Z menu vyberte <b>Uložit jako...</b> nebo <b>Export...</b>',
    'LBL_CUSTOM_NUM_3' => 'Uložte soubor <b>CSV</b> nebo <b>Hodnoty oddělené středníkem</b> formát',
    'LBL_IMPORT_TAB_TITLE' => 'Mnoho aplikací dovoluje exportovat data v <b>textovém souboru odděleným tabulátorm (.tsv or .tab)</b>. Zpravidla ve všech aplikacích následujte tyto kroky:',
    'LBL_TAB_NUM_1' => 'Pusťte aplikaci a Otevřete datový soubor',
    'LBL_TAB_NUM_2' => 'Z menu vyberte <b>Uložit jako...</b> nebo <b>Export...</b>',
    'LBL_TAB_NUM_3' => 'Uložte soubor <b>TSV</b> nebo <b>Hodnoty oddělené tabulátorem</b> formát',
    'LBL_STEP_3_TITLE' => 'Krok 3: Potvrdit pole a importovat',
    'LBL_STEP_DUP_TITLE' => 'Krok {0}: Zkontrolovat možné duplicitní záznamy',
    'LBL_SELECT_FIELDS_TO_MAP' => 'V niže uvedeném seznamu, přiřaďte sloupec ze souboru pro import. Až budte hotovi, klikněte na Importovat nyní:',
    'LBL_DATABASE_FIELD' => 'Pole v databázi',
    'LBL_HEADER_ROW' => 'Řádek záhlaví',
    'LBL_HEADER_ROW_OPTION_HELP' => 'Zvolte, pokud první řádek importovaného souboru obsahuje hlavičku s názvy polí.',
    'LBL_ROW' => 'Řádek',
    'LBL_SAVE_AS_CUSTOM' => 'Uložit jako vlastní mapování:',
    'LBL_SAVE_AS_CUSTOM_NAME' => 'Název vlastního mapování:',
    'LBL_CONTACTS_NOTE_1' => 'Buď příjmení nebo plné jméno musí být přiřazeno.',
    'LBL_CONTACTS_NOTE_2' => 'Pokud je přiřazeno plné jméno, tak jméno a příjmení jsou ignorovány.',
    'LBL_CONTACTS_NOTE_3' => 'Pokud je přiřazeno plné jméno, tak celé jméno bude rozděleno při importování na jméno a příjmení.',
    'LBL_CONTACTS_NOTE_4' => 'Pole Address Street 2 a Address Street 3 jsou sloučeny a přiřazeny k základnímu poli Address Street při importování.',
    'LBL_ACCOUNTS_NOTE_1' => 'Pole Address Street 2 a Address Street 3 jsou sloučeny a přiřazeny k základnímu poli Address Street při importování.',
    'LBL_REQUIRED_NOTE' => 'Required Field(s):',
    'LBL_IMPORT_NOW' => 'Importovat nyní',
    'LBL_' => '',
    'LBL_CANNOT_OPEN' => 'Nelze otevřít soubor s importovanými záznamy',
    'LBL_NOT_SAME_NUMBER' => 'V souboru je různý počet polí na řádku.',
    'LBL_NO_LINES' => 'Nebyly nalezeny žádné řádky v souboru.',
    'LBL_FILE_ALREADY_BEEN_OR' => 'Importovací soubor byl již zpracován nenbo neexistuje.',
    'LBL_SUCCESS' => 'Dokončeno:',
	'LBL_FAILURE' => 'Import selhal:',
    'LBL_SUCCESSFULLY' => 'Úspěšně naimportováno',
    'LBL_LAST_IMPORT_UNDONE' => 'Váš poslední import se nezdařil',
    'LBL_NO_IMPORT_TO_UNDO' => 'Import nelze vrátit zpět.',
    'LBL_FAIL' => 'Selhání:',
    'LBL_RECORDS_SKIPPED' => 'záznamy vynechány, jelikož chyběli data v povinných polích',
    'LBL_IDS_EXISTED_OR_LONGER' => 'Záznamy preskočeny, protože ID už existují, nebo jsou delší než 36 znaků',
    'LBL_RESULTS' => 'Výsledky',
    'LBL_CREATED_TAB' => 'Vytvořené záznamy',
    'LBL_DUPLICATE_TAB' => 'Duplicitní záznamy',
    'LBL_ERROR_TAB' => 'Chyby',
    'LBL_IMPORT_MORE' => 'Importovat více',
    'LBL_FINISHED' => 'Ukončit',
    'LBL_UNDO_LAST_IMPORT' => 'Vrátit zpět poslední import',
    'LBL_LAST_IMPORTED'=>'Poslední import',
    'ERR_MULTIPLE_PARENTS' => 'Pouze jedno ID rodiče může být definováno',
    'LBL_DUPLICATES' => 'Nalezeny duplikáty',
    'LNK_DUPLICATE_LIST' => 'Download List of Duplicates',
    'LNK_ERROR_LIST' => 'Download List of Errors',
    'LNK_RECORDS_SKIPPED_DUE_TO_ERROR' => 'Download records that could not be imported.',
    'LBL_UNIQUE_INDEX' => 'Vyberte index pro porování duplíkátů',
    'LBL_VERIFY_DUPS' => 'Ověřte duplikáty proti zvolenému indexu',
    'LBL_INDEX_USED' => 'Použité index/y',
    'LBL_INDEX_NOT_USED' => 'Nepoužité index/y',
    'LBL_IMPORT_MODULE_ERROR_NO_MOVE' => 'Soubor nebyl nahrán na server. Zkontrolujte prosím oprávnění ve cache adresáři Vaší instalace Sugaru.',
    'LBL_IMPORT_FIELDDEF_ID' => 'Jedinečné ID',
    'LBL_IMPORT_FIELDDEF_RELATE' => 'Name nebo ID',
    'LBL_IMPORT_FIELDDEF_PHONE' => 'Telefonní číslo',
    'LBL_IMPORT_FIELDDEF_TEAM_LIST' => 'Jméno nebo ID týmu',
    'LBL_IMPORT_FIELDDEF_NAME' => 'Jakýkoli text',
    'LBL_IMPORT_FIELDDEF_VARCHAR' => 'Jakýkoli text',
    'LBL_IMPORT_FIELDDEF_TEXT' => 'Jakýkoli text',
    'LBL_IMPORT_FIELDDEF_TIME' => 'Čas',
    'LBL_IMPORT_FIELDDEF_DATE' => 'Datum:',
    'LBL_IMPORT_FIELDDEF_DATETIME' => 'Datum a čas',
    'LBL_IMPORT_FIELDDEF_ASSIGNED_USER_NAME' => 'Uživatelské jméno či ID',
    'LBL_IMPORT_FIELDDEF_BOOL' => '&#39;0&#39; nebo &#39;1&#39;',
    'LBL_IMPORT_FIELDDEF_ENUM' => 'Celk. cena',
    'LBL_IMPORT_FIELDDEF_EMAIL' => 'Mail Adresa',
    'LBL_IMPORT_FIELDDEF_INT' => 'Číslo (bez desetinného místa)',
    'LBL_IMPORT_FIELDDEF_DOUBLE' => 'Číslo (bez desetinného místa)',
    'LBL_IMPORT_FIELDDEF_NUM' => 'Číslo (bez desetinného místa)',
    'LBL_IMPORT_FIELDDEF_CURRENCY' => 'Číslo (desetinné místo povoleno)',
    'LBL_IMPORT_FIELDDEF_FLOAT' => 'Číslo (desetinné místo povoleno)',
    'LBL_DATE_FORMAT' => 'Formát datumu:',
    'LBL_TIME_FORMAT' => 'Formát času:',
    'LBL_TIMEZONE' => 'Časová Zona:',
    'LBL_ADD_ROW' => 'Přidat pole',
    'LBL_REMOVE_ROW' => 'Odeber pole',
    'LBL_DEFAULT_VALUE' => 'Výchozí hodnota',
    'LBL_SHOW_ADVANCED_OPTIONS' => 'Ukázat pokročilé možnosti',
    'LBL_HIDE_ADVANCED_OPTIONS' => 'Skrýt pokročilé možnosti',
    'LBL_SHOW_NOTES' => 'Poznámky',
    'LBL_HIDE_NOTES' => 'Skrýt poznámky',
    'LBL_SHOW_PREVIEW_COLUMNS' => 'Zobrazit sloupce náhledu',
    'LBL_HIDE_PREVIEW_COLUMNS' => 'Skrýt sloupce náhledu',
    'LBL_SAVE_MAPPING_AS' => 'Save Mapping As',
    'LBL_OPTION_ENCLOSURE_QUOTE' => 'Single Quote (&#39;)',
    'LBL_OPTION_ENCLOSURE_DOUBLEQUOTE' => 'Dvojité uvozovky (")',
    'LBL_OPTION_ENCLOSURE_NONE' => 'žádný',
    'LBL_OPTION_ENCLOSURE_OTHER' => 'Jiné:',
    'LBL_IMPORT_COMPLETE' => 'Konec',
    'LBL_IMPORT_COMPLETED' => 'Import kompletní',
    'LBL_IMPORT_ERROR' => 'Došlo k chybě při importu',
    'LBL_IMPORT_RECORDS' => 'Import záznamů',
    'LBL_IMPORT_RECORDS_OF' => 'z',
    'LBL_IMPORT_RECORDS_TO' => 'na',
    'LBL_CURRENCY' => 'Měna:',
    'LBL_SYSTEM_SIG_DIGITS' => 'Číslice důležité pro systém',
    'LBL_NUMBER_GROUPING_SEP' => '1000s separator',
    'LBL_DECIMAL_SEP' => 'Decimal symbol',
    'LBL_LOCALE_DEFAULT_NAME_FORMAT' => 'Formát zobrazení jména',
    'LBL_LOCALE_EXAMPLE_NAME_FORMAT' => 'Příklad',
    'LBL_LOCALE_NAME_FORMAT_DESC' => '<i>"s" Oslovení, "f" Jméno, "l" Příjmení</i>',
    'LBL_CHARSET' => 'File Encoding',
    'LBL_MY_SAVED_HELP' => 'A saved mapping specifies a previously used combination of a specific data source and a set of database fields to map to the fields in the import file.<br>Click <b>Publish</b> to make the mapping available to other users.<br>Click <b>Un-Publish</b> to make the mapping unavailable to other users.',
    'LBL_MY_SAVED_ADMIN_HELP' => 'Použijte tuto možnost k nastavení přednastavených vlastností importu, jakou je namapování a nastavení kontroly duplicit.<br><br>Klikněte na <b>Publikovat</b>, aby bylo namapováníviditelná pro ostatní uživatele.<br>Klikněte na<b>Od-publikovat</b>aby nebylo namapovánídostupné pro ostatní uživatele.<br>Klikněte na<b>Vymazat</b> k vymazání namapování pro všechny uživatele.',
    'LBL_MY_PUBLISHED_HELP' => 'A published mapping specifies a previously used combination of a specific data source and a set of database fields to map to the fields in the import file.',
    'LBL_ENCLOSURE_HELP' => '<p><b>Znak kvalifikátoru</b> se používá k uzavření obsahu zamýšleného pole, včetně všech znaků používaných jako oddělovače.<br><br>Příklad: Pokud je oddělovačem čárka (,) a kvalifikátorem jsou uvozovky ("),<br><b>"Cupertino, California"</b> se importuje do jednoho pole v aplikaci a zobrazí se jako <b>Cupertino, California</b>.<br>Pokud nejsou k dispozici žádné znaky kvalifikátorů, nebo pokud je kvalifikátorem jiný znak, <br><b>"Cupertino, California"</b> se importuje do dvou sousedních polí jako <b>"Cupertino</b> a <b>"California"</b>.<br><br>Poznámka: Soubor importu nemusí obsahovat žádné znaky kvalifikátorů.<br>Výchozím znakem kvalifikátoru pro soubory oddělené čárkami a tabulátory vytvořené v aplikaci Excel jsou uvozovky.</p>',
    'LBL_DELIMITER_COMMA_HELP' => 'Select this option if the character that separates the fields in the import file is a <b>comma</b>, or if the file extension is .csv.',
    'LBL_DELIMITER_TAB_HELP' => 'Tuto volbu vyberte, pokud znakem, který odděluje pole v souboru importu, je <b>TAB</b>, a přípona souboru je .txt.',
    'LBL_DELIMITER_CUSTOM_HELP' => 'Tuto volbu vyberte, pokud znakem, který odděluje pole v souboru importu, není ani čárka, ani TAB a zadejte znak do sousedního pole.',
    'LBL_DATABASE_FIELD_HELP' => 'Select a field from list of all fields existing in the database for the module.',
    'LBL_HEADER_ROW_HELP' => 'These are the field titles in the header row of the import file.',
    'LBL_DEFAULT_VALUE_HELP' => 'Určete hodnotu, kterou chcete použít pro pole ve vytvořeném nebo aktualizvoaném záznamu, pokud pole v souboru importu neobsahuje žádná data.',
    'LBL_ROW_HELP' => 'This is the data in the first non-header row of the import file.',
    'LBL_SAVE_MAPPING_HELP' => 'Enter a name for the set of database fields used above for mapping to the fields in the import file fields.<br>The set of fields, including the order of the fields and the data souce selected in Import Step 1, will be saved during the import attempt.<br>The saved mapping can then be selected in Import Step 1 to for another import.',
    'LBL_IMPORT_FILE_SETTINGS_HELP' => 'Specify the settings in the import file to ensure that the data is imported<br> correctly.  These settings will not override your preferences. The records<br> created or updated will contain the settings specified in your My Account page.',
    'LBL_VERIFY_DUPLCATES_HELP' => 'Select the fields in the import file to be used for the duplicate check.<br>If data in the selected fields matches data in fields in existing records, new records will not be created for the rows containing the duplicate field data.<br>The rows containing duplicate field data will be identified in the Import Results.',
    'LBL_IMPORT_STARTED' => 'Import byl zahájen:',
    'LBL_IMPORT_FILE_SETTINGS' => 'Nastavení souboru importu',
    'LBL_IDM_RECORD_CANNOT_BE_CREATED' => 'Záznam nebyl přidán. Noví uživatelé musí být přidáni v nastavení SugarCloud',
    'LBL_RECORD_CANNOT_BE_UPDATED' => 'Záznam nelze aktualizovat z důvodu problému s oprávněním',
    'LBL_DELETE_MAP_CONFIRMATION' => 'Jste si jist, že chcete smazat toto mapování?',
    'LBL_THIRD_PARTY_CSV_SOURCES' => 'Pokud byl import soubor exportován z jednoho z existujících zdrojů, vyberte z jakého.',
    'LBL_THIRD_PARTY_CSV_SOURCES_HELP' => 'Zvolte zdroj, k automatickému namapování, což usnadňuje mapovací proces (další krok).',
    'LBL_EXTERNAL_SOURCE_HELP' => 'Použijte tuto možnost pro import dat přímo z externí aplikace nebo služby, např. Gmail.',
    'LBL_EXAMPLE_FILE' => 'Stáhnout vzorový soubor pro import',
    'LBL_CONFIRM_IMPORT' => 'Vybral jste aktualizaci záznamů během importovacího procesu. Aktualizace znemožní vrátit zpět existující záznamy. Nicméně, záznamy vytvořené během importu mohou být vráceny zpět (vymazány). Klikněte na Storno k možnosti výběru Vytvořit pouze nové záznamy, nebo klikněte na OK pro pokračování.',
    'LBL_IDM_CONFIRM_IMPORT' => 'Updates made to existing records during the import process cannot be undone. Click Cancel to create new records, or click OK to continue.',
    'LBL_CONFIRM_MAP_OVERRIDE' => 'Varování: Již jste definoval vlastní namapování polí pro tento import, chcete pokračovat?',
    'LBL_EXTERNAL_FIELD' => 'Externí pole',
    'LBL_SAMPLE_URL_HELP' => 'Stáhnout vzorový importní soubor obsahující hlavičku. Soubor může být použit jako vzor k vytvoření importního souboru obsahujícího data, která chcete importovat.',
    'LBL_AUTO_DETECT_ERROR' => 'Oddělovač polí nebyl rozpoznán. Prosíme zkontrolujte nastavení ve vlastnostech importu.',
    'LBL_MIME_TYPE_ERROR_1' => 'Zvolený soubor neobsahuje oddělený seznam. Prosíme zkontrolujte typ. Doporučujeme použít soubor oddělený čárkou (.csv).',
    'LBL_MIME_TYPE_ERROR_2' => 'Pokud chcete pokračovat se zvoleným souborem, klikněte na OK. K nahrání nového souboru, klikněte na Zkusit znovu.',
    'LBL_FIELD_DELIMETED_HELP' => 'Oddělovač polí znázorňuje, jaký symbol je použit k oddělení polí.',
    'LBL_FILE_UPLOAD_WIDGET_HELP' => 'Zvolte soubor obsahující data oddělená oddělovačem, např. čírka nebo tabulátor. Soubory typu .csv jsou doporučené.',
    'LBL_EXTERNAL_ERROR_NO_SOURCE' => 'Nelze načíst zdroj, prosíme zkuste to později.',
    'LBL_EXTERNAL_ERROR_FEED_CORRUPTED' => 'Nelze načíst externí data, prosíme zkuste to později.',
    'LBL_ERROR_IMPORT_CACHE_NOT_WRITABLE' => 'Importovací cache složka není zapisovatelná.',
    'LBL_ADD_FIELD_HELP' => 'Použijte tuto možnost k přidání hodnoty do pole ve všech záznamech, které byly vytvořeny nebo aktualizovány. Vyberte pole a poté vložte nebo vyberte hodnotu ve sloupci Výchozí hodnota.',
    'LBL_MISSING_HEADER_ROW' => 'Žádná hlavička dokumentu nenalezena',
    'LBL_CANCEL' => 'Zrušit',
    'LBL_SELECT_DS_INSTRUCTION' => 'Jste připraveni začít s importem? Zvolte zdroj dat, která chcete importovat.',
    'LBL_SELECT_UPLOAD_INSTRUCTION' => 'Vyberte soubor, který obsahuje data, která chcete importovat, nebo si stáhněte vzor, který můžete použit pro tvorbu importního souboru.',
    'LBL_SELECT_IDM_CREATE_INSTRUCTION' => 'Chcete-li vytvořit nové záznamy, přejděte do <a href="{0}" target="_blank">Nastavení SugarCloud</a>.',
    'LBL_SELECT_IDM_UPLOAD_INSTRUCTION' => 'Chcete-li aktualizovat stávající záznamy, vyberte v počítači soubor, který obsahuje data, která chcete importovat.',
    'LBL_SELECT_PROPERTY_INSTRUCTION' => 'Zde je zobrazeno, jak bude vypadat prvních pár řádků importu v závislosti na nastavení. Pokud je zjištěna hlavička, jo zobrazena v horním řádku v tabulce. Shlédněte vlastnosti importovaného souboru, aby jste mohl změnit a donastavit vlastnosti importu. Aktualizací nastavení budou aktualizovány data zobrazené v tabulce.',
    'LBL_SELECT_MAPPING_INSTRUCTION' => 'Tabulka zobrazená níže zahrnuje všechny políčka v modulu, která mohou být napamována k datům v importním souboru. Pokud soubor obsahuje hlavičku, sloupce budou napamovány k odpovídajícím polím. Zkontrolujte napamování, popřípadě proveďte změny. Jako pomoc ke kontrole namapování slouží řádek 1, který zobrazuje data v souboru. Ujistěte se, že jste namapoval všechna povinná pole (označená hvězdičkou).',
    'LBL_IDM_SELECT_MAPPING_INSTRUCTION' => 'The table below contains all of the editable fields in the module that can be mapped to the data in the import file. If the file contains a header row, the columns in the file have been mapped to matching fields. If the import data contain dates, the year must be in YYYY format. Check the mappings to make sure that they are what you expect, and make changes, as necessary. To help you check the mappings, Row 1 displays the data in the file. Be sure to map to all of the required fields (noted by an asterisk).',
    'LBL_IDM_SELECT_MAPPING_FIELDS_INSTRUCTION' => '<a href="{0}" target="_blank">Fields</a> that are only editable in SugarIdentity via the SugarCloud Settings console will not be available to map.',
    'LBL_SELECT_DUPLICATE_INSTRUCTION' => 'K zamezení tvorby duplikátních záznamů, zvolte, které z namapovaných polí se bude kontrolovat jako duplicitní během importu. Hodnoty v existujících záznamech bude zkontrolovány oproti datům v importním souboru. Pokud budou nalezeny shodná data, tyto řádky budou zobrazeny ve výsledku importu (další strana). Poté můžete zvolit, které z těchto řádků budou také naimportovány.',
    'LBL_EXT_SOURCE_SIGN_IN' => 'Přihlásit se',
    'LBL_EXT_SOURCE_SIGN_OUT' => 'Odhlásit se',
    'LBL_DUP_HELP' => 'Zde jsou řádky, které nebyly naimportovány, protože obsahují duplicitní data zjištěné na základně duplicitní kontroly. Data, která se shodují, jsou zvýrazněna. Ke znovu naimportování těchto řádků si stáhněte tento seznam, proveďte změny a klikněte na <strong>Importovat znovu</strong>',
    'LBL_DESELECT' => 'Odznačit',
    'LBL_SUMMARY' => 'Shrnutí',
    'LBL_OK' => 'OK',
    'LBL_ERROR_HELP' => 'Zde jsou řádky, které nebyly naimportovány z důvodu chyby. Ke znovu naimportování těchto řádků si stáhněte tento seznam, proveďte změny a klikněte na <strong>Importovat znovu</strong>',
    'LBL_EXTERNAL_MAP_HELP' => 'Tabulka níže obsahuje pole v externím zdroji a políčka v modulu, která lze namapovat. Zkontrolujte mapování a proveďte nezbytné změny. Ujistěte se, že jste namapoval všechna povinná pole (označená hvězdičkou).',
    'LBL_EXTERNAL_MAP_NOTE' => 'Import bude probíhat u kontaktů v rámci všech skupin Kontakty Google.',
    'LBL_EXTERNAL_MAP_NOTE_SUB' => 'Uživatelská jména nově vytvořených uživatelů budou ve výchozím nastavení celá jména Google kontaktů. Uživatelská jména mohou být změněna poté, co jsou uživatelé naimportováni.',
    'LBL_EXTERNAL_MAP_SUB_HELP' => 'Klikněte na Importovat nyní ke spuštění importu. Záznamy budou puze vytvořeny pro položky, které obsahují příjmení. Záznamy nebudou vytvořeny pro data, které budou nalezeny jako duplicitní a / nebo email. adresa již bude existovat.',
    'LBL_EXTERNAL_FIELD_TOOLTIP' => 'Tento sloupec zobrazuje pole v externím zdroji obsahující data, která budou použita k vytvoření nových záznamů.',
    'LBL_EXTERNAL_DEFAULT_TOOPLTIP' => 'Uveďte hodnotu, který se má použít pro pole ve vytvořeném záznamu, pokud pole v externím zdroji neobsahuje žádná data.',
    'LBL_EXTERNAL_ASSIGNED_TOOLTIP' => 'K přiřazení nových záznamů jinému uživateli než Vám, použijte sloupec Výchozí hodnota ke zvolení jiného uživatele.',
    'LBL_EXTERNAL_TEAM_TOOLTIP' => 'K přiřazení nových záznamů jinému týmu, že je Váš výchozí tým / týmy, použijte sloupec Výchozí hodnota ke zvolení jiných týmů.',
    'LBL_SIGN_IN_HELP' => 'K povolení této služby se prosím přihlašte do externího účtu, který se nachází v záložce v sekci Uživatelské nastavení.',
    'LBL_NO_EMAIL_DEFS_IN_MODULE' => "Pokus o zpracování e-mailových adres v beanu, který je nepodporuje.",
);

<?php
$FUNCTION_MAP = array(
            'forecastIncludedCommitStages' => array(
                        'class'    =>    'ForecastIncludedCommitStagesExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/ForecastIncludedCommitStagesExpression.php',
            ),
            'getDropdownKeySet' => array(
                        'class'    =>    'SugarDropDownExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/SugarDropDownExpression.php',
            ),
            'getDD' => array(
                        'class'    =>    'SugarDropDownExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/SugarDropDownExpression.php',
            ),
            'forecastSalesStages' => array(
                        'class'    =>    'ForecastSalesStageExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/ForecastSalesStageExpression.php',
            ),
            'getDropdownValueSet' => array(
                        'class'    =>    'SugarTranslatedDropDownExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/SugarTranslatedDropDownExpression.php',
            ),
            'getTransDD' => array(
                        'class'    =>    'SugarTranslatedDropDownExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/SugarTranslatedDropDownExpression.php',
            ),
            'getListWhere' => array(
                        'class'    =>    'SugarListWhereExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/SugarListWhereExpression.php',
            ),
            'createList' => array(
                        'class'    =>    'DefineEnumExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/DefineEnumExpression.php',
            ),
            'enum' => array(
                        'class'    =>    'DefineEnumExpression',
                        'src'    =>    'include/Expressions/Expression/Enum/DefineEnumExpression.php',
            ),
            'and' => array(
                        'class'    =>    'AndExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/AndExpression.php',
            ),
            'isBefore' => array(
                        'class'    =>    'isBeforeExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/isBeforeExpression.php',
            ),
            'doBothExist' => array(
                        'class'    =>    'BinaryDependencyExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/BinaryDependencyExpression.php',
            ),
            'or' => array(
                        'class'    =>    'OrExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/OrExpression.php',
            ),
            'isAlpha' => array(
                        'class'    =>    'IsAlphaExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsAlphaExpression.php',
            ),
            'isForecastClosedLost' => array(
                        'class'    =>    'IsForecastClosedLostExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsForecastClosedLostExpression.php',
            ),
            'isValidTime' => array(
                        'class'    =>    'IsValidTimeExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsValidTimeExpression.php',
            ),
            'isAlphaNumeric' => array(
                        'class'    =>    'IsAlphaNumericExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsAlphaNumericExpression.php',
            ),
            'isRequiredCollection' => array(
                        'class'    =>    'IsRequiredCollectionExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsRequiredCollectionExpression.php',
            ),
            'isAfter' => array(
                        'class'    =>    'isAfterExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/isAfterExpression.php',
            ),
            'isInList' => array(
                        'class'    =>    'IsInEnumExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsInEnumExpression.php',
            ),
            'isInEnum' => array(
                        'class'    =>    'IsInEnumExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsInEnumExpression.php',
            ),
            'isValidEmail' => array(
                        'class'    =>    'IsValidEmailExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsValidEmailExpression.php',
            ),
            'isNumeric' => array(
                        'class'    =>    'IsNumericExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsNumericExpression.php',
            ),
            'isValidPhone' => array(
                        'class'    =>    'IsValidPhoneExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsValidPhoneExpression.php',
            ),
            'isValidDBName' => array(
                        'class'    =>    'IsValidDBNameExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsValidDBNameExpression.php',
            ),
            'not' => array(
                        'class'    =>    'NotExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/NotExpression.php',
            ),
            'isForecastClosedWon' => array(
                        'class'    =>    'IsForecastClosedWonExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsForecastClosedWonExpression.php',
            ),
            'isForecastClosed' => array(
                        'class'    =>    'IsForecastClosedExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsForecastClosedExpression.php',
            ),
            'equal' => array(
                        'class'    =>    'EqualExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/EqualExpression.php',
            ),
            'greaterThan' => array(
                        'class'    =>    'GreaterThanExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/GreaterThanExpression.php',
            ),
            'isValidDate' => array(
                        'class'    =>    'IsValidDateExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsValidDateExpression.php',
            ),
            'isWithinRange' => array(
                        'class'    =>    'IsInRangeExpression',
                        'src'    =>    'include/Expressions/Expression/Boolean/IsInRangeExpression.php',
            ),
            'hourOfDay' => array(
                        'class'    =>    'HourOfDayExpression',
                        'src'    =>    'include/Expressions/Expression/Time/HourOfDayExpression.php',
            ),
            'time' => array(
                        'class'    =>    'DefineTimeExpression',
                        'src'    =>    'include/Expressions/Expression/Time/DefineTimeExpression.php',
            ),
            'date' => array(
                        'class'    =>    'DefineDateExpression',
                        'src'    =>    'include/Expressions/Expression/Date/DefineDateExpression.php',
            ),
            'daysUntil' => array(
                        'class'    =>    'DaysUntilExpression',
                        'src'    =>    'include/Expressions/Expression/Date/DaysUntilExpression.php',
            ),
            'now' => array(
                        'class'    =>    'NowExpression',
                        'src'    =>    'include/Expressions/Expression/Date/NowExpression.php',
            ),
            'today' => array(
                        'class'    =>    'TodayExpression',
                        'src'    =>    'include/Expressions/Expression/Date/TodayExpression.php',
            ),
            'maxRelatedDate' => array(
                        'class'    =>    'MaxRelatedDateExpression',
                        'src'    =>    'include/Expressions/Expression/Date/MaxRelatedDateExpression.php',
            ),
            'year' => array(
                        'class'    =>    'YearExpression',
                        'src'    =>    'include/Expressions/Expression/Date/YearExpression.php',
            ),
            'timestamp' => array(
                        'class'    =>    'TimestampExpression',
                        'src'    =>    'include/Expressions/Expression/Date/TimestampExpression.php',
            ),
            'hoursUntil' => array(
                        'class'    =>    'HoursUntilExpression',
                        'src'    =>    'include/Expressions/Expression/Date/HoursUntilExpression.php',
            ),
            'dayofmonth' => array(
                        'class'    =>    'DayOfMonthExpression',
                        'src'    =>    'include/Expressions/Expression/Date/DayOfMonthExpression.php',
            ),
            'rollupConditionalMinDate' => array(
                        'class'    =>    'MinDateConditionalRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Date/MinDateConditionalRelatedExpression.php',
            ),
            'monthofyear' => array(
                        'class'    =>    'MonthOfYearExpression',
                        'src'    =>    'include/Expressions/Expression/Date/MonthOfYearExpression.php',
            ),
            'addDays' => array(
                        'class'    =>    'AddDaysExpression',
                        'src'    =>    'include/Expressions/Expression/Date/AddDaysExpression.php',
            ),
            'dayofweek' => array(
                        'class'    =>    'DayOfWeekExpression',
                        'src'    =>    'include/Expressions/Expression/Date/DayOfWeekExpression.php',
            ),
            'add' => array(
                        'class'    =>    'AddExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AddExpression.php',
            ),
            'currencyAdd' => array(
                        'class'    =>    'AddExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AddExpression.php',
            ),
            'rollupMax' => array(
                        'class'    =>    'MaxRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MaxRelatedExpression.php',
            ),
            'stddev' => array(
                        'class'    =>    'StandardDeviationExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/StandardDeviationExpression.php',
            ),
            'pow' => array(
                        'class'    =>    'PowerExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/PowerExpression.php',
            ),
            'number' => array(
                        'class'    =>    'ValueOfExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/ValueOfExpression.php',
            ),
            'min' => array(
                        'class'    =>    'MinimumExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MinimumExpression.php',
            ),
            'log' => array(
                        'class'    =>    'LogExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/LogExpression.php',
            ),
            'floor' => array(
                        'class'    =>    'FloorExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/FloorExpression.php',
            ),
            'max' => array(
                        'class'    =>    'MaximumExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MaximumExpression.php',
            ),
            'subtract' => array(
                        'class'    =>    'SubtractExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SubtractExpression.php',
            ),
            'currencySubtract' => array(
                        'class'    =>    'SubtractExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SubtractExpression.php',
            ),
            'sub' => array(
                        'class'    =>    'SubtractExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SubtractExpression.php',
            ),
            'median' => array(
                        'class'    =>    'MedianExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MedianExpression.php',
            ),
            'rollupMin' => array(
                        'class'    =>    'MinRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MinRelatedExpression.php',
            ),
            'average' => array(
                        'class'    =>    'AverageExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AverageExpression.php',
            ),
            'avg' => array(
                        'class'    =>    'AverageExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AverageExpression.php',
            ),
            'ln' => array(
                        'class'    =>    'NaturalLogExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/NaturalLogExpression.php',
            ),
            'prorateValue' => array(
                        'class'    =>    'ProrateValueExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/ProrateValueExpression.php',
            ),
            'strlen' => array(
                        'class'    =>    'StringLengthExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/StringLengthExpression.php',
            ),
            'count' => array(
                        'class'    =>    'CountRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/CountRelatedExpression.php',
            ),
            'countConditional' => array(
                        'class'    =>    'CountConditionalRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/CountConditionalRelatedExpression.php',
            ),
            'ceil' => array(
                        'class'    =>    'CeilingExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/CeilingExpression.php',
            ),
            'ceiling' => array(
                        'class'    =>    'CeilingExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/CeilingExpression.php',
            ),
            'rollupConditionalSum' => array(
                        'class'    =>    'SumConditionalRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SumConditionalRelatedExpression.php',
            ),
            'abs' => array(
                        'class'    =>    'AbsoluteValueExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AbsoluteValueExpression.php',
            ),
            'divide' => array(
                        'class'    =>    'DivideExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/DivideExpression.php',
            ),
            'currencyDivide' => array(
                        'class'    =>    'DivideExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/DivideExpression.php',
            ),
            'div' => array(
                        'class'    =>    'DivideExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/DivideExpression.php',
            ),
            'round' => array(
                        'class'    =>    'RoundExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/RoundExpression.php',
            ),
            'rollupSum' => array(
                        'class'    =>    'SumRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SumRelatedExpression.php',
            ),
            'rollupCurrencySum' => array(
                        'class'    =>    'SumRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/SumRelatedExpression.php',
            ),
            'rollupAve' => array(
                        'class'    =>    'AverageRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AverageRelatedExpression.php',
            ),
            'rollupAvg' => array(
                        'class'    =>    'AverageRelatedExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/AverageRelatedExpression.php',
            ),
            'negate' => array(
                        'class'    =>    'NegateExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/NegateExpression.php',
            ),
            'multiply' => array(
                        'class'    =>    'MultiplyExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MultiplyExpression.php',
            ),
            'currencyMultiply' => array(
                        'class'    =>    'MultiplyExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MultiplyExpression.php',
            ),
            'mul' => array(
                        'class'    =>    'MultiplyExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/MultiplyExpression.php',
            ),
            'indexOf' => array(
                        'class'    =>    'IndexOfExpression',
                        'src'    =>    'include/Expressions/Expression/Numeric/IndexOfExpression.php',
            ),
            'forecastCommitStage' => array(
                        'class'    =>    'ForecastCommitStageExpression',
                        'src'    =>    'include/Expressions/Expression/String/ForecastCommitStageExpression.php',
            ),
            'concat' => array(
                        'class'    =>    'ConcatenateExpression',
                        'src'    =>    'include/Expressions/Expression/String/ConcatenateExpression.php',
            ),
            'charAt' => array(
                        'class'    =>    'CharacterAtExpression',
                        'src'    =>    'include/Expressions/Expression/String/CharacterAtExpression.php',
            ),
            'strToLower' => array(
                        'class'    =>    'StrToLowerExpression',
                        'src'    =>    'include/Expressions/Expression/String/StrToLowerExpression.php',
            ),
            'formatName' => array(
                        'class'    =>    'FormatedNameExpression',
                        'src'    =>    'include/Expressions/Expression/String/FormatedNameExpression.php',
            ),
            'strReplace' => array(
                        'class'    =>    'StrReplaceExpression',
                        'src'    =>    'include/Expressions/Expression/String/StrReplaceExpression.php',
            ),
            'subStr' => array(
                        'class'    =>    'SubStrExpression',
                        'src'    =>    'include/Expressions/Expression/String/SubStrExpression.php',
            ),
            'toString' => array(
                        'class'    =>    'DefineStringExpression',
                        'src'    =>    'include/Expressions/Expression/String/DefineStringExpression.php',
            ),
            'string' => array(
                        'class'    =>    'DefineStringExpression',
                        'src'    =>    'include/Expressions/Expression/String/DefineStringExpression.php',
            ),
            'getDropdownValue' => array(
                        'class'    =>    'SugarDropDownValueExpression',
                        'src'    =>    'include/Expressions/Expression/String/SugarDropDownValueExpression.php',
            ),
            'getDDValue' => array(
                        'class'    =>    'SugarDropDownValueExpression',
                        'src'    =>    'include/Expressions/Expression/String/SugarDropDownValueExpression.php',
            ),
            'strToUpper' => array(
                        'class'    =>    'StrToUpperExpression',
                        'src'    =>    'include/Expressions/Expression/String/StrToUpperExpression.php',
            ),
            'translateLabel' => array(
                        'class'    =>    'SugarTranslateExpression',
                        'src'    =>    'include/Expressions/Expression/String/SugarTranslateExpression.php',
            ),
            'translate' => array(
                        'class'    =>    'SugarTranslateExpression',
                        'src'    =>    'include/Expressions/Expression/String/SugarTranslateExpression.php',
            ),
            'contains' => array(
                        'class'    =>    'ContainsExpression',
                        'src'    =>    'include/Expressions/Expression/String/ContainsExpression.php',
            ),
            'opportunitySalesStage' => array(
                        'class'    =>    'OpportunitySalesStageExpression',
                        'src'    =>    'include/Expressions/Expression/String/OpportunitySalesStageExpression.php',
            ),
            'ifElse' => array(
                        'class'    =>    'ConditionExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/ConditionExpression.php',
            ),
            'cond' => array(
                        'class'    =>    'ConditionExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/ConditionExpression.php',
            ),
            'currencyRate' => array(
                        'class'    =>    'CurrencyRateExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/CurrencyRateExpression.php',
            ),
            'valueAt' => array(
                        'class'    =>    'IndexValueExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/IndexValueExpression.php',
            ),
            'sugarField' => array(
                        'class'    =>    'SugarFieldExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/SugarFieldExpression.php',
            ),
            'related' => array(
                        'class'    =>    'RelatedFieldExpression',
                        'src'    =>    'include/Expressions/Expression/Generic/RelatedFieldExpression.php',
            ),
);

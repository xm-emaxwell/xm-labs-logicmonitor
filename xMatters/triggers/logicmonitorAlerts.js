// Parse incoming data 
var payload = JSON.parse(request.body);

// Get signal mode
if (payload.alert_status === 'test') {
    // Test alert
    output['Signal Mode'] = 'Test';
}
else if (payload.alert_status === 'clear' || (payload.alert_status === 'ack' && !payload.message.startsWith("A new comment is added") && payload.message.startsWith("Alert "))) {
    // The alert is resolved
    output['Signal Mode'] = 'Clear';
}
else if (payload.alert_status === 'ack' && payload.message.startsWith("A new comment is added") && !payload.message.startsWith("Alert ")) {
    // New comment added to alert
    output['Signal Mode'] = 'Comment';
}
else {
    // New alert
    output['Signal Mode'] = 'Alert';
}

output['Recipients'] = payload.xmatters_recipients ? payload.xmatters_recipients : '';
output['Signal ID'] = payload.internal_id ? payload.internal_id : '';
output['Internal ID'] = payload.internal_id ? payload.internal_id : '';
output['External Ticket ID'] = payload.external_ticket_id ? payload.external_ticket_id : '';
output['Message'] = payload.message ? payload.message : '';
output['Alert Type'] = payload.alert_type ? payload.alert_type : '';
output['Admin'] = payload.admin ? payload.admin : '';


output['Alert Status'] = payload.alert_status ? payload.alert_status : '';
output['Alert Detail URL'] = payload.alert_detail_url ? payload.alert_detail_url : '';
output['Alert ID'] = payload.alert_id ? payload.alert_id : '';
output['Start'] = payload.start ? payload.start : '';
output['Level'] = payload.level ? payload.level : '';
output['Agent Description'] = payload.agent_description ? payload.agent_description : '';
output['Agent ID'] = payload.agent_id ? payload.agent_id : '';
output['Data Source'] = payload.data_source ? payload.data_source : '';
output['Date'] = payload.date ? payload.date : '';
output['End'] = payload.end ? payload.end : '';
output['Value'] = payload.value ? payload.value : '';
output['Backup Agent Description'] = payload.backup_agent_description ? payload.backup_agent_description : '';
output['Backup Agent ID'] = payload.backup_agent_id ? payload.backup_agent_id : '';
output['Device URL'] = payload.device_url ? payload.device_url : '';
output['Duration'] = payload.duration ? payload.duration : '';
output['Group'] = payload.group ? payload.group : '';
output['Host'] = payload.host ? payload.host : '';
output['Host Description'] = payload.host_description ? payload.host_description : '';
output['Host Name'] = payload.host_name ? payload.host_name : '';
output['Start Epoch'] = payload.start_epoch ? payload.start_epoch : '';
output['Alert Dependency Role'] = payload.alert_dependency_role ? payload.alert_dependency_role : '';
output['Data Point'] = payload.data_point ? payload.data_point : '';
output['Dependency Message'] = payload.dependency_message ? payload.dependency_message : '';
output['Dependent Alert Count'] = payload.dependent_alert_count ? payload.dependent_alert_count : '';
output['Dependent Resource Count'] = payload.dependent_resource_count ? payload.dependent_resource_count : '';
output['Direct Cause'] = payload.direct_cause ? payload.direct_cause : '';
output['DS Description'] = payload.ds_description ? payload.ds_description : '';
output['DS Name'] = payload.ds_name ? payload.ds_name : '';
output['Instance Group'] = payload.instance_group ? payload.instance_group : '';
output['Originating Cause'] = payload.originating_cause ? payload.originating_cause : '';
output['Routing State'] = payload.routing_state ? payload.routing_state : '';
output['Auto Fallback Enabled'] = payload.auto_fallback_enabled ? payload.auto_fallback_enabled : '';
output['BJ Description'] = payload.bj_description ? payload.bj_description : '';
output['Checkpoint'] = payload.checkpoint ? payload.checkpoint : '';
output['Command Line'] = payload.cmdline ? payload.cmdline : '';
output['Collector Group'] = payload.collector_group ? payload.collector_group : '';
output['Detail'] = payload.detail ? payload.detail : '';
output['DP Description'] = payload.dp_description ? payload.dp_description : '';
output['DT Alert Description'] = payload.dt_alert_description ? payload.dt_alert_description : '';
output['Enterprise OID'] = payload.enterprise_oid ? payload.enterprise_oid : '';
output['Event Code'] = payload.event_code ? payload.event_code : '';
output['Event Source'] = payload.event_source ? payload.event_source : '';
output['Exit Code'] = payload.exit_code ? payload.exit_code : '';
output['Finish'] = payload.finish ? payload.finish : '';
output['General Code'] = payload.general_code ? payload.general_code : '';
output['Instance'] = payload.instance ? payload.instance : '';
output['Limited Message'] = payload.limited_message ? payload.limited_message : '';
output['Log File'] = payload.log_file ? payload.log_file : '';
output['Source Name'] = payload.source_name ? payload.source_name: '';
output['Specific Code'] = payload.specific_code ? payload.specific_code : '';
output['stderr'] = payload.stderr ? payload.stderr : '';
output['stdout'] = payload.stdout ? payload.stdout : '';
output['System Uptime'] = payload.sys_uptime ? payload.sys_uptime : '';
output['Threshold'] = payload.threshold ? payload.threshold : '';
output['Timestamp'] = payload.timestamp ? payload.timestamp : '';
output['Trap OID'] = payload.trap_oid ? payload.trap_oid : '';
output['Type'] = payload.type ? payload.type : '';
output['URL'] = payload.url ? payload.url : '';
output['User'] = payload.user ? payload.user : '';
output['User Data'] = payload.user_data ? payload.user_data : '';
output['Website'] = payload.website ? payload.website : '';
output['Website Description'] = payload.website_description ? payload.website_description : '';
output['Website Group'] = payload.website_group ? payload.website_group : '';
output['Website Request'] = payload.website_request ? payload.website_request : '';
output['Website Response'] = payload.website_response ? payload.website_response : '';
output['Wild Value'] = payload.wild_value ? payload.wild_value : '';
output['Facility'] = payload.facility ? payload.facility : '';
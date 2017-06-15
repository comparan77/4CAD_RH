function OperationModel() {}

OperationModel.asignaQRPivote = function(obj, callback) {
    var url = urlHandler + 'handlers/AccesoPersonal.ashx?op=qrpivote&opt=add';
    try {
        Common.fetchJSONFile (
            url,
            function(data) {
                callback(data);
            },
            'POST',
            JSON.stringify(obj)
        );
    } catch (error) {
        alert('asignaQRPivote' + error);
    }
}

OperationModel.PerFotoAdd = function(obj, callback) {
    var url = urlHandler + 'handlers/AccesoPersonal.ashx?op=perfoto&opt=add';
    try {
        Common.fetchJSONFile (
            url,
            function(data) {
                callback(data);
            },
            'POST',
            JSON.stringify(obj)
        );
    } catch (error) {
        alert('PerFotoAdd' + error);
    }
}
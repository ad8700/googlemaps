<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);
//TODO populate the mysql connection details
$con = mysqli_connect('localhost','username','password','database_name');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM addresses WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>addressid</th>
<th>Street</th>
<th>City</th>
<th>State</th>
<th>Zip</th>
<th>hsia_avail_ind</th>
<th>max_hsia_speed</th>
<th>tv_avail_ind</th>
<th>phone_avail_ind</th>
<th>lat</th>
<th>long</th>
<th>account_number</th>
<th>hsia_product</th>
<th>tv_product</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['addressid'] . "</td>";
    echo "<td>" . $row['Street'] . "</td>";
    echo "<td>" . $row['City'] . "</td>";
    echo "<td>" . $row['State'] . "</td>";
    echo "<td>" . $row['Zip'] . "</td>";
    echo "<td>" . $row['hsia_avail_ind'] . "</td>";
    echo "<td>" . $row['max_hsia_speed'] . "</td>";
    echo "<td>" . $row['tv_avail_ind'] . "</td>";
    echo "<td>" . $row['phone_avail_ind'] . "</td>";
    echo "<td>" . $row['lat'] . "</td>";
    echo "<td>" . $row['long'] . "</td>";
    echo "<td>" . $row['account_number'] . "</td>";
    echo "<td>" . $row['hsia_product'] . "</td>";
    echo "<td>" . $row['tv_product'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>
<%@ Page Language="C#" %>
<script language="C#" runat=server>
protected void Page_Load(object sender, System.EventArgs e) {
	HttpContext.Current.Response.Redirect("http://prototypes.onlifehealth.com/views/index.html");
}
</script>
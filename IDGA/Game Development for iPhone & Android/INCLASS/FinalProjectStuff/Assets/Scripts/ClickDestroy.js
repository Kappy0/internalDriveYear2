#pragma strict

function Start () {}

function Update () 
{
	if (Input.GetMouseButtonDown(0)) 
	{
        var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        var hit : RaycastHit;
        
        if (Physics.Raycast(ray, hit)) 
        {
            if (hit.collider.tag == "click") 
            {
               Destroy(hit.collider.gameObject);
            }
         }
    }
}
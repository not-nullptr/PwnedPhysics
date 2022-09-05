#### START ELEVATE TO ADMIN #####
param(
    [Parameter(Mandatory=$false)]
    [switch]$shouldAssumeToBeElevated,

    [Parameter(Mandatory=$false)]
    [String]$workingDirOverride
)

# If parameter is not set, we are propably in non-admin execution. We set it to the current working directory so that
#  the working directory of the elevated execution of this script is the current working directory
if(-not($PSBoundParameters.ContainsKey('workingDirOverride')))
{
    $workingDirOverride = (Get-Location).Path
}

function Test-Admin {
    $currentUser = New-Object Security.Principal.WindowsPrincipal $([Security.Principal.WindowsIdentity]::GetCurrent())
    $currentUser.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)
}

# If we are in a non-admin execution. Execute this script as admin
if ((Test-Admin) -eq $false)  {
    if ($shouldAssumeToBeElevated) {
        Write-Output "Elevating did not work :("

    } else {
         
    }
    exit
}

Set-Location "$workingDirOverride"
##### END ELEVATE TO ADMIN #####

Write-Output "Admin privileges obtained successfully! Proceeding..."
Write-Output "Downloading latest Node.JS..."
$client = new-object System.Net.WebClient
$client.DownloadFile("https://nodejs.org/dist/v18.8.0/node-v18.8.0-x86.msi","node-v18.8.0-x86.msi")
Write-Output "Node.JS downloaded successfully! Quietly installing..."
Start-Process msiexec.exe -Wait -ArgumentList '/I ./node-v18.8.0-x86.msi /quiet'
Write-Output "Node.JS installed successfully! Writing to hosts file..."
Add-Content C:\Windows\System32\drivers\etc\hosts "127.0.0.1 verify.minecraftphysicsmod.com"
Write-Output "Successfully wrote to hosts file! Setting up npm dependancies..."
npm i
Write-Output "Successfully installed all npm dependancies! Run the start.bat file now."
